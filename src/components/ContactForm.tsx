import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Field } from "./ReservationForm";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full border border-input bg-card px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3) next.subject = "Please add a subject.";
    if (values.message.trim().length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
      setValues(empty);
    }, 700);
  };

  if (sent) {
    return (
      <div className="border border-gold/40 bg-card p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <Check size={24} />
        </div>
        <h3 className="mt-6 font-display text-3xl">Message Sent</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Thank you for writing to SAVORA. Our team replies within one business day.
        </p>
        <div className="mt-8">
          <Button variant="outline" onClick={() => setSent(false)}>
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="border border-border bg-card p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" id="c-name" error={errors.name}>
          <input
            id="c-name"
            className={inputClass}
            maxLength={100}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" id="c-email" error={errors.email}>
          <input
            id="c-email"
            type="email"
            className={inputClass}
            maxLength={255}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Subject" id="c-subject" error={errors.subject}>
            <input
              id="c-subject"
              className={inputClass}
              maxLength={150}
              value={values.subject}
              onChange={(e) => set("subject", e.target.value)}
              placeholder="How can we help?"
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" id="c-message" error={errors.message}>
            <textarea
              id="c-message"
              rows={5}
              maxLength={1000}
              className={inputClass}
              value={values.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Write your message…"
            />
          </Field>
        </div>
      </div>
      <Button type="submit" disabled={loading} className="mt-8 w-full sm:w-auto">
        {loading ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
