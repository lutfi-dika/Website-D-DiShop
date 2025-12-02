import React, { useState } from "react";
import "../styles/ProdukSection.css";

const allProduk = [
    // makanan
    { name: "Nasi + Ayam Penyet + Tempe", price: "Rp 25.000", category: "Makanan" },
    { name: "Nasi + Ayam Bakar + Tempe + Tahu", price: "Rp 25.000", category: "Makanan" },
    { name: "Nasi + Ayam Geprek + Tempe + Tahu", price: "Rp 25.000", category: "Makanan" },
    { name: "Nasi Bakar", price: "Rp 25.000", category: "Makanan" },
    { name: "Nasi Bakar Cumi", price: "Rp 25.000", category: "Makanan" },
    { name: "Nasi Bakar Jamur", price: "Rp 25.000", category: "Makanan" },
    { name: "Nasi Bakar Ayam", price: "Rp 25.000", category: "Makanan" },
    { name: "Telor Balado", price: "Rp 5.000", category: "Makanan" },

    // minuman
    { name: "Matacha Latte", price: "Rp 10.000", category: "Minuman" },
    { name: "Coklat Latte", price: "Rp 10.000", category: "Minuman" },
    { name: "Kopi Gula Aren", price: "Rp 10.000", category: "Minuman" },
    { name: "Thai Tea", price: "Rp 10.000", category: "Minuman" },

    // snack
    { name: "Panada", price: "Rp 8.000", category: "Snack" },
    { name: "Pastel", price: "Rp 3.000", category: "Snack" },
    { name: "Pizza", price: "Rp 90.000", category: "Snack" },
    { name: "Makaroni Panggang", price: "Rp 15.000", category: "Snack" },
    { name: "Nastar", price: "Rp 110.000", category: "Snack" },
    { name: "Kastengel", price: "Rp 110.000", category: "Snack" },
    { name: "Putri Salju", price: "Rp 110.000", category: "Snack" },
];

export default function ProdukSection({ language, setPage, setSelectedProduk }) {

    const text = {
        id: {
            search: "Cari produk favorit...",
            promoTitle: "Promo Spesial Hari Ini 🎉",
            promoSubtitle: "Diskon hingga 50% untuk produk pilihan!",
            categoryTitle: "Kategori",
            recommend: "Rekomendasi",
            order: "Pesan Sekarang",
            categories: { All: "Semua", Makanan: "Makanan", Minuman: "Minuman", Snack: "Snack" }
        },
        en: {
            search: "Search your favorite product...",
            promoTitle: "Today's Special Promo 🎉",
            promoSubtitle: "Up to 50% OFF selected items!",
            categoryTitle: "Category",
            recommend: "Recommended",
            order: "Order Now",
            categories: { All: "All", Makanan: "Food", Minuman: "Drink", Snack: "Snack" }
        }
    };

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const handleOrder = (produk) => {
        setSelectedProduk(produk);
        setPage("pesan");
    };

    const filteredProduk = allProduk.filter((p) => {
        const matchesCategory =
            selectedCategory === "All" || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ["All", "Makanan", "Minuman", "Snack"];

    return (
        <div id="Produk" className="home-container">
            {/* Search Bar */}
            <div className="search-area">
                <input
                    type="text"
                    placeholder={text[language].search}
                    className="home-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Banner */}
            <div className="banner">
                <h2>{text[language].promoTitle}</h2>
                <p>{text[language].promoSubtitle}</p>
            </div>

            {/* Category Scroll */}
            <h3 className="section-title">{text[language].categoryTitle}</h3>
            <div className="category-scroll">
                {categories.map((cat) => (
                    <div
                        key={cat}
                        className={`cat-item ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {text[language].categories[cat]}
                    </div>
                ))}
            </div>

            {/* Product List */}
            <h3 className="section-title">{text[language].recommend}</h3>
            <div className="product-grid">
                {filteredProduk.map((produk) => (
                    <div key={produk.name} className="product-card">
                        <div className="product-img"></div>
                        <h4>{produk.name}</h4>
                        <p className="price">{produk.price}</p>
                        <button className="btn-order" onClick={() => handleOrder(produk)}>
                            {text[language].order}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
