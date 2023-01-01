import React, { useEffect } from 'react';
import gsap from 'gsap';

function Content({ activeData, swatchData }) {
  useEffect(() => {
    gsap.to('.button', {
      color: activeData.buttonColor.text,
      backgroundColor: activeData.buttonColor.background,
      ease: 'power3.inOut',
      duration: 1,
    });

    gsap.to('p', {
      color: activeData.headingColor,
      ease: 'power3.inOut',
      duration: 0.8,
    });

    gsap.from('.text', {
      y: 300,
      ease: 'power3.inOut',
      duration: 1,
      stagger: {
        amount: 0.3,
      },
    });
    return () => {};
  });
  return (
    <div className='select-none w-full h-2/5 flex justify-center items-center lg:w-1/2 lg:h-full lg:justify-end'>
      <div className='flex justify-start flex-col items-start w-2/3'>
        <div className='text-left text-5xl font-bold mb-1 w-full relative p-1 overflow-hidden md:text-[7vw] md:mb-2'>
          <p className='text'>{activeData.heading}</p>
        </div>
        <div className='text-left text-2xl font-extralight mb-6 w-full p-1 overflow-hidden md:text-4xl'>
          <p className='text'>{activeData.subHeading}</p>
        </div>
        <p className='w-full text-xs font-medium text-left mb-8 p-1 overflow-hidden md:text-lg md:mb-10'>
          <p className='text'>{activeData.text}</p>
        </p>
        <div className='relative overflow-hidden p-4'>
          <button className='text cursor-pointer button rounded-2xl outline-none px-8 py-2 font-medium bg-[#4A6E6A] md:px-10 md:py-4'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
