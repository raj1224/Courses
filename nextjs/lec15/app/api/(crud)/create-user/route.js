import { NextResponse } from "next/server";
import { users } from "../get/route.js";     

export async function POST(request){

    try {
        const {name,email}=await request.json();

        if(!name || !email){
            return NextResponse.json({
                succes:false,
                error:"name and email are required"
            }, 
            { status: 400 })
        }

        const emailExists=users.find((user)=>user.email===email);
        if(emailExists){
            return NextResponse.json({
                success:false,
                error:"email already exists"
            },
            { status: 400 });
        }
        // heleleodfa
        
        const newUser={
            id:users.length+1,
            name,
            email
        };
        
        users.push(newUser);
        return NextResponse.json({
            success:true,
            data:users,
            message:"user created successfully"
        },
        { status: 201 });
    
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:"failed to create user"
        }, { status: 500 }) 
    }
}