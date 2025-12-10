import React, { useState } from "react";
import "../styles/HalamanPesan.css";

const HalamanPesan = ({ selectedProduk, setPage }) => {
    const [nama, setNama] = useState("");
    const [nomor, setNomor] = useState(""); // ⬅️ tambahan nomor HP
    const [catatan, setCatatan] = useState("");

    const adminWA = "085187945635";

    const kirimWhatsApp = () => {
        const pesan = `
Pesanan Baru:
Nama: ${nama}
Nomor HP: ${nomor}
Produk: ${selectedProduk.name}
Harga: ${selectedProduk.price}
Catatan: ${catatan}
        `;

        const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="pesan-container">
            <div className="pesan-box">

                {/* GAMBAR PRODUK */}
                <img
                    src={selectedProduk.img}
                    alt={selectedProduk.name}
                    className="pesan-image"
                />

                {/* NAMA & HARGA */}
                <h2 className="pesan-title">{selectedProduk.name}</h2>
                <p className="pesan-price">{selectedProduk.price}</p>

                {/* INPUT NAMA */}
                <label className="pesan-label">Nama Pemesan</label>
                <input
                    type="text"
                    className="pesan-input"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />

                {/* INPUT NOMOR HP */}
                <label className="pesan-label">Nomor HP</label>
                <input
                    type="number"
                    className="pesan-input"
                    value={nomor}
                    onChange={(e) => setNomor(e.target.value)}
                    placeholder="Contoh: 08123456789"
                />

                {/* CATATAN */}
                <label className="pesan-label">Catatan Tambahan</label>
                <textarea
                    className="pesan-textarea"
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                />

                {/* TOMBOL KIRIM */}
                <button className="pesan-btn" onClick={kirimWhatsApp}>
                    Pesan via WhatsApp
                </button>

                {/* TOMBOL KEMBALI */}
                <button className="pesan-back" onClick={() => setPage("home")}>
                    Kembali
                </button>
            </div>
        </div>
    );
};

export default HalamanPesan;
