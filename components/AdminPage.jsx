"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import Link from 'next/link';
const AdminPage = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const fetchUsers = async () => {
        //debugger;
        const response = await fetch('/api/users',{
            method: 'GET',
        });
        const data = await response.json();

        setAllUsers(data);
    }

    const fetchPost = async () => {
        const response = await fetch('/api/product');
        const data = await response.json();
        console.log(data)

        setAllPosts(data);
    }

    useEffect(() => {
      fetchPost();
      fetchUsers();
    }, []);

    
  return (
    <>
        <div className="border-2 px-5 bg-slate-100">
            <h1 className='font-bold text-3xl'>Users Pending for verification</h1>
            <div className="bg">
                {allUsers.map((user) => {
                    debugger;
                    if(user.isVerified=="under-verification"){
                        return (
                            <div className="bg-slate-300 flex flex-row w-fit gap-9 px-4 py-2 rounded-sm">
                                <p className='text-xl'>{user.name}</p>
                                <Link className='text-xl text-blue-700' href={`/profile/${user._id}`}>Verify</Link>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
        <h1>Products pending for verification</h1>
        <div className='mt-16 prompt_layout mx-5'>
            {allPosts.map((post) => (
                post.status == 'not-verified'?(
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