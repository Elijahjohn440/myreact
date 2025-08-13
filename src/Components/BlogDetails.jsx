import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const [Blog, setBlog] = useState(0)
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setBlog(data))
    }, [])




    return (
        <div className="text-white row" style={{ backgroundColor: "#1c100f" }}>
            <div className="mt-5 col-sm-4">
                <img src={Blog.image}
                    alt={Blog.title}
                    className="img-thumbnail" style={{ backgroundColor: "#1c100f" }} />
            </div>

            <div className="mt-5 col-sm-6">
                <h5>{Blog.title}</h5>
                <p>{Blog.description}</p>
                <i>{Blog.category}</i>
                <p>${Blog.price}</p>
                {Blog.rating && <p>rating:{Blog.rating.rate}</p>}
                {Blog.rating && <p>Count:{Blog.rating.count}</p>}

            </div>
        </div>

    )
}