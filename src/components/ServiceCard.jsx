const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] 
      shadow-lg px-10 py-16 bg-white/90 backdrop-blur-sm
      hover:shadow-xl transition-all duration-300
      border border-gray-100
      focus:outline-none focus:ring-2 focus:ring-gray-900
      active:ring-2 active:ring-gray-900">
      <div className="w-11 h-11 flex justify-center items-center bg-gray-900 rounded-full">
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
          className="brightness-0 invert"
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-900">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-gray-600">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
