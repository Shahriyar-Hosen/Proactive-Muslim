import { ThreeRoundedClockSkeleton } from "@/components/clock/three-rounded-clock";
import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <main className="flex flex-col space-y-3 justify-center items-center">
      <Skeleton className="h-[80px] w-full rounded-xl" />
      <ThreeRoundedClockSkeleton />
      <div className="space-y-2 flex justify-between items-center gap-5">
        <Skeleton className="h-80 w-full" />
        <Skeleton className="h-80 w-full" />
      </div>
    </main>
  );
};

export default Loading;
