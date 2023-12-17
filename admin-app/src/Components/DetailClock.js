import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from "../Service/ClockService";
import { useNavigate } from 'react-router-dom';
import '../css/detailClock.css';


const ListProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate for React Router v6

  useEffect(() => {
    ProductService.get(id)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }, [id]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
  
    if (confirmDelete) {
      console.log('Printing id', id);
      ProductService.remove(id)
        .then(response => {
          console.log('Clock deleted successfully', response.data);
          navigate('/list'); // Redirect to the list page after deletion using useNavigate
        })
        .catch(error => {
          console.log('Something went wrong', error);
        });
    } else {
      console.log('Xóa đã bị hủy bỏ.');
      // Hoặc thực hiện các hành động khác khi người dùng hủy bỏ xóa sản phẩm
    }
  };
  

  if (!product) {
    return <div>Loading...</div>;
  }

  const backHome =() => {
    navigate('/list')
  }

  return (
    
    
    <div class='topnav-detail'>
      <h2 class="title" onClick={() => {backHome()}}>Shop bán đồng hồ</h2>
      <div class='product-info'>
        <div class='image-info-container'>
          <div class='image-container'>
            <img src={product.image} alt={product.nameclock} />
            </div>
              <div class='info-container'>
                <p class='product-name'>{product.nameclock}</p>
                <p>Thương hiệu {product.trademark}</p>
                <p class='product-price'>{product.price} VND</p>
                <p>Kích thước: {product.size}mm</p>
                <p>Hình dạng: {product.shape}</p>
                <p>Chất liệu dây: {product.wireMaterial}</p>
                <p>Chất liệu kính: {product.glassMaterial}</p>
                <p>{product.style}</p>
                <p>Tính năng: {product.functions}</p>
                <p>Màu mặt đồng hồ: {product.faceColor}</p>
                <p>Xuất xứ: {product.origin}</p>
              </div>
            </div>
          </div>
        <div class='product-actions'>
          <button className="btn btn-info" onClick={() => navigate('/add')}>Create</button>
          <button className='btn btn-info' onClick={() => navigate(`/edit/${product.id}`)}>Update</button>
          <button className="btn btn-danger ml-2" onClick={() => { handleDelete(product.id); }}>Delete</button>
        </div>
      </div>


    
  );
};

export default ListProduct;


          