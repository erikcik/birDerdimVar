import { Metadata } from "next";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "posts",
};

export default async function UsersPage() {
  const postData: Promise<Post[]> = getAllPosts();

  const posts = await postData;

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      <br />
      {posts.map((post) => {
        return (
          <>
            <p key={post.id}>
              <Link href={"/deneme/" + post.id}>{post.content}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return <div></div>;
}
