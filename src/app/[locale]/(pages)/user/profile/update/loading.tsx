import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <Skeleton className="h-5 w-40 md:w-80 mt-5 rounded-xl" />
      <Skeleton className="h-[80vh] w-full mt-5 max-w-screen-lg rounded-xl mx-auto" />
    </div>
  );
};

export default Loading;
