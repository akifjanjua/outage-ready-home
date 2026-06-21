import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema from "@/components/FaqSchema";
import GuideMeta from "@/components/GuideMeta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best Emergency Lights for Power Outages",
  description:
    "Choose emergency lights for power outages, including lanterns, plug-in outage lights, headlamps, flashlights and safer room-by-room lighting setups.",
  path: "/guides/best-emergency-lights-for-power-outages",
});

const quickPicks = [
  {
    label: "Best Overall",
    title: "Rechargeable LED Lantern",
    text: "Best for most homes because it can light a room, move easily between spaces and avoid the fire risk of candles.",
    icon: "🏮",
  },
  {
    label: "Best Automatic",
    title: "Plug-In Outage Light",
    text: "Useful for bedrooms, hallways and stairs because it turns on automatically when the power goes out.",
    icon: "🔌",
  },
  {
    label: "Best Hands-Free",
    title: "Rechargeable Headlamp",
    text: "Ideal for cooking, checking breakers, carrying supplies or helping family members while keeping both hands free.",
    icon: "🔦",
  },
  {
    label: "Best for Apartments",
    title: "Compact USB-C Lantern",
    text: "Small, rechargeable and easy to store in a drawer, closet or compact apartment outage kit.",
    icon: "🏢",
  },
];

const lightTypes = [
  {
    title: "Rechargeable Lanterns",
    bestFor: "Main room lighting",
    text: "A rechargeable lantern is the best first lighting purchase for most homes because it can light a bedroom, living room, kitchen or hallway.",
  },
  {
    title: "Plug-In Outage Lights",
    bestFor: "Automatic safety lighting",
    text: "These stay plugged into the wall and turn on automatically when power goes out, making them useful for hallways, bedrooms and stairs.",
  },
  {
    title: "Headlamps",
    bestFor: "Hands-free tasks",
    text: "A headlamp is useful when you need both hands free for cooking, checking breakers, carrying items or helping someone else.",
  },
  {
    title: "Flashlights",
    bestFor: "Quick movement",
    text: "A flashlight is still useful for short tasks, but it should not be your only outage lighting option.",
  },
  {
    title: "Motion Sensor Lights",
    bestFor: "Bathrooms and hallways",
    text: "Battery-powered motion lights can make nighttime movement safer during outages, especially in apartments or homes with stairs.",
  },
  {
    title: "Solar Lanterns",
    bestFor: "Longer outages",
    text: "Solar lanterns can help during multi-day outages, but charging depends on sunlight, weather and placement.",
  },
];

const roomSetup = [
  {
    room: "Bedroom",
    recommendation: "Small lantern or headlamp near the bed",
    reason: "You need light immediately when the outage starts at night.",
    icon: "🛏️",
  },
  {
    room: "Hallway",
    recommendation: "Plug-in outage light or motion light",
    reason: "Helps prevent falls when moving through the home.",
    icon: "🚪",
  },
  {
    room: "Kitchen",
    recommendation: "Lantern plus headlamp",
    reason: "Useful for food, water, fridge checks and basic tasks.",
    icon: "🍳",
  },
  {
    room: "Bathroom",
    recommendation: "Battery motion light",
    reason: "Makes nighttime movement safer without needing to search for a flashlight.",
    icon: "🚿",
  },
];

const buyingFactors = [
  {
    title: "Runtime",
    text: "Check how long the light lasts on low, medium and high brightness. Lower settings often last much longer.",
  },
  {
    title: "Brightness",
    text: "A very bright light is useful sometimes, but room-friendly lighting and long runtime usually matter more during outages.",
  },
  {
    title: "Recharge Method",
    text: "USB-C charging is convenient. Some lights also support wall charging, solar charging or replaceable batteries.",
  },
  {
    title: "Battery Type",
    text: "Rechargeable batteries are convenient, but keeping spare batteries or a power bank can add backup margin.",
  },
  {
    title: "Heat and Fire Safety",
    text: "Battery-powered lights are usually safer than candles because they do not create open flame risk.",
  },
  {
    title: "Water Resistance",
    text: "Water resistance is useful during storms, leaks, outdoor movement or emergency repairs.",
  },
];

const mistakes = [
  "Relying only on candles instead of safer battery-powered lighting.",
  "Buying one bright flashlight instead of several useful lights around the home.",
  "Keeping every light in one box that is hard to find in the dark.",
  "Forgetting to recharge lanterns, headlamps and plug-in lights.",
  "Ignoring runtime and only checking brightness.",
  "Not placing lights near bedrooms, hallways and bathrooms.",
];

const faq = [
  {
    question: "What is the best emergency light for a power outage?",
    answer:
      "For most homes, a rechargeable LED lantern is the best first option because it can light a room and is safer than candles.",
  },
  {
    question: "Are candles good for power outages?",
    answer:
      "Candles can provide light, but they create fire risk. Rechargeable lanterns, flashlights, headlamps and plug-in outage lights are usually safer and more practical.",
  },
  {
    question: "How many emergency lights should I have?",
    answer:
      "A good starter setup is one main lantern, one headlamp per adult and small automatic lights near hallways, bathrooms or stairs.",
  },
  {
    question: "Should emergency lights be rechargeable?",
    answer:
      "Rechargeable lights are convenient, especially if you keep them charged. It can also be smart to keep backup batteries or power banks available.",
  },
];

export default function EmergencyLightsPage() {
  return (
  <>
    <FaqSchema items={faq} />

    <main className="min-h-screen bg-slate-50 text-slate-950">
        <ArticleSchema
  title="Best Emergency Lights for Power Outages"
  description="Choose the best emergency lights for power outages, including rechargeable lanterns, plug-in outage lights, headlamps, flashlights and motion lights."
  url="/guides/best-emergency-lights-for-power-outages"
/>
      <article>
        <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Emergency Lighting Guide
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Best Emergency Lights for Power Outages
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A strong outage lighting setup is not just one flashlight. The
              best setup usually includes a room lantern, a hands-free headlamp,
              automatic safety lights and small backup lights for bedrooms,
              hallways, kitchens and bathrooms.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/guides/apartment-power-outage-kit"
                className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                View Apartment Kit
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
            <p>Safer than candles</p>
            <p>Room lighting plus hands-free lighting</p>
            <p>Place lights before the outage happens</p>
          </div>
        </section>
        <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    {
      label: "Emergency Lights",
      href: "/guides/best-emergency-lights-for-power-outages",
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
                  href="#quick-picks"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Quick picks
                </a>

                <a
                  href="#types"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Light types
                </a>

                <a
                  href="#room-setup"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Room setup
                </a>

                <a
                  href="#buying-factors"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  Buying factors
                </a>

                <a
                  href="#faq"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700 hover:text-blue-600"
                >
                  FAQ
                </a>
              </div>

              <a
                href="/guides/apartment-power-outage-kit"
                className="mt-6 flex rounded-2xl bg-blue-600 p-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                View Full Outage Kit
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
                  What Emergency Lights Should You Have?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  For most homes, start with one rechargeable lantern for room
                  lighting, one headlamp per adult for hands-free tasks and
                  plug-in outage lights or motion lights near bedrooms,
                  hallways, bathrooms and stairs. This setup is safer and more
                  practical than relying only on candles or one flashlight.
                </p>
              </section>

              <section
                id="quick-picks"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Quick Picks by Use Case
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These are product-type recommendations. Later, we can add real
                  product picks after current product research.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {quickPicks.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {item.icon}
                      </div>

                      <span className="mt-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
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

              <section
                id="types"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Best Types of Emergency Lights
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Different lights solve different problems. A better outage kit
                  usually has more than one lighting type.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {lightTypes.map((type) => (
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
                id="room-setup"
                className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  Simple Room-by-Room Lighting Setup
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Do not store every light in one box. Place small lights where
                  you will actually need them during a blackout.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {roomSetup.map((room) => (
                    <div
                      key={room.room}
                      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300 text-3xl">
                          {room.icon}
                        </div>

                        <h3 className="text-xl font-black text-white">
                          {room.room}
                        </h3>
                      </div>

                      <p className="mt-5 font-black text-yellow-300">
                        {room.recommendation}
                      </p>

                      <p className="mt-3 leading-7 text-slate-300">
                        {room.reason}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-blue-500/30 bg-blue-600/15 p-6">
                  <p className="font-black text-blue-100">
                    Starter lighting formula
                  </p>

                  <p className="mt-2 leading-7 text-blue-50">
                    One lantern for room lighting + one headlamp per adult +
                    automatic hallway lights = a strong basic setup.
                  </p>
                </div>
              </section>

              <section
                id="buying-factors"
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
              >
                <h2 className="text-3xl font-black tracking-tight">
                  What to Check Before Buying Emergency Lights
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Do not buy only by brightness. Runtime, charging method and
                  placement matter just as much.
                </p>

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
                  Emergency Lighting Mistakes to Avoid
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
                  Building a Full Outage Kit?
                </h2>

                <p className="mt-4 leading-8 text-blue-50">
                  Emergency lighting is only one part of a useful kit. Add phone
                  charging, backup power, water, food and basic safety supplies.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/guides/apartment-power-outage-kit"
                    className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
                  >
                    View Apartment Kit
                  </a>

                  <a
                    href="/calculators/power-station-size"
                    className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
                  >
                    Estimate Battery Size
                  </a>
                </div>
              </section>
<RelatedLinks
  links={[
    {
      label: "Apartment Setup",
      title: "Best Power Outage Kit for Apartments",
      text: "Build a compact outage kit for lights, charging, water, food and basic comfort.",
      href: "/guides/apartment-power-outage-kit",
    },
    {
      label: "Phone Backup",
      title: "Best Power Banks for Power Outages",
      text: "Keep phones and small USB lights charged with the right power bank size.",
      href: "/guides/best-power-banks-for-power-outages",
    },
    {
      label: "Calculator",
      title: "Power Station Size Calculator",
      text: "Estimate battery size for lights, routers, laptops and other essential devices.",
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
    </>
  );
}