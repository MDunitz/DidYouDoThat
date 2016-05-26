require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'data_mapper'
require 'json'

enable :sessions
set :public_folder, 'public'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/recall.db")

class Note
  include DataMapper::Resource # ? i don't understand what the :: is doing
  property :id,Serial
  property :content, Text, :required=> true
  property :complete, Boolean, :required => true, :default => false
  property :created_at, DateTime
  property :updated_at, DateTime
end

DataMapper.finalize.auto_upgrade!

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

get '/api' do
  @notes = Note.all :order => :id.desc
  puts "were sending back #{@notes}"
  content_type :json
  { :data => @notes}.to_json
end

get '/' do 
  send_file File.join(settings.public_folder, 'index.html')
end

post '/api' do 
  n = Note.new
  n.content = params[:content]
  puts "Hey here is the post request"
  @parsed_request = JSON.parse(request.body.read)
  puts @parsed_request
  puts "ok now lets try to get the keys"
  puts @parsed_request['data']
  n.content = @parsed_request['data']
  n.created_at = Time.now
  n.updated_at = Time.now
  if n.save
    puts "hey the save of n #{n} worked!"
    @notes = Note.all :order => :id.desc
    content_type :json
    { :data => @notes}.to_json
  else
    @notes = Note.all :order => :id.desc
    content_type :json
    { :data => @notes}.to_json
  end
end

post '/:id' do
  n = Note.get params[:id]
  unless n
    content_type :json
    { :data => []}.to_json
  end

  n.attributes = {
    :content => JSON.parse(request.body.read),
    :updated_at => Time.now
  }
  if n.save
    puts "Saved successfully"
    @notes = Note.all :order => :id.desc
    content_type :json
    { :data => @notes}.to_json
  else    
    puts "Sorry was unable to save"
    content_type :json
    { :data => []}.to_json
  end
end