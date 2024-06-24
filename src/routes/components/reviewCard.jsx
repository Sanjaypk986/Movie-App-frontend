import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <article className='my-2 border border-gray-300 p-2 w-3/4 mx-auto text-center'>
      <h3 className='text-lg md:text-xl font-bold my-2'>{review.title}</h3>
        <p>{review.description}</p>
        <span>{review.user}</span>
    </article>
  )
}

export default ReviewCard
