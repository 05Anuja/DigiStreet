import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // primary (black/yellow), yellow, outline, darkOutline, ghost
  size = 'md', // sm, md, lg
  icon = 'upRight', // upRight, right, none
  className = '',
  type = 'button',
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 tracking-tight group focus:outline-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-black text-white hover:bg-zinc-800 border border-black shadow-sm',
    yellow: 'bg-[#FFDF01] text-black hover:bg-[#ebd000] font-semibold border border-[#FFDF01] shadow-sm',
    outline: 'bg-transparent text-black border border-black/80 hover:bg-black hover:text-white',
    darkOutline: 'bg-transparent text-white border border-white/60 hover:bg-white hover:text-black',
    white: 'bg-white text-black hover:bg-zinc-100 border border-zinc-200 shadow-sm',
    ghost: 'bg-transparent text-zinc-800 hover:text-black hover:bg-black/5',
  };

  const IconComponent = () => {
    if (icon === 'upRight') {
      return <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    }
    if (icon === 'right') {
      return <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />;
    }
    return null;
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        <span>{children}</span>
        <IconComponent />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        <IconComponent />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      <span>{children}</span>
      <IconComponent />
    </button>
  );
}
