import React from 'react';

export const ThoughtCard = ({ title, body }) => {
  return (
    <div className="thought-card">
      ThoughtCard
      <h3 className='title'>{ title }</h3>
      <p className='body'>{ body }</p>
    </div>
  )
}
