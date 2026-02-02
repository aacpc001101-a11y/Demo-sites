
import React from 'react';
import { SERVICES } from '../constants';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pb-0">
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-4">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Professional Financial Solutions</h1>
          <p className="text-blue-100/70 mt-4 max-w-xl text-lg font-medium">Dedicated support for individuals and small businesses in Mississauga.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex gap-8 p-10 rounded-3xl border border-blue-50 hover:bg-blue-50/30 transition-all group">
                <div className="text-4xl text-blue-600 flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 tracking-tight uppercase">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Expert Analysis</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> CRA Compliance</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Precision Reporting</li>
                  </ul>
                  <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b-2 border-blue-100 hover:border-blue-600 pb-1 transition-all">
                    Inquire for Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-blue-900 mb-10 tracking-tight uppercase">Why Partner With Us?</h2>
                <div className="space-y-10">
                   <div className="flex items-start gap-6">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wider mb-2">Decades of Expertise</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Over 15 years experience managing Canadian tax files with absolute precision.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-6">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wider mb-2">Modern Technology</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">We utilize top-tier accounting software to ensure your records are secure and accessible.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-6">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wider mb-2">Local Knowledge</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Based in Mississauga, we understand the specific needs of local residents and businesses.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-4 rounded-3xl shadow-xl shadow-blue-100/50">
                <img 
                   src="https://images.unsplash.com/photo-1554224155-169743118234?auto=format&fit=crop&q=80&w=800" 
                   alt="Modern Accounting Office" 
                   className="rounded-2xl"
                />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
