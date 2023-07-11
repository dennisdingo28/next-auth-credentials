"use client"
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <main className="h-[100vh] bg-[#090909]">
      <button onClick={()=>signIn()} className="text-slate-300 bg-slate-700">sign in</button>
    </main>
  )
}
