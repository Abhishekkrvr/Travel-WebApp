import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: string;
  variant?: "primary" | "outline" | "ghost";
  full?: boolean;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant = "primary",
  full = false,
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-green-500 text-white border-green-500",
    outline: "border-white text-white",
    ghost: "text-white border-transparent",
  };

  return (
    <button
      type={type}
      className={`
        flex items-center justify-center gap-3 rounded-full border
        ${variants[variant]}
        ${full ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="font-semibold whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
