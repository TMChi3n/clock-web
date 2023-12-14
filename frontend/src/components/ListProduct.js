import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductService from '../service/ProductService';
import SearchBar from '../components/Search'; // Import your SearchBar component

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();

  const init = () => {
    ProductService.getAll()
      .then(response => {
        console.log('Printing products data', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const DetailClick = (id) => {
    history.push(`/get/${id}`);
  };

  const handleSearch = async (searchQuery) => {
    console.log('Search query:', searchQuery);
    try {
      const response = await ProductService.search(searchQuery);
      console.log('Search results:', response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const renderProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <div>
      <SearchBar onSearch={handleSearch} query={query} setQuery={setQuery} />
      <table>
        <tbody>
          {renderProducts.map((product) => (
            <tr key={product.id}>
              <td onClick={() => DetailClick(product.id)}>
                Tên đồng hồ: {product.nameclock}</td>
              <td>Thương hiệu: {product.trademark}</td>
              <td onClick={() => DetailClick(product.id)}>
                <img src={product.image} alt={product.nameclock} style={{ maxWidth: '100px' }} />
              </td>
              <td>Giá tiền: {product.price}</td>
              <td>
                <Link className="btn btn-info" to={'/add'}>Add</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;



              