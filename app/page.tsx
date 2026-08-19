import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { VenturesTeaser } from "./components/VenturesTeaser";
import { Criteria } from "./components/Criteria";
import { Process } from "./components/Process";
import { ClosingCta } from "./components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <VenturesTeaser />
      <Criteria />
      <Process />
      <ClosingCta />
    </>
  );
}
