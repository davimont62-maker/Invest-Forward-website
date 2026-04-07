import Link from 'next/link';

interface CaseStudyCardProps {
  id: string;
  title: string;
  company: string;
  industry: string;
  metrics: string;
  excerpt?: string;
}

export default function CaseStudyCard({ id, title, company, industry, metrics, excerpt }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer h-full">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 flex items-center justify-center">
          <span className="text-white text-4xl font-bold opacity-80">{company.charAt(0)}</span>
        </div>
        
        <div className="p-6">
          <p className="text-blue-600 text-sm font-semibold mb-2">{industry}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{company}</p>
          
          <div className="border-t pt-4">
            <p className="text-2xl font-bold text-blue-600">{metrics}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
