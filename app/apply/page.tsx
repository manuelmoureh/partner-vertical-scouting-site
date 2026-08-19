import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { SubmissionForm } from "../components/SubmissionForm";

export const metadata: Metadata = {
  title: "Apply | Vuria",
  description: "Tell us what you've built. If it's a fit, we'll be in touch.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        title="Apply"
        lead="Tell us what you've built. If it's a fit, we'll be in touch."
      />
      <SubmissionForm />
    </>
  );
}
