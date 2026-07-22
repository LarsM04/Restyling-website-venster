import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/trajecten', label: 'Trajecten' },
  { to: '/showcase', label: 'Showcase' },
  { to: '/blog', label: 'Blog' },
  { to: '/agenda', label: 'Agenda' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'NL' | 'EN'>('NL');

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-display)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-[72px] gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Venster Academy home"
          >
            <img src="/assets/Klant huisstijl/wit-3c.png" alt="Venster Academy" style={{ height: '48px', width: 'auto' }} />
          </Link>

          {/* Desktop nav links — centered */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
                style={{ fontWeight: 700 }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
            <button
              onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')}
              className="text-white/80 hover:text-white text-sm transition-colors"
              style={{ fontWeight: 700 }}
            >
              {lang === 'NL' ? 'NL | EN' : 'EN | NL'}
            </button>
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Winkelwagen">
              <ShoppingCart size={20} />
            </button>
            <button
              className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-sm px-3 py-1.5 rounded-lg transition-all"
              style={{ fontWeight: 700 }}
              aria-label="Inloggen"
            >
              <User size={16} />
              <span>Inloggen</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
                style={{ fontWeight: 700 }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-4 mt-3 px-3">
              <button
                onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')}
                className="text-white/80 text-sm"
                style={{ fontWeight: 700 }}
              >
                NL | EN
              </button>
              <button className="text-white/80" aria-label="Winkelwagen">
                <ShoppingCart size={18} />
              </button>
              <button className="text-white/80 text-sm flex items-center gap-1" style={{ fontWeight: 700 }}>
                <User size={16} />
                Inloggen
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
