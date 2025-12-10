import React, { useState } from "react";
import "../styles/HalamanPesan.css";

const HalamanPesan = ({ selectedProduk, setPage }) => {
    const [nama, setNama] = useState("");
    const [nomor, setNomor] = useState("");
    const [catatan, setCatatan] = useState("");

    const adminWA = "6285187945635";

    const kirimWhatsApp = () => {
        if (nama.trim() === "" || nomor.trim() === "") {
            alert("Nama dan Nomor HP wajib diisi!");
            return;
        }

        // JAM OTOMATIS
        const now = new Date();
        const jam = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
        const tanggal = now.toLocaleDateString("id-ID");

        const pesan =
            `🛒 *Pesanan Baru*
-------------------------
🕒 Waktu: ${jam} - ${tanggal}

👤 Nama: ${nama}
📞 Nomor HP: ${nomor}
🍽️ Produk: ${selectedProduk.name}
💰 Harga: ${selectedProduk.price}
📝 Catatan: ${catatan}
-------------------------
Terima kasih 🙏`;

        const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`;
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
                    type="text"
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
