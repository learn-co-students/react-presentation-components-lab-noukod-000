const React = require('react');
const { shallow } = require('enzyme');
const sinon = require('sinon');

const Noop = (props) => { return <p>Noop</p> };
const DumberComponent = require('../components/DumberComponent');

describe('<DumberComponent />', () => {
  let wrapper, spy;

  beforeEach(() => {
    spy = sinon.spy();
    wrapper = !DumberComponent.prototype ?
      shallow(<Noop />) : shallow(<DumberComponent handleClick={spy} />);
  });

  it('should not be a class-based component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components'
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
