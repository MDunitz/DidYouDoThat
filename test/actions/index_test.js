import { expect } from '../test_helper';
import * as actions from './../../src/actions';
import * as types from './../../src/actions/types';


// import { CREATE_GOAL } from './../../src/actions/types';
// import { FETCH_GOALS } from './../../src/actions/types';
// import { createGoal } from './../../src/actions';
//   //b/c actions file is called index.js webpack wil throw it in for us
// import { fetchGoals } from './../../src/actions';




//all the actions we are about to test
describe('actions', ()=> {
  describe('createGoal', () => {
    it ('has the correct type', () =>{
      const action = actions.createGoal()
      expect(action.type).to.equal(types.CREATE_GOAL);
    });

    it('has the correct payload', () => {
      const action=actions.createGoal('new Goal');
      expect(action.payload).to.equal('new Goal');
    });

  });
  describe('fetchGoals', ()=> {
    it('has the correct type', () =>{
      const action = actions.fetchGoals()
      expect(action.type).to.equal(types.FETCH_GOALS);
    });
    it('has the correct payload', () => {
      const action = actions.fetchGoals();
      expect(action.payload).to.equal('good question need to fill this in');
    });
  });
  describe('addTodo', ()=>{
    it('has the correct type', () => {
      const action = actions.addTodo();
      expect(action.type).to.equal(types.ADD_TODO);
    });
    it('has the correct text', () =>{
      const action = actions.addTodo('new todo');
      expect(action.text).to.equal('new todo');
    });
  });
});






