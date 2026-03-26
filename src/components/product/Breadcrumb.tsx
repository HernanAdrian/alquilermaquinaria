import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="w-full bg-neutral-50 border-b border-neutral-200 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center text-xs text-neutral-500">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center">
              {idx > 0 && <span className="text-neutral-300 mx-1.5">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary hover:underline transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
