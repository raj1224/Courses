"use client"
import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
    const router=useRouter()
    const handleClick=()=>{
        // router.push("/products")
        // router.replace("/products") // entry history stack clear 
        router.back("/products") //back to previous page.
    }
  return (
    <div>
        <button onClick={handleClick}>
            Go to Products
        </button>
    </div>
  )
}

export default page