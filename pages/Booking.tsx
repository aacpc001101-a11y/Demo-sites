
import React, { useState } from 'react';

export const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-md bg-white p-12 rounded-3xl border border-blue-100 shadow-xl shadow-blue-50">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight uppercase">Request Confirmed</h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            Thank you for reaching out. We have received your booking request and will contact you shortly to confirm your consultation time.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all"
          >
            Return
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-4">Start Your Consultation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight uppercase">Schedule Online</h1>
          <p className="text-slate-500 mt-6 max-w-xl mx-auto font-medium">
            Fill out the details below and our team will get back to you to finalize your session.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white border border-blue-50 p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm font-medium" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm font-medium" placeholder="jane@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Required Service</label>
                <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm font-medium">
                  <option>Personal Tax</option>
                  <option>Business Bookkeeping</option>
                  <option>Estate Planning</option>
                  <option>Financial Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preferred Contact</label>
                <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm font-medium">
                  <option>Phone Call</option>
                  <option>Video Conference</option>
                  <option>Email Response</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Notes (Optional)</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm font-medium" placeholder="Any specific details you'd like us to know?"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">
              Request Booking
            </button>
            <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-widest leading-relaxed">
              * A member of our team will respond within 24 business hours to confirm availability.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};
