import { memo } from "react";

import { ComingSoonBox } from "@/components/common";
import { Clock } from "./clock";
import { HeroInfoBox1 } from "./HeroInfoBox1";

export const Hero = memo(() => (
  <section
    id="hero"
    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center justify-items-center place-items-center place-content-center"
  >
    <div className="md:col-span-2 lg:col-span-1 max-w-[250px]">
      <Clock.single />
    </div>

    <HeroInfoBox1 />

    <ComingSoonBox className="h-[250px]" />
  </section>
));

Hero.displayName = "Hero";
