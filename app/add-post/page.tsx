"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
type postType = {
  title: string;
  content: string;
};

export default function AddPost() {
  const [post, setPost] = useState<postType>({ title: "", content: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submiting Post", post);
    try {
      fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
    } catch (error) {
      console.log(error);
    }

    setPost({ title: "", content: "" });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {" "}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="bg-gray-500 "
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            className="bg-gray-500"
          />
        </div>
        <button type="submit">Submitt Post</button>
      </form>
    </div>
  );
}
