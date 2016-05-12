import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ fetchGoals } from '../actions/index';
import { Link } from 'react-router';

class GoalsList extends Component {
  //automatically fetch goals before the react component is rendered the first time
  componentWillMount(){
    this.props.fetchGoals();
  }
  renderGoals(){
    return this.props.goals.map((goal)=>{
      return(
        <li className="list-group-item" key={goal.id}>
          <strong>{goal.title}</strong>
        </li>
      );
    });
  }

  render(){
    return (
      //TODO add route to add a goal
      <div>
        <div className="text-xs-right">
          <Link to="goals/new" className="btn btn-primary">
          Add a goal
          </Link>
        </div>
        <h3>Goals</h3>
        <ul className="list-group">
          {this.renderGoals()}
        </ul>
      </div>
    );
  }
}

//connecting GoalsList component to the actionCreators?
//TODO ask ahmed to explain this to you/google what exactly it is doing
function mapStateToProps(state){
  return {goals:state.goals.all};
}
//this gives us accesss to this.props.fetchGoals
export default connect(mapStateToProps, {fetchGoals})(GoalsList);