import NotesClient from '@/components/NotesClient';
import dbConnect from '@/lib/db'
import Note from '@/models/Note';
import React from 'react'

async function getNotes() {
  await dbConnect();
  const notes= await Note.find({}).sort({createdAt:-1}).lean()
  // what is the use of lean()?

  return notes.map((note)=>({
    ...note,
    _id:note._id.toString()
  }))
}

const page = async() => {
  const notes=await getNotes()
  console.log(notes)
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Notes App</h1>
      <NotesClient initialNotes={notes}/>
    </div>
  )
}

export default page