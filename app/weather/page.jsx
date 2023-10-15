"use client"
import { data } from 'autoprefixer';
import { useSession } from 'next-auth/react'
import React from 'react'

const Weather = () => {
    
    const {data: session} = useSession();
    console.log()
  return (
    <div>Weather at {JSON.stringify(session)}</div>
  )
}

export default Weather