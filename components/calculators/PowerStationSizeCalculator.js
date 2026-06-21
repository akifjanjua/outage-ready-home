"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

import { useMemo, useState } from "react";

const devicePresets = {
  refrigerator: {
    label: "Refrigerator",
    watts: 150,
    hours: 10,
    note: "Useful for estimating fridge backup during outages.",
  },
  wifi: {
    label: "Wi-Fi Router",
    watts: 15,
    hours: 12,
    note: "Good for staying connected during shorter outages.",
  },
  laptop: {
    label: "Laptop",
    watts: 60,
    hours: 8,
    note: "Useful for remote work and basic productivity.",
  },
  phone: {
    label: "Phone Charging",
    watts: 15,
    hours: 6,
    note: "Covers repeated phone charging or small USB devices.",
  },
  light: {
    label: "LED Light",
    watts: 10,
    hours: 10,
    note: "Useful for basic room lighting or task lighting.",
  },
  cpap: {
    label: "CPAP Machine",
    watts: 40,
    hours: 8,
    note: "Backup planning only. Always follow device instructions.",
  },
  custom: {
    label: "Custom Device",
    watts: 100,
    hours: 8,
    note: "Enter your own wattage and runtime target.",
  },
};

const commonLoads = [
  ["Phone charging", "10W–20W"],
  ["Wi-Fi router", "10W–25W"],
  ["Laptop", "45W–100W"],
  ["LED lamp", "5W–15W"],
  ["CPAP machine", "30W–60W"],
  ["Refrigerator", "100W–250W average"],
];

const resultNotes = [
  "Real runtime can change based on device behavior and battery efficiency.",
  "Refrigerators and freezers may need extra surge power when starting.",
  "Heaters, kettles, microwaves and hair dryers drain batteries very quickly.",
  "Always check the power station’s continuous output and surge output.",
];

export default function PowerStationSizeCalculator() {
  const [device, setDevice] = useState("refrigerator");
  const [watts, setWatts] = useState(devicePresets.refrigerator.watts);
  const [hours, setHours] = useState(devicePresets.refrigerator.hours);
  const [quantity, setQuantity] = useState(1);
  const [efficiency, setEfficiency] = useState(85);

  function handleDeviceChange(value) {
    setDevice(value);
    setWatts(devicePresets[value].watts);
    setHours(devicePresets[value].hours);
  }

  const results = useMemo(() => {
    const safeWatts = Number(watts) || 0;
    const safeHours = Number(hours) || 0;
    const safeQuantity = Number(quantity) || 0;
    const safeEfficiency = Number(efficiency) || 85;

    const rawWh = safeWatts * safeHours * safeQuantity;
    const adjustedWh = rawWh / (safeEfficiency / 100);
    const roundedWh = Math.ceil(adjustedWh);

    let batteryClass = "500Wh";
    let resultLabel = "Small backup";

    if (roundedWh > 500 && roundedWh <= 1000) {
      batteryClass = "1,000Wh";
      resultLabel = "Compact backup";
    }

    if (roundedWh > 1000 && roundedWh <= 1500) {
      batteryClass = "1,500Wh";
      resultLabel = "Medium backup";
    }

    if (roundedWh > 1500 && roundedWh <= 2000) {
      batteryClass = "2,000Wh";
      resultLabel = "Strong home backup";
    }

    if (roundedWh > 2000 && roundedWh <= 3000) {
      batteryClass = "3,000Wh";
      resultLabel = "Large home backup";
    }

    if (roundedWh > 3000) {
      batteryClass = "3,000Wh+ / expandable";
      resultLabel = "Expandable system";
    }

    return {
      rawWh,
      adjustedWh: roundedWh,
      batteryClass,
      resultLabel,
      totalLoad: safeWatts * safeQuantity,
    };
  }, [watts, hours, quantity, efficiency]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Free Calculator
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Portable Power Station Size Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Estimate how many watt-hours you may need to run a refrigerator,
            Wi-Fi router, laptop, lights, CPAP machine or other essential device
            during a power outage.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides/best-portable-power-stations"
              className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Read Buying Guide
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
          <p>Formula-based estimate</p>
          <p>Useful for fridges, routers, laptops and lights</p>
          <p>Plan before buying expensive gear</p>
        </div>
      </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    {
      label: "Power Station Size Calculator",
      href: "/calculators/power-station-size",
    },
  ]}
/>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                Inputs
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Enter Your Backup Needs
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Choose a common device or enter your own wattage and runtime.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                Selected
              </p>
              <p className="mt-1 font-black text-slate-950">
                {devicePresets[device].label}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                {devicePresets[device].note}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Device type
              </label>

              <select
                value={device}
                onChange={(e) => handleDeviceChange(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              >
                {Object.entries(devicePresets).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Device wattage
                </label>

                <input
                  type="number"
                  min="1"
                  value={watts}
                  onChange={(e) => setWatts(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Use the average running watts if you know it.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Hours needed
                </label>

                <input
                  type="number"
                  min="1"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter how long you want the device to run.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Number of devices
                </label>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Battery efficiency %
                </label>

                <input
                  type="number"
                  min="50"
                  max="100"
                  value={efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  85% is a reasonable starter estimate for real-world losses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2.25rem] bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:sticky lg:top-28 lg:h-fit">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
            Estimated Result
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Estimated capacity needed
            </p>

            <p className="mt-3 text-5xl font-black tracking-tight text-blue-600">
              {results.adjustedWh.toLocaleString()}Wh
            </p>

            <p className="mt-3 font-bold text-slate-600">
              Raw load estimate: {Math.round(results.rawWh).toLocaleString()}Wh
            </p>
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Recommended battery class
              </p>

              <p className="mt-2 text-3xl font-black text-yellow-300">
                {results.batteryClass}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Result category
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                {results.resultLabel}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Total running load
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                {results.totalLoad.toLocaleString()}W
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-blue-500/30 bg-blue-600/15 p-6">
            <p className="text-sm font-black text-blue-100">Formula used</p>

            <p className="mt-2 leading-7 text-blue-50">
              Watts × hours × quantity ÷ efficiency = estimated watt-hours
              needed.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Reference
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Common Household Loads
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These are rough ranges. Your exact device may use more or less
              power, so check the label or manual when possible.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {commonLoads.map(([name, range]) => (
              <div
                key={name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="font-black text-slate-950">{name}</p>
                <p className="mt-2 text-xl font-black text-blue-600">
                  {range}
                </p>
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
                Reality Check
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                What the Calculator Cannot Guarantee
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                This tool gives a useful planning estimate, but actual runtime
                depends on the power station, device behavior, temperature,
                battery age and how you use the equipment.
              </p>
            </div>

            <div className="grid gap-4">
              {resultNotes.map((note) => (
                <div
                  key={note}
                  className="flex gap-4 rounded-3xl bg-slate-50 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
                    !
                  </span>

                  <p className="leading-7 text-slate-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<RelatedLinks
  links={[
    {
      label: "Guide",
      title: "Best Portable Power Stations",
      text: "Learn how to compare battery capacity, output, charging speed and outage use cases.",
      href: "/guides/best-portable-power-stations",
    },
    {
      label: "Comparison",
      title: "Portable Power Station vs Generator",
      text: "Compare battery backup and fuel generators before choosing your setup.",
      href: "/guides/portable-power-station-vs-generator",
    },
    {
      label: "Fridge Backup",
      title: "Fridge Runtime Calculator",
      text: "Estimate how long a battery may run your refrigerator during an outage.",
      href: "/calculators/fridge-runtime",
    },
  ]}
/>
      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
            
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Next Step
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Compare Power Stations by Use Case
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Once you know the estimated watt-hours, compare products by output,
            battery chemistry, surge rating, ports, recharge speed and warranty.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides/best-portable-power-stations"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Read Buying Guide
            </a>

            <a
              href="/guides"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Browse All Guides
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}