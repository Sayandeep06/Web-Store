import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">

        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <span>New </span>
            <span className='text-slate-gray inline-block mt-3'>Special</span> Offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Discover unbeatable deals on our exclusive shoe collection! Enjoy limited-time discounts on trendy, comfortable footwear designed to elevate your style and performance. Shop now!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop now' iconUrl={arrowRight}/>
            <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray"
              textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
