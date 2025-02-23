const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border 
        font-montserrat text-lg leading-none rounded-full
        ${fullWidth && 'w-full'}
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : 'bg-black text-white border-black hover:bg-gray-900'
        }
        transition-all duration-300`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 filter invert"
        />
      )}
    </button>
  );
};

export default Button
