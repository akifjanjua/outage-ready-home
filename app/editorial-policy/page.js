export const metadata = {
  title: "Editorial Policy",
  description:
    "Learn how Outage Ready Home creates practical, safety-focused backup power guides, calculators and product comparison content.",
};

const principles = [
  {
    title: "Practical First",
    text: "We focus on realistic outage problems such as keeping phones charged, lighting rooms, running a router or protecting refrigerator food.",
  },
  {
    title: "No Panic Selling",
    text: "We do not use fear-based language to push people into buying expensive equipment they may not need.",
  },
  {
    title: "Calculator Before Product",
    text: "Whenever possible, we encourage readers to estimate watt-hours, runtime and device loads before comparing products.",
  },
  {
    title: "Safety Matters",
    text: "We clearly separate indoor-safe battery backup from fuel-burning generators, which should not be used indoors, in garages or near windows.",
  },
];

const reviewProcess = [
  "We identify the real outage problem the guide is trying to solve.",
  "We explain important terms such as watt-hours, running watts, surge output and efficiency losses.",
  "We avoid claiming hands-on testing unless a product has actually been tested.",
  "We use placeholder product slots until real product research is completed.",
  "We update pages when recommendations, product categories or safety guidance need improvement.",
];

const contentTypes = [
  {
    title: "Guides",
    text: "Plain-English articles that explain outage planning, battery sizing, emergency lighting and apartment-safe preparation.",
  },
  {
    title: "Calculators",
    text: "Simple tools that help estimate battery size, refrigerator runtime and backup power needs before buying equipment.",
  },
  {
    title: "Product Comparisons",
    text: "Comparison sections that will later include real products after proper research, specification checks and affiliate setup.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Editorial Policy
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            How We Create Outage Guides
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Outage Ready Home is built to help normal households, renters and
            remote workers understand backup power without panic, confusion or
            unnecessary overspending.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Practical advice</p>
          <p>Clear safety notes</p>
          <p>No fake hands-on claims</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Calm, Useful, Safety-Focused Content
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A power outage can be stressful, but preparation content does not
              need to feel extreme. Our goal is to explain what matters, what to
              avoid and how to make a practical plan for common home and
              apartment outage situations.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">
                Important disclosure
              </p>

              <p className="mt-3 leading-8 text-slate-300">
                Some pages may later include affiliate links. If we earn a
                commission, it will not change the price you pay. Product
                placements should still be based on usefulness, specifications
                and fit for the stated use case.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-blue-700">
                  {principle.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {principle.text}
                </p>
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
                Review Process
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                How We Build a Guide
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Each guide should help the reader understand the problem first,
              then choose equipment only after the basic power needs are clear.
            </p>
          </div>

          <div className="mt-12 grid gap-4">
            {reviewProcess.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 font-black text-slate-950">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="leading-7 text-slate-700">{item}</p>
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
                Content Types
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                What We Publish
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Outage Ready Home combines explanatory guides, simple
                calculators and future product comparisons to make backup power
                planning easier.
              </p>
            </div>

            <div className="grid gap-5">
              {contentTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-3xl bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-black text-blue-700">
                    {type.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{type.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Next Step
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Start With the Guides
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Browse practical guides and calculators for backup power,
            refrigerator runtime, emergency lighting and apartment outage kits.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Browse Guides
            </a>

            <a
              href="/calculators"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              View Calculators
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}