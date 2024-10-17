"use client"

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Just got clicked");
    router.push("/admin")
  }
  return (
    <div>
      <p>This is the homepage</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
