import { ShoppingCart, Leaf, Clock, MapPin } from "lucide-react";

const Hero = () => {
  const handleScrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const introMessage = encodeURIComponent(
    "Halo Bu Lin! Saya ingin menanyakan katalog produk dan cara pre-order."
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-700 shadow-sm backdrop-blur">
          <Leaf className="h-4 w-4" />
          <span className="text-sm font-medium">Preservative-free • Homemade goodness</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-emerald-900 sm:text-6xl">
          Bu Lin — Healthy Homemade Snacks
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-800/80">
          Small-batch snacks made fresh daily in Makassar. Order ahead, pick up or
          get delivered. Good food, made clean.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={handleScrollToProducts}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Browse Products
          </button>
          <a
            href={`https://wa.me/?text=${introMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-emerald-700 shadow ring-1 ring-emerald-200 hover:bg-emerald-50"
          >
            Chat via WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 text-emerald-800/80 sm:flex-row">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-600" />
            <span>Open daily 09:00–21:00</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span>North Karuwisi, Panakkukang, Makassar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
