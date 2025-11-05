import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-emerald-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">About Bu Lin</h2>
            <p className="mt-4 text-emerald-800/90">
              Bu Lin is a small home-based business in Makassar with one mission: to provide
              better, preservative-free snacks for everyone. We keep our recipes simple,
              use real ingredients, and make everything fresh to order.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                <Heart className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 text-sm font-medium text-emerald-900">Made with care</p>
                <p className="text-xs text-emerald-800/80">Handcrafted in small batches</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 text-sm font-medium text-emerald-900">No preservatives</p>
                <p className="text-xs text-emerald-800/80">Clean labels only</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 text-sm font-medium text-emerald-900">Fresh to order</p>
                <p className="text-xs text-emerald-800/80">Best taste & quality</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-50">
                <div className="text-center">
                  <p className="text-6xl">🥗🍪🥖</p>
                  <p className="mt-3 text-sm text-emerald-800/80">Healthy bites made daily in Makassar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
