import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutAdmin from '../pages/admin/page';
import Dashbord from '../pages/admin/dashbord';
import LayoutWebsite from '../pages/client/layoutWebsite';
import Categories from '../pages/admin/categories/categories';
import Home from '../pages/client/home/home';
import Products from '../pages/admin/products/products';
import Product from '../pages/client/details/product';

const Router = () => {
  return (
    <Routes>
    {/* Routes cho Admin */}
    <Route path="/admin" element={<LayoutAdmin />}>
      <Route index element={<Dashbord />} />
      <Route path="categories" element={<Categories />} />
      <Route path="products" element={<Products />} />
    </Route>

    {/* Routes cho Website */}
    <Route path="/" element={<LayoutWebsite />}>
    <Route index element={<Home/>} />
    <Route path='product' element={<Product/>} />
   
    </Route>

    {/* Route không tìm thấy */}
    <Route path="*" element={<div>Page Not Found</div>} />
  </Routes>
  );
};

export default Router;
