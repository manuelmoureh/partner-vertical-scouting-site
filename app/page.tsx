import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { Criteria } from "./components/Criteria";
import { SubmissionForm } from "./components/SubmissionForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <Criteria />
        <SubmissionForm />
      </main>
      <Footer />
    </div>
  );
}
