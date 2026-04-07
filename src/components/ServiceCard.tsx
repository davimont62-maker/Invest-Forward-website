import Link from 'next/link';

interface ServiceCardProps {
  name: string;
  description: string;
  features: string[];
  price: string;
  href?: string;
}

export default function ServiceCard({ name, description, features, price, href = "/contact" }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="border-t pt-6">
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <Link
          href={href}
          className="block text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
