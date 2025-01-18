import React from 'react'

const LatestNews = () => {
  return (
    <div> <section className="blog-carousel container">
    <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">Latest News</h2>
    <div className="position-relative">
      <div className="swiper-container js-swiper-slider" >
        <div className="swiper-wrapper blog-grid row-cols-xl-3 gap-7">
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
  </section></div>
  )
}

export default LatestNews