"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'

const page = ({ params }) => {

    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`/product-details/${params.id}`);
            const data = await response.json();

            setMyOrder(data);
        };

        if (params.id) fetchOrder();
    }, [params.id]);



    return (
        <div>
        <label htmlFor="">Name</label>
        <input type="text" value={myOrder.name || ''} /><br />
        <label htmlFor="">Description</label>
        <input type="text" value={myOrder.description || ''} /><br />
        <label htmlFor="">Owner</label>
        <input type="text" value={params.id || ''} /><br />
        <label htmlFor="">Rate</label>
        <input type="text" value={myOrder.price || ''} /><br />
        <label htmlFor="">Type</label>
        <input type="text" value={myOrder.type || ''} /><br />
        <label htmlFor="">Location</label>
        <input type="text" value={myOrder.location || ''} /><br />
        <label htmlFor="">Contact</label>
        <input type="text" value={myOrder.contact || ''} /><br />
    </div>
    )
}

export default page