import React from "react";
import "../styles/HeroSection.css";
import logo from "../assets/logo.png"; // pastikan path ini benar

export default function HeroSection({ language }) {

    const text = {
        id: {
            title: "Selamat Datang 👋",
            subtitle: "Nikmati beragam makanan dan minuman lezat dengan harga ramah di kantong hanya di toko kami!",
            button: "Cicipi Sekarang",
        },
        en: {
            title: "Welcome 👋",
            subtitle: "Enjoy a variety of delicious food and drinks at affordable prices only at our store!",
            button: "Order Now",
        },
    };

    return (
        <section id="Hero" className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">{text[language].title}</h1>

                <p className="hero-subtitle">{text[language].subtitle}</p>

                <button className="hero-btn">{text[language].button}</button>
            </div>

            <div className="hero-image">
                <img src={logo} alt="Produk" />
            </div>
        </section>
    );
}
