"use client";

import * as React from "react";
import { buildWhatsAppLinkFromTemplate } from "@/lib/whatsapp";

const TEMPLATE =
  "Hello Pastor Dapo,\n\nI would like to express interest in the Church Small Business Grant Programme.\n\nName: {{name}}\nPhone: {{phone}}\nMembership status: {{membership}}\n\nBusiness idea / current business: {{idea}}\nStage: {{stage}}\nBrief description: {{description}}";

const STEP_LABELS = ["Your Details", "Your Idea", "Review"];

interface GrantFormData {
  name: string;
  phone: string;
  membership: string;
  idea: string;
  stage: string;
  description: string;
}

const EMPTY: GrantFormData = { name: "", phone: "", membership: "", idea: "", stage: "", description: "" };

const inputClass = "w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper";
const btnPrimary = "rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper disabled:opacity-40";
const btnGhost = "rounded-sm border border-lineOnInk px-6 py-3 text-sm font-semibold text-paper";

function Field({ label, children }: { readonly label: string; readonly children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-gray-onInk">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

export function GrantApplicationForm() {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [data, setData] = React.useState<GrantFormData>(EMPTY);
  const [waLink, setWaLink] = React.useState("");

  function update<K extends keyof GrantFormData>(field: K, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : s));
  }
  function back() {
    setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s));
  }

  function handlePrepare() {
    setWaLink(buildWhatsAppLinkFromTemplate("seniorPastor", TEMPLATE, data as unknown as Record<string, string>));
  }

  const step1Valid = data.name.trim() && data.phone.trim() && data.membership;
  const step2Valid = data.idea.trim() && data.stage && data.description.trim();

  const reviewRows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Membership", data.membership],
    ["Business idea", data.idea],
    ["Stage", data.stage],
    ["Description", data.description],
  ];

  return (
    <div className="rounded-sm border border-lineOnInk bg-white/5 p-8">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {STEP_LABELS.map((label, i) => {
          const n = i + 1;
          const state = n < step ? "done" : n === step ? "active" : "todo";
          return (
            <React.Fragment key={label}>
              <span className={`flex items-center gap-2 text-xs ${state === "active" ? "font-semibold text-paper" : "text-gray-onInk"}`}>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[11px] ${
                    state === "active" ? "border-red bg-red text-paper" : state === "done" ? "border-gold bg-gold text-ink" : "border-lineOnInk"
                  }`}
                >
                  {state === "done" ? "✓" : n}
                </span>
                {label}
              </span>
              {n < STEP_LABELS.length && <span className="h-px w-5 bg-lineOnInk" />}
            </React.Fragment>
          );
        })}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <Field label="Name">
            <input value={data.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
          </Field>
          <Field label="Phone / WhatsApp">
            <input value={data.phone} onChange={(e) => update("phone", e.target.value)} type="tel" className={inputClass} />
          </Field>
          <Field label="Membership status">
            <select value={data.membership} onChange={(e) => update("membership", e.target.value)} className={inputClass}>
              <option value="">Choose one</option>
              <option>Member of Surefire</option>
              <option>Regular attendee, not yet a member</option>
              <option>First-time visitor</option>
            </select>
          </Field>
          <div className="mt-2 flex justify-end">
            <button type="button" onClick={next} disabled={!step1Valid} className={btnPrimary}>
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <Field label="Business idea / current business">
            <input value={data.idea} onChange={(e) => update("idea", e.target.value)} className={inputClass} />
          </Field>
          <Field label="Stage">
            <select value={data.stage} onChange={(e) => update("stage", e.target.value)} className={inputClass}>
              <option value="">Choose one</option>
              <option>Just an idea</option>
              <option>Planning / registering</option>
              <option>Already running, need support to grow</option>
            </select>
          </Field>
          <Field label="Brief description">
            <textarea value={data.description} onChange={(e) => update("description", e.target.value)} rows={4} className={inputClass} />
          </Field>
          <div className="mt-2 flex justify-between">
            <button type="button" onClick={back} className={btnGhost}>
              ← Back
            </button>
            <button type="button" onClick={next} disabled={!step2Valid} className={btnPrimary}>
              Review →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-gold">Review before you send</p>
          <div className="rounded-sm border border-lineOnInk">
            {reviewRows.map(([label, val]) => (
              <div key={label} className="flex items-center justify-between gap-4 border-b border-lineOnInk px-4 py-3 last:border-b-0">
                <span className="text-xs text-gray-onInk">{label}</span>
                <strong className="max-w-[60%] text-right text-sm text-paper">{val || "—"}</strong>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button type="button" onClick={back} className={btnGhost}>
              ← Edit
            </button>
            {waLink ? (
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Open WhatsApp to Send
              </a>
            ) : (
              <button type="button" onClick={handlePrepare} className={btnPrimary}>
                Prepare to Send
              </button>
            )}
          </div>
          <p className="mt-4 text-xs text-gray-onInk">
            This opens WhatsApp with your details filled in — you&apos;ll need to press Send. Nothing is sent until you
            do.
          </p>
        </div>
      )}
    </div>
  );
}
