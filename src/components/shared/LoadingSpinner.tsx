import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};

export function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div 
        className={cn(
          "relative",
          sizeClasses[size],
          className
        )}
      >
        {/* Cercle extérieur animé */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500 animate-spin" />
        
        {/* Cercle du milieu avec glow */}
        <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-indigo-500 animate-spin-slow" 
          style={{ animationDirection: 'reverse' }}
        />
        
        {/* Point central avec glow */}
        <div className="absolute inset-[35%] rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 animate-pulse shadow-lg shadow-violet-500/20" />
      </div>
    </div>
  );
} 