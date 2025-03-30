import React, { useState } from 'react';
import './AddProducts.css';
import upload_area from '../../assets/upload_area.png';

const AddProducts = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
        setProductDetails(prevDetails => ({
            ...prevDetails,
            image: e.target.files[0]?.name || ""
        }));
    };

    const addProducts = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json'
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
        {
           product.image = responseData.image_url;
           console.log(product);
           await fetch('http://localhost:4000/addproduct',{
            method:'POST',
            headers:{
                Accept:'application',
                'content-type':'application/json',
            },
            body:JSON.stringify(product)
           }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Product Added"):alert("Failed")
           })
        }
        
    };

    const changeHandler = (e) => {
        setProductDetails(prevDetails => ({
            ...prevDetails,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className='addProduct'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name='name'
                    placeholder='type here'
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name='old_price'
                        placeholder='type here'
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name='new_price'
                        placeholder='type here'
                    />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name='category'
                    className='add-product-selecter'
                >
                    <option value="woman">Woman</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        src={image?URL.createObjectURL(image) : upload_area}
                        className='addproduct-thumnail-img'
                        alt="Upload Area"
                    />
                </label>
                <input
                    onChange={imageHandler}
                    type="file"
                    name='image'
                    id='file-input'hidden
                />
            </div>
            <button onClick={()=>{addProducts()}} className='addproduct-btn'>
                ADD
            </button>
        </div>
    );
};

export default AddProducts;














//  old code
// import React, { useState } from 'react';
// import './AddProducts.css'
// import upload_area from '../../assets/upload_area.png'
// import Product from './../../../../frontend/src/Pages/Product';



// const AddProducts = () => {
//     const [image,setImge] = useState(false);
//     const [productDetails,setProductDetails]= useState({
//         name:"",
//         image:"",
//         category:"women",
//         new_price:"",
//         old_price:"",
//     })

//     const imageHandler = (e) =>{
//         setImge(e.target.files[0]);

//     }

//     const AddProducts = async ()=>{
//         console.log(productDetails)
//     }
//     const changeHandler = (e) =>({...productDetails,[e.target.name]:e.target.value})
//   return (
//     <div className='addProduct'>
//       <div className="addproduct-itemfield">
//         <p>Product Title</p>
//         <input   value={productDetails.name} onChange={changeHandler}type="text" name='name' placeholder='type here' />
//       </div>
//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//             <p>Price</p>
//             <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type here' />
//         </div>
//         <div className="addproduct-itemfield">
//             <p> Offer Price</p>
//             <input  value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here' />
//         </div>
//       </div>
//       <div className="addproduct-itemfield">
//         <p> Product Category</p>
//         <select value={productDetails.category} onClick={changeHandler} name='category' className='add-product-selecter'>
//             <option value="woman">Woman</option>
//             <option value="men">Men</option>
//             <option value="kid">Kid</option>
//         </select>
//       </div>
//       <div className="addproduct-itemfield">
//         <label htmlFor="file-input">
//             <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
//         </label>
//         <input onChange={imageHandler} type="file" name='image' id='file-input' />
//       </div>
//       <button onClick={()=>{AddProducts()}} className='addproduct-btn'>ADD</button>
//     </div>
//   );
// }

// export default AddProducts;
