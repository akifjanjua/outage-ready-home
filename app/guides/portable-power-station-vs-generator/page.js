import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema from "@/components/FaqSchema";
import GuideMeta from "@/components/GuideMeta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portable Power Station vs Generator for Home Outages",
  description:
    "Compare portable power stations and generators for home outages by safety, noise, fuel, maintenance, apartment use and backup power needs.",
  path: "/guides/portable-power-station-vs-generator",
});

const comparisonRows = [
  {
    feature: "Indoor use",
    powerStation: "Usually usable indoors when used according to instructions",
    generator: "Not safe indoors, in garages, on balconies or near windows",
  },
  {
    feature: "Fuel needed",
    powerStation: "No fuel required during use",
    generator: "Requires gasoline, propane, natural gas or diesel",
  },
  {
    feature: "Noise",
    powerStation: "Usually quiet",
    generator: "Usually noisy",
  },
  {
    feature: "Maintenance",
    powerStation: "Low maintenance, but batteries should be charged and stored properly",
    generator: "Needs fuel, oil, maintenance and safe outdoor placement",
  },
  {
    feature: "Best for apartments",
    powerStation: "Usually the better option",
    generator: "Usually not practical or safe for apartments",
  },
  {
    feature: "Best for long outages",
    powerStation: "Good with enough capacity, solar or extra batteries",
    generator: "Can be strong if fuel is available and outdoor use is safe",
  },
];

const bestForPowerStations = [
  "Apartments, condos and rental homes",
  "Indoor backup for phones, laptops, routers and lights",
  "Quiet overnight backup",
  "Refrigerator backup with the right battery size and surge rating",
  "People who do not want to store fuel",
];

const bestForGenerators = [
  "Longer outages where outdoor generator use is safe",
  "Higher-power appliances and larger loads",
  "Homes with safe outdoor placement away from openings",
  "Situations where fuel storage and maintenance are manageable",
];

const decisionPaths = [
  {
    title: "Choose a portable power station if...",
    text: "You need quiet indoor battery backup for smaller essentials, apartment use, phone charging, Wi-Fi, laptops, lights or selected refrigerator backup.",
  },
  {
    title: "Choose a generator if...",
    text: "You need higher power for longer outages and can operate the generator safely outdoors with proper ventilation and fuel handling.",
  },
  {
    title: "Consider both if...",
    text: "You want battery backup for quiet indoor overnight use and a generator for longer outdoor-supported outages.",
  },
];

const mistakes = [
  "Using a fuel-burning generator indoors, in a garage, on a balcony or near windows.",
  "Buying a small power station and expecting it to run high-drain appliances.",
  "Ignoring refrigerator startup surge requirements.",
  "Forgetting that generators need fuel, maintenance and safe outdoor placement.",
  "Assuming a power station will run everything in the house.",
  "Waiting until an outage to test your backup setup.",
];

const faq = [
  {
    question: "Is a portable power station better than a generator?",
    answer:
      "It depends on the use case. A portable power station is usually better for quiet indoor backup, apartments, phones, routers, laptops and lights. A fuel generator may be better for higher power needs and longer outages if it can be operated safely outdoors.",
  },
  {
    question: "Can I use a generator indoors?",
    answer:
      "No. Fuel-burning generators should not be used indoors, in garages, on balconies or near windows because of carbon monoxide risk.",
  },
  {
    question: "Can a portable power station run a refrigerator?",
    answer:
      "Yes, many portable power stations can run a refrigerator if they have enough watt-hour capacity, continuous output and surge output for that specific fridge.",
  },
  {
    question: "What is better for an apartment: power station or generator?",
    answer:
      "For most apartments, a portable power station is the better option because it can be used indoors when operated according to instructions and does not require fuel combustion.",
  },
];

export default function PowerStationVsGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <FaqSchema items={faq} />

      <ArticleSchema
        title="Portable Power Station vs Generator for Home Outages"
        description="Compare portable power stations and fuel generators for home outages, including indoor safety, runtime, cost, noise, apartment use and best use cases."
        url="/guides/portable-power-station-vs-generator"
      />

      <article>
        <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Backup Power Comparison
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Portable Power Station vs Generator for Home Outages
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Portable power stations and fuel generators both provide backup
              power, but they solve different problems. The right choice depends
              on indoor safety, power needs, noise, fuel, maintenance, outage
              length and where you live.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/calculators/power-station-size"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Estimate Battery Size
              </a>

              <a
                href="/guides/best-portable-power-stations"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Power Station Guide
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
            <p>Power stations are quiet battery backup</p>
            <p>Generators need safe outdoor operation</p>
            <p>Choose based on use case, not hype</p>
          </div>
        </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    {
      label: "Power Station vs Generator",
      href: "/guides/portable-power-station-vs-generator",
    },
  ]}
/>
        <GuideMeta />

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                Quick Navigation
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href="#quick-answer"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Quick answer
                </a>

                <a
                  href="#comparison"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Comparison
                </a>

                <a
                  href="#best-for"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Best for
                </a>

                <a
                  href="#decision"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Which should you choose?
                </a>

                <a
                  href="#mistakes"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Mistakes
                </a>

                <a
                  href="#faq"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  FAQ
                </a>
              </div>

              <a
                href="/guides/apartment-power-outage-kit"
                className="mt-6 flex rounded-2xl bg-blue-600 p-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                View Apartment Kit
              </a>
            </aside>

            <div className="grid min-w-0 gap-12">
              <section
                id="quick-answer"
                className="rounded-[2rem] border border-yellow-200 bg-yellow-50 p-7 shadow-sm md:p-10"
              >
                <p className="font-black uppercase tracking-[0.18em] text-yellow-700">
                  Quick Answer
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight">
                  Which Is Better: Power Station or Generator?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  A portable power station is usually better for quiet indoor
                  backup, apartments, phones, laptops, routers, lights and
                  smaller essentials. A fuel generator may be better for longer
                  outages or higher power needs, but it must be used safely
                  outdoors and requires fuel, ventilation and maintenance.
                </p>
              </section>

              <section
                id="comparison"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Portable Power Station vs Generator Comparison
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  The biggest difference is not just battery versus fuel. It is
                  how and where each backup source can be used safely.
                </p>

                <div className="mt-8 grid gap-5 md:hidden">
                  {comparisonRows.map((row) => (
                    <div
                      key={row.feature}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <p className="text-sm font-black uppercase tracking-wide text-blue-600">
                        {row.feature}
                      </p>

                      <div className="mt-5 grid gap-4">
                        <div className="rounded-2xl bg-white p-4">
                          <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                            Portable Power Station
                          </p>
                          <p className="mt-2 leading-7 text-slate-700">
                            {row.powerStation}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-4">
                          <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                            Generator
                          </p>
                          <p className="mt-2 leading-7 text-slate-700">
                            {row.generator}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 hidden overflow-hidden rounded-3xl border border-slate-200 md:block">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Feature
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Portable Power Station
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Generator
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-t border-slate-200 bg-white"
                        >
                          <td className="p-5 font-black text-blue-600">
                            {row.feature}
                          </td>

                          <td className="p-5 leading-7 text-slate-700">
                            {row.powerStation}
                          </td>

                          <td className="p-5 leading-7 text-slate-700">
                            {row.generator}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section
                id="best-for"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  What Each Option Is Best For
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-2xl font-black text-blue-700">
                      Portable Power Stations
                    </h3>

                    <div className="mt-5 grid gap-3">
                      {bestForPowerStations.map((item) => (
                        <div key={item} className="flex gap-3">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                            ✓
                          </span>

                          <p className="leading-7 text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-2xl font-black text-blue-700">
                      Fuel Generators
                    </h3>

                    <div className="mt-5 grid gap-3">
                      {bestForGenerators.map((item) => (
                        <div key={item} className="flex gap-3">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                            ✓
                          </span>

                          <p className="leading-7 text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="decision"
                className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Which Backup Option Should You Choose?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Start with your living situation, the devices you need to run
                  and whether safe outdoor generator operation is realistic.
                </p>

                <div className="mt-8 grid gap-5">
                  {decisionPaths.map((path) => (
                    <div
                      key={path.title}
                      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                    >
                      <h3 className="text-xl font-black text-yellow-300">
                        {path.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">
                        {path.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="mistakes"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Common Mistakes to Avoid
                </h2>

                <div className="mt-6 grid gap-4">
                  {mistakes.map((mistake) => (
                    <div
                      key={mistake}
                      className="flex gap-4 rounded-3xl bg-slate-50 p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
                        !
                      </span>

                      <p className="leading-7 text-slate-700">{mistake}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] bg-blue-600 p-7 text-white shadow-sm md:p-10">
                <h2 className="text-3xl font-black tracking-tight">
                  Planning Battery Backup First?
                </h2>

                <p className="mt-4 leading-8 text-blue-50">
                  Use the calculator to estimate the battery size you may need
                  for phones, routers, lights, laptops or selected appliances.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/calculators/power-station-size"
                    className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
                  >
                    Use Battery Calculator
                  </a>

                  <a
                    href="/guides/best-portable-power-stations"
                    className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
                  >
                    Read Power Station Guide
                  </a>
                </div>
              </section>
<RelatedLinks
  links={[
    {
      label: "Backup Power",
      title: "Best Portable Power Stations",
      text: "Learn how to compare battery capacity, output, charging and outage use cases.",
      href: "/guides/best-portable-power-stations",
    },
    {
      label: "Calculator",
      title: "Power Station Size Calculator",
      text: "Estimate the battery size needed for your fridge, router, lights and essentials.",
      href: "/calculators/power-station-size",
    },
    {
      label: "Apartment Setup",
      title: "Best Power Outage Kit for Apartments",
      text: "Build a renter-safe outage setup without fuel, noise or outdoor storage.",
      href: "/guides/apartment-power-outage-kit",
    },
  ]}
/>
              <section
                id="faq"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">FAQ</h2>

                <div className="mt-8 grid gap-7">
                  {faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-xl font-black">{item.question}</h3>

                      <p className="mt-3 leading-8 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}