import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Power Outage Calculators",
  description:
    "Use free outage calculators to estimate power station size, fridge runtime, Wi-Fi backup runtime, phone power bank charges and apartment outage kit needs.",
  path: "/calculators",
  type: "website",
});

const calculators = [
  {
    label: "Battery Size",
    title: "Portable Power Station Size Calculator",
    description:
      "Estimate how many watt-hours you need for fridges, routers, lights, laptops, CPAP machines and essential devices.",
    href: "/calculators/power-station-size",
    icon: "🔋",
    status: "Available now",
    bestFor: "Sizing backup power",
  },
  {
    label: "Fridge Backup",
    title: "Fridge Runtime Calculator",
    description:
      "Estimate how long a portable power station or battery may run your refrigerator during an outage.",
    href: "/calculators/fridge-runtime",
    icon: "❄️",
    status: "Available now",
    bestFor: "Food safety planning",
  },
  {
    label: "Internet Backup",
    title: "Wi-Fi Router Runtime Calculator",
    description:
      "Estimate how long a battery may keep your router, modem and small home office devices powered.",
    href: "/calculators/wifi-router-runtime",
    icon: "📶",
    status: "Available now",
    bestFor: "Remote work and internet",
  },
  {
    label: "Phone Backup",
    title: "Power Bank Phone Charging Calculator",
    description:
      "Estimate how many full phone charges a power bank may provide during a power outage.",
    href: "/calculators/phone-power-bank-charges",
    icon: "📱",
    status: "Available now",
    bestFor: "Phones and small USB devices",
  },
  {
    label: "Apartment Kit",
    title: "Apartment Outage Kit Builder",
    description:
      "Build a compact, renter-safe outage kit based on people, outage length, lights, water, food and charging needs.",
    href: "/calculators/apartment-outage-kit-builder",
    icon: "🏢",
    status: "Available now",
    bestFor: "Apartment and renter-safe prep",
  },
];

const planningSteps = [
  {
    title: "Start with essentials",
    text: "Choose the devices or needs that matter most during an outage: fridge, Wi-Fi, phone charging, lighting or apartment basics.",
  },
  {
    title: "Estimate runtime",
    text: "Use the calculators to turn rough needs into practical watt-hour, battery or kit estimates.",
  },
  {
    title: "Compare real products later",
    text: "Use the results as planning numbers before comparing product specifications, safety limits and real-world reviews.",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Free Outage Tools
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Power Outage Calculators
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Estimate battery size, fridge runtime, Wi-Fi backup, phone charging
            and apartment outage kit needs before buying backup power gear.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>5 working calculators</p>
          <p>Built for practical outage planning</p>
          <p>Use estimates before buying gear</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <article
              key={calculator.href}
              className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {calculator.icon}
                </div>

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-800">
                  {calculator.status}
                </span>
              </div>

              <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-blue-600">
                {calculator.label}
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight group-hover:text-blue-600">
                {calculator.title}
              </h2>

              <p className="mt-4 flex-1 leading-8 text-slate-600">
                {calculator.description}
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Best for
                </p>

                <p className="mt-1 font-bold text-slate-800">
                  {calculator.bestFor}
                </p>
              </div>

              <a
                href={calculator.href}
                className="mt-7 inline-flex rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Open Calculator →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              How to Use These Tools
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Estimate First, Then Compare Products
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These calculators are planning tools. They help you understand
              rough battery size, runtime and kit needs before you compare real
              power stations, power banks or outage gear.
            </p>
          </div>

          <div className="grid gap-5">
            {planningSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-black">{step.title}</h3>

                  <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Next Step
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Start With Battery Size
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            If you are not sure where to begin, start with the portable power
            station size calculator and then move to fridge, Wi-Fi, phone or
            apartment-specific planning.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/calculators/power-station-size"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Battery Size Calculator
            </a>

            <a
              href="/guides"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Browse Guides
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}