import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import{ fetchGoals } from '../actions/index';
//import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class GoalsList extends Component {

  constructor(props){
    super(props);
    this.state={goals:{}}
  }
 
  //automatically fetch goals before the react component is rendered the first time
  componentWillMount(){
    console.log('mounting fetchgoals')
    this.props.fetchGoals();
  }
  renderGoals(){
      const { goal } =this.props;
    console.log('goal?', goal)
    if(!goal.rows){
      return <div>Loading...</div>
    }

    console.log('props in goalsList', this.props.goal)
    // if(this.props.goal.rows !== undefined){
      return this.props.goal.rows.map((goal)=>{
        return(
          <li className="list-group-item" key={goal.id}>
            <strong>{goal.taskname}</strong> {goal.timesperweek}

          </li>
        );
      });
    // }
  }

  render(){
  
    return (
      <div className='goalList'>
        <div className="text-xs-right">
          <Link to="feature" className="btn btn-primary">
          Add a goal!
          </Link>
        </div>
        <h3>Goals   Per Week</h3>
        <ul className="list-group">
          {this.renderGoals()}
        </ul>
      </div>
    );
  }
}

//connecting GoalsList (react) component to the redux store (state)-doesnt modify the component class passed, returns a new connected component class
function mapStateToProps(state){
  console.log('state', state)
  return {goal: state.goalsList.all};
}
//this gives us accesss to this.props.fetchGoals
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchGoals }, dispatch);
// }

//as does this gives us accesss to this.props.fetchGoals
export default connect(mapStateToProps, { fetchGoals })(GoalsList);











