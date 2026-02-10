
export default async function Home(){
  const res=await fetch("http://localhost:3000/api/get");
  const data=await res.json();

  return(
    <div>
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}