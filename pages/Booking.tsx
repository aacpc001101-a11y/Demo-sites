import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'personal-tax',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-32 px-4 text-center fade-in">
        <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-xl shadow-blue-200">
          <i className="fa-solid fa-check"></i>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Request Sent!</h1>
        <p className="text-slate-600 mb-8 text-lg">Thank you, {formData.name}. Our team will review your {formData.service.replace('-', ' ')} inquiry and contact you within 24 business hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Consultation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Let's Talk Business.</h1>
          <p className="text-slate-500 max-w-lg mx-auto">Choose a time and service to see how D-Co can streamline your financial life.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-slate-100">
          <div className="lg:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Service Details</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-phone"></i></div>
                  <div>
                    <h4 className="font-bold">Intro Call</h4>
                    <p className="text-slate-400 text-sm">Free 15-minute consultation to assess your needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-shield-halved"></i></div>
                  <div>
                    <h4 className="font-bold">Tax Planning</h4>
                    <p className="text-slate-400 text-sm">Detailed T1 or T3 strategy sessions available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-chart-pie"></i></div>
                  <div>
                    <h4 className="font-bold">Bookkeeping Setup</h4>
                    <p className="text-slate-400 text-sm">Customized accounting workflows for small businesses.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-slate-800 rounded-2xl">
              <p className="text-sm italic text-slate-300">"Efficiency is doing things right; effectiveness is doing the right things." - Peter Drucker</p>
            </div>
          </div>

          <div className="lg:col-span-3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:outline-none transition-all appearance-none"
                >
                  <option value="personal-tax">Personal Tax (T1)</option>
                  <option value="bookkeeping">Monthly Bookkeeping</option>
                  <option value="estate-planning">Estate & Trust Returns (T3)</option>
                  <option value="advisory">Strategic Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Additional Context (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your business or tax situation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
              >
                Send Request <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
