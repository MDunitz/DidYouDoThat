require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'
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
  @title = 'All Notes'
  content_type :json
  { :data => @notes, :title => @title }.to_json
end

get '/' do 
  send_file File.join(settings.public_folder, 'index.html')
end

post '/' do 
  n = Note.new
  n.content = params[:content]
  n.created_at = Time.now
  n.updated_at = Time.now
  if n.save
    content_type :json
    { :data => @notes, :title => @title }.to_json
  else
    content_type :json
    { :data => @notes, :title => @title }.to_json
  end
end









