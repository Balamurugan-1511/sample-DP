import React from 'react';
import Link from 'next/link';
const navLinks = [{
  label: 'About Us',
  href: '/about'
}, {
  label: 'AI Courses',
  href: '/ai-courses',
  hasDropdown: true
}, {
  label: 'Corporate Training',
  href: '/corporate-training'
}, {
  label: 'Blog',
  href: '/blog'
}, {
  label: 'Careers',
  href: '/careers'
}, {
  label: 'Contact Us',
  href: '/contact'
}];
const aiCourseLinks = [{
  label: 'AI Fundamentals',
  href: '/ai-courses/ai-fundamentals'
}, {
  label: 'Machine Learning',
  href: '/ai-courses/machine-learning'
}, {
  label: 'Deep Learning & Neural Networks',
  href: '/ai-courses/deep-learning'
}, {
  label: 'Generative AI & LLMs',
  href: '/ai-courses/generative-ai'
}, {
  label: 'AI for Business Leaders',
  href: '/ai-courses/ai-for-business'
}, {
  label: 'NLP & Conversational AI',
  href: '/ai-courses/nlp'
}];
export default function Header() {
  return <>
      {/* Top Bar */}
      <div className="bg-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@skandaplus.sg" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@skandaplus.sg
            </a>
            <a href="tel:+6591234567" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +65 9123 4567
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-accentBlue transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-accentBlue transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-accentBlue transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#082A5E" /></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Main Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-heading font-bold text-lg">S+</span>
              </div>
              <div>
                <span className="font-heading font-bold text-navy text-xl">Skanda</span>
                <span className="font-heading font-bold text-accentBlue text-xl">plus</span>
                <div className="text-xs text-bodyText font-body">Singapore</div>
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks?.map(link => <div key={link?.label} className="relative group">
                <Link href={link?.href} className="flex items-center gap-1 px-3 py-2 text-sm font-body font-semibold text-darkText hover:text-accentBlue transition-colors">
                  {link?.label}
                  {link?.hasDropdown && <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>}
                </Link>
                {link?.hasDropdown && <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                    {aiCourseLinks?.map(sub => <Link key={sub?.href} href={sub?.href} className="block px-4 py-2.5 text-sm font-body text-darkText hover:bg-blue-50 hover:text-accentBlue transition-colors">
                        {sub?.label}
                      </Link>)}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link href="/ai-courses" className="block px-4 py-2.5 text-sm font-body font-semibold text-accentBlue hover:bg-blue-50 transition-colors">
                        View All AI Courses →
                      </Link>
                    </div>
                  </div>}
              </div>)}
          </nav>

          {/* CTA Button */}
          <Link href="/contact" className="hidden lg:flex items-center gap-2 bg-accentBlue text-white px-6 py-3 rounded font-body font-semibold text-sm hover:bg-navy transition-colors duration-200">
            CONTACT
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-navy" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    </>;
}
