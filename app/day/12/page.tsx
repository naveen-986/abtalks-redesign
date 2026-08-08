export default function ChallengeDay() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">

      {/* Header */}
      <h1 className="text-3xl font-bold">
        Day 12 Challenge 🚀
      </h1>

      <p className="mt-2 text-slate-400">
        Complete today's task and submit your proof of work.
      </p>

      {/* Task Card */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold text-violet-400">
          TODAY'S TASK
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          Build a Weather Dashboard
        </h2>

        <p className="mt-4 text-slate-400">
          Create a responsive weather dashboard using any public weather API.
          Show temperature, humidity, wind speed and a 5-day forecast.
        </p>

        <div className="mt-6 flex gap-2">
          <span className="rounded-full bg-violet-600 px-3 py-1 text-sm">
            React
          </span>

          <span className="rounded-full bg-slate-700 px-3 py-1 text-sm">
            API
          </span>

          <span className="rounded-full bg-slate-700 px-3 py-1 text-sm">
            Responsive
          </span>
        </div>
      </div>

      {/* Checklist */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">
          ✅ Checklist
        </h2>

        <div className="mt-5 space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" />
            Build the project
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            Push GitHub commit
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            Share LinkedIn post
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            Write reflection
          </label>
        </div>
      </div>

      {/* Resources */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="text-xl font-bold">
    📚 Helpful Resources
  </h2>

  <ul className="mt-4 space-y-3 text-slate-300">
    <li>🔗 OpenWeather API Documentation</li>
    <li>🎨 Responsive UI Inspiration</li>
    <li>📘 React Documentation</li>
  </ul>
</div>

      {/* Submission */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">
          Submit Proof of Work
        </h2>

        <div className="mt-5">
          <label className="mb-2 block text-sm text-slate-400">
            GitHub Repository / Commit
          </label>

          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="https://github.com/username/project"
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm text-slate-400">
            LinkedIn Post
          </label>

          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="https://linkedin.com/posts/..."
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm text-slate-400">
            Reflection
          </label>

          <textarea
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            rows={4}
            placeholder="What did you learn today?"
          />
        </div>

        <button className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold">
          Submit Day 12
        </button>
      </div>

      {/* Success Card */}
      <div className="mt-6 mb-10 rounded-2xl border border-green-600/30 bg-green-600/10 p-6 text-center">
        <h2 className="text-xl font-bold">
          🔥 Keep Going!
        </h2>

        <p className="mt-3 text-slate-300">
          After submission your streak will become
        </p>

        <p className="mt-2 text-4xl font-bold text-green-400">
          13 Days
        </p>
      </div>

    </main>
  );
}