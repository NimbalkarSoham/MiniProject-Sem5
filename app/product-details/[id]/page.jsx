"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'
//import '@app/product-details/product.css'

const page = ({ params }) => {

    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`/api/product/${params.id}`, {
                method: 'GET',
            });

            const data = await response.json();

            setMyOrder(data);
            //console.log(myOrder);
        };

        if (params.id) fetchOrder();
    }, [params.id]);



    return (
        <div>
            <div className="product-card">
                <div className="product-image">
                    <img src={myOrder.image || ''} alt="Product image" width="100000"/>
                </div>
                <div className="product-info">
                    <h3><strong>{myOrder.name || ''}</strong></h3><br/>
                    <p><strong>Description: </strong></p>
                    <p>{myOrder.description || ''}</p>
                    <div className="product-details">
                        <ul>
                            <li><strong>Owner:</strong> {myOrder.creator || ''}</li>
                            <li><strong>Rate:</strong> {myOrder.price || ''}/Day</li>
                            <li><strong>Type: </strong>{myOrder.type || ''}</li>
                            <li><strong>Location:</strong> {myOrder.location || ''}</li>
                            <li><strong>Contact:</strong> {myOrder.contact || ''}</li>
                        </ul>
                    </div>
                    <div className="product-actions">
                        <button className="btn explore_btn">Proceed to pay</button>
                    </div>
                </div>
            </div>

            {/*YEH NICHE KA PHELE WALA CODE HAI*/}

            {/* <div className="card">
                <div className="content">
                    <label htmlFor="">Name: </label>
                    <input className="input" type="text" placeholder={myOrder.name || ''} disabled/><br />
                    <label htmlFor="">Description: </label>
                    <input className="input" type="text" placeholder={myOrder.description || ''} disabled/><br />
                    <label htmlFor="">Owner: </label>
                    <input className="input" type="text" placeholder={myOrder.id || ''} disabled/><br />
                    <label htmlFor="">Rate: </label>
                    <input className="input" type="text" placeholder={myOrder.price || ''} disabled/><br />
                    <label htmlFor="">Type: </label>
                    <input className="input" type="text" placeholder={myOrder.type || ''} disabled/><br />
                    <label htmlFor="">Location: </label>
                    <input className="input" type="text" placeholder={myOrder.location || ''} disabled/><br />
                    <label htmlFor="">Contact: </label>
                    <input className="input" type="text" placeholder={myOrder.contact || ''} disabled/><br />
                </div>
            </div> */}
        </div>

    )
}

export default page