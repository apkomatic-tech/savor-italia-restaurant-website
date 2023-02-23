import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useState } from 'react';
import MenuItem from '~/components/menu/MenuItem';

// seed data
import foodItems from '../data/food.json';
import drinksItems from '../data/drinks.json';
import { useLoaderData } from '@remix-run/react';

export async function loader(args: LoaderArgs) {
  return json({
    menu: {
      food: foodItems,
      drinks: drinksItems
    }
  });
}

export default function MenuRoute() {
  const [selectedTab, setSelectedTab] = useState<'food' | 'drinks'>('food');
  const {
    menu: { food, drinks }
  } = useLoaderData<typeof loader>();

  return (
    <section className="mt-16 mb-24">
      {/* tabs */}
      <ul className="mb-8 flex justify-center">
        <li className="mx-2">
          <button
            type="button"
            className={`border-b-2 px-8 py-4 hover:opacity-80 ${
              selectedTab === 'food'
                ? 'border-primary text-primary'
                : 'border-transparent'
            }`}
            onClick={() => selectedTab !== 'food' && setSelectedTab('food')}
          >
            Food
          </button>
        </li>
        <li className="mx-2">
          <button
            type="button"
            className={`border-b-2 px-8 py-4 hover:opacity-80 ${
              selectedTab === 'drinks'
                ? 'border-primary text-primary'
                : 'border-transparent'
            }`}
            onClick={() => selectedTab !== 'drinks' && setSelectedTab('drinks')}
          >
            Drinks
          </button>
        </li>
      </ul>

      {/* tab content */}
      <div className="mx-auto max-w-7xl px-6">
        {selectedTab === 'food' && (
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-8 text-center font-serif text-4xl">Food</h1>
            <div className="grid gap-8 text-lg">
              {food.map(({ title, price, description }) => {
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    price={price}
                    description={description}
                  />
                );
              })}
            </div>
          </div>
        )}

        {selectedTab === 'drinks' && (
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-8 text-center font-serif text-4xl">Drinks</h1>
            <div className="grid gap-8 text-lg">
              {drinks.map(({ title, price, description }) => {
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    price={price}
                    description={description}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
