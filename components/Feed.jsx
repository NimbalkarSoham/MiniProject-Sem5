"use client";
import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'


const Feed = () => {
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
    <div className='mt-16 prompt_layout mx-5'>
      {allPosts.map((post) => (
        post.isFeatured == true?(
          <Card
            key={post._id}
            post={post}
            handleEdit={() =>{}}
            handleDelete={() =>{}}
          />
        ):(
          <></>
        )
      ))}
    </div>
  )
}

export default Feed