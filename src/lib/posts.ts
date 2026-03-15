import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tone?: string
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      tone: data.tone || '',
      content,
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '',
    excerpt: data.excerpt || content.slice(0, 160) + '...',
    tone: data.tone || '',
    content,
  }
}
