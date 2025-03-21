"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (isLoggedIn) {
      router.push("/trade")
    } else {
      router.push("/login")
    }
  }, [router])

  // Return a loading state instead of null
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="animate-pulse text-xl">Loading...</div>
    </div>
  )
}

