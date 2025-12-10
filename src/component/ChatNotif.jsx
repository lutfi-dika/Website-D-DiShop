import React, { useState, useEffect } from "react";
import "../styles/ChatNotif.css";

export default function ChatNotif() {
    const [open, setOpen] = useState(false);
    const [visibleMessages, setVisibleMessages] = useState([]);

    // 🔥 Tinggal isi isiannya saja
    const messages = [
        "Halo! 👋",
        "Selamat datang di D&DiShop !",
        "Kami menyediakan makanan dan minuman berkualitas dengan harga terjangkau.",
        `Kami melayani secara online maupun offline.<br/>
        Untuk pembelian offline, silakan datang ke alamat: <b>Perumahan Puri Cendana block g </b>.<br/>
        Untuk pembelian online, cukup pilih menu yang diinginkan dan klik tombol <b>Pesan</b> 
        atau hubungi kami melalui WhatsApp 
        <a href="https://wa.me/c/6285187945635" target="_blank" rel="noopener noreferrer">Klik di sini</a>.`,
        "Jangan lupa order yaa!!!"
    ];

    useEffect(() => {
        if (open) {
            setVisibleMessages([]);
            let index = 0;

            const interval = setInterval(() => {
                setVisibleMessages(prev => [...prev, messages[index]]);
                index++;

                if (index === messages.length) {
                    clearInterval(interval);
                }
            }, 700); // speed munculnya pesan
        }
    }, [open]);

    return (
        <div className="chatnotif-container">
            {/* Floating Button */}
            <button className="chatnotif-button" onClick={() => setOpen(!open)}>
                💬
            </button>

            {/* Chat Box */}
            {open && (
                <div className="chatnotif-box">
                    <div className="chatnotif-header">
                        <span>Informasi</span>
                        <button onClick={() => setOpen(false)}>×</button>
                    </div>

                    <div className="chatnotif-body">
                        {visibleMessages.map((msg, i) => (
                            <div key={i} className="chatnotif-msg bot fade-in">
                                <p dangerouslySetInnerHTML={{ __html: msg }}></p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
