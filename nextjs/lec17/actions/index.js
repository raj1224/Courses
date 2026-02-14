"use server"

export  async function createUser(fromData) {
        const name= fromData.get("name")
        console.log("creating user",name)
}