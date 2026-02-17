import React from 'react'

export async function generateMetadata({params}) {
    const {slug}=await params;
    return{
        title:`Blog ${slug}`,
        description:'this is a blog page',
    }
}

const blog = async({params}) => {
    const {slug}=await params;
  return (
    <div>Blog {slug}</div>
  )
}

export default blog

// static vs dynamic
// cannot mix static and dynamic for same route.
// serer components only