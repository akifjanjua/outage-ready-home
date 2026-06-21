export const metadata = {
  title: "About Outage Ready Home | Backup Power Guides",
  description:
    "Learn about Outage Ready Home, a practical resource for backup power guides, outage calculators, refrigerator backup, emergency lighting and apartment outage kits.",
};

const values = [
  {
    title: "Practical Preparation",
    text: "We focus on realistic outage needs like phone charging, lighting, Wi-Fi, refrigerator backup and apartment-safe power.",
  },
  {
    title: "Clear Explanations",
    text: "Backup power can feel confusing. We explain watt-hours, runtime, surge output and battery size in plain English.",
  },
  {
    title: "Safety First",
    text: "We clearly separate battery-based indoor backup from fuel-burning generators, which should never be used indoors.",
  },
  {
    title: "No Fear-Based Selling",
    text: "The goal is not panic. The goal is helping readers prepare calmly and avoid buying the wrong equipment.",
  },
];

const topics = [
  "Portable power stations",
  "Refrigerator backup batteries",
  "Fridge runtime estimates",
  "Emergency lighting",
  "Apartment outage kits",
  "Phone, laptop and Wi-Fi backup",
  "Power outage checklists",
  "Battery sizing calculators",
];

const process = [
  {
    step: "01",
    title: "Identify the real outage problem",
    text: "We start by asking what the reader actually needs to keep running: fridge, phone, router, lights, laptop or essential devices.",
  },
  {
    step: "02",
    title: "Explain the power requirement",
    text: "We break down the basic wattage, watt-hour and runtime ideas before suggesting any product category.",
  },
  {
    step: "03",
    title: "Guide the next decision",
    text: "We connect readers to calculators, buying guides and related articles so they can make a more confident choice.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            About
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Practical Backup Power Guidance for Everyday Homes
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Outage Ready Home helps homeowners, renters and remote workers plan
            for power outages with simple guides, calculators and safety-focused
            explanations.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides"
              className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Browse Guides
            </a>

            <a
              href="/calculators"
              className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              View Calculators
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Calm outage planning</p>
          <p>Battery sizing before buying</p>
          <p>Safety-focused guidance</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Why This Site Exists
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Backup Power Should Be Easier to Understand
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Many people only start thinking about backup power when a storm,
              outage or emergency is already close. At that point, it is easy to
              buy the wrong power station, underestimate refrigerator runtime or
              rely on unsafe lighting and generator choices.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Outage Ready Home is built around a simpler approach: understand
              what you need to keep running, estimate the load, then choose gear
              that fits your home, apartment, budget and safety needs.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">
                The core idea is simple:
              </p>

              <p className="mt-3 leading-8 text-slate-300">
                Start with your essential devices first. Then estimate battery
                size and runtime before comparing products.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-blue-700">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                What We Cover
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Outage Topics Made Practical
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              The site focuses on common outage problems for normal households,
              apartments and small-space setups.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <div
                key={topic}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                    ✓
                  </span>

                  <p className="font-bold leading-7 text-slate-700">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                How We Help
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                From Confusion to a Clear Outage Plan
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Instead of starting with a product list, we guide readers through
                the basic decision path: what needs power, how long it needs to
                run and what size backup source makes sense.
              </p>
            </div>

            <div className="grid gap-5">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl bg-slate-50 p-6"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 font-black text-slate-950">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
              Safety Note
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Indoor Backup Power Needs Care
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Battery power stations can be useful indoors when used according
              to manufacturer instructions. Fuel-burning generators are
              different and should not be used indoors, in garages, on balconies
              or near windows.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-7">
            <p className="font-black text-yellow-300">
              Planning estimates are not guarantees.
            </p>

            <p className="mt-3 leading-8 text-slate-300">
              Calculator results and guide examples are meant to help with
              planning. Real runtime can change based on equipment, temperature,
              usage, battery condition and manufacturer limits.
            </p>

            <a
              href="/editorial-policy"
              className="mt-6 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1"
            >
              Read Editorial Policy
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Start Planning
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Build Your Outage Plan Step by Step
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Start with the guides, use the calculators and choose backup gear
            based on your actual needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Browse Guides
            </a>

            <a
              href="/calculators/power-station-size"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Battery Calculator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}