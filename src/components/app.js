import React from 'react';
import { Component } from 'react';

import NoteList from './note-list';
import NewNote from './new-note';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <NewNote />
        <NoteList />
      </div>
    );
  }
}
