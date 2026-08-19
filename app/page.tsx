import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { VenturesTeaser } from "./components/VenturesTeaser";
import { Criteria } from "./components/Criteria";
import { Process } from "./components/Process";
import { SubmissionForm } from "./components/SubmissionForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <VenturesTeaser />
      <Criteria />
      <Process />
      <SubmissionForm />
    </>
  );
}
