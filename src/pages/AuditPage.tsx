import { ArrowRight, BarChart3, Search, Wrench, MessageSquare, Map, CheckCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import InnerNav from '../components/InnerNav';
import Footer from '../components/Footer';
const closeupImg = 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1600';
const trxImg = 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600';

const auditAreas = [
  {
    icon: BarChart3,
    title: 'Revenue & income streams',
    description:
      'Where is your money coming from? Where is it not? We identify every missed revenue opportunity in your current setup and tell you what to plug first.',
  },
  {
    icon: Search,
    title: 'Digital presence',
    description:
      'Your website, social accounts, content strategy, and how you come across online. We assess what is working, what is wasting your time, and what is costing you clients.',
  },
  {
    icon: Wrench,
    title: 'Tech & tools',
    description:
      "Are you using the right tools? Are you paying for things you don't need? We map your entire tech stack, cut the bloat, and tell you what to replace it with.",
  },
  {
    icon: MessageSquare,
    title: 'Sales & conversion',
    description:
      'How do leads find you, and how many actually become clients? We trace the full journey and find exactly where you are losing people.',
  },
  {
    icon: Map,
    title: 'Positioning & offer',
    description:
      "Are you speaking to the right audience? Is your offer clear? We evaluate how you're positioned and where you can carve out a stronger angle.",
  },
];

const deliverables = [
  'Full written audit report',
  'Prioritized action plan — quick wins and long-term',
  'Custom tech stack recommendations',
  'Content and marketing gaps identified',
  'Revenue model recommendations',
  '90-minute strategy review call with our team',
];

const processSteps = [
  {
    step: '01',
    title: 'Intake questionnaire',
    description:
      'We send you a detailed form covering your current setup — clients, revenue, tools, content, and goals. Takes about 15 minutes to complete.',
  },
  {
    step: '02',
    title: 'Deep review',
    description:
      "Our team audits everything — your profiles, website, offers, funnels, and positioning. We look at what you have and what you're missing.",
  },
  {
    step: '03',
    title: 'Strategy session',
    description:
      'We present findings in a 90-minute call. You leave knowing exactly what to fix, in what order, and why — with a written action plan in hand.',
  },
  {
    step: '04',
    title: 'Execution (optional)',
    description:
      'If you want us to implement the plan — build the tech, produce the content, run the campaign — we can do that as a custom engagement.',
  },
];

const customExamples = [
  {
    situation: 'Coach with 200+ clients, no online income',
    solution: 'Built a course and membership funnel that added 40% passive revenue within 60 days.',
  },
  {
    situation: 'Personal trainer pivoting to online-only',
    solution: 'Designed the full tech stack, content system, and online offer architecture from scratch.',
  },
  {
    situation: 'Gym owner wanting to scale beyond location',
    solution: 'Launched a branded app, an online program, and a challenge series for their existing community.',
  },
];

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-background">
      <InnerNav />

      <main>
        <section className="relative pt-28 md:pt-44 pb-16 md:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-5%,rgba(255,255,255,0.04),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden hidden lg:block">
            <img
              src={closeupImg}
              alt=""
              className="w-full h-full object-cover object-right-center opacity-[0.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>

          <div className="relative section-container">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-[12px] text-secondary/40 hover:text-secondary/70 transition-colors mb-8 md:mb-10"
            >
              <ArrowRight className="w-3 h-3 rotate-180" />
              All Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 md:mb-6">
                  Audit &amp; Custom
                </p>
                <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] leading-[1.06] tracking-[-0.03em] text-white">
                  A plan built
                  <br />
                  around you
                </h1>
              </div>
              <div className="lg:pt-4">
                <p className="text-[15px] md:text-[17px] text-text-secondary leading-[1.7] max-w-[480px]">
                  Not every coach needs the same thing. We sit down with you, map exactly where
                  you are, and build a custom roadmap. Then we help you execute it — whether
                  that's tech, content, marketing, or all three.
                </p>
                <a href="mailto:info@aekstudio.ae" className="btn-primary mt-7 md:mt-8 inline-flex h-11 px-6 text-[14px]">
                  Book an audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-surface-1" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={trxImg}
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.04]"
            />
          </div>

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-16">
              <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                What we look at
              </h2>
              <p className="text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] lg:pt-3">
                The audit covers every part of your business. We go where the real problems
                actually are, not where they appear to be.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {auditAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="bg-surface-2/50 border border-white/[0.05] rounded-2xl p-6 transition-all duration-300 hover:border-white/[0.1]"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-4 h-4 text-primary/70" />
                    </div>
                    <h3 className="font-heading text-[16px] font-semibold text-white tracking-[-0.01em] mb-2">
                      {area.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary/70 leading-[1.65]">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 items-stretch">
              <div
                className="bg-surface-1 border border-white/[0.05] rounded-2xl p-7 md:p-8"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/40 font-medium mb-5">
                  Audit deliverables
                </p>
                <div className="space-y-3">
                  {deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-primary/70" />
                      </div>
                      <span className="text-[14px] text-text-secondary/80">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-surface-1 border border-white/[0.05] rounded-2xl p-7 md:p-8"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/40 font-medium mb-5">
                  How it works
                </p>
                <div className="space-y-5">
                  {processSteps.map((step, idx) => (
                    <div
                      key={step.step}
                      className={`flex gap-4 ${idx < processSteps.length - 1 ? 'pb-5 border-b border-white/[0.05]' : ''}`}
                    >
                      <p className="text-[11px] text-secondary/25 font-medium w-6 shrink-0 mt-0.5">
                        {step.step}
                      </p>
                      <div>
                        <h3 className="font-heading text-[15px] font-semibold text-white tracking-[-0.01em] mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-text-secondary/70 leading-[1.65]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-surface-1" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-14">
              <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                What custom work
                <br />
                looks like
              </h2>
              <p className="text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] lg:pt-3">
                Every engagement is different. These are examples of what we have built for
                coaches who came to us without a fixed service in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {customExamples.map((ex, i) => (
                <div
                  key={i}
                  className="bg-surface-2/50 border border-white/[0.05] rounded-2xl p-6"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/35 font-medium mb-3">
                    Situation
                  </p>
                  <p className="text-[14px] text-white/70 font-medium leading-[1.55] mb-5">
                    {ex.situation}
                  </p>
                  <div className="border-t border-white/[0.05] pt-4">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/35 font-medium mb-2">
                      What we did
                    </p>
                    <p className="text-[13px] text-text-secondary/65 leading-[1.65]">{ex.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
              <div>
                <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                  Book your
                  <br />
                  audit
                </h2>
                <p className="mt-4 md:mt-5 text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] max-w-[400px]">
                  No pitch, no package push. Just an honest look at where you are and where
                  you could be.
                </p>
                <div className="mt-6 md:mt-8 space-y-3">
                  {[
                    'No obligation to buy anything after',
                    'Written action plan you keep regardless',
                    'We tell you what you actually need, not what costs most',
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/[0.1] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-[13px] md:text-[14px] text-text-secondary/80">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-surface-2/40 border border-white/[0.05] rounded-2xl p-6 md:p-8 flex flex-col items-start gap-5"
                style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <p className="text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7]">
                  Email us to book your free audit. We'll get back to you within 24 hours to schedule a time.
                </p>
                <a
                  href="mailto:info@aekstudio.ae"
                  className="btn-primary w-full justify-center h-11 text-[14px] font-semibold"
                >
                  Book the audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
