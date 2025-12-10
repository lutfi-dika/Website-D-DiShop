import React, { useState } from "react";
import "../styles/HalamanPesan.css";

const HalamanPesan = ({ selectedProduk, setPage }) => {
    const [nama, setNama] = useState("");
    const [nomor, setNomor] = useState("");
    const [catatan, setCatatan] = useState("");

    // wajib format internasional
    const adminWA = "6285187945635";

    const kirimWhatsApp = () => {
        if (!nama || !nomor) {
            alert("Nama dan Nomor HP wajib diisi!");
            return;
        }

        const pesan =
            `🛒 *Pesanan Baru*
-------------------------
👤 Nama: ${nama}
📞 Nomor HP: ${nomor}
🍽️ Produk: ${selectedProduk.name}
💰 Harga: ${selectedProduk.price}
📝 Catatan: ${catatan}
-------------------------
Terima kasih 🙏`;

        const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`;

        // langsung buka WA (lebih otomatis)
        window.location.href = url;
    };

    return (
        <div className="pesan-container">
            <div className="pesan-box">

                <img
                    src={selectedProduk.img}
                    alt={selectedProduk.name}
                    className="pesan-image"
                />

                <h2 className="pesan-title">{selectedProduk.name}</h2>
                <p className="pesan-price">{selectedProduk.price}</p>

                <label className="pesan-label">Nama Pemesan</label>
                <input
                    type="text"
                    className="pesan-input"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />

                <label className="pesan-label">Nomor HP</label>
                <input
                    type="number"
                    className="pesan-input"
                    value={nomor}
                    onChange={(e) => setNomor(e.target.value)}
                    placeholder="Contoh: 08123456789"
                />

                <label className="pesan-label">Catatan Tambahan</label>
                <textarea
                    className="pesan-textarea"
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                />

                <button className="pesan-btn" onClick={kirimWhatsApp}>
                    Pesan via WhatsApp
                </button>

                <button className="pesan-back" onClick={() => setPage("home")}>
                    Kembali
                </button>
            </div>
        </div>
    );
};

export default HalamanPesan;
