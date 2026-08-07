const testimonials = [
  {
    name: "Aarav Sharma",
    college: "IIT Delhi",
    review:
      "The 60-day challenge helped me stay consistent and build an active GitHub profile.",
  },
  {
    name: "Priya Singh",
    college: "NIT Trichy",
    review:
      "Posting daily on LinkedIn made me more confident and helped recruiters notice my work.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-center text-3xl font-bold">
        Loved by Students
      </h2>

      <p className="mt-3 text-center text-slate-400">
        Real stories from learners building in public.
      </p>

      <div className="mt-10 space-y-5">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <p className="italic text-slate-300">
              "{item.review}"
            </p>

            <div className="mt-5">
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-slate-500">
                {item.college}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}