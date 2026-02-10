import { NextResponse } from "next/server";

export const users=[
    {
        id:1,
        name:"JohnDoe",
        email:"john@example.com"
    },
    {
        id:2,
        name:"Jane Smith",
        email:"jane@example.com"
    },
    {
        id:3,
        name:"Alice Johnson",
        email:"alice@example.com"
    }
]


// SIMPLE API ROUTE EXAMPLE
// export async function GET(request) {
//     return NextResponse.json({
//         data:"hello world"
//     })
// }

// GET DATA FROM A EXTERNAL API EXAMPLE
export async function GET(request) {
    try {
        // query parameters
        const searchParams= request.nextUrl.searchParams;
        const name= searchParams.get("name")// single value;
        const age= searchParams.get("age")// single value;

        let filteredUsers=users
        // console.log(name,age)
        if(age){
            filteredUsers=filteredUsers.filter((user)=>user.age===Number(age))
        }
        if(name){
            filteredUsers=filteredUsers.filter((user)=>user.name.toLowerCase.includes(name.toLowerCase()))
        }

        return NextResponse.json({
            success:true,
            data:users,
            total:users.length,
            data2:filteredUsers,
            total2:filteredUsers.length
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:"failed to get data"
        }, { status: 500 })
    }
}