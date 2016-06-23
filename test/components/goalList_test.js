import { renderComponent, expect} from '../test_helper';
import GoalsList from '../../src/components/goalsList';

describe('goalsList component', () => {
  let component;

  beforeEach(()=>{
    component=renderComponent(GoalsList);
  });

  it('it has the correct class', ()=> {
    expect(component).to.have.class('goalList')
  });










})