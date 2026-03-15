import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-calm-dark mb-3">The Calm Voice</h1>
        <p className="text-calm-muted text-base">
          Stories, reflections, and honest conversations about life with T1D.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-calm-muted">No posts yet — check back soon.</p>
      ) : (
        <div className="space-y-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                {post.tone && (
                  <span className="text-xs uppercase tracking-widest text-calm-teal font-medium mb-2 block">
                    {post.tone}
                  </span>
                )}
                <h2 className="font-serif text-xl text-calm-dark group-hover:text-calm-teal transition mb-2">
                  {post.title}
                </h2>
                <p className="text-calm-muted text-sm leading-relaxed">{post.excerpt}</p>
                <p className="text-xs text-gray-400 mt-3">
                  {post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
