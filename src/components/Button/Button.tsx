import React from 'react';
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}
function Button({ text, onClick, variant = 'primary', icon }: ButtonProps) {
  const variantStyles =
    variant == 'primary' ? 'bg-white text-black-text' : 'border-2 border-white';

  return (
    <button
      onClick={onClick}
      className={
        'flex gap-2 font-secondary font-semibold rounded-full py-4 px-6 hover:-translate-y-2 transition-all ease-in-out duration-[0.6s] whitespace-nowrap ' +
        variantStyles
      }
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
