import { Hero } from "./components/Hero";
import { Gap } from "./components/Gap";
import { VenturesTeaser } from "./components/VenturesTeaser";
import { Criteria } from "./components/Criteria";
import { Process } from "./components/Process";
import { SubmissionForm } from "./components/SubmissionForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Gap />
      <VenturesTeaser />
      <Criteria />
      <Process />
      <SubmissionForm />
    </>
  );
}
