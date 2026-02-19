import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-surface-2 border-t border-white/[0.04]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="section-container py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <span className="text-background font-bold text-[10px]">C</span>
              </div>
              <span className="font-heading text-base font-semibold text-white/90 tracking-tight">
                CoachOS
              </span>
            </div>
            <p className="text-[13px] text-secondary/40 leading-[1.7] max-w-[240px]">
              We build the digital infrastructure for fitness coaches to earn beyond the gym.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/30 font-medium mb-4">
              Services
            </p>
            <div className="space-y-2.5 md:space-y-2.5">
              <Link to="/services" className="block text-[13px] text-secondary/50 hover:text-white transition-colors duration-200">
                All Services
              </Link>
              <Link to="/services/media" className="block text-[13px] text-secondary/50 hover:text-white transition-colors duration-200">
                Media
              </Link>
              <Link to="/services/challenges" className="block text-[13px] text-secondary/50 hover:text-white transition-colors duration-200">
                Challenges
              </Link>
              <Link to="/services/audit" className="block text-[13px] text-secondary/50 hover:text-white transition-colors duration-200">
                Audit &amp; Custom
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-secondary/30 font-medium mb-4">
              Company
            </p>
            <div className="space-y-2.5">
              <Link to="/" className="block text-[13px] text-secondary/50 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <a href="mailto:info@aekstudio.ae" className="block text-[13px] text-secondary/50 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-5 md:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
          <p className="text-[12px] text-secondary/30">All Rights Reserved 2026</p>
          <p className="text-[12px] text-secondary/30">
            A Product by{' '}
            <a
              href="https://aekstudio.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary/80 hover:text-primary transition-colors duration-300"
            >
              Aek Studio LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
