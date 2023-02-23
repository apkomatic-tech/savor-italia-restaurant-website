import { Outlet } from '@remix-run/react';

import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  console.log(body);
  return redirect('/contact/confirmation');
}

export default function ContactRoute() {
  return (
    <div className="my-16 mx-auto max-w-xl px-6">
      <h1 className="mb-2 font-serif text-4xl">Contact Us</h1>
      <p className="mb-10 text-black text-opacity-50">
        We will get back to you as soon as possible.
      </p>
      <Outlet />
    </div>
  );
}
