import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ankara2 from "../images1/ankara2.jpg"

export default function ApiProduct() {
    const [Prod, setProd] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => setProd(json))
    }, [])

    let arr = [];
    for (let i in Prod.images) {
        arr.push(Prod.images[i]);
    }


    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${ankara2})`,
                    height: "200px",
                    marginTop: "-100px",
                }}
            ></div>
            <div className="row">

                <div className="col-sm-4">
                    {arr.map((v) => (
                        <img style={{ width: "200px", height: "200px" }} src={v} alt="" />
                    ))}

                </div>

                <div className="col-sm-6 ms-5">
                    <h5>{Prod.title}</h5>
                    <p>{Prod.description}</p>
                    <i>${Prod.price}</i>
                </div>
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