import Image from "next/image";
import Link from "next/link";

const bundles = [
  {
    name: "Kita Bro All In",
    price: "Rp419.000",
    desc: "Paket lengkap AMERTA untuk maba pria.",
  },
  {
    name: "Kita Sis All In 1",
    price: "Rp439.000",
    desc: "Paket lengkap AMERTA untuk maba wanita dengan rok.",
  },
  {
    name: "Kita Sis All In 2",
    price: "Rp419.000",
    desc: "Alternatif paket lengkap AMERTA untuk maba wanita.",
  },
  {
    name: "Kita Classy Bro",
    price: "Rp309.000",
    desc: "Paket formal essentials untuk maba pria.",
  },
  {
    name: "Kita Classy Sis",
    price: "Rp309.000",
    desc: "Paket formal essentials untuk maba wanita.",
  },
  {
    name: "Kita Fit",
    price: "Rp99.000",
    desc: "Paket olahraga basic untuk kebutuhan AMERTA.",
  },
];

const steps = [
  {
    title: "Pilih Produk",
    desc: "Pilih bundle atau produk satuan sesuai kebutuhan AMERTA kamu.",
  },
  {
    title: "Isi Size",
    desc: "Lengkapi ukuran untuk item yang membutuhkan size.",
  },
  {
    title: "Bayar via QRIS",
    desc: "Lakukan pembayaran sesuai total yang muncul di halaman order.",
  },
  {
    title: "Upload Bukti",
    desc: "Upload bukti pembayaran, lalu pesanan akan masuk ke sistem kami.",
  },
];

const benefits = [
  "Lebih praktis, tidak perlu cari perlengkapan satu-satu.",
  "Harga ramah di kantong untuk mahasiswa baru.",
  "Bisa pilih bundle atau produk satuan.",
  "Referral code valid dapat diskon 5% khusus bundle.",
  "Pengambilan dan pengiriman mulai 23 Juni 2026.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#bee9f8] text-[#1F1F1F]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image
              src="/k.png"
              alt="Logo UnairKita"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-[#294c77]">
              UnairKita
            </p>
            <p className="text-xs text-gray-600">AMERTA Kit 2026</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#produk" className="hover:text-[#294c77]">
            Produk
          </a>
          <a href="#cara-order" className="hover:text-[#294c77]">
            Cara Order
          </a>
          <a href="#faq" className="hover:text-[#294c77]">
            FAQ
          </a>
        </nav>

        <Link
          href="/order"
          className="rounded-full bg-[#294c77] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1f3c60]"
        >
          Order
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#294c77] shadow-sm">
            Pemesanan perlengkapan AMERTA 2026
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-[#1F1F1F] md:text-6xl">
            Ciee udah jadi maba UNAIR nihh
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-700">
            Biar kamu nggak ribet cari perlengkapan ospek satu-satu, UnairKita
            siap bantu nyiapin kebutuhan AMERTA kamu dengan pilihan bundle dan
            produk satuan yang praktis, terpercaya, dan ramah di kantong.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/order"
              className="rounded-full bg-[#294c77] px-7 py-3 text-center font-semibold text-white transition hover:bg-[#1f3c60]"
            >
              Order Sekarang
            </Link>

            <a
              href="#produk"
              className="rounded-full border border-[#294c77] bg-white px-7 py-3 text-center font-semibold text-[#294c77] transition hover:bg-[#f5fbff]"
            >
              Lihat Paket
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-[#294c77]">6</p>
              <p className="text-xs text-gray-600">Pilihan bundle</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-[#294c77]">5%</p>
              <p className="text-xs text-gray-600">Diskon referral</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-[#294c77]">23 Jun</p>
              <p className="text-xs text-gray-600">Mulai pengiriman</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <div className="relative mx-auto h-56 w-56 md:h-72 md:w-72">
            <Image
              src="/k.png"
              alt="UnairKita"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-6 rounded-3xl bg-[#bee9f8] p-5">
            <p className="text-sm font-semibold text-[#294c77]">
              Kenapa order di UnairKita?
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {benefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span className="text-[#294c77]">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="produk" className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#294c77]">
              Produk UnairKita
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Pilihan bundle AMERTA
            </h2>
          </div>

          <Link
            href="/order"
            className="w-fit rounded-full bg-[#294c77] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f3c60]"
          >
            Pesan Bundle
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#294c77]">
                {bundle.name}
              </p>
              <h3 className="mt-3 text-3xl font-bold">{bundle.price}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {bundle.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="rounded-[2rem] bg-[#294c77] p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#bee9f8]">
                Benefit
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Lebih siap AMERTA tanpa ribet.
              </h2>
              <p className="mt-4 leading-7 text-blue-50">
                UnairKita membantu mahasiswa baru menyiapkan kebutuhan ospek
                dengan sistem pemesanan yang lebih praktis dan terstruktur.
              </p>
            </div>

            <div className="grid gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl bg-white/10 p-4 text-sm text-blue-50"
                >
                  ✓ {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cara-order" className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#294c77]">
            Cara Order
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Order cukup beberapa langkah.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#294c77] text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#294c77]">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Pertanyaan umum
            </h2>
          </div>

          <div className="space-y-3">
            <details className="rounded-2xl bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                Referral code berlaku untuk apa?
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Referral code valid akan memberi diskon 5% khusus untuk
                pembelian bundle. Diskon tidak berlaku untuk produk satuan.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                Pengiriman mulai kapan?
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Pengiriman dan pengambilan pesanan mulai dilakukan pada 23 Juni
                2026.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                Bisa ambil sendiri?
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Bisa. Opsi ambil sendiri tersedia pada 29 Juni 2026 atau 23 Juli
                2026 di Kampus C UNAIR.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                Kalau mau tanya admin lewat WhatsApp?
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Kamu bisa hubungi admin melalui WhatsApp:
                083198091631 (Fadlu)
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#294c77]">
            Ready for AMERTA?
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Yuk, siapin kebutuhan ospekmu sekarang.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Pilih paket yang paling sesuai, isi size dengan benar, lalu submit
            order melalui website UnairKita.
          </p>

          <Link
            href="/order"
            className="mt-8 inline-flex rounded-full bg-[#294c77] px-8 py-3 font-semibold text-white transition hover:bg-[#1f3c60]"
          >
            Order Sekarang
          </Link>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-600 md:px-8">
        <p>© 2026 UnairKita. AMERTA Kit for mahasiswa baru UNAIR.</p>
      </footer>
    </main>
  );
}