import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Consumer_Electronics/XCM_Manual_1304613_1558425_CA_ca_ce_apple_3666810_1500x600_en_CA._CB661271447_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            title='UMIDIGI Smart Watch, Fitness Tracker with Heart Rate Monitor, Activity Tracker for Android Phone'
            price={45.99}
            image='https://images-na.ssl-images-amazon.com/images/I/41tO7YRrbUL.jpg'
            rating={5}
          />
          <Product
            title='TORRAS Shockproof Case Compatible for iPhone 12 /Compatible with iPhone 12 Pro Case, Black'
            price={29.99}
            image='https://m.media-amazon.com/images/I/61VN6Ek+oWL._AC_UL320_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue'
            price={54.99}
            image='https://m.media-amazon.com/images/I/71zUSYXlAxL._AC_UL320_.jpg https://m.media-amazon.com/images/I/41-wh5qa34L.__AC_SY200_.jpg'
            rating={5}
          />
          <Product
            title='Apple Smart Keyboard Folio (for 12.9-inch iPad Pro - 4th generation) - US English'
            price={268.99}
            image='https://images-na.ssl-images-amazon.com/images/I/41lNFZS-1GL.jpg'
            rating={4}
          />
          <Product
            title='Beats Studio3 Wireless Noise Cancelling On-Ear Headphones'
            price={299.99}
            image='https://m.media-amazon.com/images/I/61DqKs7xflL._AC_UL320_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Sony X800H 55-inch 4K HDR LED Android Smart TV'
            price={899.99}
            image='https://m.media-amazon.com/images/I/71Zy5YB+ZiL._AC_UL320_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
