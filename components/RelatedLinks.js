export default function RelatedLinks({
  eyebrow = "Keep Planning",
  title = "Related Outage Planning Resources",
  description = "Use these related guides and calculators to continue building a practical backup power plan.",
  links = [],
}) {
  if (!links.length) return null;

  return (
    <section className="mx-auto my-16 w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
      <p className="font-black uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
        {title}
      </h2>

      <p className="mt-4 leading-8 text-slate-600">{description}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-lg"
          >
            <p className="text-sm font-black uppercase tracking-wide text-blue-600">
              {link.label}
            </p>

            <h3 className="mt-3 text-xl font-black text-slate-950 group-hover:text-blue-600">
              {link.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">{link.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}