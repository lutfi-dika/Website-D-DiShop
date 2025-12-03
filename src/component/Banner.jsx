// ProfessionalBanner.jsx
import React from "react";
import "../styles/Banner.css";

export default function ProfessionalBanner({
    language = "id",
    image,
    text = {}, // teks custom per banner
    onCta = () => { },
}) {

    // TEXT DEFAULT BILINGUAL
    const base = {
        id: {
            eyebrow: "Promo Spesial",
            title: "Makanan & Minuman Berkualitas",
            subtitle: "Nikmati sajian lezat dengan bahan pilihan.",
            cta: "Pesan Sekarang",
            seeMenu: "Lihat Menu",
        },
        en: {
            eyebrow: "Special Promo",
            title: "High Quality Food & Drinks",
            subtitle: "Enjoy delicious dishes with premium ingredients.",
            cta: "Order Now",
            seeMenu: "View Menu",
        },
    };

    const t = base[language];

    // Jika ada text custom → override default
    const final = {
        eyebrow: text[language]?.eyebrow || t.eyebrow,
        title: text[language]?.title || t.title,
        subtitle: text[language]?.subtitle || t.subtitle,
        cta: text[language]?.cta || t.cta,
        seeMenu: t.seeMenu,
    };

    const scrollToProduk = () => {
        const el = document.getElementById("Produk");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="pb-banner">
            <div className="pb-container">

                {/* Background */}
                <div className="pb-media" style={{ backgroundImage: `url(${image})` }} />

                {/* Text */}
                <div className="pb-content">
                    <p className="pb-eyebrow">{final.eyebrow}</p>

                    <h1 className="pb-title">{final.title}</h1>

                    <p className="pb-subtitle">{final.subtitle}</p>

                    <div className="pb-actions">
                        <button className="pb-cta" onClick={onCta}>
                            {final.cta}
                        </button>

                        <a
                            href="#"
                            className="pb-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToProduk();
                            }}
                        >
                            {final.seeMenu}
                        </a>
                    </div>
                </div>

                {/* Close */}
                <button
                    className="pb-close"
                    onClick={() =>
                        document.querySelector(".pb-banner")?.classList.add("pb-hidden")
                    }
                >
                    ×
                </button>
            </div>
        </section>
    );
}
