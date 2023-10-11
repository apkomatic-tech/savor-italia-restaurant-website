export default function Footer() {
  return (
    <footer className="bg-light py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <div className="text-center md:text-left">
            <div className="mb-2 font-serif text-xl text-dark">
              Savor Italia
            </div>
            <address className="mb-2 text-sm not-italic text-black text-opacity-70">
              123 Main Street
              <br />
              Los Angeles, CA 90001
            </address>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-2 font-serif text-xl text-dark">Hours</div>
            <div className="mb-2 text-sm text-black text-opacity-70">
              <div>
                <strong>Mon</strong> 11:00am - 9:00pm
              </div>
              <div>
                <strong>Tue-Thu</strong> 8:00am - 9:00pm
              </div>
              <div>
                <strong>Fri</strong> 8:00am - 10:00pm
              </div>
              <div>
                <strong>Sat</strong> 8:00am - 10:00pm
              </div>
              <div>
                <strong>Sun</strong> 8:00am - 9:00pm
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="mb-2 font-serif text-xl text-dark">Contact Us</div>
            <div className="mb-2 text-sm text-black text-opacity-70">
              <div>
                <a
                  href="tel:555555555"
                  className="hover:underline focus:underline"
                >
                  555.555.5555
                </a>
              </div>
              <div>
                <a
                  href="mailto:savoritalia@example.com"
                  className="hover:underline focus:underline"
                >
                  savoritalia@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-black border-opacity-10 pt-4 text-center text-sm text-black text-opacity-70">
          {new Date().getFullYear()} &copy; Savor Italia
        </div>
      </div>
    </footer>
  );
}
