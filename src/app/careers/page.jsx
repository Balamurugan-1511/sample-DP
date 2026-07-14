import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const openPositions = [{
  title: 'Senior AI Instructor',
  type: 'Full-time',
  location: 'Singapore (Hybrid)',
  dept: 'Education',
  desc: 'Lead our advanced AI and ML courses. You\'ll design curriculum, deliver live sessions, and mentor students through their AI journey.',
  requirements: ['5+ years in AI/ML engineering', 'Experience in teaching or training', 'Strong Python and ML framework skills', 'Excellent communication skills']
}, {
  title: 'Curriculum Developer – Generative AI',
  type: 'Full-time',
  location: 'Singapore (Hybrid)',
  dept: 'Education',
  desc: 'Design and develop cutting-edge GenAI course content including hands-on labs, projects, and assessments.',
  requirements: ['3+ years working with LLMs and GenAI', 'Experience with LangChain, RAG, and fine-tuning', 'Strong technical writing skills', 'Passion for education']
}, {
  title: 'Career Placement Specialist',
  type: 'Full-time',
  location: 'Singapore',
  dept: 'Career Services',
  desc: 'Help our graduates land their dream AI jobs. Build relationships with hiring partners and provide career coaching.',
  requirements: ['3+ years in tech recruitment or HR', 'Strong network in Singapore\'s tech ecosystem', 'Excellent interpersonal skills', 'Knowledge of AI industry']
}, {
  title: 'Corporate Training Manager',
  type: 'Full-time',
  location: 'Singapore',
  dept: 'Business Development',
  desc: 'Manage and grow our corporate training business. Work with enterprise clients to design customised AI training programs.',
  requirements: ['5+ years in B2B sales or account management', 'Experience in L&D or training industry', 'Strong presentation skills', 'Understanding of AI/tech landscape']
}];
export default function CareersPage() {
  return <div className="font-body text-bodyText">
      <Header />
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-white text-4xl lg:text-5xl mb-4">Careers at Skandaplus</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl mx-auto">
            Join our mission to democratise AI education in Singapore and Southeast Asia.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 font-body text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
        </div>
      </section>
      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-semibold text-navy text-3xl lg:text-4xl mb-3">
              Why Work at <span className="text-accentBlue">Skandaplus</span>?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 rounded mx-auto mb-4" />
            <p className="font-body text-bodyText text-base max-w-2xl mx-auto">
              We\'re building the future of AI education in Singapore. Join a team that\'s passionate about technology and making a real impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[{
            icon: '🚀',
            title: 'Mission-Driven',
            desc: 'Work on something that genuinely changes people\'s careers and lives.'
          }, {
            icon: '🧠',
            title: 'Learn Continuously',
            desc: 'Access to all our courses, conferences, and learning resources.'
          }, {
            icon: '🌎',
            title: 'Flexible Work',
            desc: 'Hybrid work arrangements and flexible hours to suit your lifestyle.'
          }, {
            icon: '💰',
            title: 'Competitive Pay',
            desc: 'Market-leading salaries plus performance bonuses and equity options.'
          }]?.map(item => <div key={item?.title} className="bg-gray-50 rounded-xl p-7 text-center hover:shadow-card transition-shadow duration-200">
                <div className="text-4xl mb-4">{item?.icon}</div>
                <h3 className="font-heading font-semibold text-navy text-base mb-2">{item?.title}</h3>
                <p className="font-body text-bodyText text-sm leading-relaxed">{item?.desc}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-semibold text-navy text-3xl lg:text-4xl mb-3">
              Open <span className="text-accentBlue">Positions</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 rounded mx-auto" />
          </div>
          <div className="space-y-5">
            {openPositions?.map(job => <div key={job?.title} className="bg-white rounded-xl p-7 shadow-card hover:shadow-cardHover transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading font-semibold text-navy text-lg">{job?.title}</h3>
                      <span className="bg-accentBlue/10 text-accentBlue text-xs font-body font-medium px-3 py-1 rounded-full">{job?.dept}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="flex items-center gap-1.5 font-body text-bodyText text-sm">
                        <svg className="w-4 h-4 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job?.type}
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-bodyText text-sm">
                        <svg className="w-4 h-4 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job?.location}
                      </span>
                    </div>
                    <p className="font-body text-bodyText text-sm leading-relaxed mb-4">{job?.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job?.requirements?.map(req => <span key={req} className="bg-gray-100 text-bodyText text-xs font-body px-3 py-1 rounded-full">{req}</span>)}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-accentBlue text-white font-body font-semibold px-6 py-3 rounded hover:bg-navy transition-colors">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* No Position CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-semibold text-navy text-2xl mb-3">Don\'t See a Suitable Role?</h2>
          <p className="font-body text-bodyText text-base mb-6">
            We\'re always looking for talented people who are passionate about AI education. Send us your CV and we\'ll keep you in mind for future opportunities.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accentBlue text-white font-body font-semibold px-7 py-4 rounded hover:bg-navy transition-colors">
            Send Your CV
          </Link>
        </div>
      </section>
      <Footer />
    </div>;
}
