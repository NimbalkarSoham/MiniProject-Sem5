"use client";
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Profile = ({ params }) => {

    const {data:session}=useSession();
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchProfile = async() => {

            const postReq = await fetch(`/api/users/${params.id}/posts`,{
                method: 'GET',
            });
            const post = await postReq.json();

            setPosts(post);
            setProfile(post[0].creator);
        }
      if(params.id) fetchProfile();
    }, [params.id])
    

  return (
    <div>
        {profile &&(
            <p>{profile.name}</p>
            // TODO: Now display all data using the posts and profile hooks.
        )}
    </div>
    
  )
}

export default Profile