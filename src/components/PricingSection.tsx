import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Pro',
    tagline: 'For coaches who want to start earning outside the gym.',
    price: '4,999',
    featured: false,
    features: [
      { text: 'Your **branded website** with a membership portal', bold: true },
      { text: '1 Mini-Product (7/14 Day Challenge / Mini-Video Course / Fitness Tool)', bold: false },
      { text: 'Online appointment, reminders & resource sharing', bold: false },
      { text: '**Automated sequence** to pitch your personal training', bold: true },
      { text: 'Online payments enabling **global transactions**', bold: true },
    ],
    benefits: [
      'Introduce your services to potential clients effortlessly',
      'Give clients login access to your branded portal',
      'Turn basic meetings into premium online classes',
      'Create a marketing funnel to get clients consistently',
    ],
    bestIf: "You're fully booked (or close), but your income still feels fragile.",
  },
  {
    name: 'Elite',
    tagline: 'For coaches who want hybrid income and higher-value clients.',
    price: '9,999',
    featured: true,
    features: [
      { text: 'Everything in Pro', bold: false },
      { text: 'A **high-quality flagship course** \u2014 produced, shot and edited for you', bold: true },
      { text: '2 additional mini-products (Macro Calculator & Nutrition Plan)', bold: false },
    ],
    benefits: [
      "Upsell free users into paid programs",
      'Add more online tools to provide value',
      'Downgrade leaving PT clients instead of losing them',
    ],
    bestIf: 'You want stable income and flexibility without working more hours.',
  },
  {
    name: 'Enterprise',
    tagline: 'For coaches building a serious coaching brand.',
    price: '19,999',
    featured: false,
    features: [
      { text: 'Everything in Pro and Elite', bold: false },
      { text: 'A **fully-customizable branded mobile app**', bold: true },
      { text: 'Your own **exercise library**', bold: true },
      { text: 'Progress tracking for clients', bold: false },
      { text: 'Your **AI Clone** for training', bold: true },
    ],
    benefits: [
      'Charge more from personal training clients',
      'Retain clients longer',
      'Deliver coaching at a higher level',
    ],
    bestIf: 'You want your coaching to feel premium and future-proof.',
  },
];

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-medium">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        plan.featured
          ? 'bg-[#131418] ring-1 ring-white/[0.08]'
          : 'bg-[#131418] ring-1 ring-white/[0.04] hover:ring-white/[0.07]'
      }`}
    >
      {plan.featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      )}

      <div className="p-6 md:p-7 lg:p-8 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[20px] md:text-[22px] font-semibold text-white tracking-[-0.02em]">
              {plan.name}
            </h3>
            <p className="mt-1.5 text-[13px] md:text-[14px] text-white/35 leading-[1.5] max-w-[260px]">
              {plan.tagline}
            </p>
          </div>
          {plan.featured && (
            <span className="text-[11px] font-medium text-white/60 bg-white/[0.06] border border-white/[0.06] px-2.5 py-1 rounded-full shrink-0">
              Popular
            </span>
          )}
        </div>

        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[36px] md:text-[40px] font-semibold text-white tracking-[-0.03em] leading-none">
              {plan.price}
            </span>
            <span className="text-[14px] text-white/30 font-medium">AED</span>
          </div>
          <p className="text-[12px] text-white/20 mt-1.5">One-time setup fee</p>
        </div>

        <a
          href="mailto:info@aekstudio.ae"
          className={`w-full flex items-center justify-center gap-2 h-11 md:h-10 rounded-xl md:rounded-lg text-[14px] md:text-[13px] font-semibold md:font-medium transition-colors duration-200 ${
            plan.featured
              ? 'bg-white text-[#0B0C10] hover:bg-white/90'
              : 'bg-white/[0.06] text-white/70 hover:bg-white/[0.1] hover:text-white'
          }`}
        >
          Get Started
          <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
        </a>

        <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/[0.05] space-y-3 md:space-y-3.5">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <Check className="w-3.5 h-3.5 text-white/20 mt-0.5 shrink-0" />
              <span className="text-[13px] text-white/40 leading-[1.55]">
                {renderBoldText(feature.text)}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-1.5 text-white/30 text-[12px] font-medium hover:text-white/50 transition-colors"
        >
          {expanded ? 'Less details' : 'More details'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {expanded && (
          <div className="mt-5 space-y-5 border-t border-white/[0.05] pt-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-white/20 mb-3">
                This lets you
              </p>
              <ul className="space-y-2.5">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <Check className="w-3 h-3 text-white/15 mt-0.5 shrink-0" />
                    <span className="text-white/35 text-[13px] leading-[1.5]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-white/20 mb-1.5">
                Best if
              </p>
              <p className="text-white/40 text-[13px] leading-[1.5]">{plan.bestIf}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-16 lg:mb-20">
          <h2 className="text-[clamp(2rem,7.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
            Simple pricing,
            <br />
            no surprises
          </h2>
          <div className="lg:pt-3">
            <p className="text-[15px] md:text-[17px] text-white/45 leading-[1.7] max-w-[480px]">
              One-time setup. Everything built for you. Pick the plan that matches
              where you are today -- you can always upgrade later.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-8 md:mt-10 border-t border-white/[0.04] pt-6 md:pt-7 flex flex-col gap-2.5 md:gap-3">
          <p className="text-[11px] md:text-[12px] text-white/20 leading-[1.7]">
            * A fixed <span className="text-white/30">349 AED/month</span> platform fee applies after setup, covering hosting, maintenance, and online systems.
          </p>
          <p className="text-[11px] md:text-[12px] text-white/20 leading-[1.7]">
            * Domain purchase or renewal is not included (typically a one-time annual cost).
          </p>
          <p className="text-[11px] md:text-[12px] text-white/15 leading-[1.7]">
            All prices in AED. No hidden fees beyond what is listed. All content, websites, and materials we build belong to you — full ownership on every plan.
          </p>
        </div>
      </div>
    </section>
  );
}
