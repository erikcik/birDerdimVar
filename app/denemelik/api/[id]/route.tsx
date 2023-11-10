import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: any) => {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: {
        id: params.id,
      },
      include: {
        author: true,
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const PATCH = async (request: any, { params }: any) => {
  try {
    const body = await request.json();
    const { title, content } = body;

    const { id } = params;

    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    if (!updatePost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatePost);
  } catch (err) {
    return NextResponse.json({ message: "update Error", err }, { status: 500 });
  }
};

export const DELETE = async (request: any, { params }: any) => {
  try {
    const { id } = params;

    await prisma.post.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Post has been deleted");
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
};
