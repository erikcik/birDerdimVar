import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: false },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    // Format the data as needed
    const formattedPosts = posts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      authorName: post.author?.name,
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
