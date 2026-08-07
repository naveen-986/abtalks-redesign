export default function FutureCard() {
  return (
    <div className="mx-auto mt-10 w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
      <p className="text-sm text-violet-400 font-semibold">
        Your Future After 60 Days
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        Recruiter Ready 🚀
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>GitHub Commits</span>
          <span className="font-bold">60+</span>
        </div>

        <div className="flex justify-between">
          <span>LinkedIn Posts</span>
          <span className="font-bold">60</span>
        </div>

        <div className="flex justify-between">
          <span>Projects Built</span>
          <span className="font-bold">12</span>
        </div>

        <div className="flex justify-between">
          <span>Consistency</span>
          <span className="font-bold text-green-400">
            Excellent
          </span>
        </div>
      </div>
    </div>
  );
}