import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductService from "../service/ProductService";

const AddProducts = () => {
    const[nameclock, setNameClock] = useState('');
    const[trademark, setTrademark] = useState('');
    const[size, setSize] = useState('');
    const[price, setPrice] = useState('');
    const[shape, setShape] = useState('');
    const[wireMaterial, setWireMaterial] = useState('');
    const[glassMaterial, setGlassMaterial] = useState('');
    const[style, setStyle] = useState('');
    const[functions, setFunctions] = useState('');
    const[faceColor, setFaceColor] = useState('');
    const[origin, setOrigin] = useState('');
    const[image, setImage] = useState(null);    // image
    const history = useHistory();
    const {id} = useParams();

    const saveProduct = (e) => {
        e.preventDefault();
        
        // add image
        const product = {nameclock, trademark, size, price, shape, wireMaterial, glassMaterial, style, functions, faceColor, origin, image};
        
        if (id) {
            //update
            ProductService.update(id, product)
                .then(response => {
                    console.log('Clock data updated successfully', (response.id, response.product));
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            ProductService.add(product)
            .then(response => {
                console.log("Product added successfully", response.product);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
                if (error.response) {
                    console.log("Error response from server:", error.response.data);
                    // Display the error message to the user or handle it appropriately
                }
            });
        }
    }

    useEffect(() => {
        if (id) {
            ProductService.get(id)
                .then(product => {
                    setNameClock(product.data.nameclock);
                    setTrademark(product.data.trademark);
                    setSize(product.data.size);
                    setPrice(product.data.price);
                    setWireMaterial(product.data.wireMaterial);
                    setGlassMaterial(product.data.glassMaterial);
                    setStyle(product.data.style);
                    setFunctions(product.data.functions);
                    setFaceColor(product.data.faceColor);
                    setOrigin(product.data.origin);
                    setShape(product.data.shape);
                    setImage(product.data.image);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          // Khi đọc hình ảnh hoàn tất, lưu dữ liệu Base64 vào state
          setImage(reader.result);
        };
    
        // Đọc file hình ảnh dưới dạng Base64
        if (file) {
          reader.readAsDataURL(file);
        }
      };

    return(
        <div className="container">
            <h3>Add Clock</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input  // name clock
                        type="text" 
                        className="form-control col-4"
                        id="nameclock"
                        value={nameclock}
                        onChange={(e) => setNameClock(e.target.value)}
                        placeholder="Tên đồng hồ"
                    />
                </div>

                <div className="form-group">
                    {/* <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="form-control col-4"
                        accept="image/*"
                    /> */}
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="form-control col-4"
                        accept="image/*"
                    />
                </div>

                <div className="form-group">
                    <input  // trademark
                        type="text" 
                        className="form-control col-4"
                        id="trademark"
                        value={trademark}
                        onChange={(e) => setTrademark(e.target.value)}
                        placeholder="Thương hiệu"
                    />
                </div>

                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        placeholder="Kích thước"
                    />
                </div>
  
                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Giá tiền"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="shape"
                        value={shape}
                        onChange={(e) => setShape(e.target.value)}
                        placeholder="Hình dạng"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="wireMaterial"
                        value={wireMaterial}
                        onChange={(e) => setWireMaterial(e.target.value)}
                        placeholder="Loại dây"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="glassMaterial"
                        value={glassMaterial}
                        onChange={(e) => setGlassMaterial(e.target.value)}
                        placeholder="Loại kính"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="style"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        placeholder="Phong cách"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="functions"
                        value={functions}
                        onChange={(e) => setFunctions(e.target.value)}
                        placeholder="Chức năng"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="faceColor"
                        value={faceColor}
                        onChange={(e) => setFaceColor(e.target.value)}
                        placeholder="Màu mặt đồng hồ"
                    />
                </div>

                
                <div className="form-group">
                    <input // size
                        type="text" 
                        className="form-control col-4"
                        id="origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        placeholder="Xuất xứ"
                    />
                </div>

                

                <div >
                    <button onClick={(e) => saveProduct(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddProducts;


