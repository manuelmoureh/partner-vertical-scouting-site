"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

type FormState = {
  founderName: string;
  email: string;
  role: string;
  companyName: string;
  oneLiner: string;
  problem: string;
  stage: string;
  demoLink: string;
  backers: string;
  source: string;
  company_website: string; // honeypot
};

const initialState: FormState = {
  founderName: "",
  email: "",
  role: "",
  companyName: "",
  oneLiner: "",
  problem: "",
  stage: "",
  demoLink: "",
  backers: "",
  source: "",
  company_website: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const stageOptions = [
  { value: "", label: "Select current stage" },
  { value: "live-revenue", label: "Live, with paying users" },
  { value: "live-free", label: "Live, with free users" },
  { value: "built-not-live", label: "Built, not live yet" },
  { value: "in-development", label: "Still in development" },
];

const fieldClass =
  "w-full rounded-[10px] border border-border bg-bg-elevated px-3.5 py-2.5 text-[15px] text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft transition-colors";

const errorFieldClass = "border-error focus:border-error focus:ring-error/20";

const reassurance = [
  { n: "01", body: "We review every application ourselves." },
  { n: "02", body: "If it's a fit, we reach out directly." },
  { n: "03", body: "We talk terms once we're both interested." },
];

function Field({
  label,
  htmlFor,
  error,
  helper,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[14px] font-medium text-text-primary">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-[13px] text-error">{error}</p>
      ) : helper ? (
        <p className="text-[13px] text-text-tertiary">{helper}</p>
      ) : null}
    </div>
  );
}

export function SubmissionForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.founderName.trim()) next.founderName = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.role.trim()) next.role = "Enter your role.";
    if (!form.companyName.trim()) next.companyName = "Enter your company or product name.";
    if (!form.oneLiner.trim()) next.oneLiner = "Add a one-line description.";
    if (!form.problem.trim()) next.problem = "Tell us the problem and the evidence it's real.";
    if (!form.stage) next.stage = "Select your current stage.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.company_website) {
      // Honeypot tripped: silently pretend success without submitting.
      setStatus("success");
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: wire to the real submission destination (form backend / spreadsheet).
      // UI-only for now, per explicit instruction to defer backend wiring.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="mx-auto flex max-w-[480px] flex-col items-center rounded-[20px] border border-border bg-bg-elevated px-8 py-14 text-center">
            <CheckCircle size={40} weight="fill" className="text-accent" />
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-text-primary">
              Application received.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
              Thanks for applying. We review every submission and will reach
              out if it&apos;s a fit.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <div className="rounded-[20px] border border-border bg-bg-sunken p-7 md:sticky md:top-24">
              <p className="text-[15px] font-medium text-text-primary">
                What happens next
              </p>
              <div className="mt-5 flex flex-col gap-5">
                {reassurance.map((r) => (
                  <div key={r.n} className="flex gap-3">
                    <span className="font-mono text-[13px] text-text-tertiary">
                      {r.n}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-text-secondary">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-border pt-5 text-[13px] leading-relaxed text-text-tertiary">
                Your information is only used to evaluate your application.{" "}
                <Link
                  href="/privacy"
                  className="underline decoration-border underline-offset-2 transition-colors hover:decoration-text-tertiary"
                >
                  Privacy policy
                </Link>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[20px] border border-border bg-bg-elevated p-7 md:p-10"
            >
            <input
              type="text"
              name="company_website"
              value={form.company_website}
              onChange={(e) => update("company_website", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Founder name" htmlFor="founderName" error={errors.founderName}>
                <input
                  id="founderName"
                  type="text"
                  value={form.founderName}
                  onChange={(e) => update("founderName", e.target.value)}
                  className={`${fieldClass} ${errors.founderName ? errorFieldClass : ""}`}
                  placeholder="Wanjiru Kamau"
                />
              </Field>

              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={`${fieldClass} ${errors.email ? errorFieldClass : ""}`}
                  placeholder="you@company.com"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Role" htmlFor="role" error={errors.role}>
                <input
                  id="role"
                  type="text"
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                  className={`${fieldClass} ${errors.role ? errorFieldClass : ""}`}
                  placeholder="Founder & CEO"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Company or product name" htmlFor="companyName" error={errors.companyName}>
                <input
                  id="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  className={`${fieldClass} ${errors.companyName ? errorFieldClass : ""}`}
                  placeholder="Company name"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field
                label="One-line description"
                htmlFor="oneLiner"
                error={errors.oneLiner}
                helper="What does it do, in one sentence."
              >
                <input
                  id="oneLiner"
                  type="text"
                  value={form.oneLiner}
                  onChange={(e) => update("oneLiner", e.target.value)}
                  className={`${fieldClass} ${errors.oneLiner ? errorFieldClass : ""}`}
                  placeholder="We help X do Y by Z."
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field
                label="The problem, and evidence it's real"
                htmlFor="problem"
                error={errors.problem}
                helper="A link, a metric, anything concrete."
              >
                <textarea
                  id="problem"
                  rows={4}
                  value={form.problem}
                  onChange={(e) => update("problem", e.target.value)}
                  className={`${fieldClass} resize-none ${errors.problem ? errorFieldClass : ""}`}
                  placeholder="What problem are you solving, and how do you know it's real?"
                />
              </Field>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Field label="Current stage" htmlFor="stage" error={errors.stage}>
                <select
                  id="stage"
                  value={form.stage}
                  onChange={(e) => update("stage", e.target.value)}
                  className={`${fieldClass} ${errors.stage ? errorFieldClass : ""}`}
                >
                  {stageOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Live demo or product link"
                htmlFor="demoLink"
                helper="Optional if not live yet."
              >
                <input
                  id="demoLink"
                  type="url"
                  value={form.demoLink}
                  onChange={(e) => update("demoLink", e.target.value)}
                  className={fieldClass}
                  placeholder="https://"
                />
              </Field>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Field label="Existing funding or backers" htmlFor="backers" helper="If any.">
                <input
                  id="backers"
                  type="text"
                  value={form.backers}
                  onChange={(e) => update("backers", e.target.value)}
                  className={fieldClass}
                  placeholder="None, or who's backed you so far"
                />
              </Field>

              <Field label="How did you hear about us" htmlFor="source">
                <input
                  id="source"
                  type="text"
                  value={form.source}
                  onChange={(e) => update("source", e.target.value)}
                  className={fieldClass}
                  placeholder="Referral, X, event..."
                />
              </Field>
            </div>

            {status === "error" ? (
              <p className="mt-6 text-[14px] text-error">
                Something went wrong sending your application. Please try
                again.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-[15px] font-medium text-accent-on transition-transform hover:bg-accent-hover active:scale-[0.98] disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <CircleNotch size={18} className="animate-spin" />
                  Sending
                </>
              ) : (
                "Submit application"
              )}
            </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
