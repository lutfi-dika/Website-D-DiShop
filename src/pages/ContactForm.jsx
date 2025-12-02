import React, { useState } from "react";
import "../styles/ContactFrom.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        pesan: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setFormData({ nama: "", email: "", pesan: "" });
    };

    return (
        <section className="contact-section">
            <div className="contact-card">

                {/* BAGIAN GAMBAR */}
                <div className="contact-image">
                    <img
                        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                        alt="Contact"
                    />
                </div>

                {/* FORM KONTAK */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Hubungi Kami</h2>

                    <input
                        type="text"
                        name="nama"
                        placeholder="Nama"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="pesan"
                        placeholder="Pesan"
                        value={formData.pesan}
                        onChange={handleChange}
                        required
                    />

                    <div className="actions">
                        <button type="submit">Kirim</button>
                        <button
                            type="button"
                            onClick={() => setFormData({ nama: "", email: "", pesan: "" })}
                        >
                            Reset
                        </button>
                    </div>

                    {success && <p className="form-success">Pesan berhasil dikirim!</p>}
                </form>

            </div>
        </section>
    );
};

export default ContactForm;
