import React, { useState, useRef, useEffect } from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./pages/HeroSection";
import ProdukSection from "./pages/ProdukSection";
import ProdukScroll from "./component/ProdukScroll";
import CategorySection from "./pages/CategorySection";
import AboutNews from "./pages/AboutSection";
import ContactForm from "./pages/ContactForm";
import HalamanPesan from "./pages/HalamanPesan";
import Footer from "./component/Footer";
import LoadingScreen from "./component/LoadingScreen";
import PromoPopup from "./component/PromoPopup";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(true);

  // Bahasa global (ID/EN)
  const [language, setLanguage] = useState("id");

  const [selectedProduk, setSelectedProduk] = useState({
    name: "",
    price: "",
  });

  const produkRef = useRef(null);

  // Loading screen 1.5 detik
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const scrollToProduk = () => {
    setPage("home");

    setTimeout(() => {
      if (produkRef.current) {
        produkRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* Loading */}
      {loading && <LoadingScreen />}

      {/* Promo popup */}
      {!loading && <PromoPopup language={language} />}

      {/* Navbar */}
      <Navbar
        scrollToProduk={scrollToProduk}
        setPage={setPage}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Halaman dinamis */}
      {page === "home" && (
        <>
          <HeroSection language={language} />

          <div id="Produk" ref={produkRef}>
            <ProdukSection
              language={language}
              setSelectedProduk={setSelectedProduk}
              setPage={setPage}
            />
          </div>

          <ProdukScroll
            language={language}
            setSelectedProduk={setSelectedProduk}
            setPage={setPage}
          />
        </>
      )}

      {page === "category" && <CategorySection language={language} />}
      {page === "tentang" && <AboutNews language={language} />}
      {page === "kontak" && <ContactForm language={language} />}
      {page === "pesan" && (
        <HalamanPesan language={language} selectedProduk={selectedProduk} />
      )}

      <Footer language={language} />
    </>
  );
}

export default App;
