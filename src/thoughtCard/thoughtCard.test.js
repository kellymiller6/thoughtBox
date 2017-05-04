import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const wrapper = shallow(
        <ThoughtCard title={''} body={''}/>
    );
    expect(wrapper.find('div').hasClass('thought-card')).toBe(true);
  });

  it('has a title and body', () => {
    const wrapper = shallow(
        <ThoughtCard title={'hello'}
                      body={'goodbye'}/>
    );

    expect(wrapper.unrendered.props.title).toEqual('hello')
    expect(wrapper.unrendered.props.body).toEqual('goodbye')
  });

});
