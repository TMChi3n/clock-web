import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductService from "../service/ProductService";

const EditProduct = () => {
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

    const isEditing = !!id;

    const saveProduct = (e) => {
        e.preventDefault();
        
        // add image
        const product = {nameclock, trademark, size, price, shape, wireMaterial, glassMaterial, style, functions, faceColor, image, origin};
        
        if (isEditing) {
            ProductService.update(id, product)
                .then(response => {
                    console.log('Clock data updated successfully', (response.id, response.product));
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    }

    useEffect(() => {
        if (isEditing) {
            ProductService.get(id)
                .then(product => {
                    const {
                        nameclock,
                        trademark,
                        size,
                        price,
                        shape,
                        wireMaterial,
                        glassMaterial,
                        style,
                        functions,
                        faceColor,
                        origin,
                        image // Ensure to handle image loading separately if it's a file/blob
                    } = product.data;

                    setNameClock(nameclock);
                    setTrademark(trademark);
                    setSize(size);
                    setPrice(price);
                    setWireMaterial(wireMaterial);
                    setGlassMaterial(glassMaterial);
                    setStyle(style);
                    setFunctions(functions);
                    setFaceColor(faceColor);
                    setOrigin(origin);
                    setShape(shape);
                    setImage(image); // Assuming it's a URL or base64 string representation

                    // Ensure handling of image loading if it's a file/blob
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    }, [id, isEditing]);

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
            <h3>Edit</h3>
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
                    <button onClick={(e) => saveProduct(e)} className="btn btn-primary">Update</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default EditProduct;


