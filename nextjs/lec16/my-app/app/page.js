import Image from "next/image";

// default-everything going to give us fresh data.
// force Cache->Permanent Caching

export default async function Home() {
  // const response=await fetch("http://localhost:3000/api/timer",{
  //   cache:"no-cache"
  //   // cache:"force-cache"
  // });
  // Cache for 10 seconds, the fetch fresh data.
  // const response=await fetch("http://localhost:3000/api/timer",{
  //   next:{revalidate:10}
  //   // cache:"force-cache"
  // });
  // const data= await response.json()

  const [fresh,cached,revalidated]=await Promise.all([
    fetch('http://localhost:3000/api/timer/utc',{
      cache:'no-store'
    }).then(res=>res.json()),
    // Permanently cached
    fetch('http://localhost:3000/api/timer/iso',{
      cache:'force-store'
    }).then(res=>res.json()),
    fetch('http://localhost:3000/api/timer/local',{
      cache:'revalidate:5'
    }).then(res=>res.json()),
  ])
  return (
    // <div >
    //   <h1>Basic Timer (Default Behaviour)</h1>
    //   <p>Time:{data.readable}</p>
    //   <p>Request ID:{data.requestId}</p>
    //   {/* <p>Refresh the page - notice the REqust ID might stay the same!</p> */}
    // </div>

    <div>
      <h1>Timer Comparison</h1>

      <div style={{border:'1px solid red',padding:'10px',margin:'10px'}}>
        <h3>Fresh Timer(no-store)</h3>
        <p>Timer:{fresh.time}</p>
        <p>Request ID:{fresh.requestId}</p>
      </div>
      <div style={{border:'1px solid red',padding:'10px',margin:'10px'}}>
        <h3>Cached Timer(force-cache)</h3>
        <p>Timer:{cached.time}</p>
        <p>Request ID:{cached.requestId}</p>
      </div>
      <div style={{border:'1px solid red',padding:'10px',margin:'10px'}}>
        <h3>5-second Revalidate</h3>
        <p>Timer:{revalidated.time}</p>
        <p>Request ID:{revalidated.requestId}</p>
      </div>
    </div>
    
  );
}
