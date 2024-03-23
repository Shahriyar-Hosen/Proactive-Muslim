import { ComingSoonBox } from "@/components/common";
import { FC } from "react";
import { Clock } from "./clock";

export const Hero: FC = () => (
  <section
    id="hero"
    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center justify-items-center place-items-center place-content-center"
  >
    <div className="md:col-span-2 lg:col-span-1 max-w-[250px]">
      <Clock.single />
    </div>
    <ComingSoonBox className="h-[250px]" />
    <ComingSoonBox className="h-[250px]" />
  </section>
);
