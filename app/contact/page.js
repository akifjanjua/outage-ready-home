export const metadata = {
  title: "Contact",
  description:
    "Contact Outage Ready Home for questions about backup power guides, outage calculators, editorial feedback and partnership inquiries.",
};

const contactOptions = [
  {
    title: "General Questions",
    text: "For questions about outage guides, calculators, site content or general feedback.",
    email: "contact@outagereadyhome.com",
    icon: "✉️",
  },
  {
    title: "Editorial Feedback",
    text: "For corrections, suggestions, safety notes or improvements to existing guides.",
    email: "editorial@outagereadyhome.com",
    icon: "📝",
  },
  {
    title: "Partnerships",
    text: "For future affiliate, sponsorship or product research conversations.",
    email: "partners@outagereadyhome.com",
    icon: "🤝",
  },
];

const responseTopics = [
  "Backup power guide feedback",
  "Calculator suggestions",
  "Correction requests",
  "Product comparison questions",
  "Affiliate or partnership inquiries",
  "General outage-prep questions",
];

const setupSteps = [
  {
    number: "01",
    title: "Connect the custom domain",
    text: "Point the final domain to the site so the brand uses a clean, professional URL.",
  },
  {
    number: "02",
    title: "Set up domain email",
    text: "Create contact, editorial and partner email addresses for the final domain.",
  },
  {
    number: "03",
    title: "Connect a form handler",
    text: "Use Formspree, Resend, EmailJS or another service if a working contact form is needed.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Get in Touch With Outage Ready Home
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Questions, corrections, suggestions and partnership inquiries can
            be routed through the contact channels prepared for the final custom
            domain setup.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/guides"
              className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Browse Guides
            </a>

            <a
              href="/editorial-policy"
              className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              Editorial Policy
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Guide feedback</p>
          <p>Corrections and suggestions</p>
          <p>Future partnership inquiries</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-4xl">
                {option.icon}
              </div>

              <h2 className="mt-6 text-2xl font-black">{option.title}</h2>

              <p className="mt-4 leading-7 text-slate-600">{option.text}</p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Prepared email
                </p>

                <p className="mt-1 break-words font-black text-blue-600">
                  {option.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
    <div>
      <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
        Before You Contact
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
        Help Us Keep the Guides Useful
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        The best messages include the guide or calculator you are referring to,
        what seemed unclear, and any correction or suggestion you want reviewed.
      </p>

      <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
        <p className="font-black text-yellow-300">Helpful note</p>

        <p className="mt-3 leading-8 text-slate-300">
          Outage Ready Home provides planning information only. Always check
          product manuals, manufacturer safety instructions and local guidance
          before using backup power equipment.
        </p>
      </div>
    </div>

    <div className="grid gap-5">
      {[
        {
          number: "01",
          title: "Mention the page",
          text: "Include the guide, calculator or topic your message is about.",
        },
        {
          number: "02",
          title: "Share the issue clearly",
          text: "For corrections, include what should be changed and why.",
        },
        {
          number: "03",
          title: "Keep safety details specific",
          text: "For safety feedback, mention the device type, use case or outage situation.",
        },
      ].map((step) => (
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

              <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
            </div>
          </div>
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
                Topics
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                What This Page Supports
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Once email delivery is connected, this page can support reader
                feedback, correction requests, product research updates and
                future affiliate partnership conversations.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {responseTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex gap-3 rounded-3xl bg-slate-50 p-5"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                    ✓
                  </span>

                  <p className="font-bold leading-7 text-slate-700">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Start Here
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Looking for Backup Power Help?
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            Use the calculators and guides first if you are trying to estimate
            battery size, refrigerator runtime, Wi-Fi backup or apartment outage
            needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/calculators"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              View Calculators
            </a>

            <a
              href="/guides"
              className="rounded-full border border-blue-300 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Browse Guides
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}