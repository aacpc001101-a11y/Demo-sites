
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Providing reliable financial management with a personal touch since day one.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              D-Co Management Services was founded on the belief that financial services should be accessible, transparent, and meticulous. We understand that for many, taxes and bookkeeping are sources of stress. Our mission is to take that burden off your shoulders.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Based in the heart of Mississauga, we have grown from a small local firm to a trusted advisor for clients across Ontario. Whether you are an individual needing a simple T1 return or a small business needing complex monthly reporting, we treat every file with the same high level of care.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Vision</h4>
                  <p className="text-slate-500">To be the most trusted name in personalized financial management for the local community.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Mission</h4>
                  <p className="text-slate-500">Providing clarity, accuracy, and peace of mind through expert accounting and planning.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden sm:block">
              <p className="text-blue-600 font-bold text-2xl">10+ Years</p>
              <p className="text-slate-500 text-sm font-medium">Industry Experience</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Honesty and ethical practice in every calculation and consultation.', icon: 'fa-scale-balanced' },
              { title: 'Accuracy', desc: 'Meticulous attention to detail to ensure zero errors in your filings.', icon: 'fa-bullseye' },
              { title: 'Client-Centric', desc: 'Your financial goals and comfort are our top priority.', icon: 'fa-users' },
              { title: 'Simplicity', desc: 'We translate complex tax laws into simple, actionable advice.', icon: 'fa-leaf' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                <i className={`fa-solid ${v.icon} text-3xl text-blue-600 mb-4`}></i>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
