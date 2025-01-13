import React from 'react'

const FooterWebsite = () => {
  return (
    <div>
         <footer className="footer footer_type_2 dark">
    <div className="footer-top container">
      <div className="block-newsletter dark">
        <h3 className="block__title">Get 10% Off</h3>
        <p>Be the first to get the latest news about trends, promotions, and much more!</p>
        <form action="https://uomo-html.flexkitux.com/Demo2/index.html" className="block-newsletter__form">
          <input className="form-control" type="email" name="email" placeholder="Your email address"/>
          <button className="btn btn-secondary fw-medium" type="submit">JOIN</button>
        </form>
      </div>
    </div>

    <div className="footer-middle container">
      <div className="row row-cols-lg-5 row-cols-2">
        <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
          <div className="logo">
            <a href="index.html">
              <img src="../images/logo-white.png" alt="Uomo" className="logo__image"/>
            </a>
          </div>
          <p className="footer-address">1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>

          <p className="m-0">
            <strong className="fw-medium">sale@uomo.com</strong>
          </p>
          <p>
            <strong className="fw-medium">+1 246-345-0695</strong>
          </p>

          <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
            <li>
              <a href="https://www.facebook.com/" className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-menu mb-4 mb-lg-0">
          <h6 className="sub-menu__title text-uppercase">Company</h6>
          <ul className="sub-menu__list list-unstyled">
            <li className="sub-menu__item"><a href="about.html" className="menu-link menu-link_us-s">About Us</a></li>
            <li className="sub-menu__item"><a href="about.html" className="menu-link menu-link_us-s">Careers</a></li>
            <li className="sub-menu__item"><a href="about.html" className="menu-link menu-link_us-s">Affiliates</a></li>
            <li className="sub-menu__item"><a href="blog_list1.html" className="menu-link menu-link_us-s">Blog</a></li>
            <li className="sub-menu__item"><a href="contact.html" className="menu-link menu-link_us-s">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column footer-menu mb-4 mb-lg-0">
          <h6 className="sub-menu__title text-uppercase">Shop</h6>
          <ul className="sub-menu__list list-unstyled">
            <li className="sub-menu__item"><a href="shop2.html" className="menu-link menu-link_us-s">New Arrivals</a></li>
            <li className="sub-menu__item"><a href="shop3.html" className="menu-link menu-link_us-s">Accessories</a></li>
            <li className="sub-menu__item"><a href="shop4.html" className="menu-link menu-link_us-s">Men</a></li>
            <li className="sub-menu__item"><a href="shop5.html" className="menu-link menu-link_us-s">Women</a></li>
            <li className="sub-menu__item"><a href="shop1.html" className="menu-link menu-link_us-s">Shop All</a></li>
          </ul>
        </div>

        <div className="footer-column footer-menu mb-4 mb-lg-0">
          <h6 className="sub-menu__title text-uppercase">Help</h6>
          <ul className="sub-menu__list list-unstyled">
            <li className="sub-menu__item"><a href="about.html" className="menu-link menu-link_us-s">Customer Service</a></li>
            <li className="sub-menu__item"><a href="account_dashboard.html" className="menu-link menu-link_us-s">My Account</a></li>
            <li className="sub-menu__item"><a href="store_location.html" className="menu-link menu-link_us-s">Find a Store</a></li>
            <li className="sub-menu__item"><a href="terms.html" className="menu-link menu-link_us-s">Legal & Privacy</a></li>
            <li className="sub-menu__item"><a href="contact.html" className="menu-link menu-link_us-s">Contact</a></li>
            <li className="sub-menu__item"><a href="about.html" className="menu-link menu-link_us-s">Gift Card</a></li>
          </ul>
        </div>
        <div className="footer-column mb-4 mb-lg-0">
          <h6 className="sub-menu__title text-uppercase">Opening Time</h6>
          <ul className="list-unstyled">
            <li><span className="menu-link">Mon - Fri: 8AM - 9PM</span></li>
            <li><span className="menu-link">Sat: 9AM - 8PM</span></li>
            <li><span className="menu-link">Sun: Closed</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container d-md-flex align-items-center">
        <span className="footer-copyright me-auto">©2023 Uomo</span>
        <div className="footer-settings d-md-flex align-items-center">
          <select id="footerSettingsLanguage" className="form-select form-select-sm bg-transparent border-0" aria-label="Default select example" name="store-language">
            <option className="footer-select__option" selected>United Kingdom | English</option>
            <option className="footer-select__option" value="1">United States | English</option>
            <option className="footer-select__option" value="2">German</option>
            <option className="footer-select__option" value="3">French</option>
            <option className="footer-select__option" value="4">Swedish</option>
          </select>

          <select id="footerSettingsCurrency" className="form-select form-select-sm bg-transparent border-0" aria-label="Default select example" name="store-language">
            <option className="footer-select__option" selected>$ USD</option>
            <option className="footer-select__option" value="1">£ GBP</option>
            <option className="footer-select__option" value="2">€ EURO</option>
          </select>
        </div>
      </div>
    </div>
  </footer>

  {/* <!-- Mobile Fixed Footer --> */}
  <footer className="footer-mobile container w-100 px-5 d-md-none bg-body">
    <div className="row text-center">
      <div className="col-4">
        <a href="https://uomo-html.flexkitux.com/" className="footer-mobile__link d-flex flex-column align-items-center">
          <svg className="d-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_home" /></svg>
          <span>Home</span>
        </a>
      </div>

      <div className="col-4">
        <a href="https://uomo-html.flexkitux.com/" className="footer-mobile__link d-flex flex-column align-items-center">
          <svg className="d-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_hanger" /></svg>
          <span>Shop</span>
        </a>
      </div>

      <div className="col-4">
        <a href="https://uomo-html.flexkitux.com/" className="footer-mobile__link d-flex flex-column align-items-center">
          <div className="position-relative">
            <svg className="d-block" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
            <span className="wishlist-amount d-block position-absolute js-wishlist-count">3</span>
          </div>
          <span>Wishlist</span>
        </a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default FooterWebsite