import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] rounded-full bg-primary/[0.04] blur-[80px] md:blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-primary/[0.02] blur-[60px] md:blur-[80px]" />
      </div>

      <div className="relative z-10 section-container text-center">
        <h2 className="font-display text-[clamp(2.2rem,9vw,5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white text-balance max-w-[700px] mx-auto">
          Stop trading time for money
        </h2>

        <div className="mt-8 md:mt-12">
          <a
            href="mailto:info@aekstudio.ae"
            className="btn-primary text-[14px] md:text-base px-10 md:px-14 py-4 md:py-5"
          >
            Get Started
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>

        <p className="mt-6 md:mt-8 text-sm text-secondary/70 tracking-wide">
          Start with one income layer. Add more when ready.
        </p>
      </div>
    </section>
  );
}
