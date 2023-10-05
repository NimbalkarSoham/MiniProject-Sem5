"use client"

import React from 'react'
import {useState,useEffect} from 'react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
    const router = useRouter();
    const {data:session}=useSession()
    console.log('Session:', session);
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        const fetchPosts=async()=>{
            const response=await fetch(`/api/users/${session?.user.id}/posts`)
            const data=await response.json()
            console.log(data)
            setPosts(data)
         }
        console.log(posts) 
        if(session?.user.id)fetchPosts()
    },[session?.user.id])
  const handleEdit=()=>{

  } 
  const handleDelete=async()=>{

  } 
  return (
    <Profile
    name="my"
    desc="welcome to your personalized MyProfile page"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile