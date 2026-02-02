
import React from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'About', value: Page.ABOUT },
    { label: 'Services', value: Page.SERVICES },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => onNavigate(Page.HOME)}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-700 transition-colors">
                 <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-900">
                D-CO<span className="text-blue-600 ml-1">MANAGEMENT</span>
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`text-sm font-semibold transition-colors ${
                    currentPage === item.value 
                    ? 'text-blue-600' 
                    : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => onNavigate(Page.BOOKING)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Book Online
              </button>
            </nav>

            <div className="md:hidden">
              <button className="text-slate-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-blue-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2 text-white font-bold text-sm">D</div>
                <h4 className="text-blue-900 text-lg font-bold">D-CO MANAGEMENT</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
                Professional tax preparation and bookkeeping services in Mississauga. We bring clarity and precision to your financial records through expert consultation and modern solutions.
              </p>
              <div className="flex space-x-3">
                <div className="w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </div>
                <div className="w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-blue-900 text-sm font-bold mb-6 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-slate-500 hover:text-blue-600 transition-colors">Personal Tax</button></li>
                <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-slate-500 hover:text-blue-600 transition-colors">Bookkeeping</button></li>
                <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-slate-500 hover:text-blue-600 transition-colors">Estate Planning</button></li>
                <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-slate-500 hover:text-blue-600 transition-colors">Consulting</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-900 text-sm font-bold mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start text-slate-500">
                  <span className="mr-3 text-blue-600 italic">📍</span>
                  <span>Mississauga, ON</span>
                </li>
                <li className="flex items-start text-slate-500">
                  <span className="mr-3 text-blue-600 italic">📞</span>
                  <span>(905) 555-0123</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <div>&copy; {new Date().getFullYear()} D-Co Management Services Inc. All rights reserved.</div>
            <div className="flex space-x-6">
              <button className="hover:text-blue-600 transition-colors">Privacy</button>
              <button className="hover:text-blue-600 transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
