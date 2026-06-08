import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

const months = [
  'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
  'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
];

type Event = {
  id: number;
  day: number;
  month: number;
  year: number;
  title: string;
  type: string;
  location: string;
  time: string;
  free: boolean;
};

const events: Event[] = [
  { id: 1, day: 13, month: 8, year: 2024, title: 'Open Atelier Dag', type: 'Event', location: 'Venster Academy, Amsterdam', time: '10:00 – 16:00', free: true },
  { id: 2, day: 19, month: 8, year: 2024, title: 'Webinar: Urban Sketching als meditatie', type: 'Webinar', location: 'Online', time: '20:00 – 21:30', free: false },
  { id: 3, day: 27, month: 8, year: 2024, title: 'Masterclass Kleur & Licht', type: 'Masterclass', location: 'Studio Noord, Amsterdam', time: '10:00 – 17:00', free: false },
  { id: 4, day: 5, month: 9, year: 2024, title: 'Introductiedag Opleidingen', type: 'Introductie', location: 'Venster Academy, Amsterdam', time: '13:00 – 17:00', free: true },
  { id: 5, day: 13, month: 9, year: 2024, title: 'Vernissage Tentoonstelling Venster Open 2024', type: 'Tentoonstelling', location: 'Keizersgracht 482, Amsterdam', time: '17:00 – 21:00', free: true },
  { id: 6, day: 14, month: 9, year: 2024, title: 'Tentoonstelling: Venster Open 2024', type: 'Tentoonstelling', location: 'Keizersgracht 482, Amsterdam', time: '11:00 – 18:00', free: true },
  { id: 7, day: 23, month: 9, year: 2024, title: 'Webinar: Narratief tekenen voor beginners', type: 'Webinar', location: 'Online', time: '20:00 – 21:30', free: false },
  { id: 8, day: 3, month: 10, year: 2024, title: 'Start cursus Narratief Tekenen', type: 'Cursus', location: 'Venster Academy, Amsterdam', time: '19:00 – 21:30', free: false },
  { id: 9, day: 17, month: 10, year: 2024, title: 'Gastlezing: Editoriaal illustreren', type: 'Lezing', location: 'Venster Academy, Amsterdam', time: '20:00 – 22:00', free: true },
];

const typeColors: Record<string, string> = {
  Event: 'var(--venster-blue)',
  Webinar: 'var(--venster-mint)',
  Masterclass: 'var(--venster-orange)',
  Introductie: 'var(--venster-pink)',
  Tentoonstelling: '#9B59B6',
  Cursus: 'var(--venster-orange)',
  Lezing: 'var(--venster-charcoal)',
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="55" fill="var(--muted)" />
      <ellipse cx="60" cy="60" rx="32" ry="22" fill="var(--venster-orange)" opacity="0.3" />
      <circle cx="60" cy="60" r="14" fill="var(--venster-orange)" opacity="0.6" />
      <circle cx="65" cy="55" r="5" fill="white" opacity="0.9" />
      <rect x="40" y="85" width="40" height="4" rx="2" fill="var(--venster-blue)" opacity="0.3" />
      <rect x="50" y="93" width="20" height="4" rx="2" fill="var(--venster-blue)" opacity="0.2" />
    </svg>
    <p
      className="mt-6 text-xl"
      style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
    >
      Geen events deze maand
    </p>
    <p className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
      Kijk een andere maand of schrijf je in voor de nieuwsbrief om niets te missen.
    </p>
  </div>
);

export function AgendaPage() {
  const now = new Date();
  const [monthIndex, setMonthIndex] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  const prevMonth = () => {
    if (monthIndex === 0) { setMonthIndex(11); setYear((y) => y - 1); }
    else setMonthIndex((m) => m - 1);
  };
  const nextMonth = () => {
    if (monthIndex === 11) { setMonthIndex(0); setYear((y) => y + 1); }
    else setMonthIndex((m) => m + 1);
  };

  const monthEvents = events
    .filter((e) => e.month - 1 === monthIndex && e.year === year)
    .sort((a, b) => a.day - b.day);

  return (
    <div>
      {/* Blue hero header */}
      <section style={{ background: 'var(--venster-blue)' }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Agenda
          </p>
          <h1
            className="text-white text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
          >
            Wat staat er op de planning?
          </h1>
          <p className="text-white/70 mt-3 max-w-lg">
            Workshops, webinars, open dagen en tentoonstellingen — alles wat er bij Venster speelt.
          </p>
        </div>
      </section>

      {/* Month nav */}
      <div className="px-6 py-6 border-b" style={{ borderColor: 'var(--border)', background: 'white' }}>
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={prevMonth}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'var(--muted)' }}
            aria-label="Vorige maand"
          >
            <ChevronLeft size={18} />
          </button>
          <h2
            className="text-2xl min-w-48 text-center"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
          >
            {months[monthIndex]} {year}
          </h2>
          <button
            onClick={nextMonth}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'var(--muted)' }}
            aria-label="Volgende maand"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Events list */}
      <section className="py-12 px-6 max-w-7xl mx-auto min-h-96">
        {monthEvents.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-4">
            {monthEvents.map((event) => (
              <div
                key={event.id}
                className="flex gap-0 overflow-hidden bg-white transition-all hover:shadow-md"
                style={{ borderRadius: '1rem' }}
              >
                {/* Orange date block */}
                <div
                  className="flex flex-col items-center justify-center px-5 py-5 shrink-0 min-w-20"
                  style={{ background: 'var(--venster-orange)' }}
                >
                  <span
                    className="text-white leading-none"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2rem' }}
                  >
                    {event.day}
                  </span>
                  <span
                    className="text-white/80 text-xs mt-0.5 uppercase"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    {months[monthIndex].slice(0, 3)}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-3 p-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className="px-2 py-0.5 text-xs rounded-full text-white"
                        style={{
                          background: typeColors[event.type] || 'var(--venster-blue)',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                        }}
                      >
                        {event.type}
                      </span>
                      {event.free && (
                        <span
                          className="px-2 py-0.5 text-xs rounded-full"
                          style={{
                            background: 'var(--venster-mint)',
                            color: 'var(--venster-charcoal)',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 800,
                          }}
                        >
                          Gratis
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-base mb-1.5"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
                    >
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {event.time}
                      </span>
                    </div>
                  </div>
                  <button
                    className="shrink-0 px-5 py-2.5 rounded-lg text-white text-sm transition-all hover:scale-105 whitespace-nowrap"
                    style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    Meer info
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
