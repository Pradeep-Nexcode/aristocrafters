"use client";

import React, { useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
// Removed EmailJS import - now using Nodemailer API
import Modal from './Modal';

const TeacherApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subjects: [],
    classes: [],
    experience: '',
    mode: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    'Tamil',
    'English',
    'Mathematics',
    'Science',
    'Social Science'
  ];

  const classes = [
    '5th Grade',
    '6th Grade',
    '7th Grade',
    '8th Grade',
    '9th Grade',
    '10th Grade'
  ];

  const experienceOptions = [
    '0-1 years',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years'
  ];

  const modeOptions = [
    'Part-time',
    'Full-time'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare form data for API with file upload
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('qualification', 'Not specified');
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('subjects', JSON.stringify(formData.subjects));
      formDataToSend.append('preferredMode', formData.mode);
      formDataToSend.append('availability', formData.classes.join(', '));
      formDataToSend.append('expectedSalary', 'Not specified');
      formDataToSend.append('additionalInfo', 'Teacher application with resume');
      
      // Add resume file if present
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }
      
      // Send to Nodemailer API
      const response = await fetch('/api/teacher-application', {
        method: 'POST',
        body: formDataToSend, // Remove Content-Type header to let browser set it with boundary
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Application submission failed');
      }
    } catch (error) {
      console.error('Application Error:', error);
      setIsSubmitting(false);
      alert('There was an error sending your application. Please try again or contact us directly.');
    }
  };

  // Form validation function
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.subjects.length > 0 &&
      formData.classes.length > 0 &&
      formData.experience !== '' &&
      formData.mode !== ''
    );
  };

  if (submitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
          <p className="text-gray-600 mb-8">
            Thank you for your interest in joining Aristocrafters. Our HR team will review your application and contact you within 3-5 business days.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300"
            >
              Submit Another Application
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join Our Teaching Team!" size="lg">
      <div className="p-8 lg:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/30 text-green-700 rounded-lg text-sm font-medium mb-4 shadow-sm">
            <FaChalkboardTeacher className="w-4 h-4 mr-2 text-green-600" />
            Teacher Application
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you&rsquo;re a qualified and dedicated teacher, Aristocrafters welcomes you to be part of our growing online teaching community. Teach from anywhere and inspire students across India.
          </p>
        </div>

        <div>
            <form onSubmit={handleSubmit} className="space-y-8 text-black">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number (WhatsApp preferred) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subjects */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Subjects You Can Teach *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {subjects.map(subject => (
                    <label key={subject} className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-green-50 transition-all duration-300">
                      <input
                        type="checkbox"
                        checked={formData.subjects.includes(subject)}
                        onChange={() => handleMultiSelect('subjects', subject)}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Classes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Classes You Can Handle *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {classes.map(cls => (
                    <label key={cls} className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-green-50 transition-all duration-300">
                      <input
                        type="checkbox"
                        checked={formData.classes.includes(cls)}
                        onChange={() => handleMultiSelect('classes', cls)}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">{cls}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience & Mode */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Years of Teaching Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Experience</option>
                    {experienceOptions.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mode Preference *
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Mode</option>
                    {modeOptions.map(mode => (
                      <option key={mode} value={mode}>{mode}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Resume (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-all duration-300">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-2">
                      {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                    </p>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className="px-12 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Apply as Teacher'
                  )}
                </button>
              </div>
            </form>
        </div>
      </div>
    </Modal>
  );
};

export default TeacherApplicationForm;