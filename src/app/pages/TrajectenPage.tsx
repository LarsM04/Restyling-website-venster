import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const opleidingen = [
  {
    id: 1,
    title: 'Illustratie Opleiding',
    category: 'Opleiding',
    duration: '2 jaar',
    date: 'Start september 2024',
    price: '€ 4.200 / jaar',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&h=394&fit=crop&auto=format',
    soldOut: false,
    desc: 'Een intensieve tweejarige opleiding tot professioneel illustrator. Van concept tot afwerking.',
  },
  {
    id: 2,
    title: 'Narratief & Beeldverhaal',
    category: 'Opleiding',
    duration: '1 jaar',
    date: 'Start september 2024',
    price: '€ 3.100 / jaar',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&h=394&fit=crop&auto=format',
    soldOut: true,
    desc: 'Leer beeldverhalen maken die raken: strips, picturebooks, grafische novellen.',
  },
  {
    id: 3,
    title: 'Illustratie Opleiding Deeltijd',
    category: 'Opleiding',
    duration: '3 jaar',
    date: 'Start september 2024',
    price: '€ 2.800 / jaar',
    img: 'https://images.unsplash.com/photo-1547826039-bdbee69ff3de?w=700&h=394&fit=crop&auto=format',
    soldOut: false,
    desc: 'Dezelfde opleiding als voltijd, maar in eigen tempo — ideaal naast werk of gezin.',
  },
];

const cursussen = [
  {
    id: 4,
    title: 'Narratief Tekenen',
    category: 'Cursus',
    duration: '10 weken',
    date: 'Start oktober 2024',
    price: '€ 890',
    img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&h=394&fit=crop&auto=format',
    soldOut: false,
    desc: 'Leer verhalen vertellen met beeld in 10 woensdagavonden.',
  },
  {
    id: 5,
    title: 'Karakterontwerp Intensief',
    category: 'Workshop',
    duration: '6 sessies',
    date: 'Start november 2024',
    price: '€ 490',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&h=394&fit=crop&auto=format',
    soldOut: false,
    desc: 'Van schets tot volledig uitgewerkt personage met eigen stem en lichaamstaal.',
  },
  {
    id: 6,
    title: 'Kleur & Compositie',
    category: 'Cursus',
    duration: '8 weken',
    date: 'Start oktober 2024',
    price: '€ 720',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&h=394&fit=crop&auto=format',
    soldOut: true,
    desc: 'Beheers kleurtheorie en compositieprincipes voor illustratie en mixed media.',
  },
];

const mentors = [
  {
    id: 1,
    name: 'Elsbeth Groot',
    specialty: 'Illustratie & Picturebooks',
    bio: 'Meer dan 20 boeken gepubliceerd, docent aan de Rietveld Academie.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Joost van der Berg',
    specialty: 'Grafisch Verhaal & Strip',
    bio: 'Striptekenaar voor de Volkskrant en NRC, winnaar van de Stripschapsprijs 2022.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Roos Dijkstra',
    specialty: 'Digitale Illustratie',
    bio: 'Art director bij VPRO, gespecialiseerd in editorial illustration en animatie.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Marc Hendricks',
    specialty: 'Narratief & Conceptontwikkeling',
    bio: 'Auteur van drie graphic novels en docent bij diverse europese academies.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Anouk Smits',
    course: 'Illustratie Opleiding 2023',
    quote: 'Venster heeft mijn ogen geopend voor wat illustratie écht kan zijn. Ik heb hier mijn stem gevonden.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Daan Visser',
    course: 'Narratief Tekenen 2023',
    quote: 'De begeleiding is intens persoonlijk. Je groeit niet alleen als tekenaar maar ook als verteller.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Lena Bakker',
    course: 'Illustratie Opleiding 2022',
    quote: 'Twee jaar later heb ik al drie uitgeverijen benaderd en twee illustratie-opdrachten binnengehaald.',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&auto=format',
  },
];

function CourseCard({ course }: { course: typeof opleidingen[0] }) {
  return (
    <div
      className="relative overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-xl group"
      style={{ borderRadius: '1rem' }}
    >
      {course.soldOut && (
        <div
          className="absolute top-4 right-4 z-10 px-3 py-1.5 text-xs text-white rotate-3 shadow-lg"
          style={{
            background: 'var(--venster-charcoal)',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            borderRadius: '6px',
          }}
        >
          VOLGENDE KEER BETER!
        </div>
      )}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute top-3 left-3 px-2.5 py-1 text-xs rounded-full text-white"
          style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          {course.category}
        </div>
        {course.soldOut && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.6)' }} />
        )}
      </div>
      <div className="p-5">
        <h3
          className="text-lg mb-1"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
        >
          {course.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#666' }}>
          {course.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <span className="px-2 py-1 rounded-full" style={{ background: 'var(--muted)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {course.duration}
          </span>
          <span className="px-2 py-1 rounded-full" style={{ background: 'var(--muted)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {course.date}
          </span>
          <span className="px-2 py-1 rounded-full" style={{ background: 'var(--muted)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {course.price}
          </span>
        </div>
        <button
          disabled={course.soldOut}
          className="w-full py-2.5 rounded-lg text-white text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          {course.soldOut ? 'Uitverkocht' : 'Meer info & inschrijven'}
        </button>
      </div>
    </div>
  );
}

export function TrajectenPage() {
  const [activeSection, setActiveSection] = useState<'opleidingen' | 'cursussen' | 'een-op-een'>('opleidingen');

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-6"
        style={{ background: 'var(--venster-blue)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Trajecten
          </p>
          <h1
            className="text-white text-5xl md:text-6xl leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
          >
            Vind jouw pad als maker
          </h1>
          <p className="text-white/70 mt-4 max-w-lg leading-relaxed">
            Van korte cursus tot volledige opleiding — we begeleiden je op jouw niveau en tempo.
          </p>
        </div>
      </section>

      {/* Section tabs */}
      <div className="sticky top-16 z-40 border-b" style={{ background: 'white', borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-3">
          {([
            { key: 'opleidingen', label: 'Opleidingen' },
            { key: 'cursussen', label: 'Cursussen' },
            { key: 'een-op-een', label: 'Eén-op-één' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className="px-5 py-2 rounded-lg text-sm whitespace-nowrap transition-all"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                background: activeSection === key ? 'var(--venster-blue)' : 'var(--muted)',
                color: activeSection === key ? 'white' : 'var(--venster-charcoal)',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Opleidingen */}
      {activeSection === 'opleidingen' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-4xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Opleidingen
              <span
                className="inline-block ml-3 w-12 h-1 rounded-full align-middle"
                style={{ background: 'var(--venster-orange)' }}
              />
            </h2>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              Meerjaren trajecten voor wie de stap naar het vak wil zetten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opleidingen.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Cursussen */}
      {activeSection === 'cursussen' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-4xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Cursussen & Workshops
              <span
                className="inline-block ml-3 w-12 h-1 rounded-full align-middle"
                style={{ background: 'var(--venster-orange)' }}
              />
            </h2>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              Kortere trajecten voor gerichte verdieping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursussen.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Eén-op-één */}
      {activeSection === 'een-op-een' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-4xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
            >
              Eén-op-één begeleiding
              <span
                className="inline-block ml-3 w-12 h-1 rounded-full align-middle"
                style={{ background: 'var(--venster-orange)' }}
              />
            </h2>
            <p className="text-sm mb-10" style={{ color: 'var(--muted-foreground)' }}>
              Persoonlijke mentortrajecten voor gerichte groei als maker.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: 'var(--venster-mint)', borderRadius: '1rem' }}
              >
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white"
                />
                <h3
                  className="text-base mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
                >
                  {mentor.name}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: 'rgba(45,45,45,0.7)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {mentor.specialty}
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(45,45,45,0.75)' }}>
                  {mentor.bio}
                </p>
                <button
                  className="w-full py-2 rounded-lg text-white text-sm transition-all hover:scale-105"
                  style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  Contacteer mentor
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--venster-charcoal)' }}
          >
            Wat zeggen onze studenten?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6"
                style={{ borderRadius: '1rem' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--venster-orange)" className="text-orange-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-5" style={{ color: '#555' }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--venster-charcoal)' }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      {t.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-sm transition-all hover:scale-105"
              style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Bekijk alle opleidingen <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
