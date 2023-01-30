
import React from 'react';
import { Product,FooterBanner,HeroBanner,Footer,Cart,Layout,Navbar } from 'components';
import { client } from 'lib/Client';

const Home = ({products, bannerData}) =>( 
    
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {
        console.log(bannerData)
      }
      <div className="products-heading">
        <h2>Productos más vendidos</h2>
        <p>Audífonos de muchas variantes</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/> 
        
        )}
      </div>
      <Footer/>
    </>

    
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

        
export default Home;

