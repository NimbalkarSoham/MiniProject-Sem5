"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'

const page = ({ params }) => {

    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`/api/product/${params.id}`,{
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
        <label htmlFor="">Name</label>
        <input type="text" placeholder={myOrder.name || ''} /><br />
        <label htmlFor="">Description</label>
        <input type="text" placeholder={myOrder.description || ''} /><br />
        <label htmlFor="">Owner</label>
        <input type="text" placeholder={myOrder.id || ''} /><br />
        <label htmlFor="">Rate</label>
        <input type="text" placeholder={myOrder.price || ''} /><br />
        <label htmlFor="">Type</label>
        <input type="text" placeholder={myOrder.type || ''} /><br />
        <label htmlFor="">Location</label>
        <input type="text" placeholder={myOrder.location || ''} /><br />
        <label htmlFor="">Contact</label>
        <input type="text" placeholder={myOrder.contact || ''} /><br />
    </div>
    )
}

export default page