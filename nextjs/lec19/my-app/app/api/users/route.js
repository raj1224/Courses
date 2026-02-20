let users=[
    {id:1,name:"john doe",email:"john@gmail.com"},
    {id:2,name:"sam doe",email:"sam@gmail.com"},
    {id:3,name:"rohna doe",email:"rohna@gmail.com"},
]

export async function GET() {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return Response.json(users)
}

// query-> fetching data...
// mutation-> put,pathc,postin,deleting...

export async function POST(request) {
    const body=await request.json()
    const newUser={
        id:Date.now(),
        name:body.name,
        email:body.email,
    }
    users.push(newUser)
    await new Promise((resolve)=>setTimeout(resolve, 500))
    return Response.json(newUser)
}