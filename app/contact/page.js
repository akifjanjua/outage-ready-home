export const metadata = {
  title: "Contact Outage Ready Home | Backup Power Guides",
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
            Have a question, correction, suggestion or partnership inquiry?
            Reach out about backup power guides, calculators, outage kits,
            emergency lighting or refrigerator backup content.
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

              <a
                href={`mailto:${option.email}`}
                className="mt-6 inline-flex font-black text-blue-600 hover:text-blue-800"
              >
                {option.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Contact Form
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Send a Message
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This form is a front-end placeholder for now. Before the website
              goes live properly, we can connect it to Formspree, Resend,
              EmailJS or another form service.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">Current status</p>

              <p className="mt-3 leading-8 text-slate-300">
                The page is designed and ready visually. The form will not send
                emails until we connect a backend or third-party form handler.
              </p>
            </div>
          </div>

          <form className="rounded-[2.25rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Topic
                </label>

                <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
                  <option>General question</option>
                  <option>Guide feedback</option>
                  <option>Correction request</option>
                  <option>Calculator suggestion</option>
                  <option>Partnership inquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Message
                </label>

                <textarea
                  placeholder="Write your message..."
                  rows="6"
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-4 font-semibold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="button"
                className="rounded-full bg-blue-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Send Message Later
              </button>

              <p className="text-sm leading-6 text-slate-500">
                Placeholder button for now. We’ll connect the form before final
                deployment.
              </p>
            </div>
          </form>
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
                What You Can Contact Us About
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Feedback helps make the site more useful, accurate and practical
                for real outage situations.
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
            battery size, refrigerator runtime or apartment outage needs.
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