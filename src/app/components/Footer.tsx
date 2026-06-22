import { Link } from 'react-router';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: 'var(--venster-blue)', fontFamily: 'var(--font-body)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Address */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src="/assets/Klant huisstijl/wit-3c.png" alt="Venster Academy" style={{ height: '28px', width: 'auto' }} />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Venster Academy<br />
              Keizersgracht 482<br />
              1017 EG Amsterdam<br />
              Nederland
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h4
              className="text-white mb-4 text-sm uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hallo@vensteracademy.com" className="text-white/70 hover:text-white transition-colors">
                  hallo@vensteracademy.com
                </a>
              </li>
              <li>
                <a href="tel:+31205551234" className="text-white/70 hover:text-white transition-colors">
                  +31 (0)20 555 12 34
                </a>
              </li>
              <li className="text-white/70">ma–vr 09:00–17:00</li>
            </ul>
          </div>

          {/* Column 3 — Info */}
          <div>
            <h4
              className="text-white mb-4 text-sm uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Informatie
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/trajecten', label: 'Opleidingen & Cursussen' },
                { to: '/showcase', label: 'Showcase alumni' },
                { to: '/blog', label: 'Blog & Verhalen' },
                { to: '/agenda', label: 'Agenda' },
                { to: '/', label: 'Over Venster' },
                { to: '/', label: 'Privacy & Cookies' },
                { to: '/', label: 'Algemene voorwaarden' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Social */}
          <div>
            <h4
              className="text-white mb-4 text-sm uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Volg ons
            </h4>
            <div className="flex gap-3 mb-5">
              {[
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Youtube, label: 'YouTube', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              © 2024 Venster Academy<br />
              KvK: 12345678<br />
              BTW: NL123456789B01
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
