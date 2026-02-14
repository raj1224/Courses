import { createUser } from '@/actions'
import React from 'react'

const UserForm = () => {
    // async function createUser(fromData) {
    //     "use server" //
    //     const name= fromData.get("name")
    //     console.log("creating user",name)
    // }
  return (
    <div>
        <form action={createUser} >
            <input name="name" placeholder='John Doe' />
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default UserForm

// what is CSRF Protection
// server only code.
// type safety.

// key features:
// server actions eliminate the api route
// they handle from automatically.
// built-in security.
// simplify the data flow b/w client