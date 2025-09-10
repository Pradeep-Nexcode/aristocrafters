"use client"

import React, { useState } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
// Removed EmailJS import - now using Nodemailer API
import Modal from './Modal';

const StudentRegistrationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    grade: '',
    board: '',
    subjects: [],
    timing: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    'Tamil',
    'English',
    'Mathematics',
    'Science',
    'Social Science',
    'Hindi',
    'Sanskrit'
  ];

  const timings = [
    'Evening (4:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 6:00 PM)',
    'Evening (6:00 PM - 7:00 PM)',
    'Night (7:00 PM - 8:00 PM)',
  ];

  const grades = [
    '5th Grade',
    '6th Grade',
    '7th Grade',
    '8th Grade',
    '9th Grade',
    '10th Grade'
  ];

  const boards = [
    'State Boards',
    'CBSE',
    'ICSE',
    'Cambridge International'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare form data for API
      const registrationData = {
        studentName: formData.fullName,
        parentName: formData.fullName, // Using same name for now
        email: formData.email,
        phone: formData.phone,
        grade: formData.grade,
        board: formData.board,
        subjects: formData.subjects,
        preferredTiming: formData.timing,
        additionalInfo: formData.notes || ''
      };
      
      // Send to Nodemailer API
      const response = await fetch('/api/student-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      setIsSubmitting(false);
      alert('There was an error sending your registration. Please try again or contact us directly.');
    }
  };

  // Form validation function
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.grade !== '' &&
      formData.board !== '' &&
      formData.subjects.length > 0 &&
      formData.timing !== ''
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
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
          <p className="text-gray-600 mb-8">
            Thank you for registering with Aristocrafters. Our team will contact you within 24 hours to schedule your first class.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Register Another Student
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
    <Modal isOpen={isOpen} onClose={onClose} title="Join Aristocrafters Today!" size="lg">
      <div className="p-8 lg:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/30 text-blue-700 rounded-lg text-sm font-medium mb-4 shadow-sm">
            <FaUserGraduate className="w-4 h-4 mr-2 text-blue-600" />
            Student Registration
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Start your learning journey with personalized coaching for Classes 5th to 10th.
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter student&apos;s full name"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              {/* Contact & Grade */}
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Class/Grade *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Grade</option>
                    {grades.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subjects */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Subjects Required *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {subjects.map(subject => (
                    <label key={subject} className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50 transition-all duration-300">
                      <input
                        type="checkbox"
                        checked={formData.subjects.includes(subject)}
                        onChange={() => handleSubjectChange(subject)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Board */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                 Educational Board   *
                </label>
                <select
                  name="board"
                  value={formData.board}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Board</option>
                  {boards.map(board => (
                    <option key={board} value={board}>{board}</option>
                  ))}
                </select>
              </div>

              {/* Timing Preference */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Class Timing *
                </label>
                <select
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Timing</option>
                  {timings.map(timing => (
                    <option key={timing} value={timing}>{timing}</option>
                  ))}
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Any Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className="px-12 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </span>
                  ) : (
                    'Register Now'
                  )}
                </button>
              </div>
            </form>
        </div>
      </div>
    </Modal>
  );
};

export default StudentRegistrationForm;