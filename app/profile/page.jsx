"use client"
import React from 'react'
import {useState,useEffect} from 'react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'
import Link from 'next/link'

const MyProfile = () => {
    const router = useRouter();
    const {data:session}=useSession()
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        const fetchPosts=async()=>{
            const response=await fetch(`/api/users/${session?.user.id}/posts`)
            const data=await response.json()
            setPosts(data)
         }
        if(session?.user.id)fetchPosts()
    },[session?.user.id])
  const handleEdit=()=>{

  } 
  const handleDelete=async()=>{

  } 
  return (
    <>
      <Link href={"/add-product"} className='outline_btn'>Add Product</Link>
      <Profile
        name="my"
        desc="welcome to your personalized MyProfile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
    
  )
}

export default MyProfile