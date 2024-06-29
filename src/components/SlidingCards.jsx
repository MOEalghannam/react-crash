import React from 'react'
import ServicesInfo from '../servicesinfo.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const SlidingCards = () => {
    const info = ServicesInfo
    const custimg = [
        {
            name: 'SAR',
            img: 'src/assets/images/sar.png',
            
        },
        {
            name: 'vov',
            img: 'src/assets/images/vov.jpg',
        },
        {
            name: 'SPIMACO',
            img: 'src/assets/images/SPIMACO.png', 
        },
        {
            name: 'GTSC',
            img: 'src/assets/images/GTSC.png', 
        },
        {
            name: 'BlueSpace',
            img: 'src/assets/images/BlueSpace.jpeg', 
        }
    ]
    console.log(ServicesInfo);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
        <div className='w-11/12 m-auto'>
            <h1 className='text-white flex justify-center text-2xl font-bold'>خدماتنا</h1>
            <div className='mt-5'>
                <Slider {...settings}>
                {info.map((d) => (
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md text-black w-48 h-48'>
                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <h1 className='text-xl font-bold'> {d.title}</h1>
                            <p className='font-semibold' dir='rtl'> {d.description} </p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>

        </div>
        <div className='w-11/12 m-auto'>
            <h1 className='text-white flex justify-center text-2xl font-bold'>عملائنا</h1>
            <div className='mt-5'>
                <Slider {...settings}>
                {custimg.map((f) => (
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md text-black'>
                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <img src={f.img} className='h-48 w-48  rounded-lg'></img>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>

        </div>
    </>
  )
}

export default SlidingCards