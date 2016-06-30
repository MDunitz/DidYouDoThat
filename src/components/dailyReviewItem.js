import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class DailyReviewItem extends Component {
  constructor(props){
    super(props);
    this.state={goal:this.props.goal, dailyReview:null};
    //console.log('dailyReveiwItem props', props);
    console.log('dailyReviewItem state', this.state)

  }
  handleSelection(event){
    //console.log('event', event)
    this.setState({dailyReview: event.target.value}, function(){
    console.log('selected?', this.state);
      
    })

    // const date = dateHelper();
    // var obj={userId: event, taskId: event, done: event.target.value, date: date }
    // this.setState({})
  }
  render(){
    //console.log('dailyReviewItem state', state)
    return(
      <li className="list-group-item" key={this.props.goal.id}>
        <strong>{this.props.goal.taskname}</strong>
        <div>
          <input type="radio" value="true" name={this.props.goal.id} onChange={this.handleSelection.bind(this)} /> Yes

          <input type="radio" value="false" name={this.props.goal.id} onChange={this.handleSelection.bind(this)} /> No
        </div>

      </li>
    );
  }
}

export default DailyReviewItem;