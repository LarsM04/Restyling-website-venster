import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = ['Alles', 'Agenda', 'Verhalen', 'Illustratie', 'Nieuws'];

const bookshelItems = [
  { id: 1, title: 'Hoe ik mijn eerste strip maakte', author: 'Joost van der Berg', img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&h=180&fit=crop&auto=format' },
  { id: 2, title: 'Kleur als taal', author: 'Roos Dijkstra', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=180&fit=crop&auto=format' },
  { id: 3, title: 'De stille lijn', author: 'Elsbeth Groot', img: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?w=120&h=180&fit=crop&auto=format' },
  { id: 4, title: 'Amsterdam in inkt', author: 'Daan Visser', img: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=120&h=180&fit=crop&auto=format' },
  { id: 5, title: 'Verhalen zonder woorden', author: 'Marc Hendricks', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=120&h=180&fit=crop&auto=format' },
  { id: 6, title: 'Tekeningen als dagboek', author: 'Anouk Smits', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=180&fit=crop&auto=format' },
];

const featuredPost = {
  id: 0,
  title: '"Mijn illustratie is een venster naar de ziel" — interview met Elsbeth Groot',
  tag: 'Verhalen',
  date: '15 sep 2024',
  excerpt:
    'Elsbeth Groot werkt al meer dan twee decennia als illustrator en picturebook-maker. In dit uitgebreide interview vertelt ze over haar proces, haar inspiraties en waarom ze bij Venster les geeft.',
  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=500&fit=crop&auto=format',
};

const posts = [
  { id: 1, title: 'Hoe illustratie je verhaal versterkt', tag: 'Illustratie', date: '12 sep 2024', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&h=600&fit=crop&auto=format' },
  { id: 2, title: 'Alumni-interview: Mila de Vries over haar eerste boek', tag: 'Verhalen', date: '5 sep 2024', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop&auto=format' },
  { id: 3, title: 'Open Atelier Dag: alles wat je moet weten', tag: 'Agenda', date: '28 aug 2024', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=600&fit=crop&auto=format' },
  { id: 4, title: 'Nieuwe cursus: Kleur & Compositie voor illustratoren', tag: 'Nieuws', date: '20 aug 2024', img: 'https://images.unsplash.com/photo-1547826039-bdbee69ff3de?w=600&h=600&fit=crop&auto=format' },
  { id: 5, title: 'Waarom ieder verhaal een oogpunt nodig heeft', tag: 'Illustratie', date: '14 aug 2024', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop&auto=format' },
  { id: 6, title: 'Webinar terugblik: "Urban sketching als meditatie"', tag: 'Verhalen', date: '8 aug 2024', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop&auto=format' },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Alles');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = activeCategory === 'Alles'
    ? posts
    : posts.filter((p) => p.tag === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      {/* Hero banner — orange painted */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ background: 'var(--venster-orange)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p
            className="text-white/80 text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Blog & Verhalen
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none max-w-2xl"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
          >
            Verhalen,<br />inzichten &<br />inspiratie
          </h1>
        </div>
      </section>

      {/* Boekenplank horizontal scroll */}
      <section className="py-10 px-6 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Boekenplank
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {bookshelItems.map((book) => (
              <div key={book.id} className="shrink-0 w-24 group cursor-pointer">
                <div
                  className="overflow-hidden mb-2 transition-transform group-hover:-translate-y-2"
                  style={{ borderRadius: '4px', width: '80px', height: '120px' }}
                >
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-xs leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--venster-charcoal)' }}
                >
                  {book.title}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
              className="px-4 py-2 rounded-full text-sm transition-all"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                background: activeCategory === cat ? 'var(--venster-blue)' : 'var(--muted)',
                color: activeCategory === cat ? 'white' : 'var(--venster-charcoal)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === 'Alles' && (
        <section className="px-6 max-w-7xl mx-auto mb-12">
          <article
            className="relative overflow-hidden group cursor-pointer"
            style={{ borderRadius: '1rem' }}
          >
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src={featuredPost.img}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(20,71,240,0.85) 0%, rgba(20,71,240,0.3) 60%, transparent 100%)' }}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:justify-center md:max-w-xl">
              <div
                className="inline-block self-start px-2.5 py-1 text-xs rounded-full text-white mb-3"
                style={{ background: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                {featuredPost.tag} · uitgelicht
              </div>
              <h2
                className="text-white text-2xl md:text-3xl mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >
                {featuredPost.title}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-4 hidden md:block">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm transition-all hover:scale-105"
                  style={{ background: 'var(--venster-orange)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  Lees het interview <ArrowRight size={14} />
                </button>
                <span className="text-white/60 text-xs">{featuredPost.date}</span>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Post grid */}
      <section className="px-6 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
              style={{ borderRadius: '1rem' }}
            >
              <div className="relative aspect-square overflow-hidden">
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
                  className="text-base leading-snug mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--venster-charcoal)' }}
                >
                  {post.title}
                </h3>
                <p className="text-xs" style={{ color: '#aaa' }}>{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((n) => n + 6)}
              className="px-8 py-3 rounded-lg text-white text-sm transition-all hover:scale-105"
              style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Laad meer
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
