import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import SubscribeForm from '@/components/SubscribeForm'
import { format } from 'date-fns'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="font-serif text-4xl sm:text-5xl text-calm-dark mb-4 leading-tight">
          You are more than<br />a number.
        </h1>
        <p className="text-calm-muted text-lg max-w-xl mx-auto leading-relaxed">
          CALM Community is a peer space for people living with T1D — and the people who love them.
          Real talk. Real support. No toxic positivity.
        </p>
        <Link
          href="/blog"
          className="inline-block mt-6 px-7 py-3 bg-calm-teal text-white rounded-xl text-sm font-medium hover:bg-opacity-90 transition"
        >
          Read the Blog
        </Link>
      </div>

      {/* Recent Posts */}
      {posts.length > 0 && (
        <section className="mb-12">
          <h2 className="font-serif text-2xl text-calm-dark mb-6">Recent Posts</h2>
          <div className="space-y-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  {post.tone && (
                    <span className="text-xs uppercase tracking-widest text-calm-teal font-medium mb-2 block">
                      {post.tone}
                    </span>
                  )}
                  <h3 className="font-serif text-xl text-calm-dark group-hover:text-calm-teal transition mb-2">
                    {post.title}
                  </h3>
                  <p className="text-calm-muted text-sm leading-relaxed">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-3">
                    {post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}
                  </p>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-calm-teal text-sm font-medium hover:underline">
              View all posts →
            </Link>
          </div>
        </section>
      )}

      <SubscribeForm />
    </div>
  )
}
