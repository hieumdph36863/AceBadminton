import React from 'react'

const LatestProducts = () => {
  return (
    <div>
         <section className="products-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-4 pb-xl-2 mb-xl-4">Latest Products</h2>
      <div className="position-relative">
        <div className="swiper-container js-swiper-slider">
          <div className="swiper-wrapper gap-8">
            <div className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <a href="product1_simple.html" >
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
    </section>
    </div>
  )
}

export default LatestProducts