import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trxImg = 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-background min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src={trxImg}
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <nav className="relative z-30 w-full">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between h-14 md:h-16">
          <span className="text-[15px] font-semibold text-white/90 tracking-[-0.01em]">
            CoachOS
          </span>
          <div className="flex items-center gap-3">
            <Link
              to="/services"
              className="text-[13px] font-medium text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Services
            </Link>
            <a
              href="mailto:info@aekstudio.ae"
              className="inline-flex items-center gap-1.5 h-8 px-3.5 bg-white text-background text-[12px] font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-16 md:pt-36 lg:pt-44">
        <div className="max-w-[860px] mx-auto w-full">
          <h1 className="text-[clamp(2.1rem,8.5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-white animate-fade-in-up">
            Turn your coaching into products that earn without you
          </h1>

          <p className="mt-5 text-[15px] md:text-[18px] text-white/45 leading-[1.65] max-w-[500px] mx-auto animate-fade-in-up-delay-1 px-1">
            CoachOS helps fitness coaches build sellable digital products, so your income doesn't stop when you leave the gym.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up-delay-2">
            <a
              href="#how-we-work"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-6 bg-white text-[#0B0C10] text-[14px] font-semibold rounded-xl hover:bg-white/90 transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#income-trap"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 h-11 px-6 border border-white/[0.1] rounded-xl text-[14px] text-white/50 hover:text-white/70 hover:border-white/20 transition-all duration-200"
            >
              Our Mission
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-12 md:mt-24 animate-fade-in-up-delay-3 px-4 md:px-0">
        <div className="relative max-w-[1100px] mx-auto md:px-10">
          <div className="relative w-full" style={{ perspective: '2000px' }}>
            <div
              className="relative mx-auto"
              style={{
                transform: 'rotateX(8deg)',
                transformOrigin: 'center top',
              }}
            >
              <div className="relative overflow-hidden rounded-t-xl bg-[#13141a] border border-white/[0.06] border-b-0">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0e14] border-b border-white/[0.04]">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="ml-4 h-5 w-32 md:w-48 rounded bg-white/[0.04]" />
                </div>

                <div className="flex">
                  <div className="w-44 shrink-0 border-r border-white/[0.04] p-4 hidden md:block">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-primary/20" />
                        <div className="h-3 w-20 rounded bg-white/[0.08]" />
                      </div>
                      <div className="ml-2 space-y-2.5 pt-2">
                        {['Dashboard', 'Programs', 'Clients', 'Analytics', 'Content'].map((label) => (
                          <div key={label} className="flex items-center gap-2.5">
                            <div className="w-3.5 h-3.5 rounded bg-white/[0.05]" />
                            <span className="text-[11px] text-white/25">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 md:p-6 min-h-[260px] md:min-h-[380px]">
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-3.5 w-24 rounded bg-white/[0.07]" />
                      <div className="flex gap-2">
                        <div className="h-6 w-12 rounded bg-white/[0.04]" />
                        <div className="h-6 w-16 rounded bg-primary/15" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
                      {[
                        { label: 'Active Clients', value: '47' },
                        { label: 'Revenue', value: '12.4K' },
                        { label: 'Programs', value: '8' },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5 md:p-3"
                        >
                          <p className="text-[9px] md:text-[10px] text-white/25 mb-1">{stat.label}</p>
                          <p className="text-[14px] md:text-[16px] font-semibold text-white/60">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1.5 md:space-y-2">
                      {[
                        { name: 'Sarah M.', prog: 'Strength 12-Week', status: 'Active', w: '70%' },
                        { name: 'Ahmed K.', prog: 'Fat Loss Pro', status: 'Active', w: '45%' },
                        { name: 'Lisa R.', prog: 'Hybrid Coaching', status: 'Review', w: '90%' },
                        { name: 'James T.', prog: 'Nutrition Plan', status: 'Active', w: '30%' },
                      ].map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center gap-2 md:gap-3 bg-white/[0.02] border border-white/[0.03] rounded-lg px-3 py-2"
                        >
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/[0.06] shrink-0" />
                          <span className="text-[10px] md:text-[11px] text-white/40 w-14 md:w-20 shrink-0">{row.name}</span>
                          <span className="text-[10px] md:text-[11px] text-white/25 flex-1 truncate">{row.prog}</span>
                          <div className="w-16 h-1.5 rounded-full bg-white/[0.05] overflow-hidden hidden sm:block">
                            <div
                              className="h-full rounded-full bg-primary/30"
                              style={{ width: row.w }}
                            />
                          </div>
                          <span className="text-[9px] md:text-[10px] text-white/20 shrink-0">{row.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom, transparent 0%, transparent 30%, #0B0C10 95%),
                linear-gradient(to right, #0B0C10 0%, transparent 12%, transparent 88%, #0B0C10 100%),
                linear-gradient(to bottom, #0B0C10 0%, transparent 8%)
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
