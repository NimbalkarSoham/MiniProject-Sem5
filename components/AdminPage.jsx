"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
const AdminPage = () => {
    const [allPosts, setAllPosts] = useState([]);

    const fetchPost = async () => {
        const response = await fetch('/api/product');
        const data = await response.json();
        console.log(data)

        setAllPosts(data);
    }

    useEffect(() => {
      fetchPost();
    }, []);

    
  return (
    <>
        <h1>Products pending for verification</h1>
        <div className='mt-16 prompt_layout mx-5'>
            {allPosts.map((post) => (
                post.isFeatured == false?(
                    <Card
                        key={post._id}
                        post={post}
                        handleEdit={() =>{}}
                        handleDelete={() =>{}}
                    />
                ):(<></>)
            ))}
        </div>
    </>
    
  )
}

export default AdminPage