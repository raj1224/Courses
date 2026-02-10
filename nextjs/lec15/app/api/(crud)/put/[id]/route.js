import { NextResponse } from "next/server";
import { users } from "../../(crud)/get/route";

export async function PUT(request ,{params}) {
    try {
        const {id}=await params
        const userId= parseInt(id)
        const userIndex= users.findIndex(u=>u.id===userId);
        if(userIndex===-1){
            return NextResponse.json({
                success:false,
                error:"user not found"
            }, { status: 404
            })
        }
        const {name,email}=await request.json();

        users[userIndex]={
            id:userId,
            name:name,
            email:email
        }
        return NextResponse.json({
            success:true,
            data:users[userIndex],
            message:"user updated successfully"
        })

    } catch (error) {
        return NextResponse.json({
            success:false,
            error:"failed to update user"
        }, { status: 500 })
    }
}