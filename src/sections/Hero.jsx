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
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative bg-[#f5f5f5]'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-gray-900 font-bold tracking-wide'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-full'>
            The New
          </span>
          <br />
          <span className='text-black inline-block mt-3 hover:scale-105 transition-transform duration-300
            hover:text-gray-800'>Nike</span>
          <span className='bg-black text-white rounded-lg px-4'> Shoes</span>
        </h1>

        <p className='font-montserrat text-gray-700 text-lg leading-8 mt-6 mb-14 sm:max-w-sm
          bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconUrl={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index} 
              className='hover:transform hover:scale-105 transition-all duration-300
                bg-white/90 backdrop-blur-sm rounded-lg p-4 cursor-pointer
                shadow-lg hover:shadow-xl border border-gray-100'>
              <p className='text-4xl font-palanquin font-bold text-gray-900'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-gray-600 font-semibold'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 
        bg-gradient-to-br from-gray-100 to-gray-200 bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10 hover:scale-105 transition-transform duration-500
            drop-shadow-2xl filter contrast-125'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index} 
              className='hover:transform hover:scale-110 transition-all duration-300
                shadow-xl hover:shadow-2xl'>
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

      {/* Decorative elements */}
      <div className="absolute top-20 right-1/2 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;

