import React from "react";

export default function Button({
  children,
  onClick,
  variant = "filledHover",
  size = "medium",
  className = "",
  disabled = false,
  type = "button",
  hoverEffect = true,
  showIcon = false,
  text=""
}) {
  const baseStyles = `
    relative 
    overflow-hidden 
    group 
    flex 
    justify-center 
    tracking-wide 
    items-center 
    font-satoshi-medium 
    rounded-lg 
  
  `;

  const variantStyles = {
    filledNoHover: ` bg-[#3B97A6] 
      text-white     `,
    filledHover: `
      bg-[#3B97A6] 
      text-white 
      hover:bg-gradient-to-r 
    
   
     transition-all 
  duration-500 
  ease-in-out
    `,
    outlined: `
      border-2 
      border-[#3B97A6] 
      text-[#3B97A6] 
      hover:bg-[#3B97A6]/10
    `,
    filledWhite: `
    bg-white 
    text-[#3F99A7] 
    hover:bg-[#f0f0f0] 
    transition-all 
    duration-500 
    ease-in-out
  `, 
  };

  const sizeStyles = {
    small: "px-4 py-2   text-[12px]",
    medium: "px-6 py-2.5 text-[12px]",
    large: "px-8 py-3 text-[14px]",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const combinedClassName = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${disabledStyles} 
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {" "}
      {hoverEffect && (
        <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40" />
      )}
      <span className="relative z-10">{children}</span>
      {showIcon && (
        <span className="ml-1">
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
              stroke="CurrentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      )}
    </button>
  );
}
