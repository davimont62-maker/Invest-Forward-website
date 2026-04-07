import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export default function BlogCard({ id, title, slug, excerpt, author, date, category, readTime }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 flex items-center justify-center">
        <span className="text-white text-5xl font-bold opacity-30">{category.charAt(0)}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-gray-500 text-sm">{readTime} min read</span>
        </div>

        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition mb-3 line-clamp-2 cursor-pointer">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-sm text-gray-500">
            <p className="font-semibold text-gray-900">{author}</p>
            <p>{formattedDate}</p>
          </div>
          <Link href={`/blog/${slug}`} className="text-blue-600 hover:text-blue-800 font-semibold">
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
