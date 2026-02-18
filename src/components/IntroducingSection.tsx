import { Globe, Video, Smartphone, Check } from 'lucide-react';

const coupleImg = 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1600';
const closeupImg = 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1600';
const womanImg = 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1600';
const trxImg = 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600';

const offerings = [
  {
    icon: Globe,
    title: 'Start Your Online Presence',
    description:
      'We set up your own website where people can start working with you instantly.',
    bullets: [
      'Free resources',
      'Simple fitness tools',
      'Mini-programs or free online sessions',
    ],
    closing:
      'All under your name, on your website. This gives interested people a low-commitment way to enter your world. Once they experience your value, buying your paid coaching becomes an easy next step \u2014 not a hard sell.',
    image: coupleImg,
  },
  {
    icon: Video,
    title: 'Launch Hybrid Training',
    description:
      'We help you turn what you already teach into a proper online program \u2014 recorded once, available all the time. We shoot the content with you, edit it cleanly, and host it on your website so clients can access it anytime.',
    bullets: [
      'People who start with your free content and want more',
      'Personal training clients who move, travel, or get busy',
      'Clients who want guidance without full in-person training',
    ],
    closing:
      "You can also run online group sessions when you want, without changing how you coach in the gym. Your coaching doesn't stop when gym sessions stop.",
    image: womanImg,
  },
  {
    icon: Smartphone,
    title: 'Launch Your Own App & Services',
    description:
      'We build a custom app under your brand, so your coaching feels structured, premium, and professional.',
    bullets: [
      'Your own exercise library',
      'Progress tracking & photos',
      'Tasks and habit coaching',
      'Food journals & macro tracking',
    ],
    closing:
      'This lets you deliver better coaching, increase perceived value, and confidently charge more \u2014 without adding sessions.',
    image: trxImg,
  },
];

export default function IntroducingSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.03),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative section-container">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-24 mb-16 md:mb-24 lg:mb-32">
          <div className="lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 md:mb-6">
              The Solution
            </p>
            <h2 className="font-display text-[clamp(2rem,7.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-white text-balance">
              Introducing CoachOS
            </h2>
            <p className="mt-6 md:mt-8 text-[15px] md:text-lg text-text-secondary leading-[1.7] max-w-[500px]">
              CoachOS helps you{' '}
              <span className="text-white font-medium">turn your coaching into products</span>, so you
              can earn from the same knowledge{' '}
              <span className="text-white font-medium">
                without spending more hours in the gym
              </span>
              .
            </p>
            <p className="mt-4 md:mt-5 text-text-secondary leading-[1.7] max-w-[500px] text-[15px] md:text-base">
              We handle everything end-to-end so you can focus on coaching &mdash; not tech, filming, or
              setup.
            </p>
          </div>

          <div className="lg:w-1/2 flex items-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              <img
                src={closeupImg}
                alt="Coach working with client"
                className="w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-1/80 via-surface-1/20 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="inline-flex items-center gap-2 bg-surface-1/80 backdrop-blur-md border border-white/[0.06] rounded-lg px-3 md:px-4 py-2 md:py-2.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[13px] md:text-sm text-white/80 font-medium">Your brand. Your platform.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 md:space-y-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="group bg-surface-2/40 border border-white/[0.04] rounded-2xl overflow-hidden hover:border-white/[0.08] transition-all duration-500"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-[45%] relative h-[200px] sm:h-[240px] lg:h-auto lg:min-h-[300px] overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-[1.03] transform absolute inset-0"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent via-surface-2/40 to-surface-2/90`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-2/80 lg:from-transparent to-transparent" />
                </div>

                <div className="lg:w-[55%] p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 md:mb-5">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center shrink-0">
                      <offering.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-[18px] md:text-xl lg:text-2xl font-semibold text-white leading-snug">
                      {offering.title}
                    </h3>
                  </div>

                  <p className="text-text-secondary text-[14px] md:text-base leading-[1.7] mb-5 md:mb-6">
                    {offering.description}
                  </p>

                  <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                    {offering.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2.5 md:gap-3">
                        <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/[0.1] flex items-center justify-center mt-0.5">
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                        </div>
                        <span className="text-text-secondary text-[13px] md:text-[15px]">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-text-secondary/70 text-[13px] md:text-sm leading-[1.7]">
                    {offering.closing}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
