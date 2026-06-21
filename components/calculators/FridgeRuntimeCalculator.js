"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

import { useMemo, useState } from "react";

const presets = [
  {
    label: "Small efficient fridge",
    batteryWh: 1500,
    fridgeWatts: 100,
    extraWatts: 0,
    efficiency: 85,
  },
  {
    label: "Typical full-size fridge",
    batteryWh: 2000,
    fridgeWatts: 150,
    extraWatts: 0,
    efficiency: 85,
  },
  {
    label: "Fridge + Wi-Fi router",
    batteryWh: 2000,
    fridgeWatts: 150,
    extraWatts: 15,
    efficiency: 85,
  },
  {
    label: "Fridge + freezer",
    batteryWh: 3000,
    fridgeWatts: 150,
    extraWatts: 120,
    efficiency: 85,
  },
];

const runtimeFactors = [
  {
    title: "Compressor cycling",
    text: "A fridge does not usually draw the same wattage every minute. The compressor turns on and off.",
  },
  {
    title: "Room temperature",
    text: "A hot room can make the fridge work harder and reduce battery runtime.",
  },
  {
    title: "Door openings",
    text: "Opening the fridge repeatedly lets cold air escape and can shorten backup time.",
  },
  {
    title: "Extra devices",
    text: "Routers, lights, freezers and phone chargers all reduce the runtime available for the fridge.",
  },
];

const safetyNotes = [
  "Do not use fuel-burning generators indoors, in garages, on balconies or near windows.",
  "Check the fridge startup surge and the power station’s surge rating before relying on the setup.",
  "Test your fridge and power station together before an actual outage.",
  "Keep fridge and freezer doors closed as much as possible during an outage.",
];

export default function FridgeRuntimeCalculator() {
  const [batteryWh, setBatteryWh] = useState(2000);
  const [fridgeWatts, setFridgeWatts] = useState(150);
  const [extraWatts, setExtraWatts] = useState(0);
  const [efficiency, setEfficiency] = useState(85);

  function applyPreset(preset) {
    setBatteryWh(preset.batteryWh);
    setFridgeWatts(preset.fridgeWatts);
    setExtraWatts(preset.extraWatts);
    setEfficiency(preset.efficiency);
  }

  const results = useMemo(() => {
    const safeBatteryWh = Number(batteryWh) || 0;
    const safeFridgeWatts = Number(fridgeWatts) || 0;
    const safeExtraWatts = Number(extraWatts) || 0;
    const safeEfficiency = Number(efficiency) || 85;

    const usableWh = safeBatteryWh * (safeEfficiency / 100);
    const totalWatts = safeFridgeWatts + safeExtraWatts;
    const runtime = totalWatts > 0 ? usableWh / totalWatts : 0;

    let runtimeLabel = "Short backup window";
    let suggestedClass = "Consider a larger battery if you need overnight backup.";

    if (runtime >= 6 && runtime < 12) {
      runtimeLabel = "Useful short-outage backup";
      suggestedClass = "Good for shorter outages, but test your actual setup.";
    }

    if (runtime >= 12 && runtime < 24) {
      runtimeLabel = "Strong overnight backup";
      suggestedClass = "A practical range for many refrigerator backup needs.";
    }

    if (runtime >= 24) {
      runtimeLabel = "Longer outage support";
      suggestedClass =
        "Useful for longer outages if the power station can handle startup surge.";
    }

    return {
      usableWh: Math.round(usableWh),
      totalWatts,
      runtime,
      runtimeLabel,
      suggestedClass,
    };
  }, [batteryWh, fridgeWatts, extraWatts, efficiency]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Free Calculator
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Fridge Backup Runtime Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Estimate how long a portable power station may run a refrigerator
            during a power outage using battery capacity, fridge wattage, extra
            load and real-world efficiency.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides/refrigerator-backup-battery"
              className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Read Fridge Backup Guide
            </a>

            <a
              href="/guides/how-long-can-portable-power-station-run-refrigerator"
              className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              Runtime Guide
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Estimate fridge runtime</p>
          <p>Adjust battery size and extra load</p>
          <p>Use as planning guidance, not a guarantee</p>
        </div>
      </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    {
      label: "Fridge Runtime Calculator",
      href: "/calculators/fridge-runtime",
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
                Enter Your Fridge Backup Setup
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Start with a preset or enter your own battery capacity, fridge
                wattage and extra device load.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                Current total load
              </p>

              <p className="mt-1 text-3xl font-black text-slate-950">
                {results.totalWatts.toLocaleString()}W
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fridge plus any extra devices you enter.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-black uppercase tracking-wide text-slate-500">
              Quick presets
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left font-bold text-slate-700 transition hover:border-blue-600 hover:bg-white hover:text-blue-600"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Battery capacity
              </label>

              <input
                type="number"
                min="1"
                value={batteryWh}
                onChange={(e) => setBatteryWh(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter watt-hours. Example: 1000, 1500, 2000, 3000.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Refrigerator average watts
                </label>

                <input
                  type="number"
                  min="1"
                  value={fridgeWatts}
                  onChange={(e) => setFridgeWatts(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Use average running watts if you know it.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Extra load watts
                </label>

                <input
                  type="number"
                  min="0"
                  value={extraWatts}
                  onChange={(e) => setExtraWatts(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Add router, freezer, lights or other devices here.
                </p>
              </div>
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
                85% is a reasonable starter estimate for inverter and real-world
                losses.
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2.25rem] bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:sticky lg:top-28 lg:h-fit">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
            Estimated Runtime
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Estimated fridge runtime
            </p>

            <p className="mt-3 text-5xl font-black tracking-tight text-blue-600">
              {results.runtime.toFixed(1)} hrs
            </p>

            <p className="mt-3 font-bold text-slate-600">
              Based on {results.usableWh.toLocaleString()}Wh usable battery.
            </p>
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Runtime category
              </p>

              <p className="mt-2 text-3xl font-black text-yellow-300">
                {results.runtimeLabel}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Planning note
              </p>

              <p className="mt-2 leading-7 text-slate-200">
                {results.suggestedClass}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Total load
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                {results.totalWatts.toLocaleString()}W
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-blue-500/30 bg-blue-600/15 p-6">
            <p className="text-sm font-black text-blue-100">Formula used</p>

            <p className="mt-2 leading-7 text-blue-50">
              Battery Wh × efficiency ÷ total watts = estimated runtime.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                Runtime Factors
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Why Real Fridge Runtime Can Vary
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Refrigerator backup is not perfectly predictable because fridges
              cycle on and off and react to temperature, door openings and load.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {runtimeFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-black">{factor.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                Safety Notes
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Use Battery Backup Safely
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Battery power stations are often useful indoors, but you still
                need to check product limits, surge ratings and manufacturer
                instructions.
              </p>
            </div>

            <div className="grid gap-4">
              {safetyNotes.map((note) => (
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
      title: "Best Backup Battery for a Refrigerator",
      text: "Learn what battery size and features matter for refrigerator backup.",
      href: "/guides/refrigerator-backup-battery",
    },
    {
      label: "Runtime Guide",
      title: "How Long Can a Power Station Run a Refrigerator?",
      text: "Understand fridge runtime, wattage, battery capacity and efficiency.",
      href: "/guides/how-long-can-portable-power-station-run-refrigerator",
    },
    {
      label: "Calculator",
      title: "Power Station Size Calculator",
      text: "Estimate battery size for fridges, routers, lights and other essentials.",
      href: "/calculators/power-station-size",
    },
  ]}
/>
      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
            
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Next Step
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Choose a Fridge Backup Battery
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Once you know the estimated runtime, compare refrigerator backup
            options by watt-hours, surge output, battery chemistry, recharge
            speed and storage size.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides/refrigerator-backup-battery"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Read Fridge Backup Guide
            </a>

            <a
              href="/guides/best-portable-power-stations"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Compare Power Stations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}