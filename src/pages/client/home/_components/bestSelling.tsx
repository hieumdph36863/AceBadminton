import React from 'react'

const BestSelling = () => {
  return (
    <div>
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
            <div className="swiper-container js-swiper-slider">
              <div className="swiper-wrapper gap-8">
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
            <div className="swiper-container js-swiper-slider" >
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
            <div className="swiper-container js-swiper-slider" >
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
            <div className="swiper-container js-swiper-slider" >
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
    </div>
  )
}

export default BestSelling