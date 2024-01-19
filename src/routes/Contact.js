import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assests/home1.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={aboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
