import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Terms | Vuria",
  description: "The terms that apply to using this site and applying to Vuria.",
};

const sections = [
  {
    title: "Using this site",
    body: "This site is informational, and exists to let founders apply to Vuria. By using it, you agree to the terms on this page and the practices described in our Privacy policy.",
  },
  {
    title: "Applying",
    body: "Submitting an application doesn't create any obligation on either side. We review every application, but we can't guarantee a response by any particular date, and we may decline an application without giving a reason.",
  },
  {
    title: "Content and other ventures",
    body: "Everything on this site belongs to Vuria unless stated otherwise. The ventures shown on the Proof page are separate companies with their own sites, content, and terms — we link to them for reference, but we don't control or take responsibility for what's on their sites.",
  },
  {
    title: "No warranty",
    body: "This site is provided as-is. We try to keep it accurate and working, but we don't guarantee it will always be error-free or available.",
  },
  {
    title: "Changes",
    body: "We may update these terms as the site changes. The version live on this page is always the current one.",
  },
  {
    title: "Questions",
    body: "For anything about these terms, email hello@trance-ai.com.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms."
        lead="The short version of what applies when you use this site or apply to Vuria."
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
