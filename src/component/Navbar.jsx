import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setPage, scrollToProduk, language, setLanguage }) => {
    const [open, setOpen] = useState(false);
    const [activePage, setActivePage] = useState("home");

    // Text berdasarkan Bahasa
    const text = {
        home: language === "id" ? "Home" : "Home",
        produk: language === "id" ? "Produk" : "Products",
        category: language === "id" ? "Kategori" : "Category",
        tentang: language === "id" ? "Tentang Kami" : "About Us",
        kontak: language === "id" ? "Kontak" : "Contact",
        search: language === "id" ? "Cari produk..." : "Search product...",
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        setPage(page);
        setOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">D&DiShop</div>

                {/* Desktop Menu */}
                <ul className="nav-links">
                    <li>
                        <button
                            className={activePage === "home" ? "active" : ""}
                            onClick={() => handlePageChange("home")}
                        >
                            {text.home}
                        </button>
                    </li>

                    <li>
                        <button
                            className={activePage === "produk" ? "active" : ""}
                            onClick={() => {
                                scrollToProduk();
                                setActivePage("produk");
                            }}
                        >
                            {text.produk}
                        </button>
                    </li>

                    <li>
                        <button
                            className={activePage === "category" ? "active" : ""}
                            onClick={() => handlePageChange("category")}
                        >
                            {text.category}
                        </button>
                    </li>

                    <li>
                        <button
                            className={activePage === "tentang" ? "active" : ""}
                            onClick={() => handlePageChange("tentang")}
                        >
                            {text.tentang}
                        </button>
                    </li>

                    <li>
                        <button
                            className={activePage === "kontak" ? "active" : ""}
                            onClick={() => handlePageChange("kontak")}
                        >
                            {text.kontak}
                        </button>
                    </li>
                </ul>

                {/* Right Menu */}
                <div className="right-menu">
                    <input
                        type="text"
                        placeholder={text.search}
                        className="search-box"
                    />

                    <div className="cart">
                        🛒<span className="badge">3</span>
                    </div>

                    {/* Toggle Bahasa */}
                    <select
                        className="lang-select"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="id">ID</option>
                        <option value="en">EN</option>
                    </select>

                    <div className="menu-btn" onClick={() => setOpen(!open)}>
                        ☰
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-overlay ${open ? "open" : ""}`}>
                <div className={`mobile-menu ${open ? "open" : ""}`}>
                    <button onClick={() => handlePageChange("home")}>{text.home}</button>

                    <button
                        onClick={() => {
                            scrollToProduk();
                            setActivePage("produk");
                            setOpen(false);
                        }}
                    >
                        {text.produk}
                    </button>

                    <button onClick={() => handlePageChange("category")}>{text.category}</button>
                    <button onClick={() => handlePageChange("tentang")}>{text.tentang}</button>
                    <button onClick={() => handlePageChange("kontak")}>{text.kontak}</button>

                    {/* Bahasa toggle di mobile */}
                    <select
                        className="lang-select-mobile"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="id">ID</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Navbar;
