export const metadata = {
  title: "Power Outage Guides | Outage Ready Home",
  description:
    "Browse practical power outage guides for backup power, refrigerator backup, apartment outage kits, emergency lighting and outage preparedness.",
};

const guides = [
  {
    category: "Backup Power",
    title: "Best Portable Power Stations for Home Outages",
    description:
      "A practical guide to choosing the right battery size, output level and backup power setup for common home essentials.",
    href: "/guides/best-portable-power-stations",
    icon: "🔋",
  },
  {
    category: "Fridge Backup",
    title: "Best Backup Battery for a Refrigerator",
    description:
      "Learn how to choose a refrigerator backup battery based on watt-hours, surge output, runtime and real outage needs.",
    href: "/guides/refrigerator-backup-battery",
    icon: "❄️",
  },
  {
    category: "Runtime Guide",
    title: "How Long Can a Portable Power Station Run a Refrigerator?",
    description:
      "Estimate refrigerator runtime using battery size, fridge wattage, efficiency losses and real-world outage conditions.",
    href: "/guides/how-long-can-portable-power-station-run-refrigerator",
    icon: "⏱️",
  },
  {
    category: "Apartment Kit",
    title: "Best Power Outage Kit for Apartments",
    description:
      "Build a safe, compact, renter-friendly outage kit with battery backup, lighting, food, water and communication essentials.",
    href: "/guides/apartment-power-outage-kit",
    icon: "🏢",
  },
  {
    category: "Emergency Lighting",
    title: "Best Emergency Lights for Power Outages",
    description:
      "Choose rechargeable lanterns, plug-in outage lights, headlamps and backup lighting for homes and apartments.",
    href: "/guides/best-emergency-lights-for-power-outages",
    icon: "💡",
  },
  {
  category: "Comparison Guide",
  title: "Portable Power Station vs Generator for Home Outages",
  description:
    "Compare battery power stations and fuel generators by safety, noise, fuel, maintenance, apartment use and outage length.",
  href: "/guides/portable-power-station-vs-generator",
  icon: "⚡",
},
{
  category: "Internet Backup",
  title: "How to Keep Wi-Fi Running During a Power Outage",
  description:
    "Keep your router, modem and home office devices powered during outages with a battery, mini UPS or power station.",
  href: "/guides/how-to-keep-wifi-running-during-power-outage",
  icon: "📶",
},
{
  category: "Phone Backup",
  title: "Best Power Banks for Power Outages",
  description:
    "Choose the right power bank size for phone charging, USB-C devices and budget-friendly outage backup.",
  href: "/guides/best-power-banks-for-power-outages",
  icon: "📱",
},
];

const startingPoints = [
  {
    label: "I need basic backup power",
    title: "Start with the portable power station guide",
    text: "Learn what size battery, output level and features matter before buying.",
    href: "/guides/best-portable-power-stations",
    button: "Read Power Station Guide",
  },
  {
    label: "I want to keep my fridge running",
    title: "Use the fridge runtime path",
    text: "Estimate how long a battery may run your refrigerator, then choose a suitable backup size.",
    href: "/calculators/fridge-runtime",
    button: "Use Fridge Calculator",
  },
  {
    label: "I live in an apartment",
    title: "Build a compact, renter-safe kit",
    text: "Focus on indoor-safe battery backup, lighting, phone charging, food and water.",
    href: "/guides/apartment-power-outage-kit",
    button: "View Apartment Kit",
  },
  {
    label: "I need emergency lighting",
    title: "Choose safer outage lights",
    text: "Compare lanterns, plug-in outage lights, headlamps and motion lights for each room.",
    href: "/guides/best-emergency-lights-for-power-outages",
    button: "Read Lighting Guide",
  },
  {
    label: "I do not know what size battery I need",
    title: "Start with the battery size calculator",
    text: "Enter your device wattage, runtime target and efficiency to estimate watt-hours.",
    href: "/calculators/power-station-size",
    button: "Open Calculator",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Guides
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Practical Power Outage Guides
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Clear, calm and practical guides for choosing backup power,
            emergency lighting, refrigerator backup and apartment-safe outage
            kits without overbuying.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/calculators/power-station-size"
              className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Estimate Battery Size
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
          <p>Use-case focused guides</p>
          <p>Plain-English backup power planning</p>
          <p>Designed for normal homes and apartments</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.25rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
                Choose Your Starting Point
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Not Sure Which Guide to Read First?
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-300">
              Start with the situation that sounds closest to yours. Each path
              sends you to the most useful guide or calculator first.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {startingPoints.map((point) => (
              <a
                key={point.label}
                href={point.href}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr_auto] md:items-center">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-yellow-300">
                      {point.label}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      {point.title}
                    </h3>
                  </div>

                  <p className="leading-7 text-slate-300">{point.text}</p>

                  <span className="inline-flex rounded-full bg-white px-5 py-3 text-center text-sm font-black text-slate-950 transition group-hover:bg-yellow-300">
                    {point.button} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                All Guides
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Browse All 8 Outage Guides
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Each guide is built around a specific outage problem: keeping food
              cold, lighting rooms, preparing small spaces or estimating
              runtime.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <a
                key={guide.title}
                href={guide.href}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-4xl transition group-hover:bg-blue-600">
                  <span className="transition group-hover:scale-110">
                    {guide.icon}
                  </span>
                </div>

                <span className="mt-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  {guide.category}
                </span>

                <h3 className="mt-5 text-2xl font-black leading-tight">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {guide.description}
                </p>

                <p className="mt-6 font-black text-blue-600">
                  Read guide →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Still Unsure?
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Start With a Calculator
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            If you are not sure which guide to read first, estimate the battery
            size for the device you care about most.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/calculators/power-station-size"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Battery Size Calculator
            </a>

            <a
              href="/calculators/fridge-runtime"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Fridge Runtime Calculator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}