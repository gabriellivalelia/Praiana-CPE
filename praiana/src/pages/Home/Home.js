import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/footer/footer";


const Home = () =>
{
    return (
    <main class="main-container">
        <Header/>  
        <div class="hero-banner-container"></div>
        <Footer />
    </main>
    );
}

export default Home;