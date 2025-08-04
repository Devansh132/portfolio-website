import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="contact-item group">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">devanshshukla132@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-item group">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">6394307931</p>
                  </div>
                </div>
              </div>

              <div className="contact-item group">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Gurgaon, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/devansh132"
                  className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Github className="text-gray-400 group-hover:text-white transition-colors duration-300" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/devansh-shukla-bb45b3240/"
                  className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="text-gray-400 group-hover:text-white transition-colors duration-300" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  placeholder="Let's work together"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full group relative px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </>
                  )}
                </span>
                {!isSubmitting && submitStatus !== 'success' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;