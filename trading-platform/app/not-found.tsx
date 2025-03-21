import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-zinc-900 to-blue-900 text-white p-4">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
        404 - Page Not Found
      </h2>
      <p className="mb-8 text-white/70">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all duration-300 text-white font-bold rounded-md"
      >
        Return Home
      </Link>
    </div>
  )
}

