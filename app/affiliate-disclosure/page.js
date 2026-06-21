export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "Read the affiliate disclosure for Outage Ready Home, including how affiliate links may be used in backup power guides and product comparison content.",
};

const points = [
  {
    title: "Affiliate Links May Be Used",
    text: "Some pages may include affiliate links to products, retailers or services. If you click a link and make a purchase, Outage Ready Home may earn a commission.",
  },
  {
    title: "No Extra Cost to You",
    text: "Affiliate commissions do not change the price you pay. The retailer or affiliate program pays the commission.",
  },
  {
    title: "Editorial Independence",
    text: "Affiliate relationships should not control the basic purpose of our content. Guides should focus on practical fit, safety, specifications and reader needs.",
  },
  {
    title: "No Fake Testing Claims",
    text: "We do not claim hands-on testing unless a product has actually been tested. Placeholder product sections may be used until proper product research is completed.",
  },
];

const contentStandards = [
  "We explain the outage problem before suggesting product categories.",
  "We encourage readers to estimate battery size and runtime before buying.",
  "We separate product-category guidance from real product recommendations.",
  "We aim to make safety notes clear, especially around indoor battery backup and fuel-burning generators.",
  "We update pages when product information, availability or recommendations need improvement.",
];

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.25),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Affiliate Disclosure
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            How Affiliate Links May Work on This Site
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Outage Ready Home may earn commissions from some product links in
            the future. This page explains how affiliate links may be used and
            how we aim to keep recommendations practical and transparent.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Possible affiliate commissions</p>
          <p>No extra cost to readers</p>
          <p>No fake hands-on claims</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Disclosure
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Some Links May Earn a Commission
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Some articles, guides or comparison sections on Outage Ready Home
              may contain affiliate links. This means that if you click a link
              and make a purchase, we may earn a commission from the retailer or
              affiliate program.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These commissions help support the site, including guide writing,
              calculator development, product research and future updates.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">Important note</p>

              <p className="mt-3 leading-8 text-slate-300">
                Affiliate links should not increase the price you pay. Product
                choices should still be based on usefulness, specifications,
                safety considerations and fit for the stated outage use case.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-blue-700">
                  {point.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Content Standards
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              How We Aim to Keep Content Useful
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Backup power gear can be expensive, so product content should be
              handled carefully. Readers should understand the use case before
              comparing products.
            </p>
          </div>

          <div className="grid gap-4">
            {contentStandards.map((item) => (
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
                Reader Reminder
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Always Check Product Details
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Product specifications, prices, availability and warranty terms
                can change. Before buying any backup power product, check the
                retailer page, manufacturer specifications and safety
                instructions.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
              <p className="font-black text-yellow-300">Planning only</p>

              <p className="mt-3 leading-8 text-slate-300">
                Calculator results and guide examples are planning estimates.
                Real runtime can vary based on device behavior, temperature,
                battery age, efficiency and usage.
              </p>

              <a
                href="/editorial-policy"
                className="mt-6 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1"
              >
                Read Editorial Policy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
            Questions?
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Contact Outage Ready Home
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-50">
            For affiliate questions, editorial corrections or partnership
            inquiries, use the contact page.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-blue-700 transition hover:-translate-y-1"
            >
              Contact Us
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