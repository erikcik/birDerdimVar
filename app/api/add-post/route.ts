import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(request : any) {
    const res = await request.json() //parsing the incoming request from its json body
    const {title, content} = res;
    console.log({res}) // for debugging pruposes 

    const result = await prisma.post.create({
        data: {
            title,
            content,
            author: {
                create: {
                    name: "ryan"
                }
            }
        }
    })
    return NextResponse.json({result}) // returns a JSON response back to the client
}