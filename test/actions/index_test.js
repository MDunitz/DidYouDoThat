import { expect } from '../test_helper';
import { CREATE_GOAL } from './../../src/actions/types';
import { FETCH_GOALS } from './../../src/actions/types';
import { createGoal } from './../../src/actions';
  //b/c actions file is called index.js webpack wil throw it in for us
import { fetchGoals } from './../../src/actions';




//all the actions we are about to test
describe('actions', ()=> {
  describe('createGoal', () => {
    it ('has the correct type', () =>{
      const action = createGoal()
      expect(action.type).to.equal(CREATE_GOAL);
    });

    it('has the correct payload', () => {
      const action=createGoal('new Goal');
      expect(action.payload).to.equal('new Goal');
    });

  });
  describe('fetchGoals', ()=> {
    it('has the correct type', () =>{
      const action = fetchGoals()
      expect(action.type).to.equal(FETCH_GOALS);
    });
    it('has the correct payload', () => {
      const action = fetchGoals();
      expect(action.payload).to.equal('good question need to fill this in');
    });
  });
});






