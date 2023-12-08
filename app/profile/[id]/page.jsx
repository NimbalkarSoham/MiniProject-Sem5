"use client";
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Profile = ({ params }) => {

    const {data:session}=useSession();
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchProfile = async() => {
          debugger;


          const postReq = await fetch(`/api/users/${params.id}/posts`,{
              method: 'GET',
          });
          const post = await postReq.json();

          const userReq = await fetch(`/api/users/${params.id}`);
          const user = await userReq.json();

          setPosts(post);
          setProfile(user);
        }
      if(params.id) fetchProfile();
    }, [params.id])
    

  return (
    <div className='flex flex-col items-center'>
        {profile &&(
            // TODO: Now display all data using the posts and profile hooks.
            <div className="profilecard flex flex-row gap-10 p-6 bg-slate-300">
              <div className="img">
                <Image src={profile.AadharCard} width={300} height={300} alt='img'/>
              </div>
              <div className="details flex flex-col">
                <p>Name: {profile.name}</p>
                <p>Contact: {profile.phone}</p>
                <p>Address: {profile.street}</p>
                <p>Aadhar No: {profile.AadharNo}</p>
                {session?.user.email == "2021.soham.nimbalkar@ves.ac.in" ? (
                  <button
                    id="verify-btn"
                    onClick={()=>{}}
                    className="btn explore_btn"
                  >
                    Verify
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
        )}
    </div>  
  )
}

export default Profile