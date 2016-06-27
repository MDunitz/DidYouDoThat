import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import{ fetchGoals } from '../actions/index';



class DailyReview extends Component{
  constructor(props){
    super(props);
    this.state={goals:{}} 
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
            <strong>{goal.taskname}</strong>
            <form>
              <input type="radio" name="yes" value="true" />yes
              <input type="radio" name="no" value="false" />No
            </form>

          </li>
        );
      });
    // }
  }


  render(){
    return(
      <div className="dailyReview">
        <h3> Did You Do it Today? </h3>
        <ul className="list-group">
          {this.renderGoals()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('dailyReview state', state)
  return{goal: state.goalsList.all};
}

export default connect(mapStateToProps, { fetchGoals })(DailyReview);
