import React from "react";
import "../styles/CategorySection.css";

const categories = [
    {
        id: 1,
        name: "Makanan",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Minuman",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Snack",
        img: "https://via.placeholder.com/150",
    },
];

function CategorySection() {
    return (
        <section className="category-section" id="Kategori">
            <h2 className="section-title">Kategori</h2>

            <div className="category-grid">
                {categories.map((cat) => (
                    <div className="category-card" key={cat.id}>
                        <img src={cat.img} alt={cat.name} />
                        <h3>{cat.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategorySection;
