import { useState } from 'react';
import { Link } from 'react-router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ArrowRight, Play, Eye } from 'lucide-react';

const studentWorks = [
  {
    id: 1,
    name: 'Lena Bakker',
    project: 'Stadslandschappen',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=650&fit=crop&auto=format',
    h: 'tall',
  },
  {
    id: 2,
    name: 'Daan Visser',
    project: 'Kinderboekillustratie',
    img: 'https://images.unsplash.com/photo-1547826039-bdbee69ff3de?w=500&h=400&fit=crop&auto=format',
    h: 'short',
  },
  {
    id: 3,
    name: 'Mila de Vries',
    project: 'Narratief portret',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=560&fit=crop&auto=format',
    h: 'medium',
  },
  {
    id: 4,
    name: 'Sven Hoekstra',
    project: 'Abstracte reeks',
    img: 'https://images.unsplash.com/photo-1556139966-56785f998a76?w=500&h=480&fit=crop&auto=format',
    h: 'medium',
  },
  {
    id: 5,
    name: 'Anouk Smits',
    project: 'Grafisch verhaal',
    img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&h=620&fit=crop&auto=format',
    h: 'tall',
  },
  {
    id: 6,
    name: 'Ruben Janssen',
    project: 'Botanische atlas',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=400&fit=crop&auto=format',
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
    img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&h=394&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'Alumni-interview: Mila de Vries over haar eerste boek',
    tag: 'Verhalen',
    date: '5 sep 2024',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=394&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'Agenda: Open Atelier Dag 2024',
    tag: 'Agenda',
    date: '28 aug 2024',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&h=394&fit=crop&auto=format',
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
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&h=900&fit=crop&auto=format"
            alt=""
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                }}
              >
                <Eye size={18} /> Showcase alumni
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '2rem', aspectRatio: '4/5', background: 'rgba(255,255,255,0.08)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop&auto=format"
                alt="Studentenwerk — kleurrijke illustratie"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(20,71,240,0.9)', backdropFilter: 'blur(12px)' }}
              >
                <p className="text-white text-xs" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  🎨 Lena Bakker — Afstudeerwerk 2024
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
            className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Alle alumni <ArrowRight size={16} />
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
              src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=800&h=450&fit=crop&auto=format"
              alt="Webinar bij Venster Academy"
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
