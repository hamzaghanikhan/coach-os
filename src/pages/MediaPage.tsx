import { ArrowRight, Play, Image, Video, Layers, Palette, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import InnerNav from '../components/InnerNav';
import Footer from '../components/Footer';
const womanImg = 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1600';

const deliverables = [
  {
    icon: Play,
    title: 'Short-form Reels',
    detail: 'Up to 30 reels per package',
    description:
      'Shot, scripted, and edited — hooks, captions, subtitles, and music handled. We produce reels that stop the scroll on Instagram and TikTok.',
  },
  {
    icon: Image,
    title: 'High-res Photography',
    detail: '200+ edited photos per shoot',
    description:
      'Gym and lifestyle sessions. Headshots, action shots, transformation content, and branded visuals. Everything retouched and delivered print-ready.',
  },
  {
    icon: Video,
    title: 'Course Video Production',
    detail: 'Full modules, multi-camera',
    description:
      'We shoot, light, and edit your entire online course — structured chapters, B-roll, lower-thirds, and exported in the exact format your platform needs.',
  },
  {
    icon: Layers,
    title: 'Graphic Design',
    detail: 'Unlimited revisions included',
    description:
      'Story templates, highlight covers, lead magnets, ebook layouts, social graphics, and pricing sheets — all matched to your brand identity.',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    detail: 'Complete brand kit',
    description:
      'Logo, color palette, font system, and a brand guidelines document. We build a visual identity your audience recognizes and trusts across every platform.',
  },
  {
    icon: Star,
    title: 'Testimonial Content',
    detail: 'Client success stories',
    description:
      'Structured client testimonial shoots and case study videos. High-quality social proof that builds credibility and converts better than anything else.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Strategy call',
    description:
      "We understand your brand, content goals, and audience. We plan the shoot day, content calendar, and every output together before we show up.",
  },
  {
    step: '02',
    title: 'Production day',
    description:
      "We come to your gym or chosen location with full production setup. One shoot day — reels, photos, course segments, and B-roll. Months of content in a single session.",
  },
  {
    step: '03',
    title: 'Edit & deliver',
    description:
      "Everything edited, captioned, formatted, and organized. Delivered within 5–7 business days, sorted by use case and ready to post or upload.",
  },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <InnerNav />

      <main>
        <section className="relative pt-28 md:pt-44 pb-16 md:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-5%,rgba(255,255,255,0.04),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden hidden lg:block">
            <img
              src={womanImg}
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.12]"
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
                  Media
                </p>
                <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] leading-[1.06] tracking-[-0.03em] text-white">
                  Look like the
                  <br />
                  expert you are
                </h1>
              </div>
              <div className="lg:pt-4">
                <p className="text-[15px] md:text-[17px] text-text-secondary leading-[1.7] max-w-[480px]">
                  Most coaches are excellent at what they do — but their content doesn't reflect
                  that. Grainy videos and inconsistent photos make great coaches look amateur. We
                  fix that with one focused production day that gives you weeks of high-quality
                  content, done entirely for you.
                </p>
                <a href="mailto:info@aekstudio.ae" className="btn-primary mt-7 md:mt-8 inline-flex h-11 px-6 text-[14px]">
                  Book a shoot
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-surface-1" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-16">
              <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                What we produce
              </h2>
              <p className="text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] lg:pt-3">
                Every deliverable serves a specific role in your business — from growing your
                audience to selling your programs. Nothing produced for the sake of it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-surface-2/50 border border-white/[0.05] rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-white/[0.1]"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-4 md:mb-5">
                      <Icon className="w-4 h-4 text-primary/70" />
                    </div>
                    <h3 className="font-heading text-[15px] md:text-[16px] font-semibold text-white tracking-[-0.01em] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-primary/60 font-medium mb-2.5 md:mb-3">{item.detail}</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-start mb-10 md:mb-14">
              <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                How it works
              </h2>
              <p className="text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] lg:pt-3">
                Three steps from booking to having months of content ready to go — with zero
                guesswork on your end.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-surface-1 border border-white/[0.05] rounded-2xl p-6 md:p-7"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
                >
                  <p className="text-[11px] text-secondary/30 font-medium mb-4 md:mb-5">{step.step}</p>
                  <h3 className="font-heading text-[17px] md:text-[18px] font-semibold text-white tracking-[-0.01em] mb-2.5 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[13.5px] text-text-secondary/70 leading-[1.65]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-surface-1" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
              <div>
                <h2 className="font-display text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                  Ready to book
                  <br />
                  your shoot?
                </h2>
                <p className="mt-4 md:mt-5 text-[14px] md:text-[15px] text-text-secondary/80 leading-[1.7] max-w-[400px]">
                  Send us a message and we'll schedule a 20-min strategy call to plan your
                  production day.
                </p>
                <div className="mt-6 md:mt-8 space-y-3">
                  {[
                    'Reels built for your audience and niche',
                    'Course-quality video on every shoot',
                    'Content you own completely, forever',
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
                  Email us to book your shoot. We'll schedule a 20-min strategy call to plan your production day.
                </p>
                <a
                  href="mailto:info@aekstudio.ae"
                  className="btn-primary w-full justify-center h-11 text-[14px] font-semibold"
                >
                  Book a shoot
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
