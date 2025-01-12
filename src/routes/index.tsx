import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutAdmin from '../pages/admin/page';
import ProductList from '../pages/admin/productList';
import Dashbord from '../pages/admin/dashbord';

const Router = () => {
  return (
    <Routes>
      {/* Route cha: LayoutAdmin */}
      <Route path="/" element={<LayoutAdmin />}>
        {/* Route con */}
        <Route index element={<Dashbord />} />
        <Route path="products" element={<ProductList />} />
        {/* Thêm các route con khác nếu cần */}
        {/* <Route path="products/add" element={<ProductAddPage />} /> */}
        {/* <Route path="products/:id/edit" element={<ProductEditPage />} /> */}
      </Route>
      
      {/* Route không tìm thấy */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default Router;
