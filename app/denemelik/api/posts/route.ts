import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const body = await request.json();
    const { title, content } = body;

    const result = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          create: {
            name: "bruh",
          },
        },
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error while creating the post " + error },
      { status: 500 }
    );
  }
};
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
