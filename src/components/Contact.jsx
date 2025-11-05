import { MapPin, Clock, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const addressFull =
    "Jl. Urip Sumoharjo Lrg. IV, North Karuwisi, Panakkukang District, Makassar City, South Sulawesi 90212";

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressFull
  )}`;

  const waMsg = encodeURIComponent(
    `Halo Bu Lin! Saya ingin menanyakan ketersediaan produk dan cara pre-order.\n\nAlamat: ${addressFull}\nJam Operasional: 09:00–21:00 (Setiap Hari)`
  );

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-emerald-900">Visit Us</h3>
              <p className="flex items-start gap-2 text-emerald-800/90">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <span>{addressFull}</span>
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-max items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow ring-1 ring-emerald-200 hover:bg-emerald-100"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-emerald-900">Hours</h3>
              <p className="flex items-center gap-2 text-emerald-800/90">
                <Clock className="h-5 w-5 text-emerald-600" />
                Open daily 09:00–21:00
              </p>
              <p className="text-sm text-emerald-800/70">Pre-order recommended for freshness.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-emerald-900">Order</h3>
              <p className="flex items-center gap-2 text-emerald-800/90">
                <Phone className="h-5 w-5 text-emerald-600" />
                WhatsApp Business
              </p>
              <a
                href={`https://wa.me/?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-max items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700"
              >
                <MessageSquare className="h-4 w-4" /> Chat to Order
              </a>
              <p className="text-xs text-emerald-800/70">Your chat will open with a pre-filled message.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
