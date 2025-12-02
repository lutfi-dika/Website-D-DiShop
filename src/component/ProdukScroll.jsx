import React, { useState } from "react";
import "../styles/ProdukScroll.css";

const products = [
    { id: 1, name: "Nasi Bakar", price: "Rp25.000", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Pizza", price: "Rp90.000", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Nastar", price: "Rp110.000", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Coklat Latte", price: "Rp10.000", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Kopi Gula Aren", price: "Rp10.000", img: "https://via.placeholder.com/150" },
];

export default function ProdukScroll({ language, setPage, setSelectedProduk }) {
    const [popupProduk, setPopupProduk] = useState(null);

    const handleOrderClick = (produk) => setPopupProduk(produk);
    const closePopup = () => setPopupProduk(null);

    const goToPesan = () => {
        if (popupProduk) {
            setSelectedProduk({
                name: popupProduk.name,
                price: popupProduk.price,
            });
            setPage("pesan");
            closePopup();
        }
    };

    // Text UI berdasarkan bahasa
    const text = {
        id: {
            sectionTitle: "Favorit",
            orderBtn: "Order Sekarang",
            priceLabel: "Harga",
        },
        en: {
            sectionTitle: "Favorites",
            orderBtn: "Order Now",
            priceLabel: "Price",
        },
    };

    return (
        <div className="horizontal-section">
            <h2 className="section-title">{text[language].sectionTitle}</h2>

            <div className="card-container">
                {products.map((produk) => (
                    <div className="card" key={produk.id}>
                        <img src={produk.img} alt={produk.name} />
                        <h3>{produk.name}</h3>
                        <p>{produk.price}</p>

                        <button onClick={() => handleOrderClick(produk)}>
                            {text[language].orderBtn}
                        </button>
                    </div>
                ))}
            </div>

            {popupProduk && (
                <div className="popup-overlay active" onClick={closePopup}>
                    <div className="popup-card" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={closePopup}>
                            ×
                        </button>

                        <div className="popup-content">
                            <h2>{popupProduk.name}</h2>
                            <p>{text[language].priceLabel}: {popupProduk.price}</p>

                            <button className="popup-btn" onClick={goToPesan}>
                                {text[language].orderBtn}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
