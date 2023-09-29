'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateProduct = () => {
    const router = useRouter();
    const {data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        name: '',
        description: '',
        price: 0,
        image:''
    });

    const createProduct = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        try {
            const response = await fetch('api/product/new',{
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
                    name: post.name,
                    description: post.description,
                    price: post.price,
                    image: post.image
                })
            })

            if(response.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally{
            setSubmitting(false);
        }
    }
    if(!session?.user){
        return (
            <h1>Please sign in first</h1>
        )
    }
  return (
    <Form 
        type = "Create"
        post = {post}
        setPost = {setPost}
        submitting = {submitting}
        handleSubmit = {createProduct}
    />
  )
}

export default CreateProduct