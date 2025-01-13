import React from 'react'
import sliderImage from '../assets/images/home/demo2/slider1.jpg';
const Content = () => {
  return (
  <div>
  <main>
    <section className="swiper-container js-swiper-slider slideshow type2 full-width" data-settings="{
  &quot;autoplay&quot;: {
    &quot;delay&quot;: 5000
  },
  &quot;slidesPerView&quot;: 1,
  &quot;effect&quot;: &quot;fade&quot;,
  &quot;loop&quot;: true,
  &quot;pagination&quot;: {
    &quot;el&quot;: &quot;.slideshow-pagination&quot;,
    &quot;type&quot;: &quot;bullets&quot;,
    &quot;clickable&quot;: true
  }
}">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              <img loading="lazy" src="assets/images/home/demo2/slider1.jpg" width={1903} height={896} alt="Pattern" className="slideshow-bg__img object-fit-cover" style={{objectPosition: '80% center'}} />
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
              <img loading="lazy" src="/assets/images/home/demo2/category1.jpg" width={1903} height={896} alt="Pattern" className="slideshow-bg__img object-fit-cover" style={{objectPosition: '70% center'}} />
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
              <img loading="lazy" src="/assets/images/home/demo2/slider3.jpg" width={1903} height={896} alt="Pattern" className="slideshow-bg__img object-fit-cover" style={{objectPosition: '70% center'}} />
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
      </div>{/* /.slideshow-wrapper js-swiper-slider */}
      <div className="slideshow-pagination position-left-center type2" />
      <a href="#section-grid-banner" className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-3 text_dash text-uppercase fw-medium">Scroll</a>
    </section>{/* /.slideshow */}
    <div className="mb-3 mb-md-4 mb-xl-5 pb-2 pt-1" />
    <section className="grid-banner container mb-3" id="section-grid-banner">
      <div className="row">
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img loading="lazy" className="w-100 h-auto" src="/assets/images/home/demo2/grid_banner_1.jpg" width={450} height={450}  />
            <div className="content_abs content_center text-center">
              <h3 className="text-uppercase fw-bold mb-1">New</h3>
              <h3 className="text-uppercase fw-bold mb-1">Horizons</h3>
              <a href="shop1.html" className="btn-link default-underline text-uppercase fw-medium">Shop Now</a>
            </div>{/* /.content_abs .content_center */}
          </div>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img loading="lazy" className="w-100 h-auto" src="/assets/images/home/demo2/grid_banner_2.jpg" width={450} height={450}  />
            <div className="content_abs content_center text-center">
              <h3 className="text-uppercase fw-bold mb-1">Summer</h3>
              <h3 className="text-uppercase fw-bold mb-1">Hats</h3>
              <a href="shop1.html" className="btn-link default-underline text-uppercase fw-medium">Shop Now</a>
            </div>{/* /.content_abs .content_center */}
          </div>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img loading="lazy" className="w-100 h-auto" src="/assets/images/home/demo2/grid_banner_3.jpg" width={450} height={450}  />
            <div className="content_abs content_center text-center">
              <p className="text-white mb-1">Free delivery for Uomo members</p>
              <h3 className="text-uppercase fw-bold text-white mb-1">Promotions Up</h3>
              <h3 className="text-uppercase fw-bold text-white mb-1">To 10% Off</h3>
              <a href="shop1.html" className="btn-link default-underline text-uppercase text-white fw-medium">See More</a>
            </div>{/* /.content_abs .content_center */}
          </div>
        </div>{/* /.col-lg-4 */}
      </div>{/* /.row */}
    </section>
    <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">Best Selling</h2>
      <ul className="nav nav-tabs mb-3 mb-xl-5 text-uppercase justify-content-center" id="collections-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link nav-link_underscore active" id="collections-tab-1-trigger" data-bs-toggle="tab" href="#collections-tab-1" role="tab" aria-controls="collections-tab-1" aria-selected="true">Tops</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link nav-link_underscore" id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true">Jeans</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link nav-link_underscore" id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true">Bags</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link nav-link_underscore" id="collections-tab-4-trigger" data-bs-toggle="tab" href="#collections-tab-4" role="tab" aria-controls="collections-tab-4" aria-selected="true">Accessories</a>
        </li>
      </ul>
      <div className="tab-content pt-2" id="collections-tab-content">
        <div className="tab-pane fade show active" id="collections-tab-1" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
          <div className="position-relative">
            <div className="swiper-container js-swiper-slider" data-settings="{
          &quot;autoplay&quot;: {
            &quot;delay&quot;: 5000
          },
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 4,
          &quot;effect&quot;: &quot;none&quot;,
          &quot;loop&quot;: false,
          &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.products-pagination&quot;,
            &quot;type&quot;: &quot;bullets&quot;,
            &quot;clickable&quot;: true
          },
          &quot;navigation&quot;: {
            &quot;nextEl&quot;: &quot;.products-carousel__next&quot;,
            &quot;prevEl&quot;: &quot;.products-carousel__prev&quot;
          },
          &quot;breakpoints&quot;: {
            &quot;320&quot;: {
              &quot;slidesPerView&quot;: 2,
              &quot;slidesPerGroup&quot;: 2,
              &quot;spaceBetween&quot;: 14
            },
            &quot;768&quot;: {
              &quot;slidesPerView&quot;: 3,
              &quot;slidesPerGroup&quot;: 3,
              &quot;spaceBetween&quot;: 24
            },
            &quot;992&quot;: {
              &quot;slidesPerView&quot;: 4,
              &quot;slidesPerGroup&quot;: 1,
              &quot;spaceBetween&quot;: 30,
              &quot;pagination&quot;: false
            }
          }
        }">
              <div className="swiper-wrapper">
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
              </div>{/* /.swiper-wrapper */}
            </div>{/* /.swiper-container js-swiper-slider */}
            <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
            </div>{/* /.products-carousel__prev */}
            <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
            </div>{/* /.products-carousel__next */}
            <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center" />
            {/* /.products-pagination */}
          </div>{/* /.position-relative */}
        </div>{/* /.tab-pane fade show*/}
        <div className="tab-pane fade show" id="collections-tab-2" role="tabpanel" aria-labelledby="collections-tab-2-trigger">
          <div className="position-relative">
            <div className="swiper-container js-swiper-slider" data-settings="{
          &quot;autoplay&quot;: {
            &quot;delay&quot;: 5000
          },
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 4,
          &quot;effect&quot;: &quot;none&quot;,
          &quot;loop&quot;: false,
          &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.products-pagination&quot;,
            &quot;type&quot;: &quot;bullets&quot;,
            &quot;clickable&quot;: true
          },
          &quot;navigation&quot;: {
            &quot;nextEl&quot;: &quot;.products-carousel__next&quot;,
            &quot;prevEl&quot;: &quot;.products-carousel__prev&quot;
          },
          &quot;breakpoints&quot;: {
            &quot;320&quot;: {
              &quot;slidesPerView&quot;: 2,
              &quot;slidesPerGroup&quot;: 2,
              &quot;spaceBetween&quot;: 14
            },
            &quot;768&quot;: {
              &quot;slidesPerView&quot;: 3,
              &quot;slidesPerGroup&quot;: 3,
              &quot;spaceBetween&quot;: 24
            },
            &quot;992&quot;: {
              &quot;slidesPerView&quot;: 4,
              &quot;slidesPerGroup&quot;: 1,
              &quot;spaceBetween&quot;: 30,
              &quot;pagination&quot;: false
            }
          }
        }">
              <div className="swiper-wrapper">
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
              </div>{/* /.swiper-wrapper */}
            </div>{/* /.swiper-container js-swiper-slider */}
            <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
            </div>{/* /.products-carousel__prev */}
            <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
            </div>{/* /.products-carousel__next */}
            <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center" />
            {/* /.products-pagination */}
          </div>{/* /.position-relative */}
        </div>{/* /.tab-pane fade show*/}
        <div className="tab-pane fade show" id="collections-tab-3" role="tabpanel" aria-labelledby="collections-tab-3-trigger">
          <div className="position-relative">
            <div className="swiper-container js-swiper-slider" data-settings="{
          &quot;autoplay&quot;: {
            &quot;delay&quot;: 5000
          },
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 4,
          &quot;effect&quot;: &quot;none&quot;,
          &quot;loop&quot;: false,
          &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.products-pagination&quot;,
            &quot;type&quot;: &quot;bullets&quot;,
            &quot;clickable&quot;: true
          },
          &quot;navigation&quot;: {
            &quot;nextEl&quot;: &quot;.products-carousel__next&quot;,
            &quot;prevEl&quot;: &quot;.products-carousel__prev&quot;
          },
          &quot;breakpoints&quot;: {
            &quot;320&quot;: {
              &quot;slidesPerView&quot;: 2,
              &quot;slidesPerGroup&quot;: 2,
              &quot;spaceBetween&quot;: 14
            },
            &quot;768&quot;: {
              &quot;slidesPerView&quot;: 3,
              &quot;slidesPerGroup&quot;: 3,
              &quot;spaceBetween&quot;: 24
            },
            &quot;992&quot;: {
              &quot;slidesPerView&quot;: 4,
              &quot;slidesPerGroup&quot;: 1,
              &quot;spaceBetween&quot;: 30,
              &quot;pagination&quot;: false
            }
          }
        }">
              <div className="swiper-wrapper">
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
              </div>{/* /.swiper-wrapper */}
            </div>{/* /.swiper-container js-swiper-slider */}
            <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
            </div>{/* /.products-carousel__prev */}
            <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
            </div>{/* /.products-carousel__next */}
            <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center" />
            {/* /.products-pagination */}
          </div>{/* /.position-relative */}
        </div>{/* /.tab-pane fade show*/}
        <div className="tab-pane fade show" id="collections-tab-4" role="tabpanel" aria-labelledby="collections-tab-4-trigger">
          <div className="position-relative">
            <div className="swiper-container js-swiper-slider" data-settings="{
          &quot;autoplay&quot;: {
            &quot;delay&quot;: 5000
          },
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 4,
          &quot;effect&quot;: &quot;none&quot;,
          &quot;loop&quot;: false,
          &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.products-pagination&quot;,
            &quot;type&quot;: &quot;bullets&quot;,
            &quot;clickable&quot;: true
          },
          &quot;navigation&quot;: {
            &quot;nextEl&quot;: &quot;.products-carousel__next&quot;,
            &quot;prevEl&quot;: &quot;.products-carousel__prev&quot;
          },
          &quot;breakpoints&quot;: {
            &quot;320&quot;: {
              &quot;slidesPerView&quot;: 2,
              &quot;slidesPerGroup&quot;: 2,
              &quot;spaceBetween&quot;: 14
            },
            &quot;768&quot;: {
              &quot;slidesPerView&quot;: 3,
              &quot;slidesPerGroup&quot;: 3,
              &quot;spaceBetween&quot;: 24
            },
            &quot;992&quot;: {
              &quot;slidesPerView&quot;: 4,
              &quot;slidesPerGroup&quot;: 1,
              &quot;spaceBetween&quot;: 30,
              &quot;pagination&quot;: false
            }
          }
        }">
              <div className="swiper-wrapper">
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-3-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-red text-white">-67%</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">$129</span>
                      <span className="money price">$99</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-0-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-1-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="product-label bg-white">NEW</div>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <a href="product1_simple.html">
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                      <img loading="lazy" src="/assets/images/home/demo2/product-2-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                    </a>
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                      <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                    </div>
                    <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                      <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                    </button>
                  </div>
                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">JEAN</p>
                    <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
                    </div>
                  </div>
                </div>
              </div>{/* /.swiper-wrapper */}
            </div>{/* /.swiper-container js-swiper-slider */}
            <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
            </div>{/* /.products-carousel__prev */}
            <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
            </div>{/* /.products-carousel__next */}
            <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center" />
            {/* /.products-pagination */}
          </div>{/* /.position-relative */}
        </div>{/* /.tab-pane fade show*/}
      </div>{/* /.tab-content pt-2 */}
    </section>{/* /.products-grid */}
    <div className="mb-1 pb-4" />
    <section className="category-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">Shop by category</h2>
      <div className="position-relative">
        <div className="swiper-container js-swiper-slider" data-settings="{
      &quot;autoplay&quot;: {
        &quot;delay&quot;: 5000
      },
      &quot;slidesPerView&quot;: 4,
      &quot;slidesPerGroup&quot;: 4,
      &quot;effect&quot;: &quot;none&quot;,
      &quot;loop&quot;: true,
      &quot;breakpoints&quot;: {
        &quot;320&quot;: {
          &quot;slidesPerView&quot;: 2,
          &quot;slidesPerGroup&quot;: 2,
          &quot;spaceBetween&quot;: 14
        },
        &quot;768&quot;: {
          &quot;slidesPerView&quot;: 3,
          &quot;slidesPerGroup&quot;: 3,
          &quot;spaceBetween&quot;: 24
        },
        &quot;992&quot;: {
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 1,
          &quot;spaceBetween&quot;: 30,
          &quot;pagination&quot;: false
        },
        &quot;1200&quot;: {
          &quot;slidesPerView&quot;: 5,
          &quot;slidesPerGroup&quot;: 1,
          &quot;spaceBetween&quot;: 30,
          &quot;pagination&quot;: false
        }
      }
    }">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img loading="lazy" className="w-100 h-auto mb-3" src="/assets/images/home/demo2/category1.jpg" width={258} height={278}  />
              <div className="text-center">
                <a href="#" className="menu-link menu-link_us-s text-uppercase">Accessories</a>
                <p className="mb-0 text-secondary">20 Products</p>
              </div>
            </div>
            <div className="swiper-slide">
              <img loading="lazy" className="w-100 h-auto mb-3" src="/assets/images/home/demo2/category2.jpg" width={258} height={278}  />
              <div className="text-center">
                <a href="#" className="menu-link menu-link_us-s text-uppercase">Bags</a>
                <p className="mb-0 text-secondary">20 Products</p>
              </div>
            </div>
            <div className="swiper-slide">
              <img loading="lazy" className="w-100 h-auto mb-3" src="/assets/images/home/demo2/category3.jpg" width={258} height={278}  />
              <div className="text-center">
                <a href="#" className="menu-link menu-link_us-s text-uppercase">Shoes</a>
                <p className="mb-0 text-secondary">20 Products</p>
              </div>
            </div>
            <div className="swiper-slide">
              <img loading="lazy" className="w-100 h-auto mb-3" src="/assets/images/home/demo2/category4.jpg" width={258} height={278}  />
              <div className="text-center">
                <a href="#" className="menu-link menu-link_us-s text-uppercase">Outerwear</a>
                <p className="mb-0 text-secondary">20 Products</p>
              </div>
            </div>
            <div className="swiper-slide">
              <img loading="lazy" className="w-100 h-auto mb-3" src="/assets/images/home/demo2/category5.jpg" width={258} height={278}  />
              <div className="text-center">
                <a href="#" className="menu-link menu-link_us-s text-uppercase">Top</a>
                <p className="mb-0 text-secondary">20 Products</p>
              </div>
            </div>
          </div>{/* /.swiper-wrapper */}
        </div>{/* /.swiper-container js-swiper-slider */}
      </div>{/* /.position-relative */}
    </section>
    <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
    <section className="image-banner">
      <div className="background-img" style={{backgroundImage: 'url("/assets/images/home/demo2/image_banner_bg.jpg")', backgroundPosition: '20% center'}} />
      <div className="image-banner__content container py-3">
        <h2 className="text-white fw-bold">New Season</h2>
        <p className="text-white mb-4">New Collection Release</p>
        <a href="shop1.html" className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-55 d-inline-flex align-items-center">
          <span className="text_dash_half">Shop Now</span>
        </a>
      </div>
    </section>
    <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-4 pb-xl-2 mb-xl-4">Latest Products</h2>
      <div className="position-relative">
        <div className="swiper-container js-swiper-slider" data-settings="{
      &quot;autoplay&quot;: {
        &quot;delay&quot;: 5000
      },
      &quot;slidesPerView&quot;: 4,
      &quot;slidesPerGroup&quot;: 4,
      &quot;effect&quot;: &quot;none&quot;,
      &quot;loop&quot;: false,
      &quot;scrollbar&quot;: {
        &quot;el&quot;: &quot;.products-carousel__scrollbar&quot;,
        &quot;draggable&quot;: true
      },
      &quot;navigation&quot;: {
        &quot;nextEl&quot;: &quot;.products-carousel__next&quot;,
        &quot;prevEl&quot;: &quot;.products-carousel__prev&quot;
      },
      &quot;breakpoints&quot;: {
        &quot;320&quot;: {
          &quot;slidesPerView&quot;: 2,
          &quot;slidesPerGroup&quot;: 2,
          &quot;spaceBetween&quot;: 14
        },
        &quot;768&quot;: {
          &quot;slidesPerView&quot;: 3,
          &quot;slidesPerGroup&quot;: 3,
          &quot;spaceBetween&quot;: 24
        },
        &quot;992&quot;: {
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 1,
          &quot;spaceBetween&quot;: 30,
          &quot;pagination&quot;: false
        }
      }
    }">
          <div className="swiper-wrapper">
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-4-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-4-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$29</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-5-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-5-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="product-label bg-white">NEW</div>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$62</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-6-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-6-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$17</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-7-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-7-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="product-label bg-red text-white">-67%</div>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                <div className="product-card__price d-flex align-items-center">
                  <span className="money price-old">$129</span>
                  <span className="money price">$99</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-4-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-4-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$29</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-5-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-5-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="product-label bg-white">NEW</div>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$62</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-6-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-6-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$17</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-7-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-7-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="product-label bg-red text-white">-67%</div>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                <div className="product-card__price d-flex align-items-center">
                  <span className="money price-old">$129</span>
                  <span className="money price">$99</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-4-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-4-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Cropped Faux Leather Jacket</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$29</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-5-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-5-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="product-label bg-white">NEW</div>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Calvin Shorts</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$62</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-6-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-6-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Kirby T-Shirt</a></h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$17</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html">
                  <img loading="lazy" src="/assets/images/home/demo2/product-7-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
                  <img loading="lazy" src="/assets/images/home/demo2/product-7-2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img pc__img-second" />
                </a>
                <div className="product-label bg-red text-white">-67%</div>
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                  <button className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">Quick View</button>
                </div>
                <button className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist" title="Add To Wishlist">
                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category third-color">JEAN</p>
                <h6 className="pc__title"><a href="product1_simple.html">Cableknit Shawl</a></h6>
                <div className="product-card__price d-flex align-items-center">
                  <span className="money price-old">$129</span>
                  <span className="money price">$99</span>
                </div>
              </div>
            </div>
          </div>{/* /.swiper-wrapper */}
        </div>{/* /.swiper-container js-swiper-slider */}
        <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
        </div>{/* /.products-carousel__prev */}
        <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
        </div>{/* /.products-carousel__next */}
        <div className="pb-2 mb-2 mb-xl-4" />
        {/* scrollbar */}
        <div className="products-carousel__scrollbar swiper-scrollbar" />
      </div>{/* /.position-relative */}
    </section>{/* /.products-carousel container */}
    <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
    <section className="blog-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">Latest News</h2>
      <div className="position-relative">
        <div className="swiper-container js-swiper-slider" data-settings="{
      &quot;autoplay&quot;: {
        &quot;delay&quot;: 5000
      },
      &quot;slidesPerView&quot;: 3,
      &quot;slidesPerGroup&quot;: 3,
      &quot;effect&quot;: &quot;none&quot;,
      &quot;loop&quot;: true,
      &quot;pagination&quot;: {
        &quot;el&quot;: &quot;.blog-pagination&quot;,
        &quot;type&quot;: &quot;bullets&quot;,
        &quot;clickable&quot;: true
      },
      &quot;breakpoints&quot;: {
        &quot;320&quot;: {
          &quot;slidesPerView&quot;: 1,
          &quot;slidesPerGroup&quot;: 1,
          &quot;spaceBetween&quot;: 14
        },
        &quot;768&quot;: {
          &quot;slidesPerView&quot;: 2,
          &quot;slidesPerGroup&quot;: 2,
          &quot;spaceBetween&quot;: 24
        },
        &quot;992&quot;: {
          &quot;slidesPerView&quot;: 3,
          &quot;slidesPerGroup&quot;: 1,
          &quot;spaceBetween&quot;: 30
        }
      }
    }">
          <div className="swiper-wrapper blog-grid row-cols-xl-3">
            <div className="swiper-slide blog-grid__item mb-4">
              <div className="blog-grid__item-image">
                <img loading="lazy" className="h-auto" src="/assets/images/home/demo2/post1.jpg" width={450} height={300}  />
              </div>
              <div className="blog-grid__item-detail">
                <div className="blog-grid__item-meta">
                  <span className="blog-grid__item-meta__author">By Admin</span>
                  <span className="blog-grid__item-meta__date">Aprial 05, 2023</span>
                </div>
                <div className="blog-grid__item-title mb-0">
                  <a href="blog_single.html">Woman with good shoes is never be ugly place</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide blog-grid__item mb-4">
              <div className="blog-grid__item-image">
                <img loading="lazy" className="h-auto" src="/assets/images/home/demo2/post2.jpg" width={450} height={300}  />
              </div>
              <div className="blog-grid__item-detail">
                <div className="blog-grid__item-meta">
                  <span className="blog-grid__item-meta__author">By Admin</span>
                  <span className="blog-grid__item-meta__date">Aprial 05, 2023</span>
                </div>
                <div className="blog-grid__item-title mb-0">
                  <a href="blog_single.html">What Freud Can Teach Us About Furniture</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide blog-grid__item mb-4">
              <div className="blog-grid__item-image">
                <img loading="lazy" className="h-auto" src="/assets/images/home/demo2/post3.jpg" width={450} height={300}  />
              </div>
              <div className="blog-grid__item-detail">
                <div className="blog-grid__item-meta">
                  <span className="blog-grid__item-meta__author">By Admin</span>
                  <span className="blog-grid__item-meta__date">Aprial 05, 2023</span>
                </div>
                <div className="blog-grid__item-title mb-0">
                  <a href="blog_single.html">Habitant morbi tristique senectus</a>
                </div>
              </div>
            </div>
          </div>{/* /.swiper-wrapper */}
        </div>{/* /.swiper-container js-swiper-slider */}
        <div className="blog-pagination type2 mt-1 mt-md-4 d-flex align-items-center justify-content-center" />
        {/* /.products-pagination */}
      </div>{/* /.position-relative */}
    </section>
    <div className="mb-5 pb-4 pb-xl-5 mb-xl-5" />
    <section className="brands-carousel container">
      <h2 className="d-none">Brands</h2>
      <div className="position-relative">
        <div className="swiper-container js-swiper-slider" data-settings="{
      &quot;autoplay&quot;: {
        &quot;delay&quot;: 5000
      },
      &quot;slidesPerView&quot;: 7,
      &quot;slidesPerGroup&quot;: 7,
      &quot;effect&quot;: &quot;none&quot;,
      &quot;loop&quot;: true,
      &quot;breakpoints&quot;: {
        &quot;320&quot;: {
          &quot;slidesPerView&quot;: 2,
          &quot;slidesPerGroup&quot;: 2,
          &quot;spaceBetween&quot;: 14
        },
        &quot;768&quot;: {
          &quot;slidesPerView&quot;: 4,
          &quot;slidesPerGroup&quot;: 4,
          &quot;spaceBetween&quot;: 24
        },
        &quot;992&quot;: {
          &quot;slidesPerView&quot;: 7,
          &quot;slidesPerGroup&quot;: 1,
          &quot;spaceBetween&quot;: 30,
          &quot;pagination&quot;: false
        }
      }
    }">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img loading="lazy" src="..assets/images/brands/brand1.png" width={120} height={20}  />
            </div>
            <div className="swiper-slide">
              <img loading="lazy" src="/assets/images/brands/brand2.png" width={87} height={20}  />
            </div>
            <div className="swiper-slide">
              <img loading="lazy" src="/assets/images/brands/brand3.png" width={132} height={22}  />
            </div>
            <div className="swiper-slide">
              <img loading="lazy" src="/assets/images/brands/brand4.png" width={72} height={21}  />
            </div>
            <div className="swiper-slide">
              <img loading="lazy" src="/assets/images/brands/brand5.png" width={123} height={31}  />
            </div>
            <div className="swiper-slide">
              <img loading="lazy" src="/assets/images/brands/brand6.png" width={137} height={22}  />
            </div>
            <div className="swiper-slide">
              <img loading="lazy" src="/assets/images/brands/brand7.png" width={94} height={21}  />
            </div>
          </div>{/* /.swiper-wrapper */}
        </div>{/* /.swiper-container js-swiper-slider */}
      </div>{/* /.position-relative */}
    </section>{/* /.products-carousel container */}
    <div className="mb-4 pb-4 pb-xl-5 mb-xl-5" />
  </main>
</div>

  )
}

export default Content