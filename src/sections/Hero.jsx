import Button from "../components/Button"
import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import { shoes } from "../constants"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative 
        bg-gradient-to-br from-slate-50 to-slate-100'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-black font-bold tracking-wide mb-8'>
          Our Summer Collections
        </p>

        <div className='flex flex-col gap-4'>
          <h1 className='text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold font-palanquin'>
            <div className='relative'>
              <span className='text-black'>The</span>
              <span className='text-black'> New</span>
            </div>
            <div className='mt-4 flex flex-wrap gap-4 items-center'>
              <span className='bg-black text-white px-8 py-2 rounded-full shadow-lg
                hover:scale-105 transition-all duration-300'>
                Nike
              </span>
              <span className='text-black'>
                Shoes
              </span>
            </div>
          </h1>
        </div>

        <p className='mt-8 mb-14 font-montserrat text-black/80 text-lg leading-relaxed 
          max-w-sm bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconUrl={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index} 
              className='flex flex-col gap-2 items-start
                bg-white/80 backdrop-blur-sm rounded-2xl p-6
                shadow-lg hover:shadow-xl transition-all duration-300'>
              <p className='text-4xl font-palanquin font-bold text-black'>
                {stat.value}
              </p>
              <p className='font-montserrat text-black/70 font-medium'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 
        bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl xl:rounded-l-3xl'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10 hover:scale-105 transition-transform duration-500
            drop-shadow-2xl'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index} 
              className='hover:transform hover:scale-110 transition-all duration-300'>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

