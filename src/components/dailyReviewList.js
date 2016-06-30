import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import RadioGroup from 'react-radio-group';
import { fetchGoals } from '../actions';
import DailyReviewItem from './dailyReviewItem';




class DailyReviewList extends Component{
  constructor(props){
    super(props);
    this.state={goals:{}, dailyReview:[]}; 
  }
  componentWillMount(){
    console.log('mounting fetchgoals')
    this.props.fetchGoals();
  }

  // handleChange(value){
  //   this.setState({})
  // }
  // handleSelection(event){
  //   console.log('event', event)

  //   // const date = dateHelper();
  //   // var obj={userId: event, taskId: event, done: event.target.value, date: date }
  //   // this.setState({})
  // }

  renderGoals(){
    const { goal } =this.props;
    console.log('goal?', goal)
    if(!goal.rows){
      return <div>Loading...</div>
    }

    console.log('props in goalsList', this.props.goal)
    // if(this.props.goal.rows !== undefined){
      return this.props.goal.rows.map((goal)=>{
        return <DailyReviewItem goal={goal} key={goal.id}/>

        // return(
        //   <li className="list-group-item" key={goal.id}>
        //     <strong>{goal.taskname}</strong>
        //     <div>
        //       <input type="radio" name="yes" value="true" onChange={this.handleSelection.bind(this)} 
        //       />yes
              
        //       <input type="radio" name="no" value="false" onChange={this.handleSelection.bind(this)} 
        //       />No
        //     </div>

        //   </li>
        // );
      });
    // }

  }
  handleSubmit(event){
    //may need to remove for radio buttons
    event.preventDefault();
    console.log('event', event);
    console.log('this.state', this.state);
    console.log('props', this.props)
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit.bind(this)} className="radioButton">
        <div className="dailyReview">
          <h3> Did You Do it Today? </h3>
          <ul className="list-group">
            {this.renderGoals()}
          </ul>
        </div>
        <div> 
          <button action="submit">Submit Daily Reveiw</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state){
  console.log('dailyReview state', state)
  return{goal: state.goalsList.all};
}

//may need to use mapstatetodispatch to pass in multiple actions

export default connect(mapStateToProps, { fetchGoals })(DailyReviewList);
