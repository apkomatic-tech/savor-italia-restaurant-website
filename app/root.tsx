import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from '@remix-run/react';

import tailwindStyles from '~/tailwind.css';

import TopHeader from './components/layout/TopHeader';
import Footer from './components/layout/Footer';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "Nicola's Kitchen",
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

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Nicola's Kitchen - Not Found</title>
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
          <main className="mx-auto my-16 flex max-w-xl items-center text-center">
            <h1 className="mb-12 text-3xl md:text-4xl">
              {caught.status === 404
                ? `${caught.status}: Page Not Found`
                : 'Page Error'}
            </h1>
          </main>
          <Footer />
        </div>

        <Scripts />
      </body>
    </html>
  );
}
