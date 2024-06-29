import React from 'react'
import YourPlace from '../assets/images/YourPlace.jpeg';

const Hero = ({/*title = 'عالم المحاكاة', subtitle = ''*/ }) => {
  return (
    <>
      <div className='flex justify-center items-center'>
      <img
          className="object-fill w-screen h-3/6"
          src={YourPlace}
          alt="YourPlace"
        />
      </div>
    </>
  )
}

export default Hero