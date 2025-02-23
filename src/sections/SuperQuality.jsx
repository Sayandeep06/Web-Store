import Button from "../components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">

        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We provide you
            <span className='text-slate-gray inline-block mt-3'>Premium Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
            We deliver premium-quality shoes crafted with precision, blending comfort, style, and durability. Our focus on excellence ensures unmatched value, catering to diverse needs with top-grade materials and innovative designs.
        </p>
        <div className="mt-11">
            <Button label='View Details'/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>  
  )
}

export default SuperQuality
