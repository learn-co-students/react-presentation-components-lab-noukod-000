import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const Noop = (props) => { return <p>Noop</p> };
import DumberComponent from '../components/DumberComponent';

describe('<DumberComponent />', () => {
  let wrapper, spy;

  beforeEach(() => {
    spy = sinon.spy();
    wrapper = !DumberComponent.prototype ?
      shallow(<Noop />) : shallow(<DumberComponent handleClick={spy} />);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  it('should render a div with text "I am just happy"', () => {
    expect(wrapper.find('div').text()).toMatch(/I am just happy/);
  });

  it('should be capable of handling onClick', () => {
    wrapper.find('div').simulate('click');
    expect(spy.called).toBeTruthy();
  });

});
