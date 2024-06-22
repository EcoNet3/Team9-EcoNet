import { useState, useEffect } from 'react';
import Createenergy from '../components/createenergy';
import MetaMaskConnected from '../components/metaMaskConnected';
import ReleaseDividends from '../components/releaseDividends';
import TransferShares from '../components/transferShares';
import Welcome from '../components/welcome';
import EnergyShares from '../components/energyShares';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// Import your image from the assets directory
import energyImage from '../assets/3.png';
import bannerImage from '../assets/banner.jpg'; // Adjust path based on your actual image location

export default function Home() {
  return (
    <MetaMaskConnected>
      {/* Banner Image */}
      <div className={styles.bannerContainer}>
        <Image src={bannerImage} alt="Banner Image" layout="responsive" width={1920} height={400} />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerText}>Welcome</h1>
        </div>
      </div>

      {/* Main Content */}
      <main role="main">
        <Welcome />
        <section className="jumbotron text-center shadow-lg rounded p-md">
          <div className="container">
            <h1 className="jumbotron-heading text-light text-uppercase">Why Energy Trading?</h1>
            <p className="lead text-light">
              It allows for efficient distribution and use of energy, especially renewable sources like solar and wind. By enabling individuals and businesses to buy and sell excess energy, it helps balance supply and demand, reduces reliance on centralized power grids, and minimizes energy waste. This system promotes the adoption of green energy, supports sustainability, and empowers communities to become more self-sufficient and resilient. Overall, energy trading plays a vital role in creating a more sustainable and efficient energy future.
            </p>
            <div className={styles.imageContainer}>
              {/* Use the imported image */}
              <Image src={energyImage} alt="Energy trading" width={500} height={300} />
            </div>
          </div>
        </section>

        <div className="album py-5 mt-5 mb-5">
          <h1 className="jumbotron-heading text-center text-light">Actions</h1>
          <div className="container">
            <div className="row">
              {/* Action components go here */}
            </div>
          </div>
        </div>
      </main>

      {/* Additional Components */}
      <EnergyShares />
      <Createenergy />
      <TransferShares />
      <ReleaseDividends />
    </MetaMaskConnected>
  );
}