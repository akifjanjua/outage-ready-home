export default function ProductComparison({ products }) {
  return (
    <section
      id="top-picks"
      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
    >
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Comparison
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
            Best Portable Power Station Picks by Use Case
          </h2>
        </div>

        <p className="max-w-xl leading-7 text-slate-600">
          These are placeholder recommendation slots. Real product names,
          current prices and affiliate links should only be added after proper
          product research.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {products.map((product) => (
          <article
            key={product.pick}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
          >
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex min-h-64 items-center justify-center bg-slate-900 p-8 text-center text-white">
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-4xl">
                    🔋
                  </div>
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
                    Product Slot
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    {product.placeholderName}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  {product.pick}
                </span>

                <h3 className="mt-6 text-2xl font-black leading-tight">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                      Battery Class
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {product.capacity}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                      Best For
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {product.bestFor}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                      Priority
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {product.priority}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                    <p className="font-black text-green-800">Good fit if</p>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-green-900">
                      {product.goodFit.map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
                    <p className="font-black text-yellow-900">
                      Check before buying
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-yellow-950">
                      {product.checkBeforeBuying.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white opacity-60"
                  >
                    Affiliate Link Later
                  </button>

                  <a
                    href="/calculators/power-station-size"
                    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-black text-slate-950 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    Check Battery Size
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6">
        <p className="font-black text-slate-950">Editorial note</p>
        <p className="mt-2 leading-7 text-slate-700">
          This comparison layout is ready for real products, but product names,
          pricing and affiliate links should be added only after checking
          current specifications, warranties, availability and retailer details.
        </p>
      </div>
    </section>
  );
}