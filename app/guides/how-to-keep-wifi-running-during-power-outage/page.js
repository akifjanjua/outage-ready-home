import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema from "@/components/FaqSchema";
import GuideMeta from "@/components/GuideMeta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How to Keep Wi-Fi Running During a Power Outage",
  description:
    "Learn how to keep Wi-Fi running during a power outage using a power station, UPS, power bank, router backup battery or home internet backup setup.",
  path: "/guides/how-to-keep-wifi-running-during-power-outage",
});

const options = [
  {
    title: "Portable Power Station",
    bestFor: "Router, modem, laptop and longer backup",
    text: "A portable power station is one of the most flexible options because it can power a router, modem, laptop, phone charger and small light at the same time.",
  },
  {
    title: "Mini UPS for Router",
    bestFor: "Router-only or modem-router backup",
    text: "A small router UPS can keep internet equipment running through short outages without needing a large battery.",
  },
  {
    title: "USB-C Power Bank",
    bestFor: "Compatible routers and small setups",
    text: "Some routers can run from USB-C or DC power with the right cable or adapter, making a power bank useful for compact backup.",
  },
  {
    title: "Full Home UPS",
    bestFor: "Desktop, router, modem and office gear",
    text: "A larger UPS can support a desktop setup briefly, but runtime may be limited if the load is high.",
  },
];

const setupSteps = [
  {
    step: "01",
    title: "Find out what needs power",
    text: "Check whether your home internet needs only a router, or both a modem and router. Many homes need both powered at the same time.",
  },
  {
    step: "02",
    title: "Estimate the total watts",
    text: "Add the router watts, modem watts and any extra devices such as a laptop, light or phone charger.",
  },
  {
    step: "03",
    title: "Choose a backup battery",
    text: "Use a power station, mini UPS or compatible power bank based on the total load and how many hours of backup you need.",
  },
  {
    step: "04",
    title: "Test before an outage",
    text: "Plug your internet equipment into the backup source and confirm it works before you actually need it.",
  },
];

const backupSizes = [
  {
    setup: "Router only",
    load: "10W–15W",
    battery: "150Wh–300Wh",
    note: "Good for short to medium outages if your internet provider stays online.",
  },
  {
    setup: "Router + modem",
    load: "20W–35W",
    battery: "300Wh–500Wh",
    note: "A practical range for many home internet backup setups.",
  },
  {
    setup: "Router + modem + laptop",
    load: "60W–100W+",
    battery: "500Wh–1,000Wh",
    note: "Better for remote work, but runtime drops as laptop load increases.",
  },
  {
    setup: "Small home office",
    load: "100W+",
    battery: "1,000Wh+",
    note: "Useful if you need internet, laptop, lights and small work devices.",
  },
];

const mistakes = [
  "Powering only the router when the modem also needs backup power.",
  "Assuming internet will work if the provider network is also down.",
  "Running a laptop, monitor and lights from a tiny router backup battery.",
  "Waiting until an outage to test the setup.",
  "Ignoring battery efficiency and conversion losses.",
  "Using high-drain devices from the same backup source unnecessarily.",
];

const faq = [
  {
    question: "Can Wi-Fi work during a power outage?",
    answer:
      "Yes, Wi-Fi can work during a power outage if your router and modem have backup power and your internet provider’s network is still operating.",
  },
  {
    question: "What is the best way to keep Wi-Fi running during an outage?",
    answer:
      "For many homes, a small portable power station or router UPS is the easiest option. A power station is more flexible because it can also power a laptop, phone charger or light.",
  },
  {
    question: "How many watts does a Wi-Fi router use?",
    answer:
      "Many routers use roughly 10 to 20 watts, but the exact number depends on the model. A separate modem can add more power draw.",
  },
  {
    question: "Can a power bank run a Wi-Fi router?",
    answer:
      "Sometimes. It depends on the router’s power input and whether you have a compatible USB-C, DC or adapter setup. Always check the router requirements first.",
  },
];

export default function KeepWifiRunningPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <FaqSchema items={faq} />

      <ArticleSchema
        title="How to Keep Wi-Fi Running During a Power Outage"
        description="Learn how to keep Wi-Fi running during a power outage using a power station, UPS, power bank, router backup battery or home internet backup setup."
        url="/guides/how-to-keep-wifi-running-during-power-outage"
      />

      <article>
        <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Internet Backup Guide
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              How to Keep Wi-Fi Running During a Power Outage
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Wi-Fi can keep working during a power outage if your router and
              modem have backup power and your internet provider’s network is
              still online. The best setup depends on how many devices you need
              to power and how long the outage lasts.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/calculators/wifi-router-runtime"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Use Wi-Fi Runtime Calculator
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
            <p>Router and modem backup</p>
            <p>Useful for remote work and students</p>
            <p>Test before the outage happens</p>
          </div>
        </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    {
      label: "Wi-Fi Outage Backup",
      href: "/guides/how-to-keep-wifi-running-during-power-outage",
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
                  href="#options"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Backup options
                </a>

                <a
                  href="#setup"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Setup steps
                </a>

                <a
                  href="#sizes"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Battery sizes
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
                href="/calculators/wifi-router-runtime"
                className="mt-6 flex rounded-2xl bg-blue-600 p-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                Calculate Wi-Fi Runtime
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
                  How Can You Keep Wi-Fi Working During an Outage?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  To keep Wi-Fi running during a power outage, power both the
                  router and modem with a backup battery, mini UPS or portable
                  power station. A small router UPS may work for short outages,
                  while a portable power station is better if you also need a
                  laptop, phone charger or light.
                </p>
              </section>

              <section
                id="options"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Best Ways to Keep Wi-Fi Running
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  The right option depends on whether you only need internet
                  equipment or a larger home office setup.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {options.map((option) => (
                    <div
                      key={option.title}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <h3 className="text-xl font-black text-blue-700">
                        {option.title}
                      </h3>

                      <p className="mt-3 inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-black text-slate-800">
                        {option.bestFor}
                      </p>

                      <p className="mt-4 leading-7 text-slate-600">
                        {option.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="setup"
                className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Simple Wi-Fi Backup Setup Steps
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Before buying anything, figure out exactly which internet
                  devices need power.
                </p>

                <div className="mt-8 grid gap-5">
                  {setupSteps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                    >
                      <div className="flex gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 font-black text-slate-950">
                          {item.step}
                        </div>

                        <div>
                          <h3 className="text-xl font-black text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 leading-7 text-slate-300">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="sizes"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Wi-Fi Backup Battery Size Guide
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These are planning ranges. Your actual runtime depends on
                  router wattage, modem wattage, battery efficiency and any
                  extra devices.
                </p>

                <div className="mt-8 grid gap-5 md:hidden">
                  {backupSizes.map((row) => (
                    <div
                      key={row.setup}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <p className="text-sm font-black uppercase tracking-wide text-blue-600">
                        {row.setup}
                      </p>

                      <h3 className="mt-3 text-xl font-black text-slate-950">
                        {row.battery}
                      </h3>

                      <p className="mt-3 font-bold text-slate-700">
                        Typical load: {row.load}
                      </p>

                      <p className="mt-4 leading-7 text-slate-600">
                        {row.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 hidden overflow-hidden rounded-3xl border border-slate-200 md:block">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Setup
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Typical Load
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Starting Battery
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Note
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {backupSizes.map((row) => (
                        <tr
                          key={row.setup}
                          className="border-t border-slate-200 bg-white"
                        >
                          <td className="p-5 font-black text-blue-600">
                            {row.setup}
                          </td>

                          <td className="p-5 font-bold">{row.load}</td>

                          <td className="p-5 font-black">{row.battery}</td>

                          <td className="p-5 leading-7 text-slate-600">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section
                id="mistakes"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Common Wi-Fi Backup Mistakes
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
                  Want to Estimate Your Runtime?
                </h2>

                <p className="mt-4 leading-8 text-blue-50">
                  Use the Wi-Fi runtime calculator to estimate how long your
                  router, modem and small home office devices may run from a
                  backup battery.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/calculators/wifi-router-runtime"
                    className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
                  >
                    Use Wi-Fi Calculator
                  </a>

                  <a
                    href="/calculators/power-station-size"
                    className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
                  >
                    Battery Size Calculator
                  </a>
                </div>
              </section>
<RelatedLinks
  links={[
    {
      label: "Calculator",
      title: "Wi-Fi Runtime Calculator",
      text: "Estimate how long your router, modem and home office devices may run.",
      href: "/calculators/wifi-router-runtime",
    },
    {
      label: "Phone Backup",
      title: "Best Power Banks for Power Outages",
      text: "Choose a simple backup option for phones, tablets and USB devices.",
      href: "/guides/best-power-banks-for-power-outages",
    },
    {
      label: "Backup Power",
      title: "Portable Power Station vs Generator",
      text: "Compare battery backup and fuel generators for home outages.",
      href: "/guides/portable-power-station-vs-generator",
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