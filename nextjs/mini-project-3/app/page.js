import { dbConnect } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  await dbConnect()
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
