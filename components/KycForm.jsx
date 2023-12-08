"use client";
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

const KycForm = () => {

    const {data: session} = useSession();
    const [formInputs, setFormInputs] = useState({
        contact: '',
        address: '',
        aadharNo: 0,
        aadharImage:''
    });

    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(({name}) => name === 'file')
        //console.log(fileInput);
        const formData = new FormData();

        for( const file of fileInput.files ){
            formData.append('file', file);
        }

        formData.append('upload_preset','vtxkm6s0')

        const data = await fetch('https://api.cloudinary.com/v1_1/dcsvvfai3/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());
        //console.log(data);

        
        try {
            const response = await fetch(`api/users/${session?.user.id}/`,{
                method: 'PUT',
                body: JSON.stringify({
                    contact: formInputs.contact,
                    address: formInputs.address,
                    aadharNo: formInputs.aadharNo,
                    aadharImage: data.secure_url,
                })
            })

            if(response.ok){
                location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if(!file) return;

        if(!file.type.includes('image')) {
            return alert('Please upload an image file');
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result;

            setFormInputs({ ...formInputs,aadharImage:result });;
        }
        
    };
  return (
    <section className='flex flex-col items-center'>
        <div className="form-container w-3/4">
            <h1 className='text-2xl font-bold'>Fill your details to continue to app</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className="input flex flex-row">
                    <p>Contact No:</p>
                    <input type="tel" name="phone" id="phone-no" onChange={(e) => setFormInputs({...formInputs, contact:e.target.value})}/>
                </div>
                <div className="input flex flex-row gap-3">
                    <p>Address:</p>
                    <input type="text" name="address" id="address" onChange={(e) => setFormInputs({...formInputs, address:e.target.value})}/>
                </div>
                <div className="input flex flex-row">
                    <p>Aadhar card:</p>
                    <input type="file" name="file" id="aadhar" onChange={handleImageChange}/>
                </div>
                <div className="input flex flex-row gap-3">
                    <p>Aadhar No:</p>
                    <input type="number" name="aadharNo" id="aadharNo" onChange={(e) => setFormInputs({...formInputs, aadharNo:e.target.value})}/>
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>

        </div>
    </section>
  )
}

export default KycForm