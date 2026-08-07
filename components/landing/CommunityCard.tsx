export default function CommunityCard() {
  return (
    <section className="mx-auto mt-12 max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-violet-400">
            🔴 LIVE COMMUNITY
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            894 Students Coding
          </h2>

          <p className="mt-2 text-slate-400">
            Join today's coding sprint and keep your streak alive.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-3xl font-bold text-violet-400">632</p>
          <p className="mt-1 text-sm text-slate-400">
            Today's Submissions
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-3xl font-bold text-green-400">18</p>
          <p className="mt-1 text-sm text-slate-400">
            Avg. Streak
          </p>
        </div>
      </div>
    </section>
  );
}