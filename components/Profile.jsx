import React from 'react'
import Card from './Card'

const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
  return (
    <section className='w-full'>
     <h1 className='text-left'>{name} profile</h1> 
     <p className='desc text-left'>{desc}</p>
     <p>{JSON.stringify(data)}</p>
     {/* <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <Card
          key={post._id}
          post={post}
          handleEdit={()=> handleEdit && handleEdit(post)}
          handleDelete={()=>handleDelete && handleDelete(post)}
        />
      ))}
    </div> */}
    </section>
  )
}

export default Profile