const React = require('react');
const { shallow } = require('enzyme');

const Noop = (props) => { return <p>Noop</p> };
const DumbComponent = require('../components/DumbComponent');

describe('<DumbComponent />', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = !DumbComponent.prototype ?
      shallow(<Noop />) : shallow(<DumbComponent />);
  });

  it('has state', () => {
    expect(wrapper.state()).toExist('Component should have state.');
  });

  it('has state property `mood`', function() {
    expect(wrapper.state()).toIncludeKey(
      'mood',
      null,
      'Component should have `mood` state property'
    );
  });

  it('default `mood` state should be "happy"', () => {
    expect(wrapper.state().mood).toEqual(
      'happy', 'Default mood is incorrect.'
    );
  });

  it('default "happy" state should be accurately rendered', () => {
    expect(wrapper.find('div').text()).toEqual(
      'happy',
      'Default mood was incorrectly rendered.'
    );
  });

  it('when clicked the div should toggle the state to "sad"', () => {
    wrapper.find('div').simulate('click');
    expect(wrapper.state().mood).toEqual(
      'sad',
      'Mood state not "sad" after click.'
    );
  });

  it('after click, "sad" state should be accurately rendered', () => {
    wrapper.find('div').simulate('click');
    expect(wrapper.find('div').text()).toEqual(
      'sad',
      'Mood state incorrectly rendered after click.'
    );
  });

});

