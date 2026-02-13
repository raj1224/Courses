"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const PruductIdSlugPage = () => {
    const params=useParams();
    console.log(params)

    const pathname=usePathname();
    console.log(pathname)


  return (
    <div>
        <h1>Product Id:{params.id}</h1>
        <h1>Product Slug:{params.slug}</h1>
    </div>
  )
}

export default PruductIdSlugPage

// USEPARAMS

// extract dynamic route params from the current url

// 1. only works in client com.
// 2. return all dynamic segements as strings.
// 3. nested dynamic routes are flattended into single obj.
// 4. catch all routes [...slug] return an array.

// USEPATHNAME

// return the currentPathname of the url.
// string representing the current path.

// 1. only works in client components.
// 2. useful for active navigation state and conditional rendering.
// 3. does not include query params.
// 4. always starts with /

