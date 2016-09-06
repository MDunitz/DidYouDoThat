import React from 'react';
import Footer from './footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const todoApp = () => (
  <div>

    <VisibleTodoList />
    <Footer />
  </div>
)

export default todoApp