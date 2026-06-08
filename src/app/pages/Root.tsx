import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { NewsletterSection } from '../components/NewsletterSection';

export function Root() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--background)' }}>
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
