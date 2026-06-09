"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ProductType = "bundle" | "single";

type SizeCategory =
  | "kemejaPria"
  | "kemejaWanita"
  | "celanaFormal"
  | "rokFormal"
  | "kaosPutih"
  | "celanaOlahraga"
  | "pantofelCowo"
  | "pantofelCewe"
  | null;

type BundleItem = {
  name: string;
  sizeCategory: SizeCategory;
};

type Product = {
  id: string;
  name: string;
  price: number;
  type: ProductType;
  sizeCategory?: SizeCategory;
  items?: BundleItem[];
};

type SizeDetail = {
  setNumber: number;
  sizes: {
    productName: string;
    size: string;
  }[];
};

type CartItem = {
  cartId: string;
  productId: string;
  type: ProductType;
  name: string;
  price: number;
  qty: number;
  sizeDetails: SizeDetail[];
};

type ReferralValidation = {
  checkedCode: string;
  valid: boolean;
  message: string;
  discount: number;
};

const products: Product[] = [
  {
    id: "kita-bro-all-in",
    name: "Kita Bro All In",
    price: 419000,
    type: "bundle",
    items: [
      { name: "Hem Formal Pria", sizeCategory: "kemejaPria" },
      { name: "Celana Formal Hitam", sizeCategory: "celanaFormal" },
      { name: "Celana Formal Putih", sizeCategory: "celanaFormal" },
      { name: "Kaos Putih Lengan Panjang", sizeCategory: "kaosPutih" },
      { name: "Celana Olahraga", sizeCategory: "celanaOlahraga" },
      { name: "Pantofel Cowo", sizeCategory: "pantofelCowo" },
      { name: "Kaos Kaki Putih", sizeCategory: null },
      { name: "Hasduk + Kolong", sizeCategory: null },
      { name: "Sabuk", sizeCategory: null },
      { name: "Pin Garuda + Merput", sizeCategory: null },
    ],
  },
  {
    id: "kita-sis-all-in-1",
    name: "Kita Sis All In 1",
    price: 439000,
    type: "bundle",
    items: [
      { name: "Hem Formal Wanita", sizeCategory: "kemejaWanita" },
      { name: "Rok Hitam", sizeCategory: "rokFormal" },
      { name: "Rok Putih", sizeCategory: "rokFormal" },
      { name: "Kaos Putih Lengan Panjang", sizeCategory: "kaosPutih" },
      { name: "Celana Olahraga", sizeCategory: "celanaOlahraga" },
      { name: "Pantofel Cewe", sizeCategory: "pantofelCewe" },
      { name: "Kaos Kaki Putih", sizeCategory: null },
      { name: "Hasduk + Kolong", sizeCategory: null },
      { name: "Sabuk", sizeCategory: null },
      { name: "Pin Garuda + Merput", sizeCategory: null },
      { name: "Kerudung Putih", sizeCategory: null },
    ],
  },
  {
    id: "kita-sis-all-in-2",
    name: "Kita Sis All In 2",
    price: 419000,
    type: "bundle",
    items: [
      { name: "Hem Formal Wanita", sizeCategory: "kemejaWanita" },
      { name: "Rok Hitam", sizeCategory: "rokFormal" },
      { name: "Rok Putih", sizeCategory: "rokFormal" },
      { name: "Kaos Putih Lengan Panjang", sizeCategory: "kaosPutih" },
      { name: "Celana Olahraga", sizeCategory: "celanaOlahraga" },
      { name: "Pantofel Cewe", sizeCategory: "pantofelCewe" },
      { name: "Kaos Kaki Putih", sizeCategory: null },
      { name: "Hasduk + Kolong", sizeCategory: null },
      { name: "Sabuk", sizeCategory: null },
      { name: "Pin Garuda + Merput", sizeCategory: null },
    ],
  },
  {
    id: "kita-classy-bro",
    name: "Kita Classy Bro",
    price: 309000,
    type: "bundle",
    items: [
      { name: "Hem Formal Pria", sizeCategory: "kemejaPria" },
      { name: "Celana Formal Hitam", sizeCategory: "celanaFormal" },
      { name: "Celana Formal Putih", sizeCategory: "celanaFormal" },
      { name: "Pantofel Cowo", sizeCategory: "pantofelCowo" },
      { name: "Kaos Kaki Putih", sizeCategory: null },
      { name: "Sabuk", sizeCategory: null },
    ],
  },
  {
    id: "kita-classy-sis",
    name: "Kita Classy Sis",
    price: 309000,
    type: "bundle",
    items: [
      { name: "Hem Formal Wanita", sizeCategory: "kemejaWanita" },
      { name: "Rok Formal Hitam", sizeCategory: "rokFormal" },
      { name: "Rok Formal Putih", sizeCategory: "rokFormal" },
      { name: "Pantofel Cewe", sizeCategory: "pantofelCewe" },
      { name: "Kaos Kaki Putih", sizeCategory: null },
      { name: "Sabuk", sizeCategory: null },
    ],
  },
  {
    id: "kita-fit",
    name: "Kita Fit",
    price: 99000,
    type: "bundle",
    items: [
      { name: "Kaos Putih Lengan Panjang", sizeCategory: "kaosPutih" },
      { name: "Celana Olahraga", sizeCategory: "celanaOlahraga" },
      { name: "Kaos Kaki Putih", sizeCategory: null },
    ],
  },

  {
    id: "hem-formal-pria",
    name: "Hem Formal Pria",
    price: 65000,
    type: "single",
    sizeCategory: "kemejaPria",
  },
  {
    id: "hem-formal-wanita",
    name: "Hem Formal Wanita",
    price: 70000,
    type: "single",
    sizeCategory: "kemejaWanita",
  },
  {
    id: "celana-formal-hitam",
    name: "Celana Formal Hitam",
    price: 80000,
    type: "single",
    sizeCategory: "celanaFormal",
  },
  {
    id: "celana-formal-putih",
    name: "Celana Formal Putih",
    price: 80000,
    type: "single",
    sizeCategory: "celanaFormal",
  },
  {
    id: "rok-hitam",
    name: "Rok Hitam",
    price: 80000,
    type: "single",
    sizeCategory: "rokFormal",
  },
  {
    id: "rok-putih",
    name: "Rok Putih",
    price: 80000,
    type: "single",
    sizeCategory: "rokFormal",
  },
  {
    id: "kerudung-putih",
    name: "Kerudung Putih",
    price: 15000,
    type: "single",
    sizeCategory: null,
  },
  {
    id: "kaos-putih-lengan-panjang",
    name: "Kaos Putih Lengan Panjang",
    price: 60000,
    type: "single",
    sizeCategory: "kaosPutih",
  },
  {
    id: "celana-olahraga",
    name: "Celana Olahraga",
    price: 50000,
    type: "single",
    sizeCategory: "celanaOlahraga",
  },
  {
    id: "pantofel-cowo",
    name: "Pantofel Cowo",
    price: 70000,
    type: "single",
    sizeCategory: "pantofelCowo",
  },
  {
    id: "pantofel-cewe",
    name: "Pantofel Cewe",
    price: 65000,
    type: "single",
    sizeCategory: "pantofelCewe",
  },
  {
    id: "kaos-kaki-putih",
    name: "Kaos Kaki Putih",
    price: 10000,
    type: "single",
    sizeCategory: null,
  },
  {
    id: "hasduk-kolong",
    name: "Hasduk + Kolong",
    price: 20000,
    type: "single",
    sizeCategory: null,
  },
  {
    id: "sabuk",
    name: "Sabuk",
    price: 20000,
    type: "single",
    sizeCategory: null,
  },
  {
    id: "pin-garuda-merput",
    name: "Pin Garuda + Merput",
    price: 8000,
    type: "single",
    sizeCategory: null,
  },
];

const sizeOptions: Record<Exclude<SizeCategory, null>, string[]> = {
  kemejaPria: ["M", "L", "XL", "XXL", "XXXL"],
  kemejaWanita: ["S", "M", "L", "XL", "XXL", "XXXL"],
  celanaFormal: Array.from({ length: 12 }, (_, index) => String(index + 27)),
  rokFormal: ["S", "M", "L", "XL"],
  kaosPutih: ["S", "M", "L", "XL"],
  celanaOlahraga: ["L", "XL", "XXL"],
  pantofelCowo: ["39", "40", "41", "42", "43", "44"],
  pantofelCewe: ["37", "38", "39", "40", "41"],
};

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function OrderPage() {
  const bundleProducts = products.filter((product) => product.type === "bundle");
  const singleProducts = products.filter((product) => product.type === "single");

  const [customer, setCustomer] = useState({
    namaLengkap: "",
    programStudi: "",
    noWhatsapp: "",
    referralCode: "",
    catatan: "",
    opsiPengiriman: "",
    jadwalAmbil: "",
    alamatPengiriman: "",
  });

  const [mode, setMode] = useState<ProductType>("bundle");
  const [selectedProductId, setSelectedProductId] = useState(bundleProducts[0].id);
  const [qty, setQty] = useState(1);
  const [sizes, setSizes] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referralValidation, setReferralValidation] =
    useState<ReferralValidation | null>(null);
  const [isCheckingReferral, setIsCheckingReferral] = useState(false);

  const selectedProduct = useMemo(() => {
    return products.find((product) => product.id === selectedProductId);
  }, [selectedProductId]);

  const selectedProductsByMode =
    mode === "bundle" ? bundleProducts : singleProducts;

  const bundleSubtotal = cart
    .filter((item) => item.type === "bundle")
    .reduce((total, item) => total + item.price * item.qty, 0);

  const singleSubtotal = cart
    .filter((item) => item.type === "single")
    .reduce((total, item) => total + item.price * item.qty, 0);

  const deliveryFee =
    customer.opsiPengiriman === "deliver-unairkita" ? 5000 : 0;

  const normalizedReferralCode = customer.referralCode.trim().toUpperCase();

  const referralDiscount =
    referralValidation?.valid &&
    referralValidation.checkedCode === normalizedReferralCode
      ? referralValidation.discount
      : 0;

  const grandTotal =
    bundleSubtotal + singleSubtotal + deliveryFee - referralDiscount;

  const resetReferralValidation = () => {
    setReferralValidation(null);
  };

  const handleModeChange = (newMode: ProductType) => {
    const firstProduct = newMode === "bundle" ? bundleProducts[0] : singleProducts[0];

    setMode(newMode);
    setSelectedProductId(firstProduct.id);
    setQty(1);
    setSizes({});
  };

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    setQty(1);
    setSizes({});
  };

  const getSizeKey = (setNumber: number, productName: string) => {
    return `set-${setNumber}-${productName}`;
  };

  const buildSizeDetails = (): SizeDetail[] => {
    if (!selectedProduct) return [];

    if (selectedProduct.type === "bundle") {
      return Array.from({ length: qty }).map((_, index) => {
        const setNumber = index + 1;

        return {
          setNumber,
          sizes:
            selectedProduct.items
              ?.filter((item) => item.sizeCategory !== null)
              .map((item) => ({
                productName: item.name,
                size: sizes[getSizeKey(setNumber, item.name)] || "",
              })) || [],
        };
      });
    }

    if (selectedProduct.sizeCategory) {
      return Array.from({ length: qty }).map((_, index) => {
        const setNumber = index + 1;

        return {
          setNumber,
          sizes: [
            {
              productName: selectedProduct.name,
              size: sizes[getSizeKey(setNumber, selectedProduct.name)] || "",
            },
          ],
        };
      });
    }

    return [];
  };

  const validateSize = () => {
    if (!selectedProduct) return false;

    const sizeDetails = buildSizeDetails();

    for (const detail of sizeDetails) {
      for (const item of detail.sizes) {
        if (!item.size) {
          alert(`Size untuk ${item.productName} pada set ${detail.setNumber} belum dipilih.`);
          return false;
        }
      }
    }

    return true;
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    if (qty < 1) {
      alert("Qty minimal 1.");
      return;
    }

    if (!validateSize()) return;

    const newCartItem: CartItem = {
      cartId: crypto.randomUUID(),
      productId: selectedProduct.id,
      type: selectedProduct.type,
      name: selectedProduct.name,
      price: selectedProduct.price,
      qty,
      sizeDetails: buildSizeDetails(),
    };

    setCart((prev) => [...prev, newCartItem]);
    setQty(1);
    setSizes({});
    resetReferralValidation();
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
    resetReferralValidation();
  };

  const handleCheckReferral = async () => {
    const code = customer.referralCode.trim().toUpperCase();

    if (!code) {
      setReferralValidation(null);
      alert("Masukkan referral code terlebih dahulu.");
      return;
    }

    if (bundleSubtotal <= 0) {
      setReferralValidation({
        checkedCode: code,
        valid: false,
        message: "Referral hanya berlaku untuk pembelian bundle.",
        discount: 0,
      });
      return;
    }

    try {
      setIsCheckingReferral(true);

      const formData = new FormData();
      formData.append("action", "validate_referral");
      formData.append("referralCode", code);
      formData.append("subtotalBundle", String(bundleSubtotal));

      const response = await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gagal mengecek referral.");
      }

      setReferralValidation({
        checkedCode: code,
        valid: result.referral.valid,
        message: result.referral.message,
        discount: result.referral.discount || 0,
      });
    } catch (error) {
      console.error(error);

      setReferralValidation({
        checkedCode: code,
        valid: false,
        message:
          error instanceof Error ? error.message : "Gagal mengecek referral.",
        discount: 0,
      });
    } finally {
      setIsCheckingReferral(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Pesanan masih kosong. Tambahkan produk terlebih dahulu.");
      return;
    }

    if (!paymentProof) {
      alert("Upload bukti pembayaran terlebih dahulu.");
      return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (paymentProof.size > maxSize) {
      alert("Ukuran bukti pembayaran maksimal 10 MB.");
      return;
    }

    try {
      setIsSubmitting(true);

      const paymentProofBase64 = await fileToBase64(paymentProof);

      const formData = new FormData();

      formData.append("action", "create_order");
      formData.append("namaLengkap", customer.namaLengkap);
      formData.append("programStudi", customer.programStudi);
      formData.append("noWhatsapp", customer.noWhatsapp);
      formData.append("cartJson", JSON.stringify(cart));
      formData.append("subtotalBundle", String(bundleSubtotal));
      formData.append("subtotalSatuan", String(singleSubtotal));
      formData.append("deliveryMethod", customer.opsiPengiriman);
      formData.append("pickupSchedule", customer.jadwalAmbil);
      formData.append("deliveryAddress", customer.alamatPengiriman);
      formData.append("deliveryFee", String(deliveryFee));
      formData.append("referralCode", customer.referralCode);
      formData.append("referralDiscount", String(referralDiscount));
      formData.append("grandTotal", String(grandTotal));
      formData.append("catatan", customer.catatan);

      formData.append("paymentProofBase64", paymentProofBase64);
      formData.append("paymentProofName", paymentProof.name);
      formData.append("paymentProofType", paymentProof.type);

      const response = await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Gagal menyimpan order.");
      }

      alert(`Order berhasil dikirim. Order ID: ${result.orderId}`);
      console.log("ORDER RESULT:", result);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat submit order."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#bee9f8] px-4 py-8 text-[#1F1F1F] md:px-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <div className="relative h-24 w-24">
              <Image
                src="/k.png"
                alt="Logo UnairKita"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#294c77]">
            UnairKita 2026
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Pemesanan UnairKita 2026
          </h1>

          <p className="mt-4 max-w-3xl text-gray-700">
            Pilih paket atau produk satuan, isi ukuran sesuai kebutuhan, lalu
            tambahkan ke pesanan. Referral code perlu dicek terlebih dahulu
            untuk mendapatkan diskon 5% khusus bundle.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div className="space-y-6">
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Data Customer</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    required
                    value={customer.namaLengkap}
                    onChange={(event) =>
                      setCustomer({ ...customer, namaLengkap: event.target.value })
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                    placeholder="Nama lengkap"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Program Studi
                  </label>
                  <input
                    required
                    value={customer.programStudi}
                    onChange={(event) =>
                      setCustomer({ ...customer, programStudi: event.target.value })
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                    placeholder="Contoh: Sistem Informasi"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    No WhatsApp
                  </label>
                  <input
                    required
                    value={customer.noWhatsapp}
                    onChange={(event) =>
                      setCustomer({ ...customer, noWhatsapp: event.target.value })
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Tambah Produk</h2>

              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => handleModeChange("bundle")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    mode === "bundle"
                      ? "bg-[#294c77] text-white"
                      : "bg-[#bee9f8] text-[#294c77]"
                  }`}
                >
                  Bundle
                </button>

                <button
                  type="button"
                  onClick={() => handleModeChange("single")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    mode === "single"
                      ? "bg-[#294c77] text-white"
                      : "bg-[#bee9f8] text-[#294c77]"
                  }`}
                >
                  Satuan
                </button>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_140px]">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Pilih {mode === "bundle" ? "Bundle" : "Produk"}
                  </label>
                  <select
                    value={selectedProductId}
                    onChange={(event) => handleProductChange(event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                  >
                    {selectedProductsByMode.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name} - {formatRupiah(product.price)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Qty</label>
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setQty(value < 1 ? 1 : value);
                      setSizes({});
                    }}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                  />
                </div>
              </div>

              {selectedProduct?.type === "bundle" && (
                <div className="mt-5 rounded-2xl bg-[#bee9f8] p-4">
                  <p className="font-semibold">Isi bundle:</p>

                  <div className="mt-3 grid gap-2 md:grid-cols-2">
                    {selectedProduct.items?.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl bg-white px-4 py-3 text-sm"
                      >
                        {item.name}
                        {item.sizeCategory ? (
                          <span className="ml-2 text-xs text-[#294c77]">
                            Perlu size
                          </span>
                        ) : (
                          <span className="ml-2 text-xs text-gray-500">
                            No size
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-5">
                {Array.from({ length: qty }).map((_, index) => {
                  const setNumber = index + 1;

                  if (!selectedProduct) return null;

                  const sizeFields =
                    selectedProduct.type === "bundle"
                      ? selectedProduct.items?.filter(
                          (item) => item.sizeCategory !== null
                        ) || []
                      : selectedProduct.sizeCategory
                        ? [
                            {
                              name: selectedProduct.name,
                              sizeCategory: selectedProduct.sizeCategory,
                            },
                          ]
                        : [];

                  if (sizeFields.length === 0) return null;

                  return (
                    <div
                      key={setNumber}
                      className="rounded-2xl border border-gray-200 p-4"
                    >
                      <h3 className="font-semibold">
                        Size{" "}
                        {mode === "bundle"
                          ? `Set ${setNumber}`
                          : `Item ${setNumber}`}
                      </h3>

                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {sizeFields.map((item) => {
                          if (!item.sizeCategory) return null;

                          const key = getSizeKey(setNumber, item.name);

                          return (
                            <div key={key}>
                              <label className="mb-2 block text-sm font-medium">
                                {item.name}
                              </label>

                              <select
                                value={sizes[key] || ""}
                                onChange={(event) =>
                                  setSizes({
                                    ...sizes,
                                    [key]: event.target.value,
                                  })
                                }
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                              >
                                <option value="">Pilih size</option>
                                {sizeOptions[item.sizeCategory].map((size) => (
                                  <option key={size} value={size}>
                                    {size}
                                  </option>
                                ))}
                              </select>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-6 w-full rounded-full bg-[#294c77] px-6 py-3 font-semibold text-white transition hover:bg-[#1f3c60]"
              >
                Tambahkan ke Pesanan
              </button>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Referral & Catatan</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Referral Code
                  </label>

                  <input
                    value={customer.referralCode}
                    onChange={(event) => {
                      setCustomer({
                        ...customer,
                        referralCode: event.target.value,
                      });
                      resetReferralValidation();
                    }}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 uppercase outline-none focus:border-[#294c77]"
                    placeholder="Opsional"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Diskon 5% hanya berlaku untuk bundle dan harus dicek terlebih dahulu.
                  </p>

                  <button
                    type="button"
                    onClick={handleCheckReferral}
                    disabled={isCheckingReferral || !customer.referralCode.trim()}
                    className="mt-3 w-full rounded-full border border-[#294c77] px-5 py-2 text-sm font-semibold text-[#294c77] transition hover:bg-[#bee9f8] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isCheckingReferral ? "Mengecek..." : "Cek Referral"}
                  </button>

                  {referralValidation && (
                    <p
                      className={`mt-2 text-xs font-medium ${
                        referralValidation.valid
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      {referralValidation.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Catatan
                  </label>
                  <textarea
                    value={customer.catatan}
                    onChange={(event) =>
                      setCustomer({ ...customer, catatan: event.target.value })
                    }
                    className="min-h-28 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                    placeholder="Contoh: ambil di kampus, request khusus, dll."
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Opsi Pengiriman</h2>

              <p className="mt-2 text-sm text-gray-600">
                Pengiriman dan pengambilan pesanan mulai dilakukan pada 23 Juni 2026.
              </p>

              <div className="mt-5 grid gap-3">
                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 p-4 transition hover:border-[#294c77]">
                  <input
                    required
                    type="radio"
                    name="opsiPengiriman"
                    value="gosend"
                    checked={customer.opsiPengiriman === "gosend"}
                    onChange={(event) =>
                      setCustomer({
                        ...customer,
                        opsiPengiriman: event.target.value,
                        jadwalAmbil: "",
                        alamatPengiriman: "",
                      })
                    }
                    className="mt-1"
                  />

                  <div>
                    <p className="font-semibold">Gosend</p>
                    <p className="text-sm text-gray-600">
                      Pengiriman menggunakan Gosend mulai 23 Juni 2026. Biaya
                      pengiriman menyesuaikan aplikasi.
                    </p>
                  </div>
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 p-4 transition hover:border-[#294c77]">
                  <input
                    required
                    type="radio"
                    name="opsiPengiriman"
                    value="ambil-sendiri"
                    checked={customer.opsiPengiriman === "ambil-sendiri"}
                    onChange={(event) =>
                      setCustomer({
                        ...customer,
                        opsiPengiriman: event.target.value,
                        alamatPengiriman: "",
                      })
                    }
                    className="mt-1"
                  />

                  <div className="w-full">
                    <p className="font-semibold">Ambil sendiri</p>
                    <p className="text-sm text-gray-600">
                      Pengambilan dilakukan di Kampus C UNAIR pada jadwal yang tersedia.
                    </p>

                    {customer.opsiPengiriman === "ambil-sendiri" && (
                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-medium">
                          Pilih jadwal pengambilan
                        </label>
                        <select
                          required
                          value={customer.jadwalAmbil}
                          onChange={(event) =>
                            setCustomer({
                              ...customer,
                              jadwalAmbil: event.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                        >
                          <option value="">Pilih jadwal</option>
                          <option value="29-juni-kampus-c">
                            29 Juni 2026 - Kampus C UNAIR
                          </option>
                          <option value="23-juli-kampus-c">
                            23 Juli 2026 - Kampus C UNAIR
                          </option>
                        </select>
                      </div>
                    )}
                  </div>
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 p-4 transition hover:border-[#294c77]">
                  <input
                    required
                    type="radio"
                    name="opsiPengiriman"
                    value="deliver-unairkita"
                    checked={customer.opsiPengiriman === "deliver-unairkita"}
                    onChange={(event) =>
                      setCustomer({
                        ...customer,
                        opsiPengiriman: event.target.value,
                        jadwalAmbil: "",
                      })
                    }
                    className="mt-1"
                  />

                  <div className="w-full">
                    <p className="font-semibold">Deliver by UnairKita</p>
                    <p className="text-sm text-gray-600">
                      Pengiriman mulai 23 Juni 2026, maksimal 5 km dari Kampus C
                      UNAIR dengan tambahan fee Rp5.000.
                    </p>

                    {customer.opsiPengiriman === "deliver-unairkita" && (
                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-medium">
                          Alamat Pengiriman
                        </label>
                        <textarea
                          required
                          value={customer.alamatPengiriman}
                          onChange={(event) =>
                            setCustomer({
                              ...customer,
                              alamatPengiriman: event.target.value,
                            })
                          }
                          className="min-h-28 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#294c77]"
                          placeholder="Tulis alamat lengkap. Maksimal 5 km dari Kampus C UNAIR."
                        />
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-xl font-bold">Pesanan Kamu</h2>

            {cart.length === 0 ? (
              <p className="mt-4 rounded-2xl bg-[#bee9f8] p-4 text-sm text-gray-600">
                Belum ada produk yang ditambahkan.
              </p>
            ) : (
              <div className="mt-5 space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={item.cartId}
                    className="rounded-2xl border border-gray-200 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm text-gray-500">Item {index + 1}</p>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.qty} x {formatRupiah(item.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveCartItem(item.cartId)}
                        className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600"
                      >
                        Hapus
                      </button>
                    </div>

                    {item.sizeDetails.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {item.sizeDetails.map((detail) => (
                          <div
                            key={detail.setNumber}
                            className="rounded-xl bg-[#bee9f8] p-3"
                          >
                            <p className="mb-2 text-xs font-semibold">
                              {item.type === "bundle"
                                ? `Set ${detail.setNumber}`
                                : `Item ${detail.setNumber}`}
                            </p>

                            <div className="space-y-1 text-xs text-gray-700">
                              {detail.sizes.map((size) => (
                                <p key={`${detail.setNumber}-${size.productName}`}>
                                  {size.productName}:{" "}
                                  <span className="font-semibold">{size.size}</span>
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="mt-4 text-right font-semibold">
                      {formatRupiah(item.price * item.qty)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-3 border-t border-gray-200 pt-5 text-sm">
              <div className="flex justify-between">
                <span>Subtotal Bundle</span>
                <span>{formatRupiah(bundleSubtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal Satuan</span>
                <span>{formatRupiah(singleSubtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Ongkir / Delivery Fee</span>
                <span>{formatRupiah(deliveryFee)}</span>
              </div>

              <div className="text-[#294c77]">
                <div className="flex justify-between">
                  <span>Diskon Referral 5%</span>
                  <span>-{formatRupiah(referralDiscount)}</span>
                </div>
                <p className="mt-1 text-xs text-gray-600">
                  Selalu cek referral kamu setiap tambah produk
                </p>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-4 text-lg font-bold">
                <span>Total</span>
                <span>{formatRupiah(grandTotal)}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F8F3EA] p-4">
              <p className="text-sm font-semibold">Pembayaran QRIS</p>

              <p className="mt-1 text-xs text-gray-600">
                Silakan lakukan pembayaran sesuai total pesanan, lalu upload
                bukti pembayaran.
              </p>

              <div className="mt-4 overflow-hidden rounded-2xl bg-white p-3">
                <Image
                  src="/qris.jpeg"
                  alt="QRIS UnairKita"
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-xl"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium">
                  Upload Bukti Pembayaran
                </label>

                <input
                  required
                  type="file"
                  accept="image/png,image/jpeg,image/webp,application/pdf"
                  onChange={(event) => {
                    const file = event.target.files?.[0] || null;
                    setPaymentProof(file);
                  }}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#294c77]"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Format JPG, PNG, WEBP, atau PDF. Maksimal 10 MB.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-[#294c77] px-6 py-3 font-semibold text-white transition hover:bg-[#1f3c60] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Memproses Order..." : "Submit Order"}
            </button>
          </aside>
        </form>
      </section>
    </main>
  );
}