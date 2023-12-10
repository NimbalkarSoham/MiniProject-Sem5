'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const myOrders = ({ params }) => {

    const [myOrders, setMyOrders] = useState(null)
    const [otpSent, setOtpSent] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
      
        const fetchOrders = async() => {
            debugger;
            const res = await fetch(`/api/users/${params.id}/orders`,{
                method: 'GET',
            })
            const data = await res.json()
            setMyOrders(data)
        }

        if(myOrders == null){
            fetchOrders()
        }
    }, [])

    const handleReturn = async() => {
        var input = document.getElementById("otp");

        if (input.classList.contains("hidden")) {
            input.classList.remove("hidden");
        } else {
            input.classList.add("hidden");
        }
    }

    const sendOtp = async() => {
        debugger;
        setSubmitting(true)
        // Code for sending otp to owner..
        
        setOtpSent(true)
        setSubmitting(false)
    }

    const verifyOTP = async() => {
        debugger;
        setSubmitting(true)
        // Code for Verifying ..
        
        setOtpSent(false)
        setSubmitting(false)
    }
    
  return (
    <div className='flex flex-col items-center'>
        <div className="content flex flex-col gap-3 items-start">
            <div className="head">
                <h1>My Orders</h1>
            </div>
            <div className="list flex flex-col gap-4">
                {myOrders?.map((order) => (
                    <div className="orderCard flex flex-row gap-10 bg-slate-300 p-4 rounded-lg">
                        <div className="img rounded-md">
                            <Image className="img rounded-md" src={order.product.image} width={250} height={100}/>
                        </div>
                        <div className="details flex flex-col items-start gap-1 text-lg">
                            <h1 className='font-light'><span className='font-medium'>Product:&nbsp;</span>{order?.product.name}</h1>
                            <h1 className='font-light'><span className='font-medium'>Rate:&nbsp;</span>{order?.product.price}</h1>
                            <Link href={`../profile/${order.owner._id}`}>
                                <h1 className='font-light'><span className='font-medium'>Owner:&nbsp;</span>{order?.owner.name}</h1>
                            </Link>
                            <h1 className='font-light'><span className='font-medium'>Contact:&nbsp;</span>{order?.owner.phone}</h1>
                            <h1 className='font-light'><span className='font-medium'>Ordered on:&nbsp;</span>{order?.createdAt.substring(0,10)}</h1>
                        </div>
                        <div className="return-btn">
                            <button className='green1 text-white px-3 py-2' onClick={handleReturn}>Return</button>
                            <div id='otp' className="otp hidden"> {/* Is div ke andar form bana. */}
                                <input type="text" id='otp-input' className='my-3 w-36 p-1 border-[1px] border-black' placeholder='Enter OTP' />
                                <button className='green1 text-white px-3 py-2 mx-4' id='otp-btn' onClick={otpSent? verifyOTP : sendOtp}>{otpSent?"Verify":"Send OTP"}{submitting?"..":""}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default myOrders