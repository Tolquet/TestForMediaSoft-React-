import "./styles/styles.css";
import "./styles/adaptive.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import HeaderMemo from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <HeaderMemo />
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
