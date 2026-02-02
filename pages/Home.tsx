
import React from 'react';
import { Page } from '../types';
import { SERVICES } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pb-0">
      {/* Hero Section - Subtle and professional blue */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-0 rounded-l-[200px] blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Trusted in Mississauga
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
                Clear & Accurate <br />
                <span className="text-blue-600">Financial Solutions</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                D-Co Management provides professional tax preparation and bookkeeping designed to give you peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate(Page.BOOKING)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={() => onNavigate(Page.SERVICES)}
                  className="bg-white text-blue-600 border border-blue-100 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
                >
                  Our Services
                </button>
              </div>
              
              <div className="mt-12 flex items-center space-x-8 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-2xl font-bold text-blue-900">15+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">5.0</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Accounting Professional" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white text-sm font-bold uppercase tracking-widest mb-1">CRA Registered</p>
                <p className="text-blue-100 text-xs">Certified Tax Preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - Subtle grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 uppercase tracking-tight">Our Core Services</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-10 rounded-2xl border border-blue-50 hover:border-blue-200 transition-all shadow-sm hover:shadow-md group cursor-pointer"
              >
                <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:underline">
                  Details →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Refined and calm */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <svg className="w-12 h-12 text-blue-100 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3561 14 14.017 12.6609 14.017 11V3H21.017V11H19.017V13C19.017 14.1046 18.1216 15 17.017 15H16.017V18H19.017C20.1216 18 21.017 18.8954 21.017 20V21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8V14H6C4.34315 14 3 12.6609 3 11V3H10V11H8V13C8 14.1046 7.10457 15 6 15H5V18H8C9.10457 18 10 18.8954 10 20V21H3Z" />
          </svg>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-900 italic leading-snug mb-8">
            "Professionalism and accuracy are at the heart of everything we do. We help our clients navigate taxes with confidence."
          </h2>
          <div className="flex items-center justify-center space-x-3">
             <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center font-bold text-blue-600 text-xs">DC</div>
             <span className="font-bold text-slate-800 uppercase tracking-widest text-xs">D-Co Management Team</span>
          </div>
        </div>
      </section>

      {/* CTA section - Soft Blue */}
      <section className="bg-blue-600 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to simplify your taxes?</h2>
          <p className="text-blue-100 mb-10 text-lg font-medium">Join hundreds of Mississauga residents who trust D-Co for their bookkeeping.</p>
          <button 
            onClick={() => onNavigate(Page.BOOKING)}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl"
          >
            Schedule a Free Call
          </button>
        </div>
      </section>
    </div>
  );
};
