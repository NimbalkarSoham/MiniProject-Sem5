import React from 'react'
import Card from './Card'
import Link from 'next/link'

const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
  return (
    <section className='w-full'>
      <div className='flex-center flex-col'>
      <p className='desc text-left text-2xl '>{desc}</p>
        <h1 className='text-left text-2xl font-bold'>{name}</h1>
        
     {/* <p>{JSON.stringify(data)}</p> */}
      </div>
      
      <Link href={"/add-product"} className='outline_btn mx-12 '>Add Product</Link><br/>

     <div className='mt-16 mx-10 prompt_layout'>
      {data.map((post) => (
        <Card
          key={post._id}
          post={post}
          handleEdit={()=> handleEdit && handleEdit(post)}
          handleDelete={()=>handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile