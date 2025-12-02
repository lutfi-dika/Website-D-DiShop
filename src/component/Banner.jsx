// ProfessionalBanner.jsx
// Usage: place ProfessionalBanner.jsx and ProfessionalBanner.css in the same folder


import React from "react";
import "../styles/Banner.css";


export default function ProfessionalBanner({
    title = "Makanan & Minuman Berkualitas",
    subtitle = "Nikmati sajian lezat dengan bahan pilihan dan pelayanan ramah.",
    ctaText = "Pesan Sekarang",
    imageUrl = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
    onCta = () => alert("CTA diklik"),
}) {
    return (
        <section className="pb-banner" role="region" aria-label="Promotional banner">
            <div className="pb-container">
                <div className="pb-media" style={{ backgroundImage: `url(${imageUrl})` }} aria-hidden="true" />


                <div className="pb-content">
                    <p className="pb-eyebrow">Promo Spesial</p>
                    <h1 className="pb-title">{title}</h1>
                    <p className="pb-subtitle">{subtitle}</p>


                    <div className="pb-actions">
                        <button className="pb-cta" onClick={onCta}>
                            {ctaText}
                        </button>
                        <a href="#menu" className="pb-secondary" onClick={(e) => e.preventDefault()}>
                            Lihat Menu
                        </a>
                    </div>
                </div>


                <button className="pb-close" aria-label="Tutup banner" onClick={() => document.querySelector('.pb-banner')?.classList.add('pb-hidden')}>
                    ×
                </button>
            </div>
        </section>
    );
}