
import { Check } from "lucide-react";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Button } from "./Button";

type Fields = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "19:00",
  guests: "2",
  requests: "",
};

const inputClass =
  "min-h-[48px] w-full border border-input bg-card px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30";

export function ReservationForm() {
  const [values, setValues] = useState<Fields>(empty);

  const [errors, setErrors] = useState<
    Partial<Record<keyof Fields, string>>
  >({});

  const [loading, setLoading] = useState(false);

  const [done, setDone] = useState<Fields | null>(null);

  const set = (key: keyof Fields, value: string) => {
    setValues((current) => ({
      ...current,
      [key]: value,
    }));

    setErrors((current) => ({
      ...current,
      [key]: undefined,
    }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};

    if (values.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        values.email.trim(),
      )
    ) {
      next.email = "Please enter a valid email address.";
    }

    if (values.phone.replace(/\D/g, "").length < 8) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!values.date) {
      next.date = "Please choose a date.";
    }

    if (!values.time) {
      next.time = "Please choose a time.";
    }

    if (values.requests.length > 500) {
      next.requests =
        "Please keep this under 500 characters.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setDone(values);
      setValues(empty);
      setErrors({});
    }, 700);
  };

  if (done) {
    return (
      <div className="w-full border border-gold/40 bg-card p-6 text-center sm:p-10 lg:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <Check size={24} />
        </div>

        <h3 className="mt-6 text-2xl leading-tight text-foreground sm:text-3xl">
          Reservation Requested
        </h3>

        <div className="hairline mx-auto mt-5" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          Thank you, {done.name}. We have received your
          request for {done.guests}{" "}
          {Number(done.guests) === 1 ? "guest" : "guests"} on{" "}
          {done.date} at {done.time}. Our team will confirm by
          email at {done.email} within two hours.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="min-h-[48px] w-full sm:w-auto"
            onClick={() => setDone(null)}
          >
            Make Another Reservation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="w-full border border-border bg-card p-5 sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <Field
          label="Full Name"
          id="res-name"
          error={errors.name ?? ""}
        >
          <input
            id="res-name"
            type="text"
            autoComplete="name"
            className={inputClass}
            value={values.name}
            maxLength={100}
            onChange={(e) =>
              set("name", e.target.value)
            }
            placeholder="Your name"
          />
        </Field>

        <Field
          label="Email"
          id="res-email"
          error={errors.email ?? ""}
        >
          <input
            id="res-email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={values.email}
            maxLength={255}
            onChange={(e) =>
              set("email", e.target.value)
            }
            placeholder="you@example.com"
          />
        </Field>

        <Field
          label="Phone"
          id="res-phone"
          error={errors.phone ?? ""}
        >
          <input
            id="res-phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={values.phone}
            maxLength={20}
            onChange={(e) =>
              set("phone", e.target.value)
            }
            placeholder="+91 98200 00000"
          />
        </Field>

        <Field
          label="Number of Guests"
          id="res-guests"
          error=""
        >
          <select
            id="res-guests"
            className={inputClass}
            value={values.guests}
            onChange={(e) =>
              set("guests", e.target.value)
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10+">10+</option>
          </select>
        </Field>

        <Field
          label="Date"
          id="res-date"
          error={errors.date ?? ""}
        >
          <input
            id="res-date"
            type="date"
            className={inputClass}
            value={values.date}
            onChange={(e) =>
              set("date", e.target.value)
            }
          />
        </Field>

        <Field
          label="Time"
          id="res-time"
          error={errors.time ?? ""}
        >
          <input
            id="res-time"
            type="time"
            className={inputClass}
            value={values.time}
            onChange={(e) =>
              set("time", e.target.value)
            }
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            label="Special Requests"
            id="res-requests"
            error={errors.requests ?? ""}
          >
            <textarea
              id="res-requests"
              rows={4}
              maxLength={500}
              className="min-h-[120px] w-full resize-y border border-input bg-card px-4 py-3 text-sm leading-6 text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
              value={values.requests}
              onChange={(e) =>
                set("requests", e.target.value)
              }
              placeholder="Allergies, celebrations, seating preferences..."
            />
          </Field>

          <p className="mt-2 text-right text-xs text-muted-foreground">
            {values.requests.length}/500
          </p>
        </div>
      </div>

      <div className="mt-7 sm:mt-8">
        <Button
          type="submit"
          disabled={loading}
          className="min-h-[48px] w-full sm:w-auto"
        >
          {loading
            ? "Sending..."
            : "Confirm Reservation"}
        </Button>
      </div>
    </form>
  );
}

export function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground/75"
      >
        {label}
      </label>

      {children}

      {error ? (
        <p
          className="mt-2 text-xs leading-5 text-destructive"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

