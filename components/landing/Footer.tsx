export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-md text-center">

        <h2 className="text-2xl font-bold text-white">
          ABTalks
        </h2>

        <p className="mt-3 text-slate-400">
          Build every day. Share every day. Get noticed by recruiters.
        </p>

        <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400">
          <button className="hover:text-white transition">
            About
          </button>

          <button className="hover:text-white transition">
            Contact
          </button>

          <button className="hover:text-white transition">
            Privacy
          </button>
        </div>

        <div className="mt-8 h-px bg-slate-800"></div>

        <p className="mt-6 text-xs text-slate-500">
          © 2026 ABTalks. Built with ❤️ for students.
        </p>

      </div>
    </footer>
  );
}