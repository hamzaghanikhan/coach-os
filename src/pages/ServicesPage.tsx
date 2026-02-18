import { ArrowRight, Camera, Trophy, Search, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import InnerNav from '../components/InnerNav';
import Footer from '../components/Footer';
const coupleImg = 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1600';

const services = [
  {
    icon: Camera,
    label: 'Media',
    href: '/services/media',
    headline: 'Look like the expert you are',
    description:
      'High-quality reels, photos, and course video production — done for you. One shoot day gives you weeks of content your audience will actually watch.',
    deliverables: [
      'Instagram & TikTok Reels',
      'High-res photography sessions',
      'Course video production',
      'Graphic design & branding assets',
    ],
  },
  {
    icon: Trophy,
    label: 'Challenges',
    href: '/services/challenges',
    headline: 'Turn followers into paying clients',
    description:
      'We build the tech, design the curriculum, and execute an online challenge that grows your community and converts participants into your paid programs.',
    deliverables: [
      'Challenge platform & tech setup',
      'Full curriculum design',
      'Ramadan challenge programs',
      'Community & conversion tools',
    ],
  },
  {
    icon: Search,
    label: 'Audit & Custom',
    href: '/services/audit',
    headline: 'A plan built around where you are',
    description:
      "We sit down with you, map exactly what's working and what isn't, then build and execute a custom roadmap — whether that's tech, marketing, content, or all three.",
    deliverables: [
      'Full business & digital audit',
      'Custom tech stack build',
      'Marketing strategy & execution',
      'Ongoing support & iteration',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <InnerNav />

      <main>
        <section className="relative pt-28 md:pt-44 pb-16 md:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-5%,rgba(255,255,255,0.04),transparent)]" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden hidden lg:block">
            <img
              src={coupleImg}
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-20 lg:mb-24">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 md:mb-6">
                  What we do
                </p>
                <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] leading-[1.06] tracking-[-0.03em] text-white">
                  Everything your
                  <br />
                  brand needs to scale
                </h1>
              </div>
              <div className="lg:pt-4">
                <p className="text-[15px] md:text-[17px] text-text-secondary leading-[1.7] max-w-[480px]">
                  Three focused services. Each one built to unlock a specific part of your growth
                  — from how you look online, to how you acquire and convert an audience, to a
                  fully custom strategy for where you are right now.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="group relative bg-surface-1 border border-white/[0.05] hover:border-white/[0.12] rounded-2xl p-7 flex flex-col transition-all duration-300 card-shine"
                    style={{
                      boxShadow: '0 2px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary/70" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/50 font-medium mb-2">
                      {service.label}
                    </p>
                    <h2 className="font-heading text-[19px] font-semibold text-white leading-snug tracking-[-0.02em] mb-3">
                      {service.headline}
                    </h2>
                    <p className="text-[13.5px] text-text-secondary/70 leading-[1.65] mb-7 flex-1">
                      {service.description}
                    </p>

                    <div className="pt-5 border-t border-white/[0.05] space-y-2.5">
                      {service.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2.5">
                          <Check className="w-3 h-3 text-primary/40 shrink-0" />
                          <span className="text-[12.5px] text-secondary/50">{d}</span>
                        </div>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-14 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-surface-1" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-center">
              <div>
                <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.2rem)] leading-[1.1] tracking-[-0.03em] text-white">
                  Not sure which
                  <br />
                  service you need?
                </h2>
                <p className="mt-4 md:mt-5 text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] max-w-[440px]">
                  Book an audit. We'll look at your current setup, find what's holding you
                  back, and tell you exactly what to focus on first. No pressure, no package push.
                </p>
              </div>
              <div className="flex items-center lg:justify-end">
                <Link to="/services/audit" className="btn-primary h-11 px-6 text-[14px]">
                  Book an audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
