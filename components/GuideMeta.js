export default function GuideMeta({
  updated = "June 2026",
  reviewed = "June 2026",
  type = "Guide",
}) {
  return (
    <section className="border-b border-slate-200 bg-white px-6 py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
            {type} Status
          </p>

          <p className="mt-2 leading-7 text-slate-600">
            This page is maintained as a practical planning resource. Product
            names and affiliate links may be added later after proper research.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:min-w-80">
          <div className="rounded-2xl bg-white p-4">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">
              Last Updated
            </p>
            <p className="mt-1 font-black text-slate-950">{updated}</p>
          </div>

          <div className="rounded-2xl bg-white p-4">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">
              Last Reviewed
            </p>
            <p className="mt-1 font-black text-slate-950">{reviewed}</p>
          </div>
        </div>
      </div>
    </section>
  );
}