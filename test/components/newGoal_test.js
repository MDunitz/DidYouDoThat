import { renderComponent , expect } from '../test_helper';
import AddGoalBox from '../../src/components/featurs';

describe('AddGoalBox Component', () =>{
  let component;

  beforeEach(()=> {
    component=renderComponent(AddGoalBox);
  });


  it('it has the correct class', ()=>{
    expect(component).to.have.class('comment-box');
  })

  it('has a text area', ()=>{
    expect(component.find('textarea')).to.exist;
  })

  it('has a button', ()=> {
    expect(component.find('button')).to.exist;
  })

  describe('entering a goal', ()=>{
    beforeEach(()=>{
      component.find('textarea').simulate('change', 'new Goal');
    });

    it('shows the correct text in the text area', ()=>{
      expect(component.find('textarea')).to.have.value('new Goal');
    })

    it('when submitted, clears the input', () =>{
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })
});