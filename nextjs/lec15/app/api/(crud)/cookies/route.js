// Cookies:- small piece of data stored in the browser and automatically sent back with every request
//  to the same server

import {cookies} from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // const theme = request.cookies.get('theme');

    const cookieStore=await cookies();
    // const resultsPerPage=cookieStore.get('resultsPerPage');

    cookieStore.set('score','100');
    cookieStore.delete('score');


    console.log("cookie", resultsPerPage);

    // return new Response("setting cookies",{
    //     headers:{

    //         // 'Set-Cookie':'theme=dark'
    //         "Set-Cookie":"resultsPerPage=20"
    //     }
    // })
    return NextResponse.json({
        message:'Cookie set!'
    })
}