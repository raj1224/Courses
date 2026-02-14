import { createUser } from '@/actions';
import React from 'react'
import { useFormState } from 'react-dom';

const formr = () => {
    const [state,formAction]=useFormState(createUser,{});

  return (
    <form action={formAction} >
               <input name="email" placeholder='Johndoe@gmail.com' />
               <button type='submit'>Submit</button>
               {state.error && <p>{state.error}</p>}
    </form>
  )
}

export default formr