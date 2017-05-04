import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders App with className app', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find('.app').length).toEqual(1)
  expect(wrapper.find('div.app').hasClass('app')).toBe(true);
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />)
  const expectedState = {
    thoughts: []
  };

  expect(wrapper.state()).toEqual(expectedState);
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App  />)
  const expectedState = {
    thoughts: [{title:'a', body:'a'},{title:'b', body:'b'}]
  };
  wrapper.setState(expectedState)
  expect(wrapper.state()).toEqual(expectedState)
  expect(wrapper.find('.thought-card').length).toEqual(2)
});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const wrapper = mount(<App  />);
  const titleInput = wrapper.find('input').first();
  titleInput.simulate('change', { target: { value: 'hi' } });
  const bodyInput = wrapper.find('input').last();
  bodyInput.simulate('change', { target: { value: 'bye' } });

  wrapper.find('button').simulate('click');

  const expectedState = {
    thoughts: [{title:'hi', id: 0, body:'bye'}]
  };

  expect(wrapper.state()).toEqual(expectedState);
  expect(wrapper.find('.thought-card').length).toEqual(1);
  expect(wrapper.find('.title').length).toEqual(1);
  expect(wrapper.find('.body').length).toEqual(1);

});
