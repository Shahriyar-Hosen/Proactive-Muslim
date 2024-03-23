import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex flex-col space-y-3 justify-center items-center">
      <Skeleton className="h-[80px] w-full rounded-xl" />
      <div className="w-full py-5 grid grid-cols-3 gap-5 justify-self-center justify-items-center place-items-center place-content-center">
        <Skeleton className="w-full bg-slate-800/80 rounded-md h-[250px]" />
        <Skeleton className="w-full bg-slate-800/80 rounded-md h-[250px]" />
        <Skeleton className="w-full bg-slate-800/80 rounded-md h-[250px]" />
      </div>
      {/* <SingleRoundSkeleton /> */}
      {/* <ThreeRoundedClockSkeleton /> */}
      <div className="space-y-2 flex justify-between items-center gap-5">
        <Skeleton className="h-80 w-full" />
        <Skeleton className="h-80 w-full" />
      </div>
    </main>
  );
};

export default Loading;
