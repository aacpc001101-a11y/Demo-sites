
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=2000"
            alt="Financial management"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Precision in Numbers.<br />
              <span className="text-blue-500">Clarity in Planning.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              D-Co Management Services offers expert bookkeeping and personal tax solutions tailored to your unique financial landscape. Based in Mississauga, serving you anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all text-center">
                Book a Consultation
              </Link>
              <Link to="/services" className="border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-24 items-center opacity-60">
          <div className="flex items-center gap-2"><i className="fa-solid fa-check-double text-blue-600"></i> <span className="font-semibold uppercase tracking-widest text-xs">Accurate Reporting</span></div>
          <div className="flex items-center gap-2"><i className="fa-solid fa-shield-halved text-blue-600"></i> <span className="font-semibold uppercase tracking-widest text-xs">CRA Compliance</span></div>
          <div className="flex items-center gap-2"><i className="fa-solid fa-clock text-blue-600"></i> <span className="font-semibold uppercase tracking-widest text-xs">Timely Filings</span></div>
          <div className="flex items-center gap-2"><i className="fa-solid fa-handshake text-blue-600"></i> <span className="font-semibold uppercase tracking-widest text-xs">Personalized Care</span></div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Serve You</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                <i className="fa-solid fa-calculator"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Tax (T1)</h3>
              <p className="text-slate-600 mb-6">Maximized returns through deep understanding of deductible expenses and tax credits tailored to your situation.</p>
              <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                <i className="fa-solid fa-book"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Bookkeeping</h3>
              <p className="text-slate-600 mb-6">Meticulous organization of your records. We turn your shoebox of receipts into a clear financial roadmap.</p>
              <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                <i className="fa-solid fa-house-chimney-window"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Estate Planning</h3>
              <p className="text-slate-600 mb-6">Preserving your legacy through tax-efficient estate filings and clear bookkeeping for trusts and beneficiaries.</p>
              <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">Client Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="italic text-lg text-slate-600 p-8 border-l-4 border-blue-600 bg-slate-50">
              "Professional, timely, and very knowledgeable. They made my tax season stress-free for the first time in years."
              <div className="not-italic mt-4 font-bold text-slate-900 text-sm">- Google Reviewer</div>
            </div>
            <div className="italic text-lg text-slate-600 p-8 border-l-4 border-blue-600 bg-slate-50">
              "Excellent attention to detail with our business bookkeeping. Highly recommend for any small business owner."
              <div className="not-italic mt-4 font-bold text-slate-900 text-sm">- Local Entrepreneur</div>
            </div>
            <div className="italic text-lg text-slate-600 p-8 border-l-4 border-blue-600 bg-slate-50 lg:hidden xl:block">
              "D-Co Management helped us navigate a complex estate filing with grace and expertise. Truly thankful."
              <div className="not-italic mt-4 font-bold text-slate-900 text-sm">- Satisfied Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to simplify your finances?</h2>
          <p className="text-xl text-blue-100 mb-10">Start with a free 15-minute introductory call to see how we can help you save time and money.</p>
          <Link to="/book" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all inline-block">
            Book Your Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
