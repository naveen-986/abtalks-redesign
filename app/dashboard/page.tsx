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

{/* Achievements */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="text-xl font-bold">🏆 Achievements</h2>

  <div className="mt-5 grid grid-cols-2 gap-4">
    <div className="rounded-xl bg-slate-800 p-4 text-center">
      <p className="text-3xl">🔥</p>
      <p className="mt-2 font-semibold">7-Day Streak</p>
    </div>

    <div className="rounded-xl bg-slate-800 p-4 text-center">
      <p className="text-3xl">💻</p>
      <p className="mt-2 font-semibold">First Commit</p>
    </div>

    <div className="rounded-xl bg-slate-800 p-4 text-center">
      <p className="text-3xl">🚀</p>
      <p className="mt-2 font-semibold">Portfolio Builder</p>
    </div>

    <div className="rounded-xl bg-slate-800 p-4 text-center">
      <p className="text-3xl">⭐</p>
      <p className="mt-2 font-semibold">Top Learner</p>
    </div>
  </div>
</div>

{/* Weekly Activity */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="text-xl font-bold">📅 Weekly Activity</h2>

  <div className="mt-6 flex justify-between">
    {[
      { day: "M", active: true },
      { day: "T", active: true },
      { day: "W", active: true },
      { day: "T", active: false },
      { day: "F", active: true },
      { day: "S", active: true },
      { day: "S", active: true },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className={`h-8 w-8 rounded-full ${
            item.active ? "bg-violet-500" : "bg-slate-700"
          }`}
        ></div>

        <p className="mt-2 text-xs text-slate-400">
          {item.day}
        </p>
      </div>
    ))}
  </div>
</div>

{/* Leaderboard */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="text-xl font-bold">🥇 Leaderboard</h2>

  <div className="mt-5 flex items-center justify-between">
    <div>
      <p className="text-slate-400">Current Rank</p>

      <h3 className="mt-2 text-4xl font-bold">
        #18
      </h3>
    </div>

    <div className="rounded-xl bg-violet-600 px-5 py-3 font-semibold">
      Top 5%
    </div>
  </div>
</div>

{/* AI Coach */}
<div className="mt-6 mb-10 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6">
  <h2 className="text-xl font-bold">
    🤖 AI Coach
  </h2>

  <p className="mt-4 text-slate-300">
    You're ahead of 72% of students.
  </p>

  <p className="mt-2 text-slate-300">
    Complete today's challenge before <span className="font-semibold text-white">8:00 PM</span> to keep your streak alive.
  </p>

  <div className="mt-5 rounded-xl bg-slate-900 p-4">
    <p className="text-sm text-violet-400">
      Today's Suggestion
    </p>

    <p className="mt-2">
      Push your GitHub commit before writing your LinkedIn post to maintain a clean workflow.
    </p>
  </div>
</div>

{/* Challenge Status */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <p className="text-sm font-semibold text-violet-400">
    CHALLENGE STATUS
  </p>

  <h3 className="mt-2 text-xl font-bold">
    Keep your momentum going 🚀
  </h3>

  <div className="mt-5 space-y-3">

    {/* First Day State */}
    <div className="rounded-xl bg-slate-800 p-4">
      <p className="font-semibold">
        🌱 Starting your journey?
      </p>

      <p className="mt-1 text-sm text-slate-400">
        No streak yet. Complete your first challenge to start your
        60-day journey.
      </p>

      <button className="mt-3 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold">
        Start Day 1
      </button>
    </div>

    {/* Missed Day State */}
    <div className="rounded-xl bg-slate-800 p-4">
      <p className="font-semibold">
        ⚠️ Missed a day?
      </p>

      <p className="mt-1 text-sm text-slate-400">
        Don't worry. Your challenge can continue today.
      </p>

      <button className="mt-3 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold">
        Continue Challenge
      </button>
    </div>

    {/* Empty Profile State */}
    <div className="rounded-xl bg-slate-800 p-4">
      <p className="font-semibold">
        👤 Complete your profile
      </p>

      <p className="mt-1 text-sm text-slate-400">
        Add your GitHub and LinkedIn profiles to build your public
        developer presence.
      </p>

      <button className="mt-3 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold">
        Complete Profile
      </button>
    </div>

  </div>
</div>

{/* Quick Stats */}
<div className="mt-6 mb-10 grid grid-cols-3 gap-4">
  <div className="rounded-xl bg-slate-900 p-4 text-center">
    <p className="text-2xl font-bold text-violet-400">60</p>
    <p className="text-xs text-slate-400">Commits</p>
  </div>

  <div className="rounded-xl bg-slate-900 p-4 text-center">
    <p className="text-2xl font-bold text-violet-400">32</p>
    <p className="text-xs text-slate-400">Posts</p>
  </div>

  <div className="rounded-xl bg-slate-900 p-4 text-center">
    <p className="text-2xl font-bold text-violet-400">12</p>
    <p className="text-xs text-slate-400">Projects</p>
  </div>
</div>

    </main>
  );
}