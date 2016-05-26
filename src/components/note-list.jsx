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
        <article 
        key={note.id} 
        className="list-group-item">
          
          <p>ID {note.id}</p>
          <p>Created At: {note.created_at}</p>
          <p>Updated At:{note.updated_at}</p>
          <form action="/{note.id}" method="post" id="edit">
            <input type="text" value={note.content} readOnly={true}></input>
          </form>
        </article>
      );
    });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {getNotes: getNotes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);