import React, { FC, MouseEvent, ReactElement } from "react";

interface ButtonProps {
  text: string | ReactElement;
  className?: string;
  ariaLabel: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: any;
  primary?: boolean;
  plain?: boolean;
  small?: boolean;
  medium?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  ariaLabel,
  onClick,
  disabled,
  primary,
}) => {
  const primaryClass = primary ? "bg-[#140533] text-white" : "";

  return (
    <button
      type="submit"
      className={`rounded-full px-8 py-2 ${primaryClass} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
