'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg mb-8 group hover:scale-105 transition-all duration-500">
              <span className="text-2xl mr-3 group-hover:animate-bounce">📞</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm tracking-wide">GET IN TOUCH</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 drop-shadow-sm">
                Let&apos;s Start Your
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Learning Journey
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Ready to unlock your potential? We&apos;re here to help you succeed. Reach out to us and let&apos;s discuss how we can support your educational goals.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: '⚡', title: 'Quick Response', desc: 'Within 2 hours', color: 'from-yellow-400 to-orange-500' },
                { icon: '🎯', title: 'Personalized Plan', desc: 'Tailored for you', color: 'from-blue-400 to-purple-500' },
                { icon: '🆓', title: 'Free Consultation', desc: 'No hidden charges', color: 'from-green-400 to-blue-500' }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 mb-6">
                    <span className="text-lg mr-2">✉️</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm">SEND MESSAGE</span>
                  </div>
                  
                  <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-4">
                    Drop Us a Message
                  </h2>
                  
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center">
                          <span className="mr-2">👤</span>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/80"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center">
                          <span className="mr-2">📧</span>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/80"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone & Subject Row */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center">
                          <span className="mr-2">📱</span>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/80"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center">
                          <span className="mr-2">📝</span>
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/80"
                        >
                          <option value="">Select a subject</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="courses">Course Information</option>
                          <option value="fees">Fee Structure</option>
                          <option value="demo">Free Demo Class</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 mb-6">
                      <label className="text-sm font-bold text-gray-700 flex items-center">
                        <span className="mr-2">💬</span>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/80 resize-none"
                        placeholder="Tell us about your requirements, goals, or any questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="text-white drop-shadow-lg">Sending...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-white drop-shadow-lg">🚀</span>
                            <span className="text-white drop-shadow-lg">Send Message</span>
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </button>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-bold text-green-800">Message Sent Successfully!</p>
                          <p className="text-sm text-green-600">We&apos;ll get back to you within 2 hours.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200/50 mb-6">
                    <span className="text-lg mr-2">📍</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-sm">CONTACT INFO</span>
                  </div>
                  
                  <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-800 mb-4">
                    Get in Touch
                  </h2>
                  
                  <p className="text-lg text-gray-600">
                    Visit us, call us, or connect with us online. We&apos;re always here to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {[
                    {
                      icon: '📍',
                      title: 'Visit Our Center',
                      info: '123 Education Street, Knowledge Park',
                      subInfo: 'New Delhi - 110001, India',
                      color: 'from-blue-500 to-purple-600',
                      action: 'Get Directions'
                    },
                    {
                      icon: '📞',
                      title: 'Call Us',
                      info: '+91 98765 43210',
                      subInfo: 'Mon - Sat: 9:00 AM - 8:00 PM',
                      color: 'from-green-500 to-blue-600',
                      action: 'Call Now'
                    },
                    {
                      icon: '📧',
                      title: 'Email Us',
                      info: 'info@aristocrafters.com',
                      subInfo: 'We reply within 2 hours',
                      color: 'from-purple-500 to-pink-600',
                      action: 'Send Email'
                    },
                    {
                      icon: '💬',
                      title: 'WhatsApp',
                      info: '+91 98765 43210',
                      subInfo: 'Quick support & updates',
                      color: 'from-green-400 to-green-600',
                      action: 'Chat Now'
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                        <div className="flex items-start space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                            {contact.icon}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-black text-gray-900 mb-2">{contact.title}</h3>
                            <p className="text-gray-800 font-semibold mb-1">{contact.info}</p>
                            <p className="text-sm text-gray-600 mb-3">{contact.subInfo}</p>
                            
                            <button className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                              {contact.action} →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                  <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🗺️</span>
                    Find Us on Map
                  </h3>
                  
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-center relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-6xl mb-4">📍</div>
                      <h4 className="text-xl font-black text-white mb-2">AristoCrafters Education Center</h4>
                      <p className="text-white/90 text-sm mb-4">123 Education Street, Knowledge Park</p>
                      
                      <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300">
                        <span className="mr-2">🧭</span>
                        Open in Maps
                      </button>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                  <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🌐</span>
                    Follow Us
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Facebook', icon: '📘', color: 'from-blue-500 to-blue-600' },
                      { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600' },
                      { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' },
                      { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' }
                    ].map((social, index) => (
                      <button key={index} className="group flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
                        <div className={`w-8 h-8 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center text-sm group-hover:scale-110 transition-all duration-300`}>
                          {social.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{social.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200/50 mb-6">
                <span className="text-lg mr-2">❓</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 font-bold text-sm">FAQ</span>
              </div>
              
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our programs and services.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  question: 'What are your class timings?',
                  answer: 'We offer flexible timings from 6:00 AM to 10:00 PM, including weekend batches to accommodate different schedules.'
                },
                {
                  question: 'Do you provide online classes?',
                  answer: 'Yes, we offer both online and offline classes with the same quality of teaching and personalized attention.'
                },
                {
                  question: 'What is your fee structure?',
                  answer: 'Our fees vary by course and duration. We offer competitive rates with flexible payment options and scholarships for deserving students.'
                },
                {
                  question: 'Do you provide study materials?',
                  answer: 'Yes, we provide comprehensive study materials, practice tests, and digital resources as part of our course package.'
                },
                {
                  question: 'Can I get a free demo class?',
                  answer: 'Absolutely! We offer free demo classes so you can experience our teaching methodology before enrolling.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-all duration-300">
                        Q
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Questions CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="mr-2">💬</span>
                Contact Our Support Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;