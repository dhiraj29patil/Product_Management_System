import React, {useState} from 'react'
import ProductService from "../service/product_service";

const AddProduct = () => {
    const [product,setProduct]=useState({
        productName:"",
        description:"",
        price:"",
        status:"",
    })

    const [msg,setmsg]=useState("");
    
    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]:value});
    }

    const ProductRegister=(e)=>{
        e.preventDefault();
        
        ProductService
            .saveProduct(product)
            .then((res)=>{
                console.log("Product Added SuccessFully");
                setmsg("Product Added SuccessFully");
                setProduct({
                    productName:"",
                    description:"",
                    price:"",
                    status:"",
                })
            })
            .catch((error)=>{
                console.log(error);
            })
    }
  return (
    <>
        <div className='container mt-5'>
            <div className="row">
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className="card header fs-3 text-header">
                            Add Product
                        </div>
                        {
                            msg &&
                            <p className='fs-4 text-center text-success'>{msg}</p>
                        }
                        <div className='card-body'>
                            <form onSubmit={(e)=>ProductRegister(e)}>
                                <div className='mb-3'>
                                    <label>Enter Product Name</label>
                                    <input 
                                        type='text' 
                                        name='productName' 
                                        className='form-control'
                                        onChange={(e)=>handleChange(e)}
                                        value={product.productName}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Product Description</label>
                                    <input 
                                        type='text' 
                                        name='description' 
                                        className='form-control'
                                        onChange={(e)=>handleChange(e)}
                                        value={product.description}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Product Price</label>
                                    <input 
                                        type='text' 
                                        name='price' 
                                        className='form-control'
                                        onChange={(e)=>handleChange(e)}
                                        value={product.price}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Product Status</label>
                                    <input 
                                        type='text' 
                                        name='status' 
                                        className='form-control'
                                        onChange={(e)=>handleChange(e)}
                                        value={product.status}
                                    />
                                </div>
                                <button className='btn btn-primary col-md-12'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddProduct
