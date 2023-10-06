"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Card = ({ key, post, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="post_card">
      <Link href={`/product-details/${post._id}`}>
        
          <div className="flex-col flex justify-start items-center gap-3 cursor-pointer">
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                <b>{post.name}</b>
              </h3>
            </div>
            <div className="img">
              <Image
                src={post.image}
                alt="product_image"
                width={400}
                height={400}
                className=" object-contain product-image"
              />
            </div>
            <div className="description">
              <p><b>Description:</b> {post.description}</p>
              <p><b>Rate: </b>{post.price}</p>
            </div>

          </div>
        {session?.user.id === post.creator && pathName === "/profile" && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm text-lime-600 cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm text-red-700 cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
