import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it('has two input fields', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('input').length).toEqual(2);
  });

  it('Default state of empty strings', () => {
    const wrapper = mount(<CreateThought/>);
    const expectedState = {
      title: '',
      body: ''
    };

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires an onChange event on user input which should update both state & the input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').first();
    const expectedState = {
      title: 'abc',
      body: ''
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires onChange on second input which should update both state & the input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').last();
    const expectedState = {
      title: '',
      body: 'abc'
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('has a submit button', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();

    const wrapper = mount(
      <CreateThought handleSubmit={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'abc' } });
    wrapper.find('button').simulate('click');

    expect(wrapper.state()).toEqual(expectedState);
    expect(input.node.value).toEqual('');
    expect(mockedSubmit).toHaveBeenCalledTimes(1);
    expect(mockedSubmit).toHaveBeenCalledWith({title: '', body:'abc'})
  });

});
