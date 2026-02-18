import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Media', href: '/services/media' },
  { label: 'Challenges', href: '/services/challenges' },
  { label: 'Audit & Custom', href: '/services/audit' },
];

export default function InnerNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-background font-bold text-[10px]">C</span>
          </div>
          <span className="text-[15px] font-semibold text-white/90 tracking-[-0.01em]">
            CoachOS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-white bg-white/[0.06]'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="mailto:info@aekstudio.ae"
            className="inline-flex items-center gap-1.5 h-8 px-4 bg-white text-background text-[12px] font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <button
          className="md:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/[0.05] px-6 py-5 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                  isActive ? 'text-white bg-white/[0.06]' : 'text-white/45 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/[0.05] mt-3">
            <a
              href="mailto:info@aekstudio.ae"
              className="flex items-center justify-center gap-1.5 h-9 bg-white text-background text-[13px] font-semibold rounded-lg"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
