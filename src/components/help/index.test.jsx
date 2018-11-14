import React from 'react';
import { Help } from './';
import Enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Help />', () => {
  it('should work', () => {
    var wrapper = shallow(<Help />);
    wrapper.find('Button').simulate('click');
  });

  it('should work render', () => {
    render(<Help state={ { newState: { console: 'hi'} } } />);
  });
});