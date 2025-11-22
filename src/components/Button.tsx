import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cta';
  children: ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3.5 rounded-full font-medium text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105";

  const variantStyles = {
    primary: "bg-white text-[hsl(var(--charcoal))] border border-[hsl(var(--charcoal))] hover:bg-[hsl(var(--charcoal))] hover:text-white",
    cta: "bg-[hsl(var(--warm-tan))] text-white hover:bg-[hsl(var(--warm-tan))]/90 shadow-md hover:shadow-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
