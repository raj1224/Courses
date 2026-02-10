import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function GET(request) {
    // access request headers
    // const requestHeaders=new Headers(request.headers);
    // const authHeader=requestHeaders.get("Authorization");

    // 2nd. method
    const headerList= await headers()
    const authHeader=headerList.get('Authorization')

    // 
    console.log("Auth Header:", authHeader);
    // return NextResponse.json({
    //     success:true,
    //     data:"Hello world from profile",
    //     authHeader:authHeader
    // })

    // CUSTOM RESPONSE HEADERS
    // return new Response("<h1>Hello World from custom headers response</h1>", {
    //     headers:{
    //         'Content-Type': 'text/html',
    //         'X-Custom-Header': 'My custom header value',
    //     }
    // })

    const response= NextResponse.json({
        data:"Hello world from profile with custom response headers",
    })
    response.headers.set('X-Powered-By-Raj', 'Next.js 15');
    response.headers.set('Cache-Control', 'no-store');
    return response;
}