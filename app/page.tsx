import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { Criteria } from "./components/Criteria";
import { SubmissionForm } from "./components/SubmissionForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Criteria />
      <SubmissionForm />
    </>
  );
}
