"use client";

import { useMemo, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const presets = [
  {
    label: "Solo apartment",
    people: 1,
    hours: 24,
    workFromHome: false,
    hasPets: false,
  },
  {
    label: "Couple, 1 day",
    people: 2,
    hours: 24,
    workFromHome: true,
    hasPets: false,
  },
  {
    label: "Small family, 2 days",
    people: 3,
    hours: 48,
    workFromHome: true,
    hasPets: false,
  },
  {
    label: "With pet",
    people: 2,
    hours: 48,
    workFromHome: false,
    hasPets: true,
  },
];

const tips = [
  "Avoid fuel-burning equipment indoors. Apartments usually need battery-based and renter-safe backup gear.",
  "Keep your kit compact enough to store in one closet, cabinet or under-bed box.",
  "Prioritize lights, phone charging, water, shelf-stable food and basic comfort first.",
  "Test your lights, power banks and chargers before storm season or planned outage periods.",
];

export default function ApartmentOutageKitBuilder() {
  const [people, setPeople] = useState(2);
  const [hours, setHours] = useState(24);
  const [workFromHome, setWorkFromHome] = useState(true);
  const [hasPets, setHasPets] = useState(false);

  function applyPreset(preset) {
    setPeople(preset.people);
    setHours(preset.hours);
    setWorkFromHome(preset.workFromHome);
    setHasPets(preset.hasPets);
  }

  const results = useMemo(() => {
    const safePeople = Number(people) || 1;
    const safeHours = Number(hours) || 24;
    const days = Math.max(1, Math.ceil(safeHours / 24));

    const waterLiters = safePeople * days * 3;
    const phonePowerBanks = Math.max(1, Math.ceil(safePeople / 2));
    const lights = Math.max(2, safePeople + 1);
    const meals = safePeople * days * 3;
    const batteries = lights * 2;
    const petWaterLiters = hasPets ? days * 1.5 : 0;

    let kitLevel = "Basic apartment kit";

    if (safeHours >= 48 && safeHours < 72) {
      kitLevel = "Stronger 2-day apartment kit";
    }

    if (safeHours >= 72) {
      kitLevel = "Extended apartment outage kit";
    }

    const checklist = [
      {
        category: "Lighting",
        items: [
          `${lights} LED lanterns, plug-in outage lights or rechargeable lights`,
          "1 headlamp or flashlight for hands-free movement",
          `${batteries} spare batteries or fully charged rechargeable lights`,
        ],
      },
      {
        category: "Phone & Small Power",
        items: [
          `${phonePowerBanks} power bank${phonePowerBanks > 1 ? "s" : ""}`,
          "USB-C and phone charging cables",
          workFromHome
            ? "Small power station or extra power bank for laptop/router support"
            : "Wall charger ready for fast recharging when power returns",
        ],
      },
      {
        category: "Water & Food",
        items: [
          `${waterLiters} liters of drinking water`,
          `${meals} simple shelf-stable meals or snacks`,
          "Manual can opener if using canned food",
        ],
      },
      {
        category: "Comfort & Safety",
        items: [
          "Small first-aid kit",
          "Trash bags, wipes and basic hygiene items",
          "Battery radio or charged phone with emergency alerts enabled",
          hasPets
            ? `${petWaterLiters} extra liters of pet water plus pet food and waste bags`
            : "Extra blanket or warm layer for comfort",
        ],
      },
    ];

    return {
      days,
      waterLiters,
      phonePowerBanks,
      lights,
      meals,
      kitLevel,
      checklist,
    };
  }, [people, hours, workFromHome, hasPets]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Free Calculator
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Apartment Outage Kit Builder
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Build a compact, renter-safe power outage kit for an apartment based
            on household size, outage duration, phone charging, lighting, food,
            water and comfort needs.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Renter-safe outage planning</p>
          <p>Compact kit recommendations</p>
          <p>No indoor fuel-burning equipment</p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          {
            label: "Apartment Outage Kit Builder",
            href: "/calculators/apartment-outage-kit-builder",
          },
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Inputs
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Build Your Apartment Kit
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Start with a preset or adjust the people, outage length and living
            situation.
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
                Number of people
              </label>

              <input
                type="number"
                min="1"
                max="10"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Outage duration hours
              </label>

              <input
                type="number"
                min="1"
                max="168"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Try 24, 48 or 72 hours for common planning ranges.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setWorkFromHome((value) => !value)}
                className={`rounded-2xl border p-4 text-left font-black transition ${
                  workFromHome
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                Work/study from home
              </button>

              <button
                type="button"
                onClick={() => setHasPets((value) => !value)}
                className={`rounded-2xl border p-4 text-left font-black transition ${
                  hasPets
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                Include pet basics
              </button>
            </div>
          </div>
        </div>

        <aside className="rounded-[2.25rem] bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:sticky lg:top-28 lg:h-fit">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
            Estimated Kit
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Recommended kit level
            </p>

            <p className="mt-3 text-4xl font-black tracking-tight text-blue-600">
              {results.kitLevel}
            </p>
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Water
              </p>
              <p className="mt-2 text-3xl font-black text-yellow-300">
                {results.waterLiters}L
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Lights
              </p>
              <p className="mt-2 text-3xl font-black text-yellow-300">
                {results.lights}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Power banks
              </p>
              <p className="mt-2 text-3xl font-black text-yellow-300">
                {results.phonePowerBanks}
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Checklist
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Your Apartment Outage Kit
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {results.checklist.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-black text-blue-700">
                  {group.category}
                </h3>

                <div className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-sm font-black text-slate-950">
                        ✓
                      </span>

                      <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Reality Check
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Apartment Outage Safety Notes
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Apartment outage planning should stay compact, quiet and safe.
              Avoid anything that creates fumes, heat or storage problems
              indoors.
            </p>
          </div>

          <div className="grid gap-4">
            {tips.map((tip) => (
              <div
                key={tip}
                className="flex gap-4 rounded-3xl bg-slate-50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
                  !
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
            title: "Best Power Outage Kit for Apartments",
            text: "Learn how to build a compact, renter-safe outage kit for apartments.",
            href: "/guides/apartment-power-outage-kit",
          },
          {
            label: "Lighting",
            title: "Best Emergency Lights",
            text: "Choose safe lighting options for bedrooms, hallways and kitchens.",
            href: "/guides/best-emergency-lights-for-power-outages",
          },
          {
            label: "Phone Backup",
            title: "Phone Charging Calculator",
            text: "Estimate how many phone charges a power bank may provide.",
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
            Keep the Kit Compact and Practical
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Once your apartment basics are covered, use the phone and Wi-Fi
            calculators to decide whether you need a larger battery setup.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides/apartment-power-outage-kit"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Read Apartment Guide
            </a>

            <a
              href="/calculators/wifi-router-runtime"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Wi-Fi Runtime Calculator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}