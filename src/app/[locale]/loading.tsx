import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex flex-col space-y-3 justify-center items-center">
      <Skeleton className="h-[80px] w-full rounded-xl" />
      <section
        id="Hero"
        className="w-full py-5 grid grid-cols-3 gap-5 justify-self-center justify-items-center place-items-center place-content-center"
      >
        <Skeleton className="w-full bg-slate-800/80 rounded-md h-[250px]" />
        <Skeleton className="w-full bg-slate-800/80 rounded-md h-[250px]" />
        <Skeleton className="w-full bg-slate-800/80 rounded-md h-[250px]" />
      </section>
      <section id="Salats" className="pt-5 space-y-5 w-full">
        <ScrollArea className="w-full max-w-[600px] sm:max-w-fit mx-auto ">
          <div className="flex justify-center items-center gap-2.5">
            <Skeleton className="w-14 h-6 rounded-full" />
            <Skeleton className="w-14 h-6 rounded-full" />
            <Skeleton className="w-14 h-6 rounded-full" />
            <Skeleton className="w-14 h-6 rounded-full" />
            <Skeleton className="w-14 h-6 rounded-full" />
            <Skeleton className="w-14 h-6 rounded-full" />
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
        <div className="flex justify-center items-center gap-2.5">
          <Skeleton className="w-full max-w-[290px] h-[400px] mx-auto rounded-lg" />
          <Skeleton className="w-full max-w-[290px] h-[400px] mx-auto rounded-lg" />
          <Skeleton className="w-full max-w-[290px] h-[400px] mx-auto rounded-lg" />
          <Skeleton className="w-full max-w-[290px] h-[400px] mx-auto rounded-lg" />
        </div>
      </section>
    </main>
  );
};

export default Loading;
