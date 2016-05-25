import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/index';
import { bindActionCreators } from 'redux';


class NoteList extends Component {
  renderList() {
    if(this.props.notes.length === 0) {
      console.log('we shuld trigger get notes');
      this.props.getNotes();
      return;
    }
    console.log(this.props.notes);
    console.log('we shuld not trigger get notes');
    return this.props.notes.map((note) => {
      return (
        <li 
        key={note.id} 
        className="list-group-item">
          <p>ID {note.id}</p>
          <p>TODO: {note.content}</p>
          <p>Created At: {note.created_at}</p>
          <p>Updated At:{note.updated_at}</p>
          <p>Complete: {note.complete}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

//anything return from this function will end up as props
//on the BookList contianer --we need to
function mapDispatchToProps(dispatch) {
  //whenever selelctBook is called, the result should
  //be passed to al of our reducers
  return bindActionCreators( {getNotes: getNotes}, dispatch);
}

//promote Booklist from a component to a container, it needs to know abou thtis new disptach method, selectBook, make it 
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(NoteList);