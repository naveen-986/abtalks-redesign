export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex flex-col items-center px-6 pt-14">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
            🚀
          </div>
          {/* Challenge Badge */}
          <div className="mt-8 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">
            <p className="text-sm font-medium text-violet-300">
              🔥 60-Day Coding Challenge
            </p>
          </div>
          <h1 className="text-2xl font-bold">
            ABTalks
          </h1>
        </div>
         {/* Hero Heading */}
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Build Every Day.
            <br />
            <span className="text-violet-400">
              Get Hired Faster.
            </span>
          </h2>
        </div>

        {/* Hero Description */}
<p className="mt-6 max-w-sm text-center text-base leading-7 text-slate-300">
  Join a 60-day coding challenge where every day you build a project,
  commit your code to GitHub, share your journey on LinkedIn, and grow
  your portfolio while staying consistent.
</p>

{/* CTA Button */}
<button className="mt-8 w-full max-w-xs rounded-xl bg-violet-600 px-6 py-4 text-lg font-semibold transition-all duration-300 hover:bg-violet-700">
  Start 60-Day Challenge →
</button>

{/* Trust Section */}
<div className="mt-10 text-center">
  <p className="text-sm text-slate-400">
    Trusted by
  </p>

  <p className="mt-2 text-2xl font-bold text-white">
    1,200+
  </p>

  <p className="text-sm text-slate-400">
    Students across India
  </p>
</div>

      </section>
    </main>
  );
}