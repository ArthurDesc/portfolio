import React from 'react'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CustomButton({ children, className, ...props }: CustomButtonProps) {
  return (
    <button
      className={`bg-transparent text-white hover:bg-gray-700 rounded-full px-4 py-2 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
