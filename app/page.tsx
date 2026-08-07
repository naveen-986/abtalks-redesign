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

      </section>
    </main>
  );
}