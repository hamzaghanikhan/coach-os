import { UserX, HeartCrack, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: UserX,
    title: 'Interested People Never Start',
    description:
      "You have people watching you, on Instagram, at the gym, through referrals. They ask questions. They say they're interested. But when it's time to commit, they hesitate and do nothing.",
    stat: '~70%',
    statLabel: 'of leads never convert without a low-friction entry point',
  },
  {
    icon: HeartCrack,
    title: 'Happy Clients Still Leave',
    description:
      "Even when clients get great results, it rarely lasts. Some relocate. Some get busy. Some fall out of routine. Once that momentum breaks, most clients don't come back.",
    stat: '3–6mo',
    statLabel: 'average in-person coaching engagement before drop-off',
  },
  {
    icon: TrendingDown,
    title: 'Your Value Gets Undercut',
    description:
      "You know your stuff, exercise, nutrition, recovery. But other coaches charge less just to survive. And no matter how good you are, it becomes harder to charge what you're actually worth.",
    stat: '↓ rates',
    statLabel: 'driven by a market that competes on price, not results',
  },
];

export default function ExpandedProblemSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative section-container">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 lg:gap-20 mb-12 md:mb-20 lg:mb-24">
          <h2 className="font-display text-[clamp(2rem,7.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-white max-w-[520px] text-balance">
            Why Coaching Feels Unstable
          </h2>
          <p className="text-text-secondary text-[15px] md:text-lg leading-[1.7] max-w-[480px] lg:pt-3">
            Even after years of coaching in the UAE, you probably still feel like your income isn't
            secure. You can be good at what you do, get real results, and still feel unsure about
            next month. Because skill alone doesn't protect you from these three problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="group relative bg-surface-1 border border-white/[0.05] hover:border-white/[0.1] rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: '0 2px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <div className="p-6 md:p-7">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 md:mb-6 group-hover:border-white/[0.1] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                  </div>

                  <h3 className="font-heading text-[16px] md:text-[18px] font-semibold text-white leading-snug tracking-[-0.01em] mb-3 md:mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-text-secondary/80 text-[13px] md:text-[14px] leading-[1.65] mb-6 md:mb-8">
                    {problem.description}
                  </p>

                  <div className="border-t border-white/[0.05] pt-4 md:pt-5">
                    <p className="text-[20px] md:text-[22px] font-semibold text-white/30 font-heading tracking-tight mb-1">
                      {problem.stat}
                    </p>
                    <p className="text-[11px] md:text-[12px] text-secondary/35 leading-[1.5]">
                      {problem.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
