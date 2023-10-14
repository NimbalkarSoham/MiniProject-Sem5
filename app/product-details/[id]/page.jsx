"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'
import { checkout } from "@lib/checkout";
// import '@app/product-details/product.css'

const page = ({ params }) => {
    const {data: session} = useSession();
    const router = useRouter();

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

    const handleGoBack = () => {
        window.history.back(); // This will go back to the previous page
    };

    const handleVerification = async() => {
        debugger;
        try {
            console.log(params.id);
            const price = document.getElementById("price_string").value;
            const response = await fetch(`/api/product/${params.id}`,{
                method: 'PATCH',
                body: JSON.stringify({
                    price: price,
                })
            });

            if(response.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleCheckout = async () => {
        debugger;
        console.log(myOrder.brand);
        const shipping_address = document.getElementById("shipping_address").value;
        try {
            await fetch(`/api/product/${params.id}`,{
                method: 'DELETE',
            });

            const response = await fetch(`/api/order/new`,{
                method:'POST',
                body: JSON.stringify({
                    owner:myOrder.creator, 
                    customer:session.user.id, 
                    product:myOrder._id, 
                    shippingAddress:shipping_address,  
                    rate:myOrder.price
                })
            });

            if(response.ok){
                await checkout({
                    lineItems:[{price:myOrder.brand, quantity:1}]
                });
            }
        } catch (error) {
            
        }
        

        

        

    }

    return (
        <div>
            <div className="product-card">
                <div className="product-nav">
                    <button type="button" className="close-button btn btn-danger" onClick={handleGoBack} 
                    >X</button>
                </div>
                <div className="product-image">
                    <img src={myOrder.image || ''} alt="Product image" />
                </div>
                <div className="product-info">
                    <h3><strong>{myOrder.name || ''}</strong></h3><br />
                    <p><strong>Description: </strong></p>
                    <p>{myOrder.description || ''}</p>
                    <div className="product-details">
                        <ul>
                            <li><strong>Owner:</strong> {myOrder.creator || ''}</li>
                            <li><strong>Rate:</strong> {myOrder.price || ''}/Day</li>
                            <li><strong>Type: </strong>{myOrder.type || ''}</li>
                            <li><strong>Location:</strong> {myOrder.location || ''}</li>
                            <li><strong>Contact:</strong> {myOrder.contact || ''}</li>
                            {
                                (session?.user.email=="2021.soham.nimbalkar@ves.ac.in")?(
                                    <>
                                    <li><strong>Enter price-string:</strong></li>
                                    <input type="text" name="price_string" id="price_string" />
                                    </>
                                    
                                ):(<>
                                    <li><strong>Enter Delivery Address:</strong></li>
                                    <input type="text" name="shipping_address" id="shipping_address" />
                                </>)
                            }
                            
                        </ul>
                    </div>
                    <div className="product-actions">
                        {
                            (session?.user.email=="2021.soham.nimbalkar@ves.ac.in")?(
                                <button id="verify-btn" onClick={handleVerification} className="btn explore_btn">Verify</button>
                            ):(<button id="buy-btn" onClick={handleCheckout} className="btn explore_btn">Proceed to pay</button>)
                        }
                        
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