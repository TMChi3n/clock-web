import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../Service/ClockService';
import '../css/detailClock.css'

const DetailClock = () => {
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
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    const backHome =() => {
      navigate('/')
    }

  
    return (
      
      
      <div class='product-details'>
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
      </div>
  
  
      
    );
  };
  
  export default DetailClock;