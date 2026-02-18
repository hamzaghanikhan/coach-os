import { ArrowRight, Zap, BookOpen, Target, Users, TrendingUp, Moon, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import InnerNav from '../components/InnerNav';
import Footer from '../components/Footer';
const bwManImg = 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=1600';
const womanImg = 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1600';

const pillars = [
  {
    icon: Zap,
    title: 'Challenge platform & tech',
    description:
      'We set up the entire digital infrastructure — registration pages, automated email sequences, community groups, and a delivery system that runs without you.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum design',
    description:
      'We design the full challenge structure: daily tasks, content drops, accountability check-ins, and a progression arc that keeps participants engaged through to the end.',
  },
  {
    icon: Target,
    title: 'Conversion funnel',
    description:
      'Every challenge is engineered to end with a natural path into your paid programs. We build the offer, the timing, the follow-up, and the pitch so participants convert organically.',
  },
  {
    icon: Users,
    title: 'Community mechanics',
    description:
      'Leaderboards, progress posts, daily wins, and group interaction points. We build the engagement mechanics that make people tell their friends about the challenge.',
  },
  {
    icon: TrendingUp,
    title: 'Launch strategy',
    description:
      'Countdown content, waitlist emails, social proof hooks, and a step-by-step launch plan to maximize sign-ups before the challenge even starts.',
  },
];

const ramadanFeatures = [
  '30-day Ramadan-specific workout & habit curriculum',
  'Prayer time-aware daily scheduling',
  'Suhoor & Iftar training window plans',
  'Arabic and English content support',
  'Ramadan-themed visuals and branding',
  'Community check-ins built around the month',
  'End-of-Ramadan conversion into paid programs',
];

const challengeTypes = [
  { title: '7-Day Fat Loss Kickstart', category: 'Weight loss' },
  { title: '21-Day Strength Foundation', category: 'Strength' },
  { title: '30-Day Ramadan Active', category: 'Ramadan' },
  { title: '14-Day Nutrition Reset', category: 'Nutrition' },
  { title: '28-Day Body Transformation', category: 'Transformation' },
  { title: '10-Day Mindset & Habit', category: 'Mindset' },
];

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-background">
      <InnerNav />

      <main>
        <section className="relative pt-28 md:pt-44 pb-16 md:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-5%,rgba(255,255,255,0.04),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden hidden lg:block">
            <img
              src={bwManImg}
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
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
                  Challenges
                </p>
                <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] leading-[1.06] tracking-[-0.03em] text-white">
                  Turn followers
                  <br />
                  into clients
                </h1>
              </div>
              <div className="lg:pt-4">
                <p className="text-[15px] md:text-[17px] text-text-secondary leading-[1.7] max-w-[480px]">
                  Online challenges are the single most effective way to demonstrate your value,
                  build a community, and convert an audience into paying clients. Most coaches
                  know this but don't know how to execute it. We build and run the entire
                  challenge — you just show up and coach.
                </p>
                <a href="mailto:info@aekstudio.ae" className="btn-primary mt-7 md:mt-8 inline-flex h-11 px-6 text-[14px]">
                  Launch a challenge
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
              src={womanImg}
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.04]"
            />
          </div>

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-16">
              <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                What we handle
              </h2>
              <p className="text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] lg:pt-3">
                We take the full operational side off your plate — from the tech and the
                curriculum to the launch and the conversion. You focus on delivering the coaching.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-surface-2/50 border border-white/[0.05] rounded-2xl p-6 transition-all duration-300 hover:border-white/[0.1]"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-4 h-4 text-primary/70" />
                    </div>
                    <h3 className="font-heading text-[16px] font-semibold text-white tracking-[-0.01em] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary/70 leading-[1.65]">{item.description}</p>
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
                className="bg-surface-1 border border-white/[0.05] rounded-2xl p-7 md:p-8 flex flex-col"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Moon className="w-5 h-5 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/40 font-medium mb-1">
                      Ramadan Challenges
                    </p>
                    <h2 className="font-heading text-[20px] md:text-[22px] font-semibold text-white leading-snug tracking-[-0.02em]">
                      The most powerful time
                      <br />
                      to run a challenge
                    </h2>
                  </div>
                </div>

                <p className="text-[14px] text-text-secondary/75 leading-[1.7] mb-6">
                  Ramadan is when fitness motivation peaks and online engagement spikes across
                  the Gulf. We have built Ramadan-specific challenge programs designed to
                  respect the month — the fasting schedule, the culture, and the rhythm — while
                  keeping participants active and converting them into clients at the end.
                </p>

                <div className="space-y-2.5 flex-1">
                  {ramadanFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary/70" />
                      </div>
                      <span className="text-[13px] text-text-secondary/70">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.05] flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                  <span className="text-[12px] text-primary/70 font-medium">
                    We've already run Ramadan challenges for coaches — live and available now
                  </span>
                </div>
              </div>

              <div
                className="bg-surface-1 border border-white/[0.05] rounded-2xl p-7 md:p-8 flex flex-col"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/40 font-medium mb-2">
                  Challenge library
                </p>
                <h3 className="font-heading text-[20px] font-semibold text-white tracking-[-0.02em] mb-2">
                  Proven challenge formats
                </h3>
                <p className="text-[13.5px] text-text-secondary/60 leading-[1.65] mb-7">
                  Each challenge is fully customized to your niche, audience, and offer. These
                  are the formats we've designed and run — starting points, not templates.
                </p>

                <div className="flex-1 space-y-0">
                  {challengeTypes.map((c, idx) => (
                    <div
                      key={c.title}
                      className={`flex items-center justify-between py-3.5 ${
                        idx < challengeTypes.length - 1 ? 'border-b border-white/[0.05]' : ''
                      }`}
                    >
                      <span className="text-[14px] text-white/70 font-medium">{c.title}</span>
                      <span className="text-[11px] text-secondary/40 bg-white/[0.04] border border-white/[0.05] px-2.5 py-1 rounded-full shrink-0 ml-3">
                        {c.category}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.05]">
                  <p className="text-[12px] text-secondary/35">
                    Have a different idea? We design custom challenges from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-surface-1" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
              <div>
                <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                  Launch your
                  <br />
                  first challenge
                </h2>
                <p className="mt-4 md:mt-5 text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] max-w-[400px]">
                  Tell us your idea or your audience, and we'll map out the challenge structure
                  and get it live within weeks.
                </p>
                <div className="mt-6 md:mt-8 space-y-3">
                  {[
                    "Full tech setup — you don't touch a single tool",
                    'Curriculum designed around your niche',
                    'Built to convert, not just engage',
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
                className="bg-surface-2/40 border border-white/[0.05] rounded-2xl p-6 md:p-8"
                style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[12px] text-secondary/50 mb-2">Your name</label>
                    <input
                      type="text"
                      className="w-full h-11 md:h-10 bg-white/[0.04] border border-white/[0.07] rounded-xl md:rounded-lg px-4 md:px-3 text-[14px] md:text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="Ahmed Al Rashid"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary/50 mb-2">Email or WhatsApp</label>
                    <input
                      type="text"
                      className="w-full h-11 md:h-10 bg-white/[0.04] border border-white/[0.07] rounded-xl md:rounded-lg px-4 md:px-3 text-[14px] md:text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary/50 mb-2">Challenge idea (optional)</label>
                    <textarea
                      rows={3}
                      className="w-full bg-white/[0.04] border border-white/[0.07] rounded-xl md:rounded-lg px-4 md:px-3 py-3 md:py-2.5 text-[14px] md:text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                      placeholder="e.g. 21-day fat loss challenge for women in Dubai..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center h-11 text-[14px] font-semibold">
                    Get in touch
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
