
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-slate-900 py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">We are here to help. Reach out with any questions or to visit our office.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Office</h4>
                    <p className="text-slate-600">Mississauga, Ontario, L5M 2G8</p>
                    <p className="text-slate-400 text-sm mt-1">(Exact address provided upon appointment)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-slate-600">+1 (905) 555-0123</p>
                    <p className="text-slate-400 text-sm mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-slate-600">info@dcomanagement.ca</p>
                    <p className="text-slate-400 text-sm mt-1">Direct inquiries only please.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <i className="fa-solid fa-calendar-check text-blue-600"></i>
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">Monday - Thursday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">Friday</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="text-slate-400 italic">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Location */}
          <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {/* Embed code inspired by the provided Google Maps location */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11568.27092809618!2d-79.72573216041132!3d43.582147779124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41e3976e99db%3A0x18415b8b8155b7e5!2sD-Co%20Management%20Services!5e0!3m2!1sen!2sca!4v1707000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
