'use server'

import { prisma } from "@/lib/db"

export const seedDb=async()=>{
    await prisma.post.createMany({
        data:[
            {title:"hello Prisma"},
            {title:"hello orm"},
            {title:"hello postgreas"}
        ]
    })
    console.log('[seed] data seeded succesfuully')
}

export const createPost=async ()=>{
    const post= await prisma.post.create({
        data:{
            title:title,
            description:description,

        }
    })
    return {
        success:true,
        data:post
    }
}