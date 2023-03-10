import React from "react";
import Link from "next/link";
import { urlFor } from "lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="Audifonos"
          className="hero-banner-image"
        />

        <Link href={`product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>PRODUCCTOS A BUEN PRECIO</h5>
          <p>DESCRIPCION</p>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
