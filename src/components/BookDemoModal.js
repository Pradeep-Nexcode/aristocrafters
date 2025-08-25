"use client";

import React, { useState } from "react";
import {
  FaPlay,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBookOpen,
  FaTimes,
} from "react-icons/fa";

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "Tamil",
    "English",
    "Mathematics",
    "Science",
    "Social Science",
    "Hindi",
    "Sanskrit",
  ];

  const grades = [
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
  ];

  const timeSlots = [
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return (
      formData.studentName.trim() !== "" &&
      formData.parentName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.grade !== "" &&
      formData.subject !== "" &&
      formData.preferredDate !== "" &&
      formData.preferredTime !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      subject: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    setSubmitted(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <FaPlay className="text-white text-sm" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Book Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Free Demo
              </span>{" "}
              Class
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="text-gray-500 text-lg" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPlay className="text-3xl text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Demo Class Booked Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for booking a free demo class. We&apos;ll contact you
              within 24 hours to confirm your session details.
            </p>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Book Another Demo
              </button>
              <button
                onClick={handleClose}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">
                  What You&apos;ll Get in Your Demo Class
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-blue-600 text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Personalized Assessment
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Our expert teachers will evaluate your current level and
                        identify areas for improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaBookOpen className="text-indigo-600 text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Interactive Learning
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Experience our engaging teaching methods with hands-on
                        problem solving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-green-600 text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Customized Learning Plan
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Get a tailored study plan designed for your academic
                        goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white">
                  <h4 className="font-bold mb-1">
                    100% Free - No Hidden Charges
                  </h4>
                  <p className="text-sm opacity-90">
                    This demo class is completely free with no obligations.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Enter student's name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Parent Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Enter parent's name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Enter email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Grade/Level *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        required
                      >
                        <option value="">Select Grade</option>
                        {grades.map((grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        required
                      >
                        <option value="">Select Subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        required
                      >
                        <option value="">Select Time Slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm"
                      placeholder="Any specific topics you'd like to focus on..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      !isFormValid() || isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Booking Demo Class...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <FaPlay className="text-sm" />
                        <span>Book Free Demo Class</span>
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDemoModal;
