import ApiProduct from "./ApiProduct";
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ankara2 from "../images1/ankara2.jpg"



export default function Product() {
    const [prod, setProd] = useState({ products: [] });

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setProd(json))
    }, [])

    // let arr = [];
    // for (let i in Product.images) {
    //     arr.push(Product.images[i]);
    // }


    return (
        <div>

            <div className="row" style={{ backgroundColor: "#1c100f" }}>
                {prod.products.map((product) => (
                    <div className="col-sm-4">
                        <div className="text-white card my-3 mx-5" style={{ width: "18rem", backgroundColor: "#1c100f", border: "0.5px solid #cccccc" }}>
                            <img src={product.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href={`/product/${product.id}`} className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
    //     <div>
    //         <div className="row">
    //             <div className="col-sm-4">
    //                 {
    //                     arr.map((v) => (<img src={v} style={{ width: "400px" }} alt="" />)
    //                     )}
    //             </div>
    //         </div>


    //     </div>



}

