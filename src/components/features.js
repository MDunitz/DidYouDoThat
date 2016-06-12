import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

// class Feature extends Component {
//   comonentWillMount(){
//     this.props.fetchMessage();
//   }
//   render(){
//     return (
//       <div>{this.props.message}</div>
//     );
//   }
// }

// function mapStateToProps(state){
//   return { message: state.auth.message };
// }

// export default connect(mapStateToProps, actions)(Feature);

class AddGoalBox extends Component{
  constructor(props){
    super(props);
    this.state = {newGoal: '', perWeek:''}
  }

  handleGoalChange(event){
    this.setState({newGoal: event.target.value});
  }

  handleNumberChange(event){
    this.setState({perWeek: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createGoal({newGoal: this.state.newGoal, perWeek: this.state.perWeek});
    this.setState({newGoal: '', perWeek:''});
    //TODO redirect to goalsList
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a Goal!</h4>
        <textarea
          value={this.state.newGoal}
          onChange={this.handleGoalChange.bind(this)} />
        <h3>How many times per week?</h3>
        <textarea
          value={this.state.perWeek}
          onChange={this.handleNumberChange.bind(this)} />
        <div>
          <button action="submit">Submit Goal</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(AddGoalBox);






