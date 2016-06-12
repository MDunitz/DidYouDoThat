// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { newNote } from '../actions/index';
// import { bindActionCreators } from 'redux';


// class NewNote extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: ''
//     };
//     this.onInputChange = this.onInputChange.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//   }

//   onInputChange(event) {
//     this.setState({content: event.target.value})
//   }

//   handleKeyPress(event) {
//     if(event.key === 'Enter'){
//       this.props.newNote(this.state.content);
//       this.setState({content: ''})
//     }
//   }

//   render() {
//     return (
//       <div>
//           <h2> Press Enter to Add New Note </h2>
//           <input type="text" value={this.state.content} onChange={this.onInputChange} onKeyPress={this.handleKeyPress}></input>
//       </div>
//     );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( {newNote: newNote}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(NewNote);




