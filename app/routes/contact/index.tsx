import { useTransition } from '@remix-run/react';

import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  console.log(Object.fromEntries(body));
  return redirect('/contact/confirmation');
}

export default function ContactFormRoute() {
  const { state } = useTransition();
  const isSubmitting = state === 'submitting';

  return (
    <form
      method="post"
      action="/contact?index"
    >
      <div className="mb-6">
        <label
          className="mb-2 inline-block font-bold text-black"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full rounded-md border border-black border-opacity-70 bg-white py-3 px-4 placeholder-gray-400 focus:border-0 focus:outline-primary"
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 inline-block font-bold text-black"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full rounded-md border border-black border-opacity-70 bg-white py-3 px-4 placeholder-gray-400 focus:border-0 focus:outline-primary"
          id="email"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 inline-block font-bold text-black"
          htmlFor="phone"
        >
          Phone (optional)
        </label>
        <input
          className="w-full rounded-md border border-black border-opacity-70 bg-white py-3 px-4 placeholder-gray-400 focus:border-0 focus:outline-primary"
          id="phone"
          type="text"
          name="phone"
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 inline-block font-bold text-black"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full rounded-md border border-black border-opacity-70 bg-white py-3 px-4 placeholder-gray-400 focus:border-0 focus:outline-primary"
          id="message"
          name="message"
          rows={5}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md border border-primaryDarker bg-primaryDarker py-3 px-4 text-white focus:border-0 focus:outline-dark disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
