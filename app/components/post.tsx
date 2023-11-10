"use client";
import PostButton from "./postButton";

type PostProps = {
  id: string;
  title: String;
  content: String;
  authorName: String;
};

export default function Post({ id, title, content, authorName }: PostProps) {
  return (
    <div className="border-2 border-white p-6 mt-6 ">
      <h2> {title}</h2>
      <p> {content}</p>
      <small> Author Name: {authorName}</small>
      <PostButton id={id} />
    </div>
  );
}
