"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { site } from "@/data/site";
import { projectTypes } from "@/data/services";

type Channel = "email" | "whatsapp";
type Status = { kind: "idle" } | { kind: "opened"; channel: Channel };

const field = "w-full rounded-xl border border-line bg-card px-4 py-3 text-fg placeholder:text-muted/70 focus:border-purple focus:outline-none";

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("project");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register, handleSubmit, setValue,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", projectType: undefined, budget: "", details: "" },
  });

  useEffect(() => {
    if (preset && (projectTypes as readonly string[]).includes(preset)) {
      setValue("projectType", preset as ContactInput["projectType"], { shouldValidate: true });
    }
  }, [preset, setValue]);

  function buildMessage(d: ContactInput) {
    return [
      `Hi Muhammad, I'd like to discuss a project.`,
      ``,
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Project type: ${d.projectType}`,
      `Budget: ${d.budget || "Not given"}`,
      ``,
      d.details,
    ].join("\n");
  }

  function send(channel: Channel) {
    return handleSubmit((d) => {
      const text = buildMessage(d);
      if (channel === "email") {
        const subject = encodeURIComponent(`Project inquiry: ${d.projectType} (${d.name})`);
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
      } else {
        window.open(`${site.phones.primary.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      }
      setStatus({ kind: "opened", channel });
    });
  }

  const err = (m?: string) => m && <p role="alert" className="mt-1.5 text-sm text-red-500">{m}</p>;

  return (
    <form onSubmit={send("email")} noValidate className="space-y-5 rounded-2xl border border-line bg-bg-2 p-6 md:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Full name</label>
        <input id="name" autoComplete="name" className={field} aria-invalid={!!errors.name} {...register("name")} />
        {err(errors.name?.message)}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email address</label>
        <input id="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} {...register("email")} />
        {err(errors.email?.message)}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium">Project type</label>
          <select id="projectType" defaultValue="" className={field} aria-invalid={!!errors.projectType} {...register("projectType")}>
            <option value="" disabled>Select a type</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {err(errors.projectType?.message)}
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium">Budget range <span className="text-muted">(optional)</span></label>
          <input id="budget" className={field} aria-invalid={!!errors.budget} {...register("budget")} />
          {err(errors.budget?.message)}
        </div>
      </div>
      <div>
        <label htmlFor="details" className="mb-2 block text-sm font-medium">Project details</label>
        <textarea id="details" rows={5} className={field} aria-invalid={!!errors.details} {...register("details")} />
        {err(errors.details?.message)}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-purple to-cyan px-6 font-semibold text-white transition hover:brightness-110"
        >
          Send via Email
        </button>
        <button
          type="button"
          onClick={() => void send("whatsapp")()}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-line px-6 font-semibold transition hover:border-purple"
        >
          Send via WhatsApp
        </button>
      </div>

      <div aria-live="polite">
        {status.kind === "opened" && (
          <p role="status" className="rounded-xl border border-cyan/40 bg-cyan/10 p-4 text-sm">
            {status.channel === "email"
              ? "Your email app should open with the message ready. Nothing is sent until you press send there."
              : "WhatsApp should open in a new tab with the message ready. Nothing is sent until you press send there."}
          </p>
        )}
      </div>
    </form>
  );
}
