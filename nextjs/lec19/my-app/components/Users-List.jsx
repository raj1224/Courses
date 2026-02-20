"use client"

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

async function fetchUsers() {
    const response=await fetch("/api/users")
    return response.json()
}

const UsersList = () => {
    const {data:users,isLoading,error,isError}=useQuery({
        queryKey:["users"],
        queryFn:fetchUsers
    })
    if(isLoading) return <div className='p-4'>Loading users...</div>
    if(error) return <div className='p-4 text-red-500'>Error: {error.message}</div>
    console.log(users)

  return (
    <Card>
        <CardHeader>
            <CardTitle>Users List(useQuery Example)</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='space-y-2'>
                {
                    users?.map((user)=>(
                        <div key={user.id} className='flex items-center justify-between p-2 border rounded'>
                            <div>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-sm text-muted-foreground'>{user.email}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </CardContent>
    </Card>
  )
}

export default UsersList