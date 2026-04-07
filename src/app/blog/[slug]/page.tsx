import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  return {
    title: `${post?.title || 'Blog Post'} | Invest Forward`,
    description: post?.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-blue-100 hover:text-white mb-6 inline-block">
            ← Back to Blog
          </Link>
          <div className="space-y-4">
            <span className="inline-block bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <h1 className="text-5xl font-bold">{post.title}</h1>
            <div className="flex items-center space-x-6 text-blue-100">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="prose-lg text-gray-700 mb-12">
              <p>{post.content}</p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>Consider the specific context of your startup when implementing strategies</li>
                <li>Engage with your team throughout the process for buy-in and execution</li>
                <li>Measure progress regularly and adjust your approach as needed</li>
                <li>Don't be afraid to seek expert guidance when facing challenges</li>
              </ul>
            </div>

            <div className="border-t-2 pt-8 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-700">
                  {post.author} is a consultant at Invest Forward with expertise in {post.category.toLowerCase()}. 
                  They've worked with dozens of startups to achieve their growth goals.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Found this helpful?</h2>
          <p className="text-lg text-gray-600 mb-8">Let's discuss how these insights apply to your startup.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(relatedPost => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition h-full cursor-pointer">
                  <p className="text-blue-600 text-sm font-semibold mb-2">{relatedPost.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 text-sm">{relatedPost.author} • {new Date(relatedPost.date).toLocaleDateString('en-UK', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
