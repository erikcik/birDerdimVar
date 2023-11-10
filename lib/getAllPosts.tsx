import prisma from "./prisma";

export default async function getAllPosts() {
  const posts = await prisma.post.findMany({
    where: { published: false },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log(posts);
  const res: any = await posts;

  if (!res.ok) throw new Error("failed to fetch the data");
  return res.json();
}
