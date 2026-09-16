"use client";

import * as React from "react";
import Link from "next/link";
import { empowerment } from "@/data/empowerment";

interface Question {
  name: string;
  question: string;
  options: { value: string; label: string }[];
}

const QUESTIONS: Question[] = [
  {
    name: "focus",
    question: "What is on your heart to build right now?",
    options: [
      { value: "business", label: "A business or enterprise" },
      { value: "skills", label: "A practical skill or trade" },
      { value: "career", label: "A job or a stronger career" },
      { value: "finances", label: "Better financial stewardship" },
      { value: "family", label: "Support for my family right now" },
      { value: "community", label: "A way to serve my community" },
    ],
  },
  {
    name: "stage",
    question: "Where are you starting from?",
    options: [
      { value: "idea", label: "Just an idea — nothing formal yet" },
      { value: "early", label: "Already started, but need structure" },
      { value: "established", label: "Established, and looking to grow" },
      { value: "crisis", label: "Facing a difficult season right now" },
    ],
  },
  {
    name: "support",
    question: "What kind of support would help most?",
    options: [
      { value: "training", label: "Training and hands-on learning" },
      { value: "mentorship", label: "Mentorship and guidance" },
      { value: "finance", label: "Financial support or a loan" },
      { value: "counsel", label: "Someone to talk to and pray with" },
    ],
  },
  {
    name: "member",
    question: "Are you a member of the Surefire Christian Church of God?",
    options: [
      { value: "yes", label: "Yes, I'm a member" },
      { value: "regular", label: "I attend regularly" },
      { value: "new", label: "I'm new / just visiting" },
    ],
  },
];

const FOCUS_MAP: Record<string, { key: string; copy: string }> = {
  business: {
    key: "business",
    copy: "Everything points to Business Development — the Empowerment Ministry's home for entrepreneurship training, business planning and mentorship.",
  },
  skills: {
    key: "skills",
    copy: "Skills Acquisition looks like the right starting point — vocational, technical or digital training with a clear path to certification.",
  },
  career: {
    key: "career",
    copy: "Employment & Career Development can help — from CV preparation and interview readiness to job placement support.",
  },
  finances: {
    key: "wealth",
    copy: "Wealth Management is built for exactly this — biblical stewardship alongside practical budgeting, saving and investment education.",
  },
  family: {
    key: "family",
    copy: "Family Intervention exists to walk with you through this season with dignity — practical, compassionate, and focused on lasting stability.",
  },
  community: {
    key: "special",
    copy: "Special Empowerment Projects channels service into the community — outreach, humanitarian support and inclusion initiatives.",
  },
};

function computeResult(answers: Record<string, string>) {
  let chosen = FOCUS_MAP[answers.focus ?? ""] ?? FOCUS_MAP.business!;

  if (answers.stage === "crisis") {
    chosen = FOCUS_MAP.family!;
  } else if (answers.support === "finance" && answers.focus === "business") {
    chosen = {
      key: "grants",
      copy: "Since you're looking for financial backing for a business, the Grants & Business Support department — home of the Small Business Grant Programme and the Church Cooperative Society — is your next stop.",
    };
  } else if (answers.support === "mentorship" && answers.focus === "business") {
    chosen = {
      key: "mentorship",
      copy: "Since guidance matters most to you right now, start with Mentorship & Leadership — you'll be paired with an experienced Christian entrepreneur as you build.",
    };
  }

  return chosen;
}

export function AssessmentFlow() {
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [showResult, setShowResult] = React.useState(false);

  const total = QUESTIONS.length;
  const question = QUESTIONS[current]!;

  function pick(value: string) {
    const next = { ...answers, [question.name]: value };
    setAnswers(next);
    window.setTimeout(() => {
      if (current < total - 1) {
        setCurrent((c) => c + 1);
      } else {
        setShowResult(true);
      }
    }, 180);
  }

  function back() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function restart() {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
  }

  const result = showResult ? computeResult(answers) : null;
  const dept = result ? empowerment.departments.find((d) => d.key === result.key) : undefined;

  return (
    <div className="rounded-sm border border-lineOnInk bg-white/5 p-8">
      <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-lineOnInk">
        <div
          className="h-full bg-red transition-all duration-300"
          style={{ width: showResult ? "100%" : `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {!showResult && (
        <>
          <p className="font-display text-xl text-paper">{question.question}</p>
          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => pick(opt.value)}
                className="rounded-sm border border-lineOnInk bg-ink px-4 py-3 text-left text-sm text-paper transition-colors hover:border-red hover:bg-red"
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              className={`text-xs text-gray-onInk ${current === 0 ? "invisible" : ""}`}
            >
              ← Back
            </button>
            <span className="text-xs text-gray-onInk">
              Question {current + 1} of {total}
            </span>
          </div>
        </>
      )}

      {showResult && dept && result && (
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-gold">Your Empowerment Pathway</p>
          <h2 className="mt-3 font-display text-2xl text-paper">{dept.name}</h2>
          <p className="mt-4 text-sm text-gray-onInk">{result.copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${dept.slug}`} className="rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
              Explore this pathway →
            </Link>
            <Link href="/contact" className="rounded-sm border border-lineOnInk px-6 py-3 text-sm font-semibold text-paper">
              Talk to Someone First
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-onInk">
            This is a starting point, not an approval. Every application to a grant, loan or programme still goes
            through the Empowerment Ministry&apos;s own eligibility, assessment and approval process.
          </p>
          <button type="button" onClick={restart} className="mt-4 text-xs text-gray-onInk underline">
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
