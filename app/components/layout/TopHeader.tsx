import { Link, NavLink } from '@remix-run/react';
import { useState } from 'react';

const baseLinkClassName =
  'text-2xl font-serif hover:text-accent px-6 py-2 text-center block md:inline-block md:text-xl md:text-left md:p-0';

function TopNavLink({
  href,
  label,
  handleClick
}: {
  href: string;
  label: string;
  handleClick: () => void;
}) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => {
        return `${baseLinkClassName} ${
          isActive ? 'text-accent' : 'text-light'
        }`;
      }}
      prefetch="intent"
      onClick={handleClick}
    >
      {label}
    </NavLink>
  );
}

export default function TopHeader() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-dark px-2">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-8">
          <Link
            to="/"
            className="font-serif text-4xl text-accent md:text-5xl lg:text-6xl"
          >
            Nicola's Kitchen
          </Link>
          <button
            type="button"
            className="rounded-sm border-2 border-primaryLighter p-2 text-center font-serif text-primaryLighter hover:border-accentLighter hover:text-accentLighter md:hidden"
            onClick={() => setNavOpen(true)}
          >
            Menu
          </button>
          <nav
            className={`${
              navOpen ? '' : 'hidden'
            } fixed top-0 right-0 z-[999] h-full w-6/12 border-l border-accentLighter bg-dark pt-4 md:static md:block md:w-auto md:border-0 md:bg-transparent md:py-0`}
          >
            <ul className="grid grid-flow-row gap-6 md:grid-flow-col">
              <li className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setNavOpen(false)}
                  className={`${baseLinkClassName} inline-block text-center text-[50px] leading-relaxed text-white md:hidden`}
                >
                  &times;
                </button>
              </li>
              {[
                {
                  href: '/',
                  label: 'Home'
                },
                {
                  href: '/menu',
                  label: 'Menu'
                },
                {
                  href: '/order',
                  label: 'Order'
                },
                {
                  href: '/catering',
                  label: 'Catering'
                },
                {
                  href: '/contact',
                  label: 'Contact'
                }
              ].map((link) => (
                <TopNavLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  handleClick={() => setNavOpen(false)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
