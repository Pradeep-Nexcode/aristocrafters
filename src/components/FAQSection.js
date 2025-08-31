"use client";
import React, { useState } from 'react';
import { FaQuestion } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link"
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Is tuition online-only?",
      answer: "Yes, Aristocrafters is a 100% online tuition platform."
    },
    {
      id: 2,
      question: "How do students attend classes?",
      answer: "Classes are conducted via Zoom/Google Meet (link will be shared after registration)."
    },
    {
      id: 3,
      question: "Can parents track progress?",
      answer: "Yes, we provide regular feedback and progress updates."
    },
    {
      id: 4,
      question: "What is the batch size?",
      answer: "Small groups (5–10 students) or 1-to-1 coaching available."
    },
    {
      id: 5,
      question: "What subjects do you offer?",
      answer: "We offer Tamil, English, Mathematics, Science, and Social Science for classes 5th to 10th."
    },
    {
      id: 6,
      question: "What curriculum do you follow?",
      answer: "We cover State, CBSE, and ICSE curriculum to meet diverse student needs."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="myPadY bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 -translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-y-48 translate-x-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-md font-medium mb-4">
            {/* <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> */}
            <FaQuestion className='mr-2' />
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our online tuition platform and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <div 
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md ${
                  openFAQ === faq.id ? 'border-blue-200 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180 bg-blue-100' : ''
                  }`}>
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>

                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 flex gap-2 border-t border-gray-100">
                    <FaCheck className='text-green-600 text-md'/>

                      <p className="text-gray-600 leading-relaxed">
                         {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;