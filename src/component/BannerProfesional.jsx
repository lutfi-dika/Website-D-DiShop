// ProfessionalBanner.jsx

import React from "react";
import "../styles/Banner.css";
import banner from "../assets/logo.png";

export default function ProfessionalBanner({
    title = "Makanan & Minuman Berkualitas",
    subtitle = "Nikmati sajian lezat dengan bahan pilihan dan pelayanan ramah.",
    ctaText = "Pesan Sekarang",
    imageUrl = banner,
}) {
    // Fungsi scroll ke section produk
    const scrollToProduk = () => {
        const target = document.getElementById("#Produk");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="pb-banner" role="region" aria-label="Promotional banner">
            <div className="pb-container">

                {/* Background image */}
                <div
                    className="pb-media"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    aria-hidden="true"
                />

                <div className="pb-content">
                    <p className="pb-eyebrow">D&DiShop</p>
                    <h1 className="pb-title">{title}</h1>
                    <p className="pb-subtitle">{subtitle}</p>

                    <div className="pb-actions">
                        {/* Tombol scroll */}
                        <button className="pb-cta" onClick={scrollToProduk}>
                            {ctaText}
                        </button>

                        {/* Link scroll */}
                        <a
                            className="pb-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToProduk();
                            }}
                        >
                            Lihat Menu
                        </a>
                    </div>
                </div>

                <button
                    className="pb-close"
                    aria-label="Tutup banner"
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
