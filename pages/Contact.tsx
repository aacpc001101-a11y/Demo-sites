
import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight uppercase">Contact Us</h1>
          <p className="text-slate-500 mt-4 font-medium uppercase tracking-widest text-xs">Mississauga, Ontario Office</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-blue-600 font-bold text-xs uppercase tracking-widest">Office Address</h3>
                  <p className="text-slate-800 font-semibold leading-relaxed">
                    {CONTACT_INFO.address}<br />
                    Mississauga, ON L5C 4E5
                  </p>
                  <a 
                    href="https://www.google.com/maps?q=D-Co+Management+Services" 
                    target="_blank"
                    className="inline-block text-blue-600 text-xs font-bold uppercase tracking-wider hover:underline"
                  >
                    View on Map
                  </a>
                </div>

                <div className="space-y-4">
                  <h3 className="text-blue-600 font-bold text-xs uppercase tracking-widest">Phone & Email</h3>
                  <div className="space-y-1">
                    <p className="text-slate-800 font-semibold">{CONTACT_INFO.phone}</p>
                    <p className="text-slate-800 font-semibold">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/50 p-10 rounded-2xl border border-blue-100">
                <h3 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-6">Standard Hours</h3>
                <div className="space-y-3 text-sm font-medium text-slate-600">
                  <div className="flex justify-between border-b border-blue-100 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-blue-900">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold text-blue-900">Appointment Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm shadow-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-8 tracking-tight">Drop us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                    <input className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium">
                    <option>Tax Inquiry</option>
                    <option>Bookkeeping Setup</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
