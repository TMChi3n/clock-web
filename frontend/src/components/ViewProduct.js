import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ProductService from '../service/ProductService';

const ViewProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    ProductService.get(id)
      .then(response => {
        console.log('Detail clock', response.data);
        setProduct(response.data); // Assuming response.data contains the product object
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }, [id]);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    ProductService.remove(id)
      .then(response => {
        console.log('Clock deleted successfully', response.data);
        history.push('/'); // Redirect to the list page after deletion
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <p>Tên đồng hồ: {product.nameclock}</p>
        <p>Thương hiệu: {product.trademark}</p>
        <img src={product.image} alt={product.nameclock} style={{ maxWidth: '100px' }} />
        <p>Giá tiền: {product.price}</p>
        <p>Hình dạng: {product.shape}</p>
        <p>Chất liệu dây: {product.wireMaterial}</p>
        <p>Chất liệu kính: {product.glassMaterial}</p>
        <p>Phong cách: {product.style}</p>
        <p>Chức năng: {product.functions}</p>
        <p>Màu mặt đồng hồ: {product.faceColor}</p>
        <p>Xuất xứ: {product.origin}</p>
        <div>
          <Link className="btn btn-info" to={`/edit/${product.id}`}>Update</Link>
          <button className="btn btn-danger ml-2" onClick={() => { handleDelete(product.id); }}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
