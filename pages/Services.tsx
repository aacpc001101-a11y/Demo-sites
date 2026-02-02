
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceList = [
    {
      id: 'personal-tax',
      title: 'Personal Tax (T1)',
      icon: 'fa-user-check',
      description: 'Expert preparation of Canadian personal income tax returns.',
      details: [
        'Employment & Self-Employment income',
        'Rental property income & expenses',
        'Investment tracking & Capital gains',
        'RRSP and tuition credit optimization',
        'Foreign income reporting',
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'estate-planning',
      title: 'Estate & Trust Filings',
      icon: 'fa-file-signature',
      description: 'Guidance through the complexities of T3 Trust returns and final personal returns.',
      details: [
        'Final return for the deceased',
        'T3 Trust Income Tax preparation',
        'Clearance certificates',
        'Beneficiary distribution bookkeeping',
        'Succession tax planning',
      ],
      color: 'bg-indigo-500'
    },
    {
      id: 'bookkeeping',
      title: 'Full-Cycle Bookkeeping',
      icon: 'fa-briefcase',
      description: 'Accurate record-keeping for small businesses and contractors.',
      details: [
        'Monthly bank reconciliations',
        'Accounts payable & receivable',
        'GST/HST filing and reporting',
        'Financial statements (P&L, Balance Sheet)',
        'Year-end package for accountants',
      ],
      color: 'bg-emerald-500'
    },
    {
      id: 'business-advisory',
      title: 'Business Advisory',
      icon: 'fa-chart-line',
      description: 'Strategic planning to help your business grow and save on taxes.',
      details: [
        'Entity structure consulting (Sole Prop vs. Corp)',
        'Expense tracking systems setup',
        'Cash flow forecasting',
        'Budgeting and cost reduction',
        'CRA audit assistance',
      ],
      color: 'bg-amber-500'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Comprehensive financial solutions designed to provide you with peace of mind.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {serviceList.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1">
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-4 mb-8">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-3 text-slate-700">
                    <i className="fa-solid fa-circle-check text-blue-500"></i>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to="/book" className="inline-block bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm">
                Enquire About This Service
              </Link>
            </div>
            <div className="flex-1 w-full hidden md:block">
              <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-200">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title} 
                  className="rounded-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
