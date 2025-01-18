import React from 'react';

interface AddProductProps {
  isProductModalOpen: boolean;
  handleCloseProductModal: () => void;
}

const AddProduct: React.FC<AddProductProps> = ({
  isProductModalOpen,
  handleCloseProductModal,
}) => {
  if (!isProductModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Product Add</h2>
          <button
            onClick={handleCloseProductModal} // Đóng modal
            className="w-7 h-7 rounded-lg hover:border-gray-200"
          >
            <i className="fas fa-times text-gray-500 text-xl hover:text-red-500"></i>
          </button>
        </div>
        <form action="">
          <div className="space-y-3">
            <label htmlFor="">Tên sản phẩm</label>
            <input
              type="text"
              className="w-full h-10 border rounded-lg border-gray-300 hover:border-blue-300 focus:border-blue-300 focus:outline-none focus:text-gray-700 transition-colors"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
