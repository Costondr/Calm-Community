import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-calm-dark text-white py-5 px-6 shadow-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-calm-teal flex items-center justify-center text-white font-bold text-lg">C</div>
          <div>
            <div className="font-serif text-xl font-bold tracking-tight leading-none">CALM Community</div>
            <div className="text-xs text-calm-warm mt-0.5">Connecting & Activating Lives with Meaning</div>
          </div>
        </Link>
        <nav className="flex gap-5 text-sm text-gray-300">
          <Link href="/" className="hover:text-calm-warm transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-calm-warm transition-colors">Blog</Link>
        </nav>
      </div>
    </header>
  )
}
