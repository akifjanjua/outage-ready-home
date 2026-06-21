import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema from "@/components/FaqSchema";
import GuideMeta from "@/components/GuideMeta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best Power Outage Kit for Apartments",
  description:
    "Build a compact apartment power outage kit with lights, phone charging, backup power, water, food and renter-safe emergency essentials.",
  path: "/guides/apartment-power-outage-kit",
});

const kitCategories = [
  {
    title: "Backup Power",
    icon: "🔋",
    items: [
      "Compact portable power station",
      "USB power banks",
      "USB-C charging cables",
      "Wall charger for recharging before storms",
    ],
  },
  {
    title: "Emergency Lighting",
    icon: "💡",
    items: [
      "Rechargeable lantern",
      "Headlamp",
      "Plug-in outage light",
      "Battery motion lights for hallway or bathroom",
    ],
  },
  {
    title: "Communication",
    icon: "📶",
    items: [
      "Charged phone",
      "Backup phone battery",
      "Small radio or emergency weather radio",
      "Written emergency contacts",
    ],
  },
  {
    title: "Food and Water",
    icon: "🥫",
    items: [
      "Bottled water",
      "Shelf-stable food",
      "Manual can opener",
      "Basic disposable utensils",
    ],
  },
  {
    title: "Comfort and Safety",
    icon: "🧰",
    items: [
      "First aid kit",
      "Blanket or warm layer",
      "Basic medicines",
      "Trash bags and wipes",
    ],
  },
  {
    title: "Apartment-Safe Extras",
    icon: "🏢",
    items: [
      "Door draft stopper",
      "Small fan for warm weather",
      "Cable organizer",
      "Compact storage bin",
    ],
  },
];

const powerOptions = [
  {
    option: "USB Power Bank",
    bestFor: "Phones and small USB devices",
    size: "10,000mAh–30,000mAh",
    note: "Cheap, compact and useful, but not enough for appliances.",
  },
  {
    option: "Small Power Station",
    bestFor: "Phones, laptop, lights and router",
    size: "300Wh–700Wh",
    note: "Good starter option for apartments and short outages.",
  },
  {
    option: "Medium Power Station",
    bestFor: "Router, laptop, lights and longer runtime",
    size: "700Wh–1,500Wh",
    note: "Better if you work from home or expect longer outages.",
  },
  {
    option: "Large Power Station",
    bestFor: "Fridge backup or multiple essentials",
    size: "1,500Wh+",
    note: "Useful, but may be heavy, expensive and harder to store.",
  },
];

const apartmentZones = [
  {
    title: "Power Corner",
    text: "Keep the power station, power banks and charging cables in one easy-to-reach place.",
  },
  {
    title: "Light Zone",
    text: "Place a lantern near the living area and small lights near the bedroom, hallway and bathroom.",
  },
  {
    title: "Food and Water Bin",
    text: "Use one compact storage bin for water, shelf-stable food, can opener and basic supplies.",
  },
];

const mistakes = [
  "Using fuel-burning generators indoors, on balconies or near windows.",
  "Keeping all lights inside one box that is hard to find in the dark.",
  "Buying a large battery without checking where it will be stored.",
  "Forgetting to recharge power banks and lights before storm season.",
  "Relying only on candles instead of safer battery-based lighting.",
  "Ignoring router backup if internet access matters during an outage.",
];

const faq = [
  {
    question: "Can I use a generator in an apartment?",
    answer:
      "Fuel-burning generators should not be used indoors, on balconies, in garages or near windows because of carbon monoxide risk. Battery power stations are usually more practical for apartment outage backup.",
  },
  {
    question: "What size power station is good for an apartment?",
    answer:
      "For many renters, a 300Wh to 700Wh power station is a useful starting point for phones, laptops, lights and a router. Larger units may be useful if you need longer runtime.",
  },
  {
    question: "What should I buy first for an apartment outage kit?",
    answer:
      "Start with lighting, phone charging, water, shelf-stable food and a compact power bank or power station. These solve the most common short-outage problems.",
  },
  {
    question: "Do I need a refrigerator backup in an apartment?",
    answer:
      "It depends on outage length and budget. If your outages are usually short, lighting and phone charging may matter more. For longer outages, refrigerator backup may be worth considering.",
  },
];

export default function ApartmentPowerOutageKitPage() {
  return (
  <>
    <FaqSchema items={faq} />

    <main className="min-h-screen bg-slate-50 text-slate-950">
        <ArticleSchema
  title="Best Power Outage Kit for Apartments"
  description="Build a compact, renter-safe power outage kit for apartments with backup power, emergency lighting, phone charging, food, water and communication essentials."
  url="/guides/apartment-power-outage-kit"
/>
      <article>
        <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Apartment Outage Guide
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Best Power Outage Kit for Apartments
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Apartment power outage prep should be compact, safe indoors and
              easy to store. Focus on lighting, phone charging, router backup,
              water, shelf-stable food and a small battery setup before buying
              bulky equipment.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/calculators/power-station-size"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Estimate Battery Size
              </a>

              <a
                href="/guides/best-emergency-lights-for-power-outages"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Emergency Lighting Guide
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
            <p>Indoor-safe backup planning</p>
            <p>Compact storage for renters</p>
            <p>No fuel generators indoors</p>
          </div>
        </section>
        <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    {
      label: "Apartment Outage Kit",
      href: "/guides/apartment-power-outage-kit",
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
                  href="#checklist"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Kit checklist
                </a>

                <a
                  href="#backup-power"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Backup power
                </a>

                <a
                  href="#setup"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Small-space setup
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

            <div className="grid min-w-0 gap-12">
              <section
                id="quick-answer"
                className="rounded-[2rem] border border-yellow-200 bg-yellow-50 p-7 shadow-sm md:p-10"
              >
                <p className="font-black uppercase tracking-[0.18em] text-yellow-700">
                  Quick Answer
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight">
                  What Should Be in an Apartment Outage Kit?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  A strong apartment outage kit should include rechargeable
                  lighting, phone charging, a compact battery or power station,
                  bottled water, shelf-stable food, a first aid kit and basic
                  comfort items. Avoid fuel-burning generators because they are
                  unsafe indoors and risky on balconies.
                </p>
              </section>

              <section
                id="checklist"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Apartment Power Outage Kit Checklist
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Start with the basics, then upgrade based on outage length,
                  space and budget.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {kitCategories.map((category) => (
                    <div
                      key={category.title}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                          {category.icon}
                        </div>

                        <h3 className="text-xl font-black">
                          {category.title}
                        </h3>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {category.items.map((item) => (
                          <div key={item} className="flex gap-3">
                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                              ✓
                            </span>

                            <p className="leading-7 text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="backup-power"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Best Backup Power Options for Apartments
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Apartment backup power should be easy to store, safe to use
                  indoors and realistic for the devices you actually need.
                </p>

                <div className="mt-8">
  <div className="grid gap-5 md:hidden">
    {powerOptions.map((row) => (
      <div
        key={row.option}
        className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
      >
        <p className="text-sm font-black uppercase tracking-wide text-blue-600">
          {row.option}
        </p>

        <h3 className="mt-3 text-xl font-black text-slate-950">
          {row.bestFor}
        </h3>

        <div className="mt-4 rounded-2xl bg-white p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">
            Typical Size
          </p>

          <p className="mt-1 font-black text-blue-600">{row.size}</p>
        </div>

        <p className="mt-4 leading-7 text-slate-600">{row.note}</p>
      </div>
    ))}
  </div>

  <div className="hidden overflow-hidden rounded-3xl border border-slate-200 md:block">
    <table className="w-full border-collapse text-left">
      <thead className="bg-slate-950 text-white">
        <tr>
          <th className="p-5 text-sm font-black uppercase tracking-wide">
            Option
          </th>
          <th className="p-5 text-sm font-black uppercase tracking-wide">
            Best For
          </th>
          <th className="p-5 text-sm font-black uppercase tracking-wide">
            Typical Size
          </th>
          <th className="p-5 text-sm font-black uppercase tracking-wide">
            Note
          </th>
        </tr>
      </thead>

      <tbody>
        {powerOptions.map((row) => (
          <tr
            key={row.option}
            className="border-t border-slate-200 bg-white"
          >
            <td className="p-5 font-black text-blue-600">{row.option}</td>
            <td className="p-5 font-bold">{row.bestFor}</td>
            <td className="p-5 font-black">{row.size}</td>
            <td className="p-5 leading-7 text-slate-600">{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
              </section>

              <section
                id="setup"
                className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Small-Space Apartment Setup
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  The best kit is the one you can actually find and use during a
                  blackout. Keep it simple and organized.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {apartmentZones.map((zone) => (
                    <div
                      key={zone.title}
                      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                    >
                      <h3 className="text-xl font-black text-yellow-300">
                        {zone.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">
                        {zone.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-blue-500/30 bg-blue-600/15 p-6">
                  <p className="font-black text-blue-100">Simple rule</p>

                  <p className="mt-2 leading-7 text-blue-50">
                    Keep one light near the bed, one power source near your main
                    devices and one small supply bin somewhere easy to reach.
                  </p>
                </div>
              </section>

              <section
                id="mistakes"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Apartment Outage Mistakes to Avoid
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
                  Need Help Choosing Battery Size?
                </h2>

                <p className="mt-4 leading-8 text-blue-50">
                  Estimate your phone, laptop, router and lighting needs before
                  buying a compact power station.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/calculators/power-station-size"
                    className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
                  >
                    Use Battery Calculator
                  </a>

                  <a
                    href="/guides/best-emergency-lights-for-power-outages"
                    className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
                  >
                    Read Lighting Guide
                  </a>
                </div>
              </section>
<RelatedLinks
  links={[
    {
      label: "Lighting",
      title: "Best Emergency Lights for Power Outages",
      text: "Choose safe, compact lighting options for bedrooms, kitchens and hallways.",
      href: "/guides/best-emergency-lights-for-power-outages",
    },
    {
      label: "Internet Backup",
      title: "How to Keep Wi-Fi Running During an Outage",
      text: "Keep your router, modem and home office devices powered during outages.",
      href: "/guides/how-to-keep-wifi-running-during-power-outage",
    },
    {
      label: "Phone Backup",
      title: "Best Power Banks for Power Outages",
      text: "Choose a compact power bank for phone charging and small USB devices.",
      href: "/guides/best-power-banks-for-power-outages",
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
  </>
);
}