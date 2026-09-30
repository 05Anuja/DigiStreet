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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 tracking-tight group focus:outline-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-medium',
    md: 'text-sm px-5 py-2.5 gap-2 font-medium',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-[#00529B] text-white hover:bg-[#F36C3D] border border-transparent shadow-sm hover:shadow-md hover:shadow-orange-500/20',
    secondary: 'bg-white text-[#00529B] border border-[#00529B]/30 hover:border-[#F36C3D] hover:text-[#F36C3D] hover:bg-[#FFF1EC]/40 shadow-sm',
    orange: 'bg-[#F36C3D] text-white hover:bg-[#D95627] font-semibold border border-transparent shadow-sm hover:shadow-md hover:shadow-orange-500/20',
    yellow: 'bg-[#F36C3D] text-white hover:bg-[#D95627] font-semibold border border-transparent shadow-sm hover:shadow-md hover:shadow-orange-500/20',
    outline: 'bg-transparent text-[#00529B] border border-[#00529B] hover:bg-[#F36C3D] hover:text-white hover:border-[#F36C3D]',
    darkOutline: 'bg-transparent text-white border border-white/50 hover:bg-white hover:text-[#00529B] hover:border-white shadow-sm',
    white: 'bg-white text-[#00529B] hover:bg-slate-50 border border-slate-200 shadow-sm hover:text-[#F36C3D]',
    ghost: 'bg-transparent text-slate-700 hover:text-[#00529B] hover:bg-[#EBF3FB]/60',
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
