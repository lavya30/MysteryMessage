import Image from "next/image";
import connectToDatabase from "@/lib/db";
export default async function Home() {
  await connectToDatabase();
  return (
    <>
    </>
  );
}
