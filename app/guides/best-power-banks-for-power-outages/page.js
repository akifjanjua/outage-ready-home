import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema from "@/components/FaqSchema";
import GuideMeta from "@/components/GuideMeta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best Power Banks for Power Outages",
  description:
    "Learn how to choose the best power bank for power outages, including phone charging, capacity, USB-C, fast charging and backup planning.",
  path: "/guides/best-power-banks-for-power-outages",
});

const powerBankTypes = [
  {
    title: "10,000mAh Power Bank",
    bestFor: "Light personal backup",
    text: "Good for one person who mainly needs emergency phone charging during short outages.",
  },
  {
    title: "20,000mAh Power Bank",
    bestFor: "Most people",
    text: "A practical middle size for multiple phone charges without becoming too bulky.",
  },
  {
    title: "30,000mAh Power Bank",
    bestFor: "Longer outages or multiple devices",
    text: "Useful if you need more backup capacity for phones, tablets, small lights or multiple people.",
  },
  {
    title: "USB-C Laptop Power Bank",
    bestFor: "Phones, tablets and some laptops",
    text: "Better for users who want phone backup plus occasional laptop or tablet charging.",
  },
];

const buyingFactors = [
  {
    title: "Capacity",
    text: "Capacity is usually listed in mAh. Higher capacity usually means more phone charges, but also more size and weight.",
  },
  {
    title: "Charging Efficiency",
    text: "Power banks do not deliver their full rated capacity to your phone. Some energy is lost during conversion and charging.",
  },
  {
    title: "USB-C Output",
    text: "USB-C is useful for modern phones, tablets and some laptops. Check both output wattage and cable compatibility.",
  },
  {
    title: "Fast Charging",
    text: "Fast charging is helpful, but during outages, total capacity and reliability may matter more than maximum speed.",
  },
  {
    title: "Number of Ports",
    text: "Multiple ports are useful if more than one person needs to charge a phone or small device.",
  },
  {
    title: "Recharge Time",
    text: "A large power bank can take several hours to recharge, so keep it charged before storm season or travel.",
  },
];

const sizeGuide = [
  {
    capacity: "10,000mAh",
    phoneCharges: "About 1.5–2.5 charges",
    bestFor: "Short outages and one phone",
  },
  {
    capacity: "20,000mAh",
    phoneCharges: "About 3–5 charges",
    bestFor: "Most personal outage kits",
  },
  {
    capacity: "30,000mAh",
    phoneCharges: "About 5–7 charges",
    bestFor: "Longer outages or multiple people",
  },
  {
    capacity: "50,000mAh+",
    phoneCharges: "About 8+ charges",
    bestFor: "Large backup needs, tablets or travel",
  },
];

const mistakes = [
  "Assuming a 20,000mAh power bank gives exactly 20,000mAh to your phone.",
  "Buying only for fast charging and ignoring total capacity.",
  "Not checking whether the power bank supports USB-C output.",
  "Keeping the power bank empty until an outage happens.",
  "Using one small power bank for an entire family.",
  "Forgetting cables, wall chargers and adapters.",
];

const faq = [
  {
    question: "What size power bank is best for power outages?",
    answer:
      "For most people, a 20,000mAh power bank is a practical starting point. It is usually large enough for multiple phone charges without being too bulky.",
  },
  {
    question: "How many times can a 20,000mAh power bank charge a phone?",
    answer:
      "A 20,000mAh power bank may provide around 3 to 5 full phone charges depending on phone battery size and charging efficiency.",
  },
  {
    question: "Is a power bank enough for a power outage?",
    answer:
      "A power bank is useful for phones, small USB devices and some lights. It is not a replacement for a portable power station if you need to run a refrigerator, router, laptop or larger devices.",
  },
  {
    question: "Should I buy a power bank or a portable power station?",
    answer:
      "Choose a power bank for phones and small USB devices. Choose a portable power station if you need AC outlets, router backup, laptop charging, refrigerator backup or longer runtime.",
  },
];

export default function BestPowerBanksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <FaqSchema items={faq} />

      <ArticleSchema
        title="Best Power Banks for Power Outages"
        description="Learn how to choose the best power bank for power outages, including phone charging, capacity, USB-C, fast charging, efficiency and backup planning."
        url="/guides/best-power-banks-for-power-outages"
      />

      <article>
        <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Phone Backup Guide
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Best Power Banks for Power Outages
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A power bank is one of the easiest and cheapest outage-prep items
              to buy. It can keep phones, small lights, tablets and USB devices
              running when the power goes out.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/calculators/phone-power-bank-charges"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Phone Charging Calculator
              </a>

              <a
                href="/calculators/power-station-size"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Battery Size Calculator
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
            <p>Budget-friendly outage backup</p>
            <p>Useful for phones and small USB devices</p>
            <p>Capacity matters more than hype</p>
          </div>
        </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    {
      label: "Power Banks",
      href: "/guides/best-power-banks-for-power-outages",
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
                  href="#types"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Power bank types
                </a>

                <a
                  href="#size-guide"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Size guide
                </a>

                <a
                  href="#buying-factors"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Buying factors
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
                href="/calculators/phone-power-bank-charges"
                className="mt-6 flex rounded-2xl bg-blue-600 p-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                Calculate Phone Charges
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
                  What Power Bank Is Best for Outages?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  For most people, a 20,000mAh power bank is the best starting
                  point for power outages. It is usually enough for several phone
                  charges while still being portable and affordable. A 30,000mAh
                  power bank is better for longer outages or multiple people.
                </p>
              </section>

              <section
                id="types"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Best Power Bank Types by Use Case
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Choose based on how many people need charging, how long the
                  outage might last and whether you also need tablet or laptop
                  support.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {powerBankTypes.map((type) => (
                    <div
                      key={type.title}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <h3 className="text-xl font-black text-blue-700">
                        {type.title}
                      </h3>

                      <p className="mt-3 inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-black text-slate-800">
                        {type.bestFor}
                      </p>

                      <p className="mt-4 leading-7 text-slate-600">
                        {type.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="size-guide"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Power Bank Size Guide
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These are rough planning ranges. Real phone charges depend on
                  the phone battery size, power bank efficiency and cable/setup.
                </p>

                <div className="mt-8 grid gap-5 md:hidden">
                  {sizeGuide.map((row) => (
                    <div
                      key={row.capacity}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <p className="text-sm font-black uppercase tracking-wide text-blue-600">
                        {row.capacity}
                      </p>

                      <h3 className="mt-3 text-xl font-black text-slate-950">
                        {row.phoneCharges}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {row.bestFor}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 hidden overflow-hidden rounded-3xl border border-slate-200 md:block">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Capacity
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Estimated Phone Charges
                        </th>
                        <th className="p-5 text-sm font-black uppercase tracking-wide">
                          Best For
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {sizeGuide.map((row) => (
                        <tr
                          key={row.capacity}
                          className="border-t border-slate-200 bg-white"
                        >
                          <td className="p-5 font-black text-blue-600">
                            {row.capacity}
                          </td>

                          <td className="p-5 font-black">
                            {row.phoneCharges}
                          </td>

                          <td className="p-5 leading-7 text-slate-600">
                            {row.bestFor}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section
                id="buying-factors"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  What to Check Before Buying
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {buyingFactors.map((factor) => (
                    <div
                      key={factor.title}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <h3 className="text-xl font-black text-blue-700">
                        {factor.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {factor.text}
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
                  Power Bank Mistakes to Avoid
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
                  Want to Estimate Phone Charges?
                </h2>

                <p className="mt-4 leading-8 text-blue-50">
                  Use the phone charging calculator to estimate how many full
                  charges you may get from a 10,000mAh, 20,000mAh or 30,000mAh
                  power bank.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/calculators/phone-power-bank-charges"
                    className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
                  >
                    Use Phone Calculator
                  </a>

                  <a
                    href="/calculators/wifi-router-runtime"
                    className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
                  >
                    Wi-Fi Runtime Calculator
                  </a>
                </div>
              </section>
<RelatedLinks
  links={[
    {
      label: "Calculator",
      title: "Phone Charging Calculator",
      text: "Estimate how many full phone charges your power bank may provide.",
      href: "/calculators/phone-power-bank-charges",
    },
    {
      label: "Internet Backup",
      title: "Keep Wi-Fi Running During an Outage",
      text: "Learn how to power your router, modem and small home office setup.",
      href: "/guides/how-to-keep-wifi-running-during-power-outage",
    },
    {
      label: "Backup Power",
      title: "Portable Power Station Size Calculator",
      text: "Estimate watt-hours for larger devices beyond phones and USB gear.",
      href: "/calculators/power-station-size",
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