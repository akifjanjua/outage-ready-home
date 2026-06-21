"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

import { useMemo, useState } from "react";

const presets = [
  {
    label: "Small power bank",
    powerBankMah: 10000,
    phoneMah: 4000,
    efficiency: 75,
  },
  {
    label: "Medium power bank",
    powerBankMah: 20000,
    phoneMah: 4000,
    efficiency: 75,
  },
  {
    label: "Large power bank",
    powerBankMah: 30000,
    phoneMah: 4000,
    efficiency: 75,
  },
  {
    label: "Large phone battery",
    powerBankMah: 20000,
    phoneMah: 5000,
    efficiency: 75,
  },
];

const tips = [
  "Use a higher-capacity power bank if multiple people need phone charging.",
  "Keep power banks charged before storm season or planned travel.",
  "Charging losses are normal, so a 20,000mAh power bank will not deliver the full amount to your phone.",
  "USB-C fast charging is useful, but capacity matters more during longer outages.",
  "For phones, tablets and lights, power banks are often cheaper and easier than a full power station.",
];

export default function PhonePowerBankChargesCalculator() {
  const [powerBankMah, setPowerBankMah] = useState(20000);
  const [phoneMah, setPhoneMah] = useState(4000);
  const [efficiency, setEfficiency] = useState(75);

  function applyPreset(preset) {
    setPowerBankMah(preset.powerBankMah);
    setPhoneMah(preset.phoneMah);
    setEfficiency(preset.efficiency);
  }

  const results = useMemo(() => {
    const safePowerBankMah = Number(powerBankMah) || 0;
    const safePhoneMah = Number(phoneMah) || 1;
    const safeEfficiency = Number(efficiency) || 75;

    const usableMah = safePowerBankMah * (safeEfficiency / 100);
    const fullCharges = usableMah / safePhoneMah;

    let label = "Light backup";

    if (fullCharges >= 2 && fullCharges < 4) {
      label = "Good personal backup";
    }

    if (fullCharges >= 4 && fullCharges < 7) {
      label = "Strong phone backup";
    }

    if (fullCharges >= 7) {
      label = "Multi-phone backup";
    }

    return {
      usableMah: Math.round(usableMah),
      fullCharges,
      label,
    };
  }, [powerBankMah, phoneMah, efficiency]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Free Calculator
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Power Bank Phone Charging Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Estimate how many full phone charges you may get from a power bank
            during a power outage, based on power bank capacity, phone battery
            size and real-world charging efficiency.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Estimate phone charges</p>
          <p>Useful for budget outage prep</p>
          <p>Includes real-world charging losses</p>
        </div>
      </section>
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    {
      label: "Phone Charging Calculator",
      href: "/calculators/phone-power-bank-charges",
    },
  ]}
/>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Inputs
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Enter Your Power Bank Setup
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Start with a preset or enter your own power bank and phone battery
            capacity.
          </p>

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
                Power bank capacity mAh
              </label>

              <input
                type="number"
                min="1"
                value={powerBankMah}
                onChange={(e) => setPowerBankMah(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Common sizes: 10,000mAh, 20,000mAh, 30,000mAh.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Phone battery capacity mAh
              </label>

              <input
                type="number"
                min="1"
                value={phoneMah}
                onChange={(e) => setPhoneMah(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Many phones are roughly 3,000mAh to 5,000mAh.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Charging efficiency %
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
                75% is a realistic starter estimate because charging losses are
                normal.
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2.25rem] bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:sticky lg:top-28 lg:h-fit">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
            Estimated Result
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Estimated full phone charges
            </p>

            <p className="mt-3 text-5xl font-black tracking-tight text-blue-600">
              {results.fullCharges.toFixed(1)}x
            </p>

            <p className="mt-3 font-bold text-slate-600">
              Based on {results.usableMah.toLocaleString()}mAh usable capacity.
            </p>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-black uppercase tracking-wide text-slate-400">
              Backup category
            </p>

            <p className="mt-2 text-3xl font-black text-yellow-300">
              {results.label}
            </p>
          </div>

          <div className="mt-5 rounded-3xl border border-blue-500/30 bg-blue-600/15 p-6">
            <p className="text-sm font-black text-blue-100">Formula used</p>

            <p className="mt-2 leading-7 text-blue-50">
              Power bank mAh × efficiency ÷ phone battery mAh = estimated full
              charges.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Practical Tips
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Make Phone Backup Last Longer
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A power bank is one of the simplest outage-prep items. It is
              cheaper, smaller and easier to store than a full power station.
            </p>
          </div>

          <div className="grid gap-4">
            {tips.map((tip) => (
              <div
                key={tip}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
                  ✓
                </span>

                <p className="leading-7 text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<RelatedLinks
  links={[
    {
      label: "Guide",
      title: "Best Power Banks for Power Outages",
      text: "Choose the right power bank size for phones, USB-C devices and small backup needs.",
      href: "/guides/best-power-banks-for-power-outages",
    },
    {
      label: "Internet Backup",
      title: "Wi-Fi Runtime Calculator",
      text: "Estimate how long your router, modem and home office devices may run.",
      href: "/calculators/wifi-router-runtime",
    },
    {
      label: "Backup Power",
      title: "Power Station Size Calculator",
      text: "Estimate watt-hours for larger devices beyond phones and USB gear.",
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
            Build a Simple Phone Charging Plan
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            If phones, routers and lights are your main outage needs, start with
            a power bank and then consider a compact power station.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/calculators/wifi-router-runtime"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Wi-Fi Runtime Calculator
            </a>

            <a
              href="/calculators/power-station-size"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Battery Size Calculator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}