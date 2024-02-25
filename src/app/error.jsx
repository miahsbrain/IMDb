'use client';

import {useEffect} from 'react';

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error]);

  return (
    <div>
      <h2 className='text-center mt-10'>Something went wrong...</h2>
      <button className='hover:text-amber-600' onClick={() => reset()}>Try again</button>
    </div>
  )
}
