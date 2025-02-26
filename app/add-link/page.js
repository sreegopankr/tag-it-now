"use client";

import { useState } from "react";

import Form from "@components/Form";


const AddLink = () => {
    const [post, setPost] = useState({
      url: "",
      description: "",
      group: "Unsorted",
      tags:[],
      accessibility: "public"
    });

    const createPost = (e) =>{
      e.preventDefault();
      console.log("Post Created")
      console.log(post)
    }
    
  return (
    <div className="flex flex-col items-center justify-center mt-5 w-full">
      <h2 className="text-4xl font-semibold mb-5 blue_gradient">ADD LINK</h2>
      <Form 
        post={post}
        setPost={setPost}
        handleSubmit={createPost}
      />
    </div>
  )
}

export default AddLink