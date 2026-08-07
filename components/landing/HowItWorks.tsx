import {
  Code2,
  GitCommitHorizontal,
  Share2,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: Code2,
    title: "Build",
    description: "Complete today's coding challenge.",
  },
  {
    icon: GitCommitHorizontal,
    title: "Commit",
    description: "Push your code to GitHub.",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Post your learning on LinkedIn.",
  },
  {
    icon: Trophy,
    title: "Grow",
    description: "Increase your streak and visibility.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold">
        One Small Action.
        <br />
        Every Single Day.
      </h2>

      <p className="mt-4 text-center text-slate-400">
        Build, commit, share and grow your public portfolio in just 60 days.
      </p>

      {/* Steps */}
      <div className="mx-auto mt-12 max-w-md">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">

                <div className="mb-4 text-sm font-bold text-violet-400">
                  Step 0{index + 1}
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-violet-600 p-3">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="my-4 flex justify-center text-3xl text-violet-400">
                  ↓
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Result Card */}
      <div className="mt-12 rounded-3xl border border-violet-500/30 bg-violet-500/10 p-6 text-center">
        <h3 className="text-2xl font-bold">
          🚀 After 60 Days
        </h3>

        <div className="mt-6 space-y-3">
          <p className="text-slate-300">
            ✅ 60 GitHub Commits
          </p>

          <p className="text-slate-300">
            ✅ 60 LinkedIn Posts
          </p>

          <p className="text-slate-300">
            ✅ 12+ Portfolio Projects
          </p>

          <p className="text-slate-300">
            ✅ Strong Coding Habit
          </p>
        </div>

        <p className="mt-6 text-lg font-semibold text-violet-300">
          Recruiter Ready 💜
        </p>
      </div>
    </section>
  );
}