import React from 'react';
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  href: string;
}
function Button({
  text,
  onClick,
  variant = 'primary',
  icon,
  href = '#',
}: ButtonProps) {
  const variantStyles =
    variant == 'primary' ? 'bg-white text-black-text' : 'border-2 border-white';

  return (
    <a
      onClick={onClick}
      href={href}
      target="_blank"
      className={
        'flex gap-2 font-primary font-semibold rounded-full py-4 px-6 hover:-translate-y-2 transition-all ease-in-out duration-[0.6s] whitespace-nowrap cursor-pointer ' +
        variantStyles
      }
    >
      {icon}
      {text}
    </a>
  );
}

export default Button;
