import React, { useEffect, useState } from "react";
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
                    src="https://via.placeholder.com/300x150?text=Promo+Diskon"
                    alt="promo"
                    className="promo-img"
                />

                <h2 className="promo-title">Promo Spesial Hari Ini!</h2>
                <p className="promo-desc">Dapatkan diskon 30% untuk semua produk.</p>
            </div>
        </div>
    );
}

export default PromoPopup;
