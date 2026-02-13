// read and intreact with query params in the current url.

// 1. Dynamic filtering.
// 2. Deep Linking.
// 3. pagination & sorting.
// 4. tags=js& tags=react (Multi value params)

"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const searchParams= useSearchParams()
    console.log(searchParams)
    const query= searchParams.get("q");
    console.log(query);

    const allparams=Array.from(searchParams.entries())
    console.log(allparams);
  return (
    <div>
        <h1> Search result for:{query}</h1>
    </div>
  )
}


export default page