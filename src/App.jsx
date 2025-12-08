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
import ProfessionalBanner from "./component/Banner";
import ChatNotif from "./component/ChatNotif";

// LOGIN & REGISTER (folder sudah dirapikan)
import Login from "./login&regis/Login";
import Register from "./login&regis/Register";

// gambar
import logobanner from "./assets/logo.png";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("id");

  const [selectedProduk, setSelectedProduk] = useState({
    name: "",
    price: "",
  });

  const produkRef = useRef(null);

  // loading animation
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  // scroll ke bagian produk
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
      {loading && <LoadingScreen />}
      {!loading && <PromoPopup language={language} />}

      <Navbar
        scrollToProduk={scrollToProduk}
        setPage={setPage}
        language={language}
        setLanguage={setLanguage}
      />

      {/* ================= Halaman HOME ================= */}
      {page === "home" && (
        <>
          <HeroSection language={language} />

          {/* Banner atas */}
          <ProfessionalBanner
            language={language}
            image={logobanner}
            text={{
              id: {
                eyebrow: "D&DiShop",
                title: "Selamat Datang Di Website Kami",
                subtitle: "Nikmati makanan lezat harga lebih murah!",
                cta: "Cicipi Sekarang",
              },
              en: {
                eyebrow: "D&DiShop",
                title: "Welcome to our website",
                subtitle: "Enjoy delicious food at cheaper prices!",
                cta: "Taste Now",
              },
            }}
            onCta={() => alert("Promo diklik")}
          />

          {/* Produk */}
          <div id="Produk" ref={produkRef}>
            <ProdukSection
              language={language}
              setSelectedProduk={setSelectedProduk}
              setPage={setPage}
            />
          </div>

          {/* Produk Scroll */}
          <ProdukScroll
            language={language}
            setSelectedProduk={setSelectedProduk}
            setPage={setPage}
          />

          {/* Banner bawah */}
          <ProfessionalBanner
            language={language}
            text={{
              id: {
                eyebrow: "D&DiShop",
                title: "Jumat Berkah!",
                subtitle:
                  "Dapatkan promo Beli 1 Gratis 1, cuma berlaku hari jum'at",
                cta: "Cicipi Sekarang",
              },
              en: {
                eyebrow: "D&DiShop",
                title: "Blessed Friday!",
                subtitle: "Buy 1 Get 1 Free promo, valid only on Fridays",
                cta: "Taste it now",
              },
            }}
            onCta={() => alert("Minuman diklik")}
          />
        </>
      )}

      {/* ================= Halaman Lain ================= */}

      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "category" && <CategorySection language={language} />}
      {page === "tentang" && <AboutNews language={language} />}
      {page === "kontak" && <ContactForm language={language} />}
      {page === "pesan" && (
        <HalamanPesan selectedProduk={selectedProduk} language={language} />
      )}

      <ChatNotif />
      <Footer language={language} />
    </>
  );
}

export default App;
