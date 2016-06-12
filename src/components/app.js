import React from 'react';
import { Component } from 'react';
import AddNewGoal from './features';

import Header from './header';

import NoteList from './note-list';
import NewNote from './new-note';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      {this.props.children}
        <div>React simple starter</div>
        <NewNote />
        <NoteList />
      </div>
    );
  }
}
