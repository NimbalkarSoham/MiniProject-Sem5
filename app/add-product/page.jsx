"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateProduct = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [userData, setUserData] = useState({});
  const [post, setPost] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });
  const fetchUser = async () => {
    if (session) {
      const response = await fetch(`/api/users/${session?.user.id}/`);
      const user = await response.json();
      setUserData(user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      return alert("Please upload an image file");
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result;

      setPost({ ...post, image: result });
    };
  };

  const createProduct = async (e) => {
    e.preventDefault();
    
    setSubmitting(true);
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "vtxkm6s0");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dcsvvfai3/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    try {
      if (session) {
        const response = await fetch("api/product/new", {
          method: "POST",
          body: JSON.stringify({
            userId: session?.user.id,
            name: post.name,
            description: post.description,
            price: post.price,
            image: data.secure_url,
            location: post.location,
          }),
        });

        if (response.ok) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <>
      {userData && userData.isVerified === "verified" ? (
        <Form
          type="Create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createProduct}
          handleImageChange={handleImageChange}
        />
      ) : (
        <h4>Account is under verification!</h4>
      )}
    </>
  );
};

export default CreateProduct;
