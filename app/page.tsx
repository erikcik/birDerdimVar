import Image from "next/image";
import prisma from "@/lib/prisma";
import Post from "./components/post";
import Link from "next/link";

const getPosts = async () => {
  // const res = await import("../app/api/show-post/route");
  // return await (await res.GET()).json();

  const posts = await prisma.post.findMany({
    where: { published: false },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
};
//bruhhsadasdas
//sadas
export default async function Home() {
  const post = await getPosts();
  return (
    <main>
      <div className="">
        <Link href={"/add-post"}>Go to adding post </Link>{" "}
        <Link href={"/deneme/list-all-posts"}>Deneme Mekanı</Link>
        {post.map((postItem: any) => (
          <Post
            key={postItem.id}
            id={postItem.id}
            title={postItem.title}
            content={postItem.content}
            authorName={postItem.author.name}
          />
        ))}
      </div>
    </main>
  );
}
