import React from 'react'
import sliderImage from '../assets/images/home/demo2/slider1.jpg';
import BestSelling from './_components/bestSelling';
import Banner2 from '../layout/banner2';
import LatestProducts from './_components/latestProducts';
import LatestNews from './_components/latestNews';
import Banner from '../layout/banner';
const Home = () => {
  return (
    <div>
      <main>
        <section className="swiper-container js-swiper-slider slideshow type2 full-width" > 
          <Banner/>     
          <div className="slideshow-pagination position-left-center type2" />
          <a href="#section-grid-banner" className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-3 text_dash text-uppercase fw-medium">Scroll</a>
        </section>{/* /.slideshow */}
        <div className="mb-3 mb-md-4 mb-xl-5 pb-2 pt-1" />
        <section className="grid-banner container mb-3" id="section-grid-banner">
          <div className="row">
            <div className="col-lg-4">
              <div className="grid-banner__item position-relative mb-3">
                <img loading="lazy" className="w-100 h-auto" src="/assets/images/home/demo2/grid_banner_1.jpg" width={450} height={450} />
                <div className="content_abs content_center text-center">
                  <h3 className="text-uppercase fw-bold mb-1">New</h3>
                  <h3 className="text-uppercase fw-bold mb-1">Horizons</h3>
                  <a href="shop1.html" className="btn-link default-underline text-uppercase fw-medium">Shop Now</a>
                </div>{/* /.content_abs .content_center */}
              </div>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="grid-banner__item position-relative mb-3">
                <img loading="lazy" className="w-100 h-auto" src="/assets/images/home/demo2/grid_banner_2.jpg" width={450} height={450} />
                <div className="content_abs content_center text-center">
                  <h3 className="text-uppercase fw-bold mb-1">Summer</h3>
                  <h3 className="text-uppercase fw-bold mb-1">Hats</h3>
                  <a href="shop1.html" className="btn-link default-underline text-uppercase fw-medium">Shop Now</a>
                </div>{/* /.content_abs .content_center */}
              </div>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="grid-banner__item position-relative mb-3">
                <img loading="lazy" className="w-100 h-auto" src="/assets/images/home/demo2/grid_banner_3.jpg" width={450} height={450} />
                <div className="content_abs content_center text-center">
                  <p className="text-white mb-1">Free delivery for Uomo members</p>
                  <h3 className="text-uppercase fw-bold text-white mb-1">Promotions Up</h3>
                  <h3 className="text-uppercase fw-bold text-white mb-1">To 10% Off</h3>
                  <a href="shop1.html" className="btn-link default-underline text-uppercase text-white fw-medium">See More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
        <BestSelling />
        <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
        <Banner2 />
        <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
        <LatestProducts />
        <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
        <LatestNews />
        <div className="mb-5 pb-xl-5 mb-xl-5" />
       
      </main>
    </div>

  )
}

export default Home