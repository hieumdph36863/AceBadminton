import React from 'react'

const Banner = () => {
  return (
    <div> <div className="swiper-wrapper">
    <div className="swiper-slide">
      <div className="overflow-hidden position-relative h-100">
        <div className="slideshow-bg">
          <img loading="lazy" src="assets/images/home/demo2/slider1.jpg" width={1903} height={896} alt="Pattern" className="slideshow-bg__img object-fit-cover" style={{ objectPosition: '80% center' }} />
        </div>
        <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
          <h6 className="text_dash text-shadow-white text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Summer 2024</h6>
          <h2 className="text-uppercase text-shadow-white h1 fw-bold mb-0 animate animate_fade animate_btt animate_delay-4">Hello New Season</h2>
          <p className="fs-6 mb-4 pb-2 text-uppercase text-shadow-white animate animate_fade animate_btt animate_delay-5">Limited time offer - up to 60% off &amp; free shipping</p>
          <button className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7 btn-55">
            <span className="text_dash_half">Discover Now</span>
          </button>
        </div>
      </div>
    </div>{/* /.slideshow-item */}
    <div className="swiper-slide">
      <div className="overflow-hidden position-relative h-100">
        <div className="slideshow-bg">
          <img loading="lazy" src="assets/images/home/demo2/category1.jpg" width={1903} height={896} alt="Pattern" className="slideshow-bg__img object-fit-cover" style={{ objectPosition: '70% center' }} />
        </div>
        <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
          <h6 className="text_dash text-uppercase text-shadow-white fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Summer 2024</h6>
          <h2 className="text-uppercase text-shadow-white h1 fw-bold mb-0 animate animate_fade animate_btt animate_delay-4">New Arrival Tops</h2>
          <p className="fs-6 mb-4 pb-2 text-uppercase text-shadow-white animate animate_fade animate_btt animate_delay-5">Limited time offer - up to 60% off &amp; free shipping</p>
          <button className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7 btn-55">
            <span className="text_dash_half">Discover Now</span>
          </button>
        </div>
      </div>
    </div>{/* /.slideshow-item */}
    <div className="swiper-slide">
      <div className="overflow-hidden position-relative h-100">
        <div className="slideshow-bg">
          <img loading="lazy" src="assets/images/home/demo2/slider3.jpg" width={1903} height={896} alt="Pattern" className="slideshow-bg__img object-fit-cover" style={{ objectPosition: '70% center' }} />
        </div>
        <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
          <h6 className="text_dash text-uppercase text-shadow-white fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Summer 2024</h6>
          <h2 className="text-uppercase text-shadow-white h1 fw-bold mb-0 animate animate_fade animate_btt animate_delay-4">Spring Collection</h2>
          <p className="fs-6 mb-4 pb-2 text-uppercase text-shadow-white animate animate_fade animate_btt animate_delay-5">Limited time offer - up to 60% off &amp; free shipping</p>
          <button className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7 btn-55">
            <span className="text_dash_half">Discover Now</span>
          </button>
        </div>
      </div>
    </div>{/* /.slideshow-item */}
  </div>{/* /.slideshow-wrapper js-swiper-slider */}</div>
  )
}

export default Banner