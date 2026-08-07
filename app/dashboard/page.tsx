export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-8">
      <h1 className="text-3xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-slate-400">
        Day 12 of your 60-Day Coding Challenge
      </p>

      <div className="mt-8 rounded-2xl bg-violet-600 p-6">
        <p className="text-sm">Current Streak</p>
        <h2 className="mt-2 text-4xl font-bold">
          🔥 12 Days
        </h2>
      </div>
      {/* Progress Card */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <div className="flex justify-between">
    <span className="text-slate-400">Progress</span>
    <span className="font-semibold">12 / 60 Days</span>
  </div>

  <div className="mt-4 h-3 w-full rounded-full bg-slate-800">
    <div className="h-3 w-1/5 rounded-full bg-violet-500"></div>
  </div>

  <p className="mt-3 text-sm text-slate-400">
    20% Challenge Completed
  </p>
</div>
{/* Today's Task */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <p className="text-sm text-violet-400">
    TODAY'S TASK
  </p>

  <h2 className="mt-2 text-xl font-bold">
    Build a Weather Dashboard
  </h2>

  <p className="mt-3 text-slate-400">
    Create a responsive weather app using any public API.
  </p>

  <button className="mt-5 w-full rounded-xl bg-violet-600 py-3 font-semibold">
    Start Today's Challenge
  </button>
</div>
    </main>
  );
}