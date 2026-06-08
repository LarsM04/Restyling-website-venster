import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[220px]">
      {/* Left — orange */}
      <div
        className="flex flex-col justify-center px-8 py-12 md:px-14"
        style={{ background: 'var(--venster-orange)' }}
      >
        <p
          className="text-white text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Nieuwsbrief
        </p>
        <h2
          className="text-white text-3xl md:text-4xl leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          Blijf op de hoogte
        </h2>
        <p className="text-white/80 mt-3 text-sm max-w-xs">
          Ontvang nieuws over cursussen, events en studentenwerk rechtstreeks in je inbox.
        </p>
      </div>

      {/* Right — pink */}
      <div
        className="flex flex-col justify-center px-8 py-12 md:px-14"
        style={{ background: 'var(--venster-pink)' }}
      >
        {submitted ? (
          <div className="text-center">
            <p
              className="text-2xl"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-blue)' }}
            >
              Super, bedankt! 🎨
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--venster-charcoal)' }}>
              We sturen je snel het eerste nieuws.
            </p>
          </div>
        ) : (
          <>
            <label
              htmlFor="newsletter-email"
              className="text-sm mb-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--venster-charcoal)' }}
            >
              Jouw e-mailadres
            </label>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@voorbeeld.nl"
                required
                className="flex-1 px-4 py-3 rounded-lg text-sm outline-none border-2 border-transparent focus:border-blue-500 transition-all"
                style={{ background: 'rgba(255,255,255,0.7)', color: 'var(--venster-charcoal)' }}
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-lg text-white flex items-center gap-1 transition-all hover:scale-105 active:scale-95"
                style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="text-xs mt-3" style={{ color: 'rgba(45,45,45,0.6)' }}>
              Je kunt je altijd afmelden. Geen spam, beloofd.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
