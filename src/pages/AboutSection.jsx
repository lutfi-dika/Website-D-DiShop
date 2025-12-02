import React from "react";
import "../styles/AboutSection.css";

export default function AboutNews({ language }) {
    const text = {
        id: {
            heroTag: "D&Di SHOP",
            heroTitle: "D&Di SHOP adalah Lapak Online yang menyajikan aneka Makanan, Minuman dan Snack Lezat, Sehat dan Halal",
            heroSubtitle: "Menyajikan makanan dengan cita rasa rumahan dipadukan sentuhan modern.",
            lead: "Bekasi – Home Recipe - D&Di Shop dimulai dengan mencoba resep keluarga yang dikombinasikan dengan resep masa kini. Damasak dengan cita rasa yang unik dan nikmat agar berkesan di lidah, di mata, dan di hati. Dengan visi sederhana namun bermakna: menghadirkan pengalaman makan & minum yang tidak terlupakan.",
            blockquote: "Kami tidak hanya ingin menjual Makanan & Minuman, tapi juga membangun kepercayaan.",
            closingTitle: "Layanan Online & Offline",
            closingDesc: "Produk D&Di Shop tersedia secara Online & Offline. Bisa dipesan satuan atau berdasarkan pesanan. Metode pembayaran: Cash, QRIS, dan Transfer Bank."
        },
        en: {
            heroTag: "D&Di SHOP",
            heroTitle: "D&Di SHOP is an online store offering a variety of delicious, healthy, and halal food, drinks, and snacks.",
            heroSubtitle: "Serving home-style flavors blended with a modern touch.",
            lead: "Bekasi – Home Recipe - D&Di Shop started by experimenting with family recipes combined with modern recipes. Cooked with unique and delicious flavors to impress your taste buds, eyes, and heart. With a simple yet meaningful vision: to deliver an unforgettable dining experience.",
            blockquote: "We don't just want to sell Food & Drinks, but also build trust.",
            closingTitle: "Online & Offline Services",
            closingDesc: "D&Di Shop products are available both online & offline. Can be ordered individually or in bulk. Payment methods: Cash, QRIS, and Bank Transfer."
        }
    };

    return (
        <section className="news-wrapper">
            {/* Hero / Featured */}
            <div className="news-hero">
                <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                    alt="Sejarah MyStore"
                    className="hero-img"
                />

                <div className="hero-overlay">
                    <span className="hero-tag">{text[language].heroTag}</span>

                    <h1 className="hero-title">{text[language].heroTitle}</h1>

                    <p className="hero-subtitle">{text[language].heroSubtitle}</p>
                </div>
            </div>

            {/* Content Area */}
            <div className="news-container">
                <article className="news-article">
                    <p className="lead">
                        <strong>Bekasi –</strong> {text[language].lead}
                    </p>

                    <blockquote>
                        “{text[language].blockquote}”
                        <span>— Owner D&Di Shop —</span>
                    </blockquote>

                    <div className="closing">
                        <h2>{text[language].closingTitle}</h2>
                        <p>{text[language].closingDesc}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
