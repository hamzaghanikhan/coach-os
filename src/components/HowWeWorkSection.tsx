import { useRef, useState, useEffect } from 'react';
import {
  Phone,
  Compass,
  Clapperboard,
  Rocket,
  HeadphonesIcon,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: Phone,
    label: 'Discovery',
    title: 'We Talk',
    description:
      'We start with a simple call. You tell us how you currently coach, who you train, and what you want to build. No prep needed.',
    visual: Phone,
  },
  {
    icon: Compass,
    label: 'Planning',
    title: 'We Decide What to Build',
    description:
      'Together, we decide what goes online first, what stays in the gym, and which plan makes the most sense for you. No overbuilding. No unnecessary features.',
    visual: Compass,
  },
  {
    icon: Clapperboard,
    label: 'Production',
    title: 'We Create It',
    description:
      'We help you turn what you already know into digital content. We shoot and edit videos, set up your website, programs, and tools. Everything is built under your name and brand.',
    visual: Clapperboard,
  },
  {
    icon: Rocket,
    label: 'Launch',
    title: 'We Launch',
    description:
      'Once everything is ready, we go live. Your website is live, your programs are accessible, and you can start inviting clients and followers. Nothing half-built. Nothing confusing.',
    visual: Rocket,
  },
  {
    icon: HeadphonesIcon,
    label: 'Support',
    title: 'We Support You',
    description:
      'After launch, we stay around to fix issues, answer questions, and help you adjust things as you start using it.',
    visual: HeadphonesIcon,
  },
];

export default function HowWeWorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const cardWidth = el.clientWidth < 640 ? el.clientWidth - 40 : 340;
    const gap = 20;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, steps.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const isMobile = window.innerWidth < 640;
    const cardWidth = isMobile ? el.clientWidth - 40 : 340;
    el.scrollBy({
      left: direction === 'right' ? cardWidth + 20 : -(cardWidth + 20),
      behavior: 'smooth',
    });
  };

  return (
    <section id="how-we-work" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.03),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 lg:gap-20 mb-10 md:mb-16 lg:mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-5 h-px bg-primary/60" />
                How We Work
              </p>
              <h2 className="font-display text-[clamp(2rem,7.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-white max-w-[560px] text-balance">
                From idea to launch in five steps
              </h2>
            </div>
            <p className="text-text-secondary text-[15px] md:text-lg leading-[1.7] max-w-[440px] lg:pt-10">
              We handle the entire build process so you can focus on what you do best &mdash; coaching.
              Here's how we bring your online presence to life.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide pl-5 md:pl-12 lg:pl-20"
            style={{ paddingRight: '20px' }}
          >
            {steps.map((step, index) => {
              const VisualIcon = step.visual;
              return (
                <div
                  key={step.title}
                  className="group flex-shrink-0 w-[calc(100vw-40px)] sm:w-[300px] md:w-[340px] rounded-2xl overflow-hidden snap-start card-shine transition-all duration-500 border border-white/[0.05] hover:border-white/[0.1]"
                  style={{
                    background: 'linear-gradient(180deg, #1C1E24 0%, #121317 100%)',
                    boxShadow: '0 2px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="relative h-[160px] md:h-[180px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_60%,rgba(255,255,255,0.03),transparent)]" />
                    <VisualIcon
                      className="w-14 h-14 md:w-16 md:h-16 text-white/[0.07] group-hover:text-white/[0.11] transition-all duration-500 group-hover:scale-110 transform"
                      strokeWidth={1}
                    />
                    <div className="absolute top-4 md:top-5 left-4 md:left-5 w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 pt-0 relative">
                    <div className="flex items-center gap-2 mb-3">
                      <step.icon className="w-3.5 h-3.5 text-primary/70" />
                      <p className="text-[11px] uppercase tracking-[0.15em] text-secondary/70 font-medium">
                        {step.label}
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <h3 className="font-heading text-[16px] md:text-lg font-semibold text-white leading-snug">
                        {step.title}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/[0.05] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-secondary/50 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>

                    <p className="mt-3 md:mt-4 text-text-secondary/70 text-[13px] md:text-[13.5px] leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-2 w-12 md:w-20 bg-gradient-to-r from-surface-1 to-transparent pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-2 w-12 md:w-20 bg-gradient-to-l from-surface-1 to-transparent pointer-events-none" />
          )}
        </div>

        <div className="section-container mt-8 md:mt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-5 h-1.5 bg-white/50'
                      : 'w-1.5 h-1.5 bg-white/[0.12]'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/[0.08] bg-surface-2/40 flex items-center justify-center text-secondary hover:text-white hover:border-white/20 hover:bg-surface-2 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/[0.08] bg-surface-2/40 flex items-center justify-center text-secondary hover:text-white hover:border-white/20 hover:bg-surface-2 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
