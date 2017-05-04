import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard'

export const ThoughtList = ({ thoughtList }) => {

  return (
    <div className='thought-list'>
      { thoughtList.map((thought, index) => {
        return(
          <div key={index} >
            <ThoughtCard title={ thought.title }
                      body={ thought.body }/>
          </div>
      )
    }) }
    </div>
  );
}
