import {
  SiDoordash as DoordashIcon,
  SiGrubhub as GrubhubIcon
} from 'react-icons/si';

export default function OrderRoute() {
  return (
    <div className="mx-auto my-16 max-w-7xl px-6">
      <h1 className="mb-8 font-serif text-4xl">Order Through:</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <a
          href="https://www.doordash.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div className="flex h-52 items-center justify-center bg-primaryDarker text-white transition-opacity duration-300 ease-in-out hover:opacity-70 md:h-96">
            <div className="text-8xl leading-none">
              <DoordashIcon />
            </div>
          </div>
        </a>
        <a
          href="https://www.grubhub.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div className="flex h-52 items-center justify-center bg-accent text-black transition-opacity duration-300 ease-in-out hover:opacity-70 md:h-96">
            <div className="text-8xl leading-none">
              <GrubhubIcon />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
