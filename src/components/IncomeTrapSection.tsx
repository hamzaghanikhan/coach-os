import { Clock, RefreshCw, DollarSign } from 'lucide-react';

const traps = [
  {
    icon: Clock,
    title: 'Your income is capped by your hours',
    description:
      'Every dirham you earn requires you to physically be there. When you stop coaching, the income stops. There is no way to grow without adding more hours.',
  },
  {
    icon: RefreshCw,
    title: 'You restart every month',
    description:
      'No recurring revenue. No passive income. Each month you start from zero, chasing the same number of clients just to stay in place.',
  },
  {
    icon: DollarSign,
    title: 'You are the product',
    description:
      'Your knowledge, your time, your energy. All of it is consumed one session at a time. There is nothing left over that earns without you in the room.',
  },
];

export default function IncomeTrapSection() {
  return (
    <section id="income-trap" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-surface-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative section-container">
        <div className="max-w-[640px] mb-10 md:mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 md:mb-6">
            The Income Trap
          </p>
          <h2 className="font-display text-[clamp(2rem,7.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-white text-balance">
            Why most coaches never scale
          </h2>
          <p className="mt-4 md:mt-6 text-[15px] md:text-lg text-text-secondary leading-[1.7]">
            Fitness coaching is one of the few professions where working harder does not mean earning more. There is a structural ceiling, and most coaches hit it within a few years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {traps.map((trap) => {
            const Icon = trap.icon;
            return (
              <div
                key={trap.title}
                className="group relative bg-surface-1 border border-white/[0.05] hover:border-white/[0.1] rounded-2xl p-6 md:p-7 transition-all duration-300"
                style={{
                  boxShadow: '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.03)',
                }}
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-4 md:mb-5 group-hover:border-white/[0.09] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white/35 group-hover:text-white/55 transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-[16px] md:text-[17px] font-semibold text-white leading-snug tracking-[-0.01em] mb-3">
                  {trap.title}
                </h3>
                <p className="text-text-secondary/75 text-[13px] md:text-[14px] leading-[1.65]">
                  {trap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
