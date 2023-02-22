import { Link } from '@remix-run/react';
import pizzaBackground from '../../public/pizza-bg.jpg';

export default function Index() {
  return (
    <div className="relative flex min-h-max items-center justify-center overflow-hidden bg-accent py-56">
      <img
        className="absolute inset-0 h-full w-full object-cover bg-blend-hue brightness-50  "
        src={pizzaBackground}
        alt=""
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 text-center">
        <h1 className="mb-5 font-serif text-[80px] leading-none text-light">
          Nicola's Kitchen
        </h1>
        <p className="text-xl text-light">
          Come join us for breakfast, brunch, lunch or dinner!
        </p>
        <p className="text-xl text-light">
          We serve pasta, seafood, beer, wine, and more!
        </p>
        <div className="mt-8">
          <Link
            to="/order"
            className="inline-block w-full rounded-md bg-primary py-2 px-3 text-center text-xl font-bold text-white transition-colors duration-200 hover:bg-accent sm:w-2/4 md:w-auto md:min-w-[300px]"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}
