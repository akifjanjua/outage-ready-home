import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema from "@/components/FaqSchema";
import GuideMeta from "@/components/GuideMeta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best Portable Power Stations for Home Outages",
  description:
    "Compare portable power station sizes, battery capacity, output, runtime and home outage use cases before choosing backup power gear.",
  path: "/guides/best-portable-power-stations",
});

const quickPicks = [
  {
    label: "Best for Most Homes",
    title: "1,500Wh–2,000Wh Power Station",
    text: "A practical middle range for refrigerators, routers, lights, laptops and basic home essentials during shorter outages.",
  },
  {
    label: "Best for Apartments",
    title: "500Wh–1,000Wh Compact Power Station",
    text: "Good for renters who mainly need phones, laptops, Wi-Fi, lights and small devices without storing bulky equipment.",
  },
  {
    label: "Best for Fridge Backup",
    title: "2,000Wh–3,000Wh Power Station",
    text: "A stronger range for refrigerator backup, especially if you want overnight support or also need to run small extras.",
  },
  {
    label: "Best for Longer Outages",
    title: "Expandable Battery System",
    text: "Useful when you need more than one day of backup or want solar charging and extra battery expansion later.",
  },
];

const productSlots = [
  {
    pick: "Best Overall Placeholder",
    title: "Mid-Size Home Backup Power Station",
    capacity: "1,500Wh–2,000Wh",
    bestFor: "Most home outage setups",
    text: "This slot will later be used for a real product after current model research. For now, this represents the ideal mid-size category.",
  },
  {
    pick: "Best Budget Placeholder",
    title: "Compact Backup Power Station",
    capacity: "500Wh–1,000Wh",
    bestFor: "Apartments, routers, laptops and lights",
    text: "This slot is for a lower-cost option that still covers smaller outage needs without overbuying.",
  },
  {
    pick: "Best Fridge Backup Placeholder",
    title: "Large Refrigerator Backup Station",
    capacity: "2,000Wh–3,000Wh",
    bestFor: "Refrigerators and overnight backup",
    text: "This slot will later compare real fridge-capable models with enough output and surge support.",
  },
];

const sizeGuide = [
  {
    need: "Phones, lights, router",
    range: "300Wh–700Wh",
    note: "Good for basic communication and small devices.",
  },
  {
    need: "Laptop, router, lights",
    range: "500Wh–1,000Wh",
    note: "Useful for work-from-home backup during short outages.",
  },
  {
    need: "Refrigerator only",
    range: "1,500Wh–3,000Wh",
    note: "Depends heavily on fridge wattage, cycling and target runtime.",
  },
  {
    need: "Fridge + router + lights",
    range: "2,000Wh–3,000Wh+",
    note: "Better for overnight backup and multiple essentials.",
  },
];

const factors = [
  {
    title: "Battery Capacity",
    text: "Capacity is measured in watt-hours. A larger number usually means longer runtime, but it also increases cost and weight.",
  },
  {
    title: "Continuous Output",
    text: "The power station must support the watts your devices need while running. High-watt appliances need more output.",
  },
  {
    title: "Surge Output",
    text: "Refrigerators and some appliances need extra startup power. Check surge rating before relying on a power station.",
  },
  {
    title: "Battery Chemistry",
    text: "LiFePO4 batteries are often preferred for long cycle life, but product quality still matters.",
  },
  {
    title: "Recharge Speed",
    text: "Fast wall charging is useful if outages are frequent. Solar charging can help during longer outages if conditions are good.",
  },
  {
    title: "Ports and Layout",
    text: "Check AC outlets, USB-C, car ports and whether the layout works for the devices you plan to run.",
  },
];

const mistakes = [
  "Buying based only on headline capacity without checking output.",
  "Ignoring refrigerator startup surge requirements.",
  "Assuming a 1,000Wh battery gives exactly 1,000Wh of usable runtime.",
  "Trying to run heaters, kettles, microwaves or other high-drain appliances.",
  "Choosing a large power station that is too heavy to move or store easily.",
  "Forgetting to recharge the unit before storm season or travel.",
];
const faq = [
  {
    question: "Is a portable power station enough for a home outage?",
    answer:
      "It can be enough for selected essentials such as phones, routers, laptops, lights and sometimes refrigerators. It is not usually meant to run an entire home like a permanent standby generator.",
  },
  {
    question: "What size power station do I need for a refrigerator?",
    answer:
      "Many refrigerator backup setups start around 1,500Wh to 3,000Wh, but the right size depends on fridge wattage, efficiency, room temperature, door openings and desired runtime.",
  },
  {
    question: "Can I use a portable power station indoors?",
    answer:
      "Battery power stations are commonly used indoors when operated according to manufacturer instructions. Fuel generators should not be used indoors, in garages or near windows.",
  },
  {
    question: "Should I buy the biggest power station I can afford?",
    answer:
      "Not always. Larger units cost more and can be heavy. It is better to estimate your real loads first, then choose a size that fits your needs and storage space.",
  },
];
export default function BestPortablePowerStationsPage() {
  return (
  <main className="min-h-screen bg-slate-50 text-slate-950">
  <FaqSchema items={faq} />
  <ArticleSchema
    title="Best Portable Power Stations for Home Outages"
    description="Learn how to choose the best portable power station for home outages, including battery size, output, surge rating, ports, recharge speed and use cases."
    url="/guides/best-portable-power-stations"
  />
      <article>
        <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Backup Power Guide
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Best Portable Power Stations for Home Outages
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A portable power station can keep phones, routers, laptops,
              lights, refrigerators and essential devices running during an
              outage. The key is choosing the right battery size and output for
              your actual needs.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/calculators/power-station-size"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Estimate Battery Size
              </a>

              <a
                href="/calculators/fridge-runtime"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Fridge Runtime Tool
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
            <p>Start with watt-hours</p>
            <p>Check output and surge rating</p>
            <p>Match the power station to your real devices</p>
          </div>
        </section>
        <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    {
      label: "Best Portable Power Stations",
      href: "/guides/best-portable-power-stations",
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
                  href="#top-picks"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Top categories
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
                href="/calculators/power-station-size"
                className="mt-6 flex rounded-2xl bg-blue-600 p-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                Use Battery Calculator
              </a>
            </aside>

            <div className="grid gap-12">
              <section
                id="quick-answer"
                className="rounded-[2rem] border border-yellow-200 bg-yellow-50 p-7 shadow-sm md:p-10"
              >
                <p className="font-black uppercase tracking-[0.18em] text-yellow-700">
                  Quick Answer
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight">
                  What Size Portable Power Station Is Best for a Home Outage?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  For many homes, a 1,500Wh to 2,000Wh portable power station is
                  a practical starting point for basic outage support. If your
                  main goal is refrigerator backup, a 2,000Wh to 3,000Wh unit is
                  often a more comfortable range. Smaller 500Wh to 1,000Wh units
                  are better for apartments, routers, laptops, phones and
                  lighting.
                </p>
              </section>

              <section
                id="top-picks"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Best Power Station Categories by Use Case
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These are category-level recommendations. We’ll add real
                  product names later after proper product research, so we do not
                  make fake claims.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {quickPicks.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                        {item.label}
                      </span>

                      <h3 className="mt-5 text-xl font-black">{item.title}</h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-10">
                <h2 className="text-3xl font-black tracking-tight">
                  Product Comparison Slots
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  These placeholders keep the page structure ready for affiliate
                  content without pretending we tested products we have not
                  researched yet.
                </p>

                <div className="mt-8 grid gap-5">
                  {productSlots.map((slot) => (
                    <div
                      key={slot.pick}
                      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                    >
                      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                        <div>
                          <span className="rounded-full bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950">
                            {slot.pick}
                          </span>

                          <h3 className="mt-5 text-2xl font-black">
                            {slot.title}
                          </h3>

                          <p className="mt-3 leading-7 text-slate-300">
                            {slot.text}
                          </p>
                        </div>

                        <div className="rounded-3xl bg-white p-5 text-slate-950 md:min-w-56">
                          <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                            Capacity Range
                          </p>

                          <p className="mt-2 text-2xl font-black text-blue-600">
                            {slot.capacity}
                          </p>

                          <p className="mt-4 text-sm font-black uppercase tracking-wide text-slate-500">
                            Best For
                          </p>

                          <p className="mt-2 font-bold">{slot.bestFor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="size-guide"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Portable Power Station Size Guide
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Battery size depends on what you want to run and for how long.
                  Use this as a starting point, then confirm with the calculator.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="p-5 text-sm font-black uppercase tracking-wide">
                            Need
                          </th>
                          <th className="p-5 text-sm font-black uppercase tracking-wide">
                            Suggested Range
                          </th>
                          <th className="p-5 text-sm font-black uppercase tracking-wide">
                            Notes
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {sizeGuide.map((row) => (
                          <tr
                            key={row.need}
                            className="border-t border-slate-200 bg-white"
                          >
                            <td className="p-5 font-bold">{row.need}</td>
                            <td className="p-5 font-black text-blue-600">
                              {row.range}
                            </td>
                            <td className="p-5 leading-7 text-slate-600">
                              {row.note}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
                  {factors.map((factor) => (
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
                  Not Sure What Size You Need?
                </h2>

                <p className="mt-4 leading-8 text-blue-50">
                  Use the calculator first. It gives you a better starting point
                  than guessing from product photos or headline capacity.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
              </section>
<RelatedLinks
  links={[
    {
      label: "Calculator",
      title: "Power Station Size Calculator",
      text: "Estimate how many watt-hours you need for your essential outage devices.",
      href: "/calculators/power-station-size",
    },
    {
      label: "Comparison",
      title: "Portable Power Station vs Generator",
      text: "Compare battery backup and fuel generators before choosing your setup.",
      href: "/guides/portable-power-station-vs-generator",
    },
    {
      label: "Fridge Backup",
      title: "Best Backup Battery for a Refrigerator",
      text: "Learn what matters when choosing backup power for refrigerator outages.",
      href: "/guides/refrigerator-backup-battery",
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

        <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
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