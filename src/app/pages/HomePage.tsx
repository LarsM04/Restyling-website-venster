import { useState } from 'react';
import { Link } from 'react-router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ArrowRight, Play, Eye, BookOpen, MapPin } from 'lucide-react';

const studentWorks = [
  {
    id: 1,
    name: 'Petra van der Ploeg',
    project: 'Tekstloos prentenboek',
    img: 'assets/2026/01/petra-van-der-ploeg-tekstloos-prentenboek-voor-de-opleiding-beeldverhaal-bij-venster-academy-in-utrecht-1.png',
    h: 'tall',
  },
  {
    id: 2,
    name: 'Erik van Tuijn',
    project: 'Kristalkoorts',
    img: 'assets/2026/02/01-Kristalkoorts-Bullrabbit-running-300dpi-20x30-1.png',
    h: 'short',
  },
  {
    id: 3,
    name: 'Dieuwertje Gordijn',
    project: 'Gooi je artist block uit het venster',
    img: 'assets/2026/01/Gooi-je-artist-block-en-beren-op-de-weg-uit-het-venster_afstudeeronderzoek-Dieuwertje-Gordijn-voor-de-Opleiding-Beeldverhaal-bij-Venster-Academie-voor-Illustratie-en-Narratief-in-Utrecht-1.png',
    h: 'medium',
  },
  {
    id: 4,
    name: 'Jessamijn',
    project: 'Kat voor raam',
    img: 'assets/2026/02/jessamijn_kat-voor-raam.png',
    h: 'medium',
  },
  {
    id: 5,
    name: 'Monique van Dongen',
    project: 'Knipsels',
    img: 'assets/2026/02/Monique-knipsels.png',
    h: 'tall',
  },
  {
    id: 6,
    name: 'Fransje Immink',
    project: 'Meeuw',
    img: 'assets/2026/02/meeuw-immink.png',
    h: 'short',
  },
];

const courseCards = [
  {
    id: 1,
    title: 'Illustratie Opleiding',
    desc: 'Een intensieve 2-jarige opleiding tot professioneel illustrator.',
    tag: 'Opleiding',
    start: 'September 2024',
  },
  {
    id: 2,
    title: 'Narratief Tekenen',
    desc: 'Leer verhalen vertellen met beeld in 10 weken.',
    tag: 'Cursus',
    start: 'Oktober 2024',
  },
  {
    id: 3,
    title: 'Karakterontwerp',
    desc: 'Van schets tot volledig uitgewerkt personage in 6 sessies.',
    tag: 'Workshop',
    start: 'November 2024',
  },
];

const blogCards = [
  {
    id: 1,
    title: 'Hoe illustratie je verhaal versterkt',
    tag: 'Illustratie',
    date: '12 sep 2024',
    img: 'assets/2026/02/04-Zo-de-knetter-inzicht-Erik-van-Tuijn.png',
  },
  {
    id: 2,
    title: 'Alumni-interview: Erik van Tuijn over zijn eerste boek',
    tag: 'Verhalen',
    date: '5 sep 2024',
    img: 'assets/2026/02/01-Wild-Rushes-Book-open.png',
  },
  {
    id: 3,
    title: 'Agenda: Open Atelier Dag 2024',
    tag: 'Agenda',
    date: '28 aug 2024',
    img: 'assets/2026/05/venster05.jpg',
  },
];

function StudentCard({ work }: { work: typeof studentWorks[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: '1rem' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={work.img}
        alt={`${work.name} — ${work.project}`}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ display: 'block' }}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(to top, rgba(20,71,240,0.85) 0%, transparent 60%)' }}
      >
        <p
          className="text-white text-sm leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          {work.name}
        </p>
        <p className="text-white/80 text-xs mt-0.5">{work.project}</p>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--venster-blue)', minHeight: '85vh' }}
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="assets/2026/05/venster04.jpg"
            alt="Sfeerimpressie Venster Academy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative blobs */}
        <div
          className="absolute top-16 right-16 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'var(--venster-orange)' }}
        />
        <div
          className="absolute bottom-24 left-8 w-40 h-40 rounded-full opacity-20"
          style={{ background: 'var(--venster-mint)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-white text-xs uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Amsterdam · Illustratie · Narratief
            </div>
            <h1
              className="text-white text-5xl md:text-6xl lg:text-7xl leading-none mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
            >
              Academie voor<br />
              <span style={{ color: 'var(--venster-orange)' }}>illustratie</span>
              <br />& narratief
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-sm leading-relaxed">
              Vertel verhalen die blijven hangen. Bij Venster leer je zien, tekenen en vertellen op jouw manier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/trajecten"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all hover:scale-105 active:scale-95"
                style={{ background: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Bekijk trajecten <ArrowRight size={18} />
              </Link>
              <Link
                to="/showcase"
                className="transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <img
                  src="assets/2026/01/showcase-alumni-button-knop.png"
                  alt="Showcase alumni"
                  style={{ height: '48px', width: 'auto', display: 'block' }}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '2rem', aspectRatio: '4/5', background: 'rgba(255,255,255,0.08)' }}
            >
              <img
                src="assets/2026/01/Gooi-je-artist-block-uit-het-venster_afstudeeronderzoek-Dieuwertje-Gordijn-voor-de-Opleiding-Beeldverhaal-bij-Venster-Academie-voor-Illustratie-en-Narratief-in-Utrecht.png"
                alt="Studentenwerk — Dieuwertje Gordijn"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(20,71,240,0.9)', backdropFilter: 'blur(12px)' }}
              >
                <p className="text-white text-xs" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  🎨 Dieuwertje Gordijn — Afstudeerwerk 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student work masonry */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Studentenwerk
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                color: 'var(--venster-charcoal)',
              }}
            >
              Werk dat{' '}
              <span
                style={{
                  borderBottom: '4px solid var(--venster-orange)',
                  paddingBottom: '2px',
                }}
              >
                raakt
              </span>
            </h2>
          </div>
          <Link
            to="/showcase"
            className="transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <img
              src="assets/2026/02/showcase-button-knop.png"
              alt="Alle alumni"
              style={{ height: '48px', width: 'auto', display: 'block' }}
            />
          </Link>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 768: 3 }}>
          <Masonry gutter="16px">
            {studentWorks.map((work) => (
              <StudentCard key={work.id} work={work} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {/* About Us / Over ons */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Over ons
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Kijk door het{' '}
              <span
                style={{
                  borderBottom: '4px solid var(--venster-orange)',
                  paddingBottom: '2px',
                }}
              >
                venster
              </span>{' '}
              van verbeelding
            </h2>
            <p className="text-sm leading-relaxed mb-4 text-[#555]">
              Venster Academy is een kleinschalige, inspirerende academie in hartje Amsterdam. Wij geloven dat een krachtig beeld meer zegt dan duizend woorden en dat elk verhaal het verdient om op een unieke manier verteld te worden.
            </p>
            <p className="text-sm leading-relaxed mb-8 text-[#555]">
              Of je nu een beginnende illustrator bent die zijn eerste stappen zet, of een ervaren tekenaar die diepgang zoekt; bij ons vind je een warme, hechte community van docenten en medestudenten die je uitdagen en ondersteunen in jouw artistieke groei.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--venster-pink)', color: 'var(--venster-blue)' }}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="text-sm mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--venster-charcoal)' }}>Vakdocenten</h4>
                  <p className="text-xs text-[#666] leading-relaxed">Leer direct van toonaangevende, actieve illustratoren en beeldverhalenmakers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--venster-pink)', color: 'var(--venster-blue)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--venster-charcoal)' }}>Inspirerende plek</h4>
                  <p className="text-xs text-[#666] leading-relaxed">Ons sfeervolle atelier bevindt zich in een historisch pand aan de Keizersgracht.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/trajecten"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all hover:scale-105 active:scale-95"
                style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Ontdek onze trajecten <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center py-8">
            <div className="relative w-full max-w-[28rem] aspect-square group">
              {/* Blob in background */}
              <div className="absolute top-[10%] right-[10%] w-1/2 h-1/2 rounded-full opacity-35 transition-transform duration-500 group-hover:scale-105" style={{ background: 'var(--venster-mint)', zIndex: 1 }} />
              {/* Main image card */}
              <div className="absolute top-0 left-0 w-[75%] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-1">
                <img src="assets/2026/05/venster02.jpg" alt="Atelier sfeer" className="w-full h-full object-cover" />
              </div>
              {/* Sub image card */}
              <div className="absolute bottom-0 right-0 w-[60%] aspect-square rounded-3xl overflow-hidden shadow-xl z-20 border-[6px] border-white transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-[1.02]">
                <img src="assets/2026/05/venster01.jpg" alt="Studenten aan het werk" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course teasers */}
      <section className="py-20 px-6" style={{ background: 'var(--venster-pink)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Trajecten
              </p>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
              >
                Jouw pad als maker
              </h2>
            </div>
            <Link
              to="/trajecten"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm transition-all hover:scale-105"
              style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Alle trajecten <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courseCards.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                style={{ borderRadius: '1rem' }}
              >
                <div
                  className="inline-block px-2.5 py-1 text-xs rounded-full mb-4"
                  style={{
                    background: 'var(--venster-blue)',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                  }}
                >
                  {course.tag}
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
                >
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#666' }}>
                  {course.desc}
                </p>
                <p
                  className="text-xs"
                  style={{ color: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  Start: {course.start}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teasers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Blog
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Verhalen & inspiratie
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Naar het blog <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogCards.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
              style={{ borderRadius: '1rem' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 text-xs rounded-full text-white"
                  style={{ background: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  {post.tag}
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-base mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--venster-charcoal)' }}
                >
                  {post.title}
                </h3>
                <p className="text-xs" style={{ color: '#aaa' }}>
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video / Webinar block */}
      <section
        className="py-20 px-6"
        style={{ background: 'var(--venster-charcoal)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--venster-mint)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Webinar & Events
            </p>
            <h2
              className="text-4xl md:text-5xl text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
            >
              Leer van de{' '}
              <span style={{ color: 'var(--venster-orange)' }}>besten</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Gratis en betaalde webinars met toonaangevende illustratoren en vertellers uit Nederland en België.
            </p>
            <Link
              to="/agenda"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all hover:scale-105"
              style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Bekijk de agenda <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative group cursor-pointer" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
            <img
              src="assets/2026/05/venster03.jpg"
              alt="Masterclass bij Venster Academy"
              className="w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(20,71,240,0.4)' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: 'var(--venster-orange)' }}
              >
                <Play size={24} fill="white" className="text-white ml-1" />
              </div>
            </div>
            <div
              className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-lg"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            >
              <p className="text-white text-xs" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                🎙 Masterclass: "Uw verhaal als illustrator" — Elsbeth Groot
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
