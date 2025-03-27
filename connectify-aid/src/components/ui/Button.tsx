
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variantClasses = {
    primary: "bg-theuyir-yellow text-black hover:brightness-95",
    secondary: "bg-theuyir-pink text-white hover:brightness-95",
    outline: "border border-black text-black hover:bg-black/5",
  };
  
  const sizeClasses = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2.5 px-6",
    lg: "py-3 px-8 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
