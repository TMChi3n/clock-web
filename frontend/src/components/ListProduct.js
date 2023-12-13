import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductService from '../service/ProductService';

const ListProduct = () => {

  const [products, setProduct] = useState([]);
  const history = useHistory();

  const init = () => {
    ProductService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setProduct(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    ProductService.remove(id)
      .then(response => {
        console.log('Clock deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  const DetailClick = (id) => {
    // Redirect to a different page when a product is clicked
    history.push(`/get/${id}`);
  };

  return (
    <tbody>
          {
            products.map(product => (
                <tr key={product.id}>
                  <td onClick={() => DetailClick(product.id)}>
                    Tên đồng hồ: {product.nameclock}</td>
                  <td>Thương hiệu: {product.trademark}</td>
                  <td onClick={() => DetailClick(product.id)}>
                    <img src={product.image} alt={product.nameclock} style={{ maxWidth: '100px' }} />
                    {/* Replace product.image with the URL property containing the image */}
                  </td>
                  <td>Giá tiền: {product.price}</td>
                  <td>
                  <Link className="btn btn-info" to={'/add'}>Add</Link>
                    <Link className="btn btn-info" to={`edit/${product.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={() => { handleDelete(product.id); }}>Delete</button>
                  </td>
                </tr>
              ))
          }
          </tbody>
  );
}

export default ListProduct;
