
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight uppercase mb-6">About D-Co Management</h1>
           <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
             A tradition of excellence in tax preparation and bookkeeping services for the Mississauga community.
           </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <img 
                    src="https://images.unsplash.com/photo-1600880210830-80b41c2d2d54?auto=format&fit=crop&q=80&w=800" 
                    alt="Our Studio" 
                    className="rounded-3xl shadow-lg border border-blue-50"
                 />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-blue-900 mb-8 uppercase tracking-tight">Professional Integrity</h2>
                 <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                    <p>
                      Since our inception, D-Co Management Services has been driven by a singular goal: to provide residents and business owners with the financial clarity they need to succeed.
                    </p>
                    <p>
                      We believe that professional bookkeeping is more than just data entry—it's about building a foundation for growth. Our team works tirelessly to ensure every tax return is optimized and every ledger is perfectly balanced.
                    </p>
                    <div className="pt-8 grid grid-cols-2 gap-8 border-t border-blue-50">
                       <div>
                          <h4 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Transparency</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">We provide clear expectations and direct communication with every client.</p>
                       </div>
                       <div>
                          <h4 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Accuracy</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">Our rigorous review process ensures 100% compliance with CRA standards.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-blue-50/50 py-24 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                 <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                 <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Years in Practice</p>
              </div>
              <div>
                 <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
                 <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Clients Served</p>
              </div>
              <div>
                 <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                 <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">CRA Compliance</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
