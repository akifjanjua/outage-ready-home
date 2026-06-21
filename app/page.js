const essentials = [
  {
    title: "Keep Food Cold",
    text: "Estimate fridge and freezer backup needs before buying a large battery.",
    icon: "❄️",
    href: "/guides/refrigerator-backup-battery",
  },
  {
    title: "Stay Connected",
    text: "Plan backup power for phones, laptops, routers and remote work basics.",
    icon: "📶",
    href: "/calculators/power-station-size",
  },
  {
    title: "Light the Home",
    text: "Choose safer emergency lighting for bedrooms, hallways, kitchens and apartments.",
    icon: "💡",
    href: "/guides/best-emergency-lights-for-power-outages",
  },
  {
    title: "Prepare an Apartment",
    text: "Build a compact, renter-safe outage kit without fuel generators or bulky gear.",
    icon: "🏢",
    href: "/guides/apartment-power-outage-kit",
  },
];

const calculators = [
  {
    label: "Most Useful",
    title: "Portable Power Station Size Calculator",
    text: "Estimate how many watt-hours you need for fridges, routers, lights, laptops and essential devices.",
    href: "/calculators/power-station-size",
  },
  {
    label: "Fridge Backup",
    title: "Fridge Runtime Calculator",
    text: "Estimate how long a battery may run your refrigerator during an outage.",
    href: "/calculators/fridge-runtime",
  },
  {
    label: "Internet Backup",
    title: "Wi-Fi Router Runtime Calculator",
    text: "Estimate how long a battery may keep your router, modem and small home office devices powered.",
    href: "/calculators/wifi-router-runtime",
  },
  {
    label: "Phone Backup",
    title: "Power Bank Phone Charging Calculator",
    text: "Estimate how many full phone charges a power bank may provide during an outage.",
    href: "/calculators/phone-power-bank-charges",
  },
  {
    label: "Apartment Kit",
    title: "Apartment Outage Kit Builder",
    text: "Build a compact, renter-safe kit for lighting, water, food, charging and comfort.",
    href: "/calculators/apartment-outage-kit-builder",
  },
];

const guides = [
  {
    label: "Backup Power",
    title: "Best Portable Power Stations for Home Outages",
    text: "Compare battery capacity, output, charging speed and real home outage use cases.",
    href: "/guides/best-portable-power-stations",
  },
  {
    label: "Comparison",
    title: "Portable Power Station vs Generator for Home Outages",
    text: "Compare battery backup and fuel generators by safety, noise, fuel, maintenance and apartment use.",
    href: "/guides/portable-power-station-vs-generator",
  },
  {
    label: "Internet Backup",
    title: "How to Keep Wi-Fi Running During a Power Outage",
    text: "Keep your router, modem and home office devices powered during outages.",
    href: "/guides/how-to-keep-wifi-running-during-power-outage",
  },
  {
    label: "Fridge Backup",
    title: "Best Backup Battery for a Refrigerator",
    text: "Learn what battery size and features matter when trying to keep food cold.",
    href: "/guides/refrigerator-backup-battery",
  },
  {
    label: "Apartment Kit",
    title: "Best Power Outage Kit for Apartments",
    text: "Build a compact, renter-safe outage kit for lights, charging, food and water.",
    href: "/guides/apartment-power-outage-kit",
  },
  {
    label: "Lighting",
    title: "Best Emergency Lights for Power Outages",
    text: "Choose lanterns, plug-in outage lights, headlamps and safer backup lighting.",
    href: "/guides/best-emergency-lights-for-power-outages",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose what matters most",
    text: "Start with the devices you actually need during an outage: fridge, phone, router, lights or medical equipment.",
  },
  {
    number: "02",
    title: "Estimate the battery size",
    text: "Use calculators before buying so you understand watt-hours, runtime and realistic efficiency losses.",
  },
  {
    number: "03",
    title: "Build a practical kit",
    text: "Add lighting, charging, water, shelf-stable food, communication and safe indoor backup power.",
  },
];

const checklistItems = [
  "Backup power planning",
  "Food and fridge safety",
  "Wi-Fi and phone charging",
  "Apartment-safe outage kit basics",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.28),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
              Backup power guides for everyday homes
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Prepare Your Home Before the Power Goes Out
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Outage Ready Home helps you choose practical backup power,
              emergency lighting, fridge protection and apartment-safe outage
              kits without overbuying expensive gear.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/calculators/power-station-size"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Estimate Battery Size
              </a>

              <a
                href="/guides"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Browse Guides
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <p className="text-3xl font-black text-blue-600">5</p>
                <p className="mt-1 text-sm font-bold text-slate-600">
                  Calculators built
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <p className="text-3xl font-black text-blue-600">8</p>
                <p className="mt-1 text-sm font-bold text-slate-600">
                  Core guides
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <p className="text-3xl font-black text-blue-600">0</p>
                <p className="mt-1 text-sm font-bold text-slate-600">
                  Fear tactics
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-400">
                    Outage Planning Snapshot
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    Essential Backup Setup
                  </h2>
                </div>

                <span className="rounded-full bg-yellow-300 px-4 py-2 text-sm font-black text-slate-950">
                  Practical
                </span>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  ["Refrigerator", "1,500Wh–3,000Wh", "Food protection"],
                  ["Wi-Fi + laptop", "500Wh–1,000Wh", "Remote work"],
                  ["Emergency lights", "USB/rechargeable", "Safer rooms"],
                  ["Apartment kit", "Compact battery", "No fumes"],
                ].map(([name, size, purpose]) => (
                  <div
                    key={name}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-black text-white">{name}</p>
                        <p className="mt-1 text-sm text-slate-400">
                          {purpose}
                        </p>
                      </div>

                      <p className="text-right text-sm font-black text-yellow-300">
                        {size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-blue-500/30 bg-blue-600/15 p-5">
                <p className="font-black text-blue-100">
                  Start with watt-hours, not guesses.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A power station that looks big may still be too small for a
                  fridge. Estimate the load first, then compare products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Built for normal households, renters and remote workers</p>
          <p>Battery-based indoor backup guidance</p>
          <p>Calculators before product recommendations</p>
        </div>
      </section>

      <section id="backup-power" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Start Here
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            What Do You Need to Keep Running?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A good outage setup starts with priorities. Choose the essentials
            that matter most, then estimate the backup power around them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {essentials.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-4xl transition group-hover:bg-blue-600">
                <span className="transition group-hover:scale-110">
                  {item.icon}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-black">{item.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>

              <p className="mt-5 font-black text-blue-600">Explore →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Method
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              A Simple Way to Build Your Outage Plan
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              You do not need to buy everything at once. Start with the loads
              that matter, estimate runtime, then add lighting, communication
              and small comfort items.
            </p>

            <a
              href="/guides/apartment-power-outage-kit"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-600"
            >
              View Starter Kit Guide
            </a>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 text-lg font-black text-slate-950">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
                Free Tools
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Estimate Before You Buy
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-300">
              Backup power gets expensive quickly. Use calculators to estimate
              battery size and runtime before choosing a power station.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calculator) => (
              <a
                key={calculator.title}
                href={calculator.href}
                className="group rounded-[2rem] border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <span className="rounded-full bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950">
                  {calculator.label}
                </span>

                <h3 className="mt-6 text-2xl font-black leading-tight text-white">
                  {calculator.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {calculator.text}
                </p>

                <p className="mt-6 font-black text-yellow-300">Open tool →</p>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/calculators"
              className="inline-flex rounded-full border border-slate-700 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-yellow-300 hover:text-yellow-300"
            >
              View All Calculators
            </a>
          </div>
        </div>
      </section>

      <section id="guides" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Latest Guides
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Practical Guides for Real Outages
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="leading-7 text-slate-600">
              Start with these featured guides, then visit the full guide
              library for all 8 outage planning resources.
            </p>

            <a
              href="/guides"
              className="mt-4 inline-flex font-black text-blue-600 hover:text-blue-800"
            >
              Browse all 8 guides →
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                {guide.label}
              </span>

              <h3 className="mt-6 text-2xl font-black leading-tight">
                {guide.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{guide.text}</p>

              <a
                href={guide.href}
                className="mt-6 inline-flex font-bold text-blue-600 hover:text-blue-800"
              >
                Read guide →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2.25rem] border border-slate-200 bg-slate-50 p-8">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Editorial Approach
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Calm, Practical, No Panic Selling
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Outage Ready Home is not built around fear. The goal is to explain
              backup power clearly, compare practical options and help readers
              avoid buying equipment that is too small, too large or wrong for
              their home.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "We start with use cases, not product hype.",
                "We explain battery size and runtime in plain English.",
                "We separate indoor-safe battery backup from fuel generator risks.",
                "We avoid fake hands-on claims unless products are actually tested.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                    ✓
                  </span>
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="checklist"
            className="rounded-[2.25rem] bg-blue-600 p-8 text-white"
          >
            <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
              Free Checklist
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Outage Checklist Coming Soon
            </h2>

            <p className="mt-5 leading-8 text-blue-50">
              A printable outage checklist will be added once the final domain,
              email setup and download delivery are connected.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-5 text-slate-950">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
                What it will include
              </p>

              <div className="mt-5 grid gap-4">
                {checklistItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl bg-slate-50 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-sm font-black text-slate-950">
                      ✓
                    </span>

                    <p className="font-bold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="/calculators"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
              >
                Use Calculators
              </a>

              <a
                href="/guides"
                className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Browse Guides
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}