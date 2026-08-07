export default function Benefits() {
  const benefits = [
    {
      icon: "🔥",
      title: "Build Consistency",
      description: "Stay accountable by coding every day for 60 days.",
    },
    {
      icon: "💻",
      title: "Strong GitHub Profile",
      description: "Public commits show your consistency to recruiters.",
    },
    {
      icon: "🌐",
      title: "Grow on LinkedIn",
      description: "Share your journey and build your personal brand.",
    },
    {
      icon: "🚀",
      title: "Become Recruiter Ready",
      description: "Finish the challenge with projects, skills and confidence.",
    },
  ];

  return (
    <section className="px-6 py-16">
      <h2 className="text-center text-3xl font-bold">
        Why Join ABTalks?
      </h2>

      <p className="mt-3 text-center text-slate-400">
        More than just coding. Build your career every single day.
      </p>

      <div className="mt-10 grid gap-5">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="text-3xl">{item.icon}</div>

            <h3 className="mt-4 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}