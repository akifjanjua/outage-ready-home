"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

import { useMemo, useState } from "react";

const presets = [
  {
    label: "Router only",
    batteryWh: 300,
    routerWatts: 12,
    modemWatts: 0,
    extraWatts: 0,
    efficiency: 85,
  },
  {
    label: "Router + modem",
    batteryWh: 500,
    routerWatts: 12,
    modemWatts: 15,
    extraWatts: 0,
    efficiency: 85,
  },
  {
    label: "Router + modem + small light",
    batteryWh: 500,
    routerWatts: 12,
    modemWatts: 15,
    extraWatts: 10,
    efficiency: 85,
  },
  {
    label: "Home office backup",
    batteryWh: 1000,
    routerWatts: 12,
    modemWatts: 15,
    extraWatts: 60,
    efficiency: 85,
  },
];

const runtimeFactors = [
  {
    title: "Router and modem wattage",
    text: "Some homes only need a router, while others need both a modem and router powered at the same time.",
  },
  {
    title: "Extra devices",
    text: "Adding a laptop, monitor, light or phone charger will reduce the runtime available for internet equipment.",
  },
  {
    title: "Battery efficiency",
    text: "A battery may not deliver its full rated capacity because of inverter and conversion losses.",
  },
  {
    title: "Internet provider outages",
    text: "Backup power can keep your equipment running, but it cannot fix an internet provider outage outside your home.",
  },
];

const tips = [
  "Check whether your internet setup needs both a modem and router.",
  "Use DC or USB-C power where possible to reduce conversion losses.",
  "Keep the router and modem plugged into the same backup source if both are required.",
  "Avoid running high-drain devices from the same small battery.",
  "Test your setup before relying on it during an outage.",
];

export default function WifiRouterRuntimeCalculator() {
  const [batteryWh, setBatteryWh] = useState(500);
  const [routerWatts, setRouterWatts] = useState(12);
  const [modemWatts, setModemWatts] = useState(15);
  const [extraWatts, setExtraWatts] = useState(0);
  const [efficiency, setEfficiency] = useState(85);

  function applyPreset(preset) {
    setBatteryWh(preset.batteryWh);
    setRouterWatts(preset.routerWatts);
    setModemWatts(preset.modemWatts);
    setExtraWatts(preset.extraWatts);
    setEfficiency(preset.efficiency);
  }

  const results = useMemo(() => {
    const safeBatteryWh = Number(batteryWh) || 0;
    const safeRouterWatts = Number(routerWatts) || 0;
    const safeModemWatts = Number(modemWatts) || 0;
    const safeExtraWatts = Number(extraWatts) || 0;
    const safeEfficiency = Number(efficiency) || 85;

    const usableWh = safeBatteryWh * (safeEfficiency / 100);
    const totalWatts = safeRouterWatts + safeModemWatts + safeExtraWatts;
    const runtime = totalWatts > 0 ? usableWh / totalWatts : 0;

    let runtimeLabel = "Short backup";
    let planningNote =
      "Useful for brief outages, but consider a larger battery for work or longer interruptions.";

    if (runtime >= 8 && runtime < 16) {
      runtimeLabel = "Workday backup";
      planningNote =
        "A useful range for keeping internet running through many short outages.";
    }

    if (runtime >= 16 && runtime < 24) {
      runtimeLabel = "Long-day backup";
      planningNote =
        "Strong backup for router and modem use, especially if extra loads stay low.";
    }

    if (runtime >= 24) {
      runtimeLabel = "Multi-day light backup";
      planningNote =
        "Very strong runtime for internet equipment, assuming your internet provider stays online.";
    }

    return {
      usableWh: Math.round(usableWh),
      totalWatts,
      runtime,
      runtimeLabel,
      planningNote,
    };
  }, [batteryWh, routerWatts, modemWatts, extraWatts, efficiency]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Free Calculator
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Wi-Fi Router Backup Runtime Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Estimate how long a power station or backup battery may keep your
            Wi-Fi router, modem and small home office devices running during a
            power outage.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/calculators/power-station-size"
              className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Battery Size Calculator
            </a>

            <a
              href="/guides/portable-power-station-vs-generator"
              className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              Power Station vs Generator
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Estimate internet backup runtime</p>
          <p>Router, modem and extra loads</p>
          <p>Useful for remote work and apartments</p>
        </div>
      </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    {
      label: "Wi-Fi Runtime Calculator",
      href: "/calculators/wifi-router-runtime",
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
                Enter Your Internet Backup Setup
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Start with a preset or enter your own router, modem and extra
                device wattage.
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
                Router, modem and extra devices combined.
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
                Enter watt-hours. Example: 300, 500, 1000.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Router watts
                </label>

                <input
                  type="number"
                  min="0"
                  value={routerWatts}
                  onChange={(e) => setRouterWatts(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Modem watts
                </label>

                <input
                  type="number"
                  min="0"
                  value={modemWatts}
                  onChange={(e) => setModemWatts(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
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
                85% is a reasonable starter estimate for real-world conversion
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
              Estimated Wi-Fi backup
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
                {results.planningNote}
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
                Why Wi-Fi Backup Runtime Can Vary
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              A battery can keep your home equipment powered, but actual
              internet access may still depend on your provider, local network
              equipment and outage conditions.
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                Backup Tips
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Tips for Keeping Wi-Fi Running Longer
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Small setup choices can extend runtime and make your internet
                backup more reliable during outages.
              </p>
            </div>

            <div className="grid gap-4">
              {tips.map((tip) => (
                <div
                  key={tip}
                  className="flex gap-4 rounded-3xl bg-slate-50 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
                    ✓
                  </span>

                  <p className="leading-7 text-slate-700">{tip}</p>
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
      title: "How to Keep Wi-Fi Running During an Outage",
      text: "Learn how to power your router, modem and small home office setup.",
      href: "/guides/how-to-keep-wifi-running-during-power-outage",
    },
    {
      label: "Phone Backup",
      title: "Best Power Banks for Power Outages",
      text: "Choose a simple backup option for phones, tablets and USB devices.",
      href: "/guides/best-power-banks-for-power-outages",
    },
    {
      label: "Calculator",
      title: "Phone Charging Calculator",
      text: "Estimate how many full phone charges a power bank may provide.",
      href: "/calculators/phone-power-bank-charges",
    },
  ]}
/>
      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
            
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Next Step
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Build a Home Internet Backup Plan
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Once you know your estimated runtime, compare backup power options
            and decide whether you need router-only backup or a full home office
            setup.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides/portable-power-station-vs-generator"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Power Station vs Generator
            </a>

            <a
              href="/guides/best-portable-power-stations"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Power Station Guide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}