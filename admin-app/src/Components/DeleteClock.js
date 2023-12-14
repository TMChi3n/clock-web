import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import axios from 'axios';

const ProductManager = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (id) => {
    // Delete product
    axios.delete(`http://localhost:8080/products/delete/${id}`)
      .then(() => {
        // Reload products after deletion
        axios.get('http://localhost:8080/products/getAll')
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.error('Error fetching products', error);
          });
      })
      .catch(error => {
        console.error('Error deleting product', error);
      });
  };

  return (
    <div>
      <ProductList onProductSelect={handleProductSelect} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
      {/* Add components for add, edit functionalities */}
    </div>
  );
};

export default ProductManager;
