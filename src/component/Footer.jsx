import React from "react";
import "../styles/Footer.css";

export default function Footer({ language }) {
    const text = {
        id: {
            aboutTitle: "Tentang Kami",
            aboutDesc: "Kami menyediakan makanan dan minuman berkualitas dengan harga terjangkau.",
            // address: "Alamat: Jl. Contoh No. 123, Jakarta",
            // email: "Email: info@tokoanda.com",
            // phone: "Telp: +62 812-3456-7890",
            quickLinks: "Link Cepat",
            home: "Beranda",
            menu: "Menu",
            category: "Kategori",
            contact: "Kontak",
            followUs: "Ikuti Kami",
            copyright: "Semua hak cipta dilindungi."
        },
        en: {
            aboutTitle: "About Us",
            aboutDesc: "We provide quality food and drinks at affordable prices.",
            // address: "Address: Jl. Contoh No. 123, Jakarta",
            // email: "Email: info@tokoanda.com",
            // phone: "Phone: +62 812-3456-7890",
            quickLinks: "Quick Links",
            home: "Home",
            menu: "Menu",
            category: "Category",
            contact: "Contact",
            followUs: "Follow Us",
            copyright: "All rights reserved."
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h4>{text[language].aboutTitle}</h4>
                    <p>{text[language].aboutDesc}</p>
                    <p>{text[language].address}</p>
                    <p>{text[language].email}</p>
                    <p>{text[language].phone}</p>
                </div>

                <div className="footer-section">
                    <h4>{text[language].quickLinks}</h4>
                    <a href="#">{text[language].home}</a>
                    <a href="#">{text[language].menu}</a>
                    <a href="#">{text[language].category}</a>
                    <a href="#">{text[language].contact}</a>
                </div>

                <div className="footer-section">
                    <h4>{text[language].followUs}</h4>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook">F</a>
                        <a href="#" aria-label="Instagram">I</a>
                        <a href="#" aria-label="Twitter">T</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} D&DiShop. {text[language].copyright}
            </div>
        </footer>
    );
}
