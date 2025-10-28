import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ status: 'error', message: 'Please fill out all fields.' });
      return;
    }

    setFormStatus({ status: 'loading', message: '' });

    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a successful response
    setFormStatus({ status: 'success', message: 'Thank you for your message! We will get back to you soon.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // To reset the success message after a few seconds
    setTimeout(() => setFormStatus({ status: 'idle', message: '' }), 5000);
  };


  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <h3 className="text-xl font-bold">TINUBU PROJECT '27</h3>
                <img src="https://i.ibb.co/9g3fT8G/apc.png" alt="APC Logo" className="h-10" />
             </div>
            <p className="text-gray-400 mb-6">Motto: Mobilization for Victory</p>
            <div className="text-gray-300 space-y-3">
              <p>
                <span className="font-semibold block text-white">National Secretariat:</span> 29, Ayangburen Road, Ikorodu, Lagos.
              </p>
              <p>
                <span className="font-semibold block text-white">Tel:</span> 0802 343 6030, 0809 343 6030, 0809 843 6030
              </p>
              <p>
                <span className="font-semibold block text-white">E-mail:</span> <a href="mailto:tinubuproject@yahoo.com" className="hover:text-brand-yellow transition-colors">tinubuproject@yahoo.com</a>
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
             <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Send us a Message</h3>
             <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label htmlFor="name" className="sr-only">Full Name</label>
                      <input type="text" name="name" id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow transition" />
                   </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow transition" />
                   </div>
                </div>
                 <div>
                   <label htmlFor="subject" className="sr-only">Subject</label>
                   <input type="text" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow transition" />
                </div>
                 <div>
                   <label htmlFor="message" className="sr-only">Message</label>
                   <textarea name="message" id="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} required className="w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow transition"></textarea>
                </div>
                <div>
                   <button type="submit" disabled={formStatus.status === 'loading'} className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 disabled:bg-green-900 disabled:cursor-not-allowed transition-colors flex items-center justify-center">
                     {formStatus.status === 'loading' ? (
                        <>
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           Sending...
                        </>
                     ) : 'Send Message'}
                   </button>
                </div>
                {formStatus.status !== 'idle' && formStatus.message && (
                  <div className={`p-3 rounded-md text-center text-sm ${formStatus.status === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                     {formStatus.message}
                  </div>
                )}
             </form>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tinubu Project '27 Support Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;