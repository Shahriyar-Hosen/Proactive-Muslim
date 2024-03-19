import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Skeleton className="h-[70vh] w-full mt-5 max-w-screen-lg rounded-xl mx-auto" />
    </div>
  );
};

export default Loading;
