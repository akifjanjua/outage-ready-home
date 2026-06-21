export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Outage Ready Home privacy policy, including information about site usage, contact information, analytics, cookies and affiliate links.",
};

const policySections = [
  {
    title: "Information We May Collect",
    text: "Outage Ready Home may collect limited information that visitors choose to provide, such as a name, email address or message if a contact form, email signup or feedback feature is added. The site may also collect basic usage information through analytics tools if they are enabled.",
  },
  {
    title: "How Information May Be Used",
    text: "Information may be used to respond to inquiries, improve guides and calculators, understand site performance, maintain security, review corrections and improve the overall reader experience.",
  },
  {
    title: "Cookies and Analytics",
    text: "The site may use cookies or similar technologies if analytics, affiliate tracking, advertising or performance tools are added. These tools can help understand which pages are useful and how visitors move through the site.",
  },
  {
    title: "Affiliate Links",
    text: "Outage Ready Home may include affiliate links in the future. If visitors click those links or make purchases through them, affiliate partners may use cookies or tracking technologies according to their own policies.",
  },
  {
    title: "Third-Party Services",
    text: "The site may use third-party services for hosting, analytics, email delivery, form handling, affiliate tracking or performance monitoring. These services may process data according to their own privacy practices.",
  },
  {
    title: "Data Protection",
    text: "Reasonable steps should be taken to protect information submitted through the site. However, no website, email system or online service can guarantee complete security.",
  },
  {
    title: "Children’s Privacy",
    text: "This site is intended for general household planning information and is not directed toward children. It does not knowingly collect personal information from children.",
  },
  {
    title: "Policy Updates",
    text: "This policy may be updated when new features are added, such as analytics, email signup forms, contact forms, affiliate programs or advertising tools.",
  },
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
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This policy explains how Outage Ready Home may handle information
            related to site usage, contact messages, analytics, cookies and
            affiliate links.
          </p>

          <p className="mt-6 inline-flex rounded-full bg-blue-50 px-5 py-3 text-sm font-black text-blue-700">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Clear privacy language</p>
          <p>Analytics and affiliate-ready</p>
          <p>Update when new tools are added</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Overview
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            How This Site Handles Privacy
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Outage Ready Home is designed to provide practical backup power and
            outage-planning information. Visitors can browse guides and use
            calculators without creating an account. If interactive features,
            analytics, affiliate links or contact tools are added, this policy
            should be reviewed and updated accordingly.
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {policySections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-black">{section.title}</h2>

              <p className="mt-4 leading-8 text-slate-600">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white md:p-10">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
            Important Note
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight">
            Update This Policy When Features Change
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            This policy should be updated whenever new tools are added, such as
            analytics platforms, email signup forms, contact forms, advertising,
            affiliate tracking, downloadable resources or user-submitted
            content.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight">
            Questions About This Policy
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Questions about this privacy policy can be sent through the contact
            page.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-blue-600 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Contact Outage Ready Home
          </a>
        </section>
      </section>
    </main>
  );
}