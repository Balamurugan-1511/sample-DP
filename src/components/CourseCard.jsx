import React from 'react';
import Link from 'next/link';
export default function CourseCard({
  title,
  category,
  categoryColor = 'bg-accentBlue',
  description,
  duration,
  level,
  href,
  image,
  alt
}) {
  return <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img src={image} alt={alt} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-3 left-3 ${categoryColor} text-white text-xs font-body font-medium px-4 py-1.5 rounded-full`}>
          {category}
        </span>
      </div>
      <div className="p-5">
        <Link href={href} className="block">
          <h5 className="font-heading font-medium text-navy text-base leading-snug hover:text-accentBlue transition-colors line-clamp-2 mb-3">
            {title}
          </h5>
        </Link>
        <p className="text-bodyText font-body text-sm leading-relaxed line-clamp-2 mb-4">{description}</p>
        <div className="flex items-center justify-between text-xs text-bodyText font-body border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {level}
          </span>
          <Link href={href} className="text-accentBlue font-semibold hover:text-navy transition-colors">
            Learn More →
          </Link>
        </div>
      </div>
    </div>;
}
