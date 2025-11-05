import { ShoppingCart, Star, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Granola Kurma",
    desc: "Roasted oats with dates, nuts, and seeds. No refined sugar.",
    price: 45000,
    tags: ["No Preservatives", "Whole Grains"],
  },
  {
    id: 2,
    name: "Banana Oat Cookies",
    desc: "Soft-baked cookies sweetened with ripe bananas.",
    price: 30000,
    tags: ["Low Sugar", "Kids Friendly"],
  },
  {
    id: 3,
    name: "Veggie Chips",
    desc: "Air-fried mixed root veggies with sea salt.",
    price: 28000,
    tags: ["Air-Fried", "Gluten Free"],
  },
  {
    id: 4,
    name: "Chia Pudding Cup",
    desc: "Chilled chia with coconut milk and seasonal fruits.",
    price: 25000,
    tags: ["Dairy Free", "High Fiber"],
  },
];

const currency = (n) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(n);

const ProductCard = ({ item }) => {
  const message = encodeURIComponent(
    `Halo Bu Lin! Saya ingin pre-order: ${item.name} (qty: 1).\n` +
      `Alamat: —\nWaktu ambil/kirim: —\n\n` +
      `Mohon konfirmasi ketersediaan. Terima kasih!\n\n` +
      `Alamat Usaha: Jl. Urip Sumoharjo Lrg. IV, North Karuwisi, Panakkukang District, Makassar City, South Sulawesi 90212.`
  );

  return (
    <div className="group flex flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-emerald-900">{item.name}</h3>
          <p className="mt-1 text-sm text-emerald-800/80">{item.desc}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Leaf className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200"
          >
            <Star className="h-3 w-3" /> {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-base font-semibold text-emerald-900">{currency(item.price)}</div>
        <a
          href={`https://wa.me/?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700"
        >
          <ShoppingCart className="h-4 w-4" /> Order via WhatsApp
        </a>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Product Catalog (Pre-Order)</h2>
            <p className="mt-2 max-w-2xl text-emerald-800/80">
              Freshly made per order. Please allow preparation time depending on quantity and item.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
