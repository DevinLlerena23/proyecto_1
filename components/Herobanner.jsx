import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/Client';
const HeroBanner = ({heroBanner}) => {
    return (
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h4>{heroBanner.largeText}</h4>
          <img src="" alt="Audifonos" className="hero-banner-image" />
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>A bone le gusta el webo de Cesar</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    );
  };
  export default HeroBanner