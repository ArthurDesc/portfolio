import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const skeletonBaseClass = "bg-zinc-800 animate-pulse";

export const HomeSkeleton = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section Skeleton */}
      <div className="h-screen relative flex flex-col justify-between overflow-hidden">
        <div className="text-center mx-auto max-w-4xl mt-24 sm:mt-28 md:mt-32 relative z-10">
          {/* Title Skeletons - Matching exact structure */}
          <div className="space-y-2 sm:space-y-4">
            {/* First line - developer_title + creative_dev */}
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Skeleton className={`h-8 sm:h-10 lg:h-12 w-32 sm:w-40 lg:w-48 ${skeletonBaseClass}`} />
                <Skeleton className={`h-8 sm:h-10 lg:h-12 w-48 sm:w-56 lg:w-64 ${skeletonBaseClass}`} />
                <Skeleton className={`h-8 sm:h-10 lg:h-12 w-4 sm:w-5 lg:w-6 ${skeletonBaseClass}`} />
              </div>
            </div>

            {/* Second line - at_intersection + design + and */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Skeleton className={`h-8 sm:h-10 lg:h-12 w-40 sm:w-48 lg:w-56 ${skeletonBaseClass}`} />
              <Skeleton className={`h-8 sm:h-10 lg:h-12 w-24 sm:w-32 lg:w-40 ${skeletonBaseClass}`} />
              <Skeleton className={`h-8 sm:h-10 lg:h-12 w-16 sm:w-20 lg:w-24 ${skeletonBaseClass}`} />
            </div>

            {/* Third line - programming + ... */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Skeleton className={`h-8 sm:h-10 lg:h-12 w-48 sm:w-56 lg:w-64 ${skeletonBaseClass}`} />
              <Skeleton className={`h-8 sm:h-10 lg:h-12 w-16 sm:w-20 lg:w-24 ${skeletonBaseClass}`} />
            </div>
          </div>
        </div>

        {/* Bottom Text and Arrow Skeleton */}
        <div className="relative z-10 mb-8">
          <Skeleton className={`w-64 sm:w-72 md:w-80 h-6 sm:h-7 md:h-8 mx-auto mb-8 ${skeletonBaseClass}`} />
          <div className="flex justify-center">
            <Skeleton className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${skeletonBaseClass}`} />
          </div>
        </div>
      </div>

      {/* Timeline Section Skeleton */}
      <div className="relative">
        <section className="relative py-16 sm:py-20 md:py-24 w-full overflow-hidden">
          {/* Timeline central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent transform -translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Timeline Items */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex justify-center mb-12 sm:mb-16 md:mb-24 w-full">
                <div className={`relative w-[85%] sm:w-[90%] md:max-w-2xl p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                  {/* Date Badge Skeleton */}
                  <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 md:left-8">
                    <Skeleton className={`h-6 w-16 rounded-full ${skeletonBaseClass}`} />
                  </div>
                  
                  {/* Content Skeleton */}
                  <div className="relative z-10 mt-4">
                    <Skeleton className={`w-16 sm:w-20 h-1 mb-4 sm:mb-6 ${skeletonBaseClass}`} />
                    <Skeleton className={`h-8 w-3/4 mb-4 ${skeletonBaseClass}`} />
                    <Skeleton className={`h-20 w-full ${skeletonBaseClass}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section Skeleton */}
        <section className="mt-8 sm:mt-12 md:mt-16 max-w-[90%] sm:max-w-none mx-auto">
          {/* Title Skeleton */}
          <div className="text-center mb-8">
            <Skeleton className={`h-8 sm:h-10 w-3/4 mx-auto ${skeletonBaseClass}`} />
          </div>

          {/* Projects Carousel Skeleton */}
          <div className="w-full bg-background mt-4 sm:mt-6 md:mt-8">
            <div className="w-full overflow-hidden pb-4 sm:pb-6 md:pb-8 lg:pb-12">
              <div className="flex gap-6 px-4 py-2">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
                    <Skeleton className={`h-[400px] rounded-3xl ${skeletonBaseClass}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; 