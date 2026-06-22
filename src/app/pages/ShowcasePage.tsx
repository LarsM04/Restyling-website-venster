import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ZoomIn, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const years = ['Alle jaren', '2024', '2023', '2022', '2021'];

const works = [
  { id: 1, name: 'Lena Bakker', project: 'Stadslandschappen', year: '2024', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=650&fit=crop&auto=format' },
  { id: 2, name: 'Daan Visser', project: 'Kinderboekillustratie', year: '2024', img: 'https://images.unsplash.com/photo-1547826039-bdbee69ff3de?w=500&h=400&fit=crop&auto=format' },
  { id: 3, name: 'Mila de Vries', project: 'Narratief portret', year: '2023', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=560&fit=crop&auto=format' },
  { id: 4, name: 'Sven Hoekstra', project: 'Abstracte reeks', year: '2023', img: 'https://images.unsplash.com/photo-1556139966-56785f998a76?w=500&h=400&fit=crop&auto=format' },
  { id: 5, name: 'Anouk Smits', project: 'Grafisch verhaal', year: '2023', img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&h=620&fit=crop&auto=format' },
  { id: 6, name: 'Ruben Janssen', project: 'Botanische atlas', year: '2022', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=380&fit=crop&auto=format' },
  { id: 7, name: 'Fleur van Dijk', project: 'Dagboek in kleur', year: '2022', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=580&fit=crop&auto=format' },
  { id: 8, name: 'Boris Meijer', project: 'Urban sketching', year: '2021', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&h=440&fit=crop&auto=format' },
  { id: 9, name: 'Tessa Hendriks', project: 'Zeildoek & gouache', year: '2024', img: 'https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?w=500&h=500&fit=crop&auto=format' },
  { id: 10, name: 'Pieter Koops', project: 'Zeeën van inkt', year: '2022', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=360&fit=crop&auto=format' },
];

type Work = typeof works[0];

function WorkCard({ work, onOpen }: { work: Work; onOpen: (w: Work) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: '1rem' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(work)}
    >
      <img
        src={work.img}
        alt={`${work.name} — ${work.project}`}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ display: 'block' }}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'rgba(20,71,240,0.75)' }}
      >
        <ZoomIn size={32} className="text-white mb-2" />
        <p className="text-white text-sm" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>
          {work.name}
        </p>
        <p className="text-white/80 text-xs">{work.project}</p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
      >
        <p className="text-white/90 text-xs" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          {work.name}
        </p>
      </div>
    </div>
  );
}

function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full overflow-hidden"
        style={{ borderRadius: '1.5rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={work.img}
          alt={work.name}
          className="w-full object-cover max-h-80"
        />
        <div className="p-6">
          <h3
            className="text-2xl mb-1"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
          >
            {work.name}
          </h3>
          <p
            className="text-sm mb-1"
            style={{ color: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            {work.project}
          </p>
          <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Afstudeerwerk {work.year}</p>
          <button
            onClick={onClose}
            className="mt-4 px-5 py-2 rounded-lg text-white text-sm"
            style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
}

export function ShowcasePage() {
  const [selectedYear, setSelectedYear] = useState('Alle jaren');
  const [openWork, setOpenWork] = useState<Work | null>(null);

  const filtered = selectedYear === 'Alle jaren'
    ? works
    : works.filter((w) => w.year === selectedYear);

  return (
    <div>
      {/* Intro */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Alumni Showcase
            </p>
            <h1
              className="text-5xl md:text-6xl leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Werk dat spreekt
            </h1>
            <p className="mt-4 text-base leading-relaxed max-w-sm" style={{ color: '#555' }}>
              Een selectie van afstudeerwerken en projecten van onze studenten en alumni. Elk beeld vertelt een verhaal.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src="/assets/Klant huisstijl/wit-3c.png" alt="Venster Academy" style={{ height: '24px', width: 'auto' }} />
              <Link
                to="/trajecten"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Word een van onze alumni <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div
            className="p-6"
            style={{ background: 'var(--venster-pink)', borderRadius: '1rem' }}
          >
            <p
              className="text-sm mb-3"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Tentoonstelling 2024
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#555' }}>
              <strong>Venster Open</strong> — de jaarlijkse afstudeertentoonstelling<br />
              📍 Keizersgracht 482, Amsterdam<br />
              📅 14–28 september 2024<br />
              🕐 di–za 11:00–18:00
            </p>
            <p className="text-xs" style={{ color: '#888' }}>Gratis toegang · Vernissage 13 sep om 17:00</p>
          </div>
        </div>
      </section>

      {/* Year filter */}
      <div className="px-6 max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className="px-4 py-2 rounded-full text-sm transition-all"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                background: selectedYear === y ? 'var(--venster-blue)' : 'var(--muted)',
                color: selectedYear === y ? 'white' : 'var(--venster-charcoal)',
              }}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="px-6 max-w-7xl mx-auto pb-24">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 768: 3, 1200: 4 }}>
          <Masonry gutter="16px">
            {filtered.map((work) => (
              <WorkCard key={work.id} work={work} onOpen={setOpenWork} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* CTA */}
      <div className="px-6 pb-20 max-w-7xl mx-auto text-center">
        <Link
          to="/trajecten"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white transition-all hover:scale-105"
          style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          <Eye size={18} /> Showcase alumni — start jouw traject
        </Link>
      </div>

      {openWork && <WorkModal work={openWork} onClose={() => setOpenWork(null)} />}
    </div>
  );
}
