import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy | Vuria",
  description: "What Vuria collects when you apply, and how it's used.",
};

const sections = [
  {
    title: "What we collect",
    body: "When you apply, we collect what you enter in the form: your name, email, role, company or product name, a one-line description, the problem you're solving and the evidence behind it, your current stage, and, if you provide them, a demo link, details on existing funding or backers, and how you heard about us.",
  },
  {
    title: "Why we collect it",
    body: "Solely to evaluate your application and, if it's a fit, to reach out and follow up with you. We don't use it for anything else.",
  },
  {
    title: "Who sees it",
    body: "Only the Vuria team reviewing applications. We don't sell your information or share it with third parties.",
  },
  {
    title: "How long we keep it",
    body: "As long as it's relevant to reviewing your application. You can ask us to delete your information at any time, and we will.",
  },
  {
    title: "Cookies and tracking",
    body: "This website doesn't use cookies or third-party analytics or tracking scripts.",
  },
  {
    title: "Questions",
    body: "For anything about this policy, or to request your information be deleted, email hello@trance-ai.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy."
        lead="A short, plain-language explanation of what we collect and why."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="flex max-w-[640px] flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[17px] font-medium text-text-primary">
                  {section.title}
                </h2>
                <p className="mt-2 leading-relaxed text-text-secondary">
                  {section.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
