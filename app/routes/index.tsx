import { Link } from '@remix-run/react';
import heroBg from '../../public/hero.jpg';

export default function Index() {
  return (
    <>
      <div className="relative flex min-h-max items-center justify-center overflow-hidden bg-accent py-56 md:min-h-[70vh]">
        <img
          className="absolute inset-0 h-full w-full object-cover bg-blend-hue brightness-50  "
          src={heroBg}
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
              prefetch="intent"
              className="inline-block w-full rounded-md bg-primary py-2 px-3 text-center text-xl font-bold text-white transition-colors duration-200 hover:bg-accent sm:w-2/4 md:w-auto md:min-w-[300px]"
            >
              Order
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary py-28 px-6">
        <div className="mx-auto max-w-2xl rounded-md bg-light px-8 py-12 drop-shadow-lg">
          <h2 className="mb-6 font-serif text-3xl">
            Authentic Italian cuisine.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-black">
            Our menu offers a variety of classic dishes, made with fresh
            ingredients and traditional recipes. From savory pasta dishes to
            wood-fired pizzas, we have something for everyone. And don't forget
            to finish off your meal with our delicious desserts, like tiramisu
            and cannoli. Experience Italy's rich culinary heritage right in your
            neighborhood. We can't wait to serve you!
          </p>
          <Link
            to="/menu"
            prefetch="intent"
            className="inline-block rounded-md bg-accent py-2 px-12 text-center text-lg font-bold text-white transition-colors duration-200 hover:bg-primary"
          >
            Check our Menu
          </Link>
        </div>
      </div>
    </>
  );
}
