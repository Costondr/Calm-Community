import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { marked } from 'marked'
import { format } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SubscribeForm from '@/components/SubscribeForm'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const html = marked(post.content)

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-calm-teal text-sm hover:underline mb-6 block">
        ← Back to blog
      </Link>

      {post.tone && (
        <span className="text-xs uppercase tracking-widest text-calm-teal font-medium mb-3 block">
          {post.tone}
        </span>
      )}

      <h1 className="font-serif text-4xl text-calm-dark mb-4 leading-tight">{post.title}</h1>

      {post.date && (
        <p className="text-sm text-gray-400 mb-8">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </p>
      )}

      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <SubscribeForm />
    </div>
  )
}
