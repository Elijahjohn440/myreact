import React from "react"
import { useState, useEffect } from "react"

export default function Blog() {
    const [Blog, setBlog] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setBlog(data))
    }, [])




    return (
        <div className="text-white row" style={{ backgroundColor: "#1c100f" }}>>
            {Blog.map((product) => (
                <div className="mt-5 col-sm-4" key={product.id}>
                    <div className="text-white card" style={{ width: "18rem", backgroundColor: "#1c100f", border: "0.5px solid #cccccc" }}>
                        <img src={product.image} className="mt-5 card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href={`/Blog/${product.id}`} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))
            }


        </div >
    )
}