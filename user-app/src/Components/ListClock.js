import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClockService from '../Service/ClockService';
import '../css/ListClock.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState([]);
    const navigate = useNavigate();

    const init = () => {    
        ClockService.getAll()
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }

    useEffect(() => {
        init();
    }, []);

    const handleSearch = () => {
        ClockService.search(query) 
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }

    const DetailClock = (id) => {
        navigate(`/get/${id}`)
    };
    
    const LoginPath = () => {
        navigate('/login')
    };

    const displayProducts = searchResults.length > 0 ? searchResults : products;

    return (
        <div class='list-product'>
            <div class='topnav'>
                <h2 class='title'>Shop bán đồng hồ</h2>
                <input 
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Tìm kiếm...'
                />
                <button class='btn-search' onClick={handleSearch}>Tìm kiếm</button>
                <button class='btn-login' onClick={LoginPath}>Đăng nhập</button>
            </div>

            <div className='item-list'>
                {displayProducts.map(product => (
                    <div className='product-item' key={product.id}>
                        <div className='product-image' onClick={() => DetailClock(product.id)}>
                            <img 
                                src={product.image}
                                alt={product.nameclock}
                                className='product-img'
                            />
                        </div>

                        <div className='product-details'>
                            <p class="product-name" onClick={() => DetailClock(product.id)}>{product.nameclock}</p>
                            <p class="product-trademark" >{product.trademark}</p>
                            <p class="product-price">{product.price} VND</p> 
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );


}

export default ProductList;
