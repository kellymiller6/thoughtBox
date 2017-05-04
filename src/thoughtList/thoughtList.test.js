import React from 'react';
import { shallow, mount } from 'enzyme';


import { ThoughtList } from './thoughtList.js';
import { ThoughtCard } from '../thoughtCard/thoughtCard.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList thoughtList={[]}/>);

    expect(wrapper.find('div').hasClass('thought-list')).toBe(true)
  });

  it('has multiple ThoughtCard class fields', () => {
    const wrapper = mount(
      <ThoughtList thoughtList={[{title:'a', body:'a'}, {title:'b', body:'b'}]} />
    )

    expect(wrapper.find('.thought-card').length).toEqual(2)
  });

});
//when thoughtlist receives an empty array of thoughts, 0 cards are displayed
//
