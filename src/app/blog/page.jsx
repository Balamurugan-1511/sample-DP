import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const blogPosts = [{
  title: 'How to Start a Career in AI in Singapore: A Complete 2025 Guide',
  category: 'Career Guide',
  date: 'January 15, 2025',
  excerpt: 'Singapore is one of the best places in the world to build an AI career. Here\'s everything you need to know about breaking into the field.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_176e3b618-1766381641204.png",
  alt: 'AI career guide showing neural network visualization with career path arrows',
  href: '/blog/ai-career-singapore-guide'
}, {
  title: 'GPT-4o vs Claude 3.5 vs Gemini 1.5: Which LLM Should You Use?',
  category: 'Artificial Intelligence',
  date: 'January 10, 2025',
  excerpt: 'A comprehensive comparison of the top large language models in 2025, with benchmarks and practical use case recommendations.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1812c8ac3-1783933499611.png",
  alt: 'Comparison of large language models GPT Claude and Gemini on a digital interface',
  href: '/blog/llm-comparison-2025'
}, {
  title: 'Singapore\'s AI Governance Framework: What You Need to Know',
  category: 'AI Policy',
  date: 'January 5, 2025',
  excerpt: 'IMDA\'s Model AI Governance Framework explained for business leaders and AI practitioners operating in Singapore.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0cd917b-1783933503817.png",
  alt: 'Singapore government building representing AI governance and policy framework',
  href: '/blog/singapore-ai-governance'
}, {
  title: 'RAG vs Fine-tuning: When to Use Each Approach',
  category: 'Machine Learning',
  date: 'December 28, 2024',
  excerpt: 'A practical guide to choosing between Retrieval-Augmented Generation and fine-tuning for your LLM application.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_183666888-1783933500933.png",
  alt: 'Machine learning engineer comparing RAG and fine-tuning approaches on a whiteboard',
  href: '/blog/rag-vs-finetuning'
}, {
  title: 'Top 10 AI Skills Singapore Employers Are Looking For in 2025',
  category: 'Career Guide',
  date: 'December 20, 2024',
  excerpt: 'Based on analysis of 500+ job postings from Singapore\'s top tech companies, here are the AI skills in highest demand.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f82b08b0-1783933502003.png",
  alt: 'Students learning AI skills in a Singapore technology training classroom',
  href: '/blog/top-ai-skills-singapore-2025'
}, {
  title: 'Building Your First RAG Application with LangChain and Pinecone',
  category: 'Tutorial',
  date: 'December 15, 2024',
  excerpt: 'Step-by-step tutorial to build a production-ready RAG system that answers questions from your own documents.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_113433f4c-1783933501457.png",
  alt: 'Developer building a RAG application with LangChain showing code on screen',
  href: '/blog/rag-langchain-pinecone-tutorial'
}];
const categories = ['All', 'Artificial Intelligence', 'Machine Learning', 'Career Guide', 'Tutorial', 'AI Policy'];
export default function BlogPage() {
  return <div className="font-body text-bodyText">
      <Header />
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-white text-4xl lg:text-5xl mb-4">AI & Tech Blog</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and career guides from Singapore\'s AI training experts.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 font-body text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            {categories?.map((cat, i) => <button key={cat} className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${i === 0 ? 'bg-accentBlue text-white' : 'bg-gray-100 text-bodyText hover:bg-accentBlue hover:text-white'}`}>
              
                {cat}
              </button>)}
          </div>
        </div>
      </section>
      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts?.map(post => <article key={post?.href} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative overflow-hidden">
                  <img src={post?.image} alt={post?.alt} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                
                  <span className="absolute top-3 left-3 bg-accentBlue text-white text-xs font-body font-medium px-4 py-1.5 rounded-full">
                    {post?.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-bodyText font-body mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post?.date}
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-base leading-snug mb-3 group-hover:text-accentBlue transition-colors line-clamp-2">
                    {post?.title}
                  </h3>
                  <p className="font-body text-bodyText text-sm leading-relaxed line-clamp-3 mb-4">{post?.excerpt}</p>
                  <Link href={post?.href} className="font-body font-semibold text-accentBlue text-sm hover:text-navy transition-colors">
                    Read More →
                  </Link>
                </div>
              </article>)}
          </div>
        </div>
      </section>
      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-semibold text-navy text-2xl mb-3">Stay Updated with AI Insights</h2>
          <p className="font-body text-bodyText text-base mb-6">Subscribe to our newsletter for weekly AI tutorials, career tips, and industry news from Singapore.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-accentBlue" />
            
            <button className="bg-accentBlue text-white font-body font-semibold px-6 py-3 rounded-lg hover:bg-navy transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}
