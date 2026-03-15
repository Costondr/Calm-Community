'use client'
import { useState } from 'react'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-calm-dark text-white rounded-2xl p-8 my-10 text-center">
      <h3 className="font-serif text-2xl mb-2 text-calm-warm">Stay Connected</h3>
      <p className="text-gray-300 mb-5 text-sm">
        New posts, community updates, and reminders that you are not alone — straight to your inbox.
      </p>
      {status === 'success' ? (
        <p className="text-calm-teal font-medium">You're in. Welcome to the community. 🌿</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-xl text-calm-text text-sm focus:outline-none focus:ring-2 focus:ring-calm-teal"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-calm-teal text-white rounded-xl text-sm font-medium hover:bg-opacity-90 transition disabled:opacity-60"
          >
            {status === 'loading' ? 'Joining...' : 'Join the Community'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}
