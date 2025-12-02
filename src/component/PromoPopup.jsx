import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import "../styles/PromoPopup.css";

function PromoPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="promo-overlay">
            <div className="promo-box">
                <button className="promo-close" onClick={() => setShow(false)}>×</button>

                <img
                    src={logo}
                    alt="promo"
                    className="promo-img"
                />

                <h2 className="promo-title">Selamat Datang di D&DiShop </h2>
                <p className="promo-desc">Kami menyediakan makanan dan minuman berkualitas dengan harga terjangkau.</p>
            </div>
        </div>
    );
}

export default PromoPopup;
