export const metadata = {
  title: "Privacy Policy | Outage Ready Home",
  description:
    "Read the privacy policy for Outage Ready Home, including information about analytics, contact forms, email collection, cookies and affiliate links.",
};

const privacySections = [
  {
    title: "Information You May Provide",
    text: "If you contact us, join an email list or submit a form in the future, you may provide information such as your name, email address and message details.",
  },
  {
    title: "Automatically Collected Information",
    text: "Like many websites, Outage Ready Home may collect basic usage information such as pages visited, browser type, device type, referring pages and general interaction data.",
  },
  {
    title: "Cookies and Analytics",
    text: "The site may use cookies or analytics tools in the future to understand page traffic, improve guides and measure how visitors use the website.",
  },
  {
    title: "Affiliate Links",
    text: "Some pages may include affiliate links. Affiliate partners may use tracking methods to identify qualifying purchases.",
  },
];

const uses = [
  "To respond to messages or contact requests.",
  "To improve guides, calculators and website usability.",
  "To understand which pages are useful to readers.",
  "To manage future email checklist or newsletter features.",
  "To monitor affiliate link performance if affiliate links are added.",
];

const rights = [
  "You may contact us to request correction or deletion of information you provided directly.",
  "You may unsubscribe from future email communication if an email list is added.",
  "You may disable cookies in your browser settings.",
  "You may choose not to submit contact forms or email signup forms.",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Privacy Policy
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            How Outage Ready Home Handles Privacy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This privacy policy explains what information Outage Ready Home may
            collect, how it may be used and what choices visitors may have when
            using the website.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-bold uppercase tracking-wide text-slate-500">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Basic visitor privacy</p>
          <p>Future analytics and forms</p>
          <p>Affiliate tracking disclosure</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Overview
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              A Simple Privacy Overview
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Outage Ready Home is a backup power and outage preparedness
              website. Visitors can browse guides, use calculators and read
              planning content without creating an account.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              In the future, the site may include email signup forms, contact
              forms, analytics tools and affiliate links. This page explains how
              those features may involve basic data collection.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">
                Important placeholder note
              </p>

              <p className="mt-3 leading-8 text-slate-300">
                This is a starter privacy policy for the website build. Before
                serious public launch, paid ads, email collection or monetized
                affiliate activity, this page should be reviewed and adjusted
                for the tools actually used.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {privacySections.map((section) => (
              <div
                key={section.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-blue-700">
                  {section.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Use of Information
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              How Information May Be Used
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Any information collected should be used to operate the site,
              improve the content and respond to visitor requests.
            </p>
          </div>

          <div className="grid gap-4">
            {uses.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                  ✓
                </span>

                <p className="leading-7 text-slate-700">{item}</p>
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
                Cookies and Third Parties
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Analytics, Forms and Affiliate Tools
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                The site may use third-party services in the future, such as
                analytics tools, contact form services, email tools or affiliate
                programs. These services may process data according to their own
                privacy policies.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">
                Examples of possible future tools
              </p>

              <div className="mt-5 grid gap-3 text-slate-300">
                <p>Google Analytics or similar traffic analytics</p>
                <p>Email signup or newsletter tools</p>
                <p>Contact form handling services</p>
                <p>Affiliate networks or retailer tracking links</p>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                We’ll update this policy when the final live tools are selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
              Your Choices
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Visitor Privacy Choices
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Visitors may have choices depending on what features are active on
              the site, such as email signup, cookies or contact forms.
            </p>
          </div>

          <div className="grid gap-4">
            {rights.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-5"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">
                  ✓
                </span>

                <p className="leading-7 text-slate-300">{item}</p>
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
                Contact
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Privacy Questions
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                For questions about this privacy policy, contact forms, email
                collection or data handling, use the contact page.
              </p>
            </div>

            <div className="rounded-[2rem] bg-blue-600 p-7 text-white">
              <p className="font-black text-blue-100">Contact page</p>

              <p className="mt-3 leading-8 text-blue-50">
                Send privacy-related questions or correction requests through
                the contact page.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-blue-700 transition hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}