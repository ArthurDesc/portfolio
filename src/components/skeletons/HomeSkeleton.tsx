import { Skeleton } from "@/components/ui/skeleton";
import '@/styles/shared.css';

export const HomeSkeleton = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section Skeleton */}
      <div className="h-screen relative flex flex-col justify-between overflow-hidden">
        <div className="text-center mx-auto max-w-4xl mt-24 sm:mt-28 md:mt-32 relative z-10">
          {/* Simplified Title Skeleton */}
          <div className="space-y-4 px-4">
            <Skeleton className="h-12 w-3/4 mx-auto bg-zinc-800" />
            <Skeleton className="h-12 w-1/2 mx-auto bg-zinc-800" />
            <Skeleton className="h-6 w-64 mx-auto bg-zinc-800 mt-4" />
          </div>
        </div>

        {/* Bottom Text Skeleton */}
        <div className="relative z-10 mb-8">
          <Skeleton className="w-64 h-6 mx-auto mb-8 bg-zinc-800" />
        </div>
      </div>

      {/* Timeline Section Skeleton */}
      <div className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full bg-zinc-800" />
          ))}
        </div>
      </div>
    </div>
  );
}; 