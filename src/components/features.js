import React, { Component, PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
var Promise = require('bluebird');
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
  static contextTypes={
    router: PropTypes.object
  };

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
    var that = this;
    this.props.createGoal({newGoal: this.state.newGoal, perWeek: this.state.perWeek})
    .then(function(v){
      that.setState({newGoal: '', perWeek:''});
      that.context.router.push('/goals');
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a Goal!</h4>
        <textarea className="newGoal"
          value={this.state.newGoal}
          onChange={this.handleGoalChange.bind(this)} />
        <h3>How many times per week?</h3>
        <textarea className='perWeek'
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






