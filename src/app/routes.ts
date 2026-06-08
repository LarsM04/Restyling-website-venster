import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { HomePage } from './pages/HomePage';
import { TrajectenPage } from './pages/TrajectenPage';
import { ShowcasePage } from './pages/ShowcasePage';
import { BlogPage } from './pages/BlogPage';
import { AgendaPage } from './pages/AgendaPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'trajecten', Component: TrajectenPage },
      { path: 'showcase', Component: ShowcasePage },
      { path: 'blog', Component: BlogPage },
      { path: 'agenda', Component: AgendaPage },
    ],
  },
]);
