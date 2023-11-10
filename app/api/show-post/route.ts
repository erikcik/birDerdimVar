import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async () => {
    try {
      const posts = await prisma.post.findMany({
        where: { published: false },
        include: {
          author: {
            select: { name: true },
          },
        },
      });
      return NextResponse.json(posts);
    } catch (error) {
      return NextResponse.json(
        { message: "error happened while fetching the posts " + error },
        { status: 500 }
      );
    }
  };