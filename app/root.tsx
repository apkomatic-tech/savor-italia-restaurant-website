import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import tailwindStyles from '~/tailwind.css';

import TopHeader from './components/layout/TopHeader';
import Footer from './components/layout/Footer';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
});

export const links: LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Permanent+Marker&display=swap'
  },
  {
    rel: 'stylesheet',
    href: tailwindStyles
  }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className="grid h-screen"
          style={{
            gridTemplateRows: 'max-content 1fr max-content'
          }}
        >
          <TopHeader />
          <main>
            <Outlet />
          </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
        </div>
      </body>
    </html>
  );
}
