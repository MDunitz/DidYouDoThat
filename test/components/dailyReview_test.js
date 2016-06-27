import { renderComponent, expect} from '../test_helper';
import DailyReview from '../../src/components/dailyReview';

describe('dailyReview component', () => {
  let component;

  beforeEach(()=>{
    component=renderComponent(DailyReview);
  });

  it('has the correct class', ()=>{
    expect(component).to.have.class('dailyReview')
  });




})