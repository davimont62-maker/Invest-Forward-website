import HeroSection from '@/components/HeroSection';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog | Invest Forward',
  description: 'Insights, tips, and best practices for scaling your startup.',
};

export default function Blog() {
  return (
    <>
      <HeroSection
        title="Startup Insights & Resources"
        subtitle="Learn from our expertise in growth strategy, funding, product development, and scaling operations."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-6">Get the latest insights and tips delivered to your inbox monthly.</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
