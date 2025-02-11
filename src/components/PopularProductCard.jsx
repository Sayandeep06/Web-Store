import {star} from "../assets/icons";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img 
        src={imgURL} alt={name} className="w-[280px] h-[280px] object-cover rounded-2xl
          hover:scale-105 transition-transform duration-300
          shadow-lg hover:shadow-xl"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className="brightness-0"/>
        <p className="font-montserrat text-xl leading-normal text-gray-900">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-gray-900">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-gray-700 text-xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard
