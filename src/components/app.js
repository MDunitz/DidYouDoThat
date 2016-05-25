import React from 'react';
import { Component } from 'react';

import NoteList from './note-list';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <NoteList />
      </div>
    );
  }
}
