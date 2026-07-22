import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ZoomIn, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const years = [
  { key: 'Alle jaren', img: 'assets/2026/02/showcase-button-knop.png', alt: 'Alle jaren' },
  { key: '2024', img: 'assets/2026/02/showcase-button-knop-2425.png', alt: '2024-2025' },
  { key: '2023', img: 'assets/2025/02/Button-showcase-2324.png', alt: '2023-2024' },
  { key: '2022', img: 'assets/2025/02/Button-showcase-2223.png', alt: '2022-2023' }
];

const works = [
  { id: 1, name: 'Petra van der Ploeg', project: 'Tekstloos prentenboek', year: '2024', img: 'assets/2026/01/petra-van-der-ploeg-tekstloos-prentenboek-voor-de-opleiding-beeldverhaal-bij-venster-academy-in-utrecht-1.png' },
  { id: 2, name: 'Erik van Tuijn', project: 'Kristalkoorts', year: '2024', img: 'assets/2026/02/01-Kristalkoorts-Bullrabbit-running-300dpi-20x30-1.png' },
  { id: 3, name: 'Dieuwertje Gordijn', project: 'Gooi je artist block uit het venster', year: '2023', img: 'assets/2026/01/Gooi-je-artist-block-en-beren-op-de-weg-uit-het-venster_afstudeeronderzoek-Dieuwertje-Gordijn-voor-de-Opleiding-Beeldverhaal-bij-Venster-Academie-voor-Illustratie-en-Narratief-in-Utrecht-1.png' },
  { id: 4, name: 'Jessamijn', project: 'Kat voor raam', year: '2023', img: 'assets/2026/02/jessamijn_kat-voor-raam.png' },
  { id: 5, name: 'Monique van Dongen', project: 'Knipsels', year: '2023', img: 'assets/2026/02/Monique-knipsels.png' },
  { id: 6, name: 'Fransje Immink', project: 'Meeuw', year: '2022', img: 'assets/2026/02/meeuw-immink.png' },
  { id: 7, name: 'Petra van der Ploeg', project: 'Tekstloos prentenboek II', year: '2022', img: 'assets/2026/01/petra-van-der-ploeg-tekstloos-prentenboek-voor-de-opleiding-beeldverhaal-bij-venster-academy-in-utrecht-2.png' },
  { id: 8, name: 'Erik van Tuijn', project: 'Wild Rushes', year: '2021', img: 'assets/2026/02/02-Wild-Rushes-full-image-web-ErikvanTuijn.png' },
  { id: 9, name: 'Erik van Tuijn', project: 'Zo de Knetter', year: '2024', img: 'assets/2026/02/02-Zo-de-Knetter-Erik-van-Tuijn-.png' },
  { id: 10, name: 'Erik van Tuijn', project: 'Black Mirror', year: '2022', img: 'assets/2026/02/02-A-Black-Mirror-onheilsboden-Erik-van-Tuijn.png' },
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
        <div className="flex flex-wrap gap-4 items-center overflow-x-auto pb-2">
          {years.map((y) => (
            <button
              key={y.key}
              onClick={() => setSelectedYear(y.key)}
              className={`filter-pill-img ${selectedYear === y.key ? 'filter-pill-img--active' : ''}`}
              aria-label={y.alt}
            >
              <img src={y.img} alt={y.alt} />
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
          className="inline-flex transition-all hover:scale-105 active:scale-95 mx-auto"
        >
          <img
            src="assets/2026/02/showcase-button-knop-alumni.png"
            alt="Showcase alumni — start jouw traject"
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </Link>
      </div>

      {openWork && <WorkModal work={openWork} onClose={() => setOpenWork(null)} />}
    </div>
  );
}
