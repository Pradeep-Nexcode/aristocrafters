"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbBooks } from "react-icons/tb";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBookOpen,
  FaClock,
  FaPaperPlane,
  FaStar,
  FaArrowRight,
  FaUsers,
  FaPlay,
} from "react-icons/fa";
import Modal from "./Modal";
import { motion } from "framer-motion";

const SubjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    grade: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Custom Subject Request:", formData);
    alert(
      "Thank you! We will contact you soon regarding your custom subject request."
    );
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      grade: "",
      preferredTime: "",
      message: "",
    });
  };

  // Form validation function
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.subject.trim() !== "" &&
      formData.grade !== ""
    );
  };
  const subjects = [
    {
      name: "Tamil",
      slug: "tamil",
      description:
        "Strong foundation in grammar, reading, comprehension & writing",
      image: "/subjects/tamil.webp",
      color: "blue",
      students: "15K+",
      rating: "4.9",
      topics: ["Grammar", "Reading", "Writing"],
    },
    {
      name: "English",
      slug: "english",
      description: "Grammar, vocabulary, reading skills & exam preparation",
      image: "/subjects/english.webp",
      color: "purple",
      students: "18K+",
      rating: "4.9",
      topics: ["Grammar", "Vocabulary", "Reading"],
    },
    {
      name: "Mathematics",
      slug: "mathematics",
      description:
        "Conceptual clarity, problem-solving, and application skills",
      image: "/subjects/maths.webp",
      color: "green",
      students: "20K+",
      rating: "4.8",
      topics: ["Algebra", "Geometry", "Problem Solving"],
    },
    {
      name: "Science",
      slug: "science",
      description: "Simplified explanations in Physics, Chemistry & Biology",
      image: "/subjects/Science.webp",
      color: "orange",
      students: "16K+",
      rating: "4.7",
      topics: ["Physics", "Chemistry", "Biology"],
    },
    {
      name: "Social Science",
      slug: "social-science",
      description:
        "Easy learning methods for History, Geography, Civics & Economics",
      image: "/subjects/SocialScience.webp",
      color: "red",
      students: "12K+",
      rating: "4.8",
      topics: ["History", "Geography", "Civics"],
    },
    {
      name: "Hindi",
      slug: "hindi",
      description:
        "Improve grammar, vocabulary, reading & writing fluency in Hindi",
      image: "/subjects/Hindi.webp",
      color: "pink",
      students: "10K+",
      rating: "4.8",
      topics: ["Grammar", "Comprehension", "Writing"],
    },
    {
      name: "Sanskrit",
      slug: "sanskrit",
      description:
        "Learn Sanskrit basics, shlokas, grammar & translation skills",
      image: "/subjects/Sanskrit.webp",
      color: "yellow",
      students: "8K+",
      rating: "4.7",
      topics: ["Shlokas", "Grammar", "Translation"],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-400",
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-400",
      },
      purple: {
        bg: "bg-purple-50",
        icon: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-400",
      },
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-400",
      },
      red: {
        bg: "bg-red-50",
        icon: "bg-red-600",
        text: "text-red-600",
        border: "border-red-200",
        hover: "hover:border-red-400",
      },
      indigo: {
        bg: "bg-indigo-50",
        icon: "bg-indigo-600",
        text: "text-indigo-600",
        border: "border-indigo-200",
        hover: "hover:border-indigo-400",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="myPadY bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 -translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-y-48 translate-x-48 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-md font-medium mb-4">
            {/* <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> */}
            <TbBooks className="  mr-2" />
            Our Subjects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master Every Subject with
            <span className="block text-blue-600">Expert Guidance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive curriculum coverage for classes 2-5 with personalized
            learning paths and interactive sessions
          </p>
        </div>

        {/* Subjects Grid - Optimized for 7 subjects */}
        <div className="mb-12">
 
      {/* First row - 4 subjects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
        {subjects.slice(0, 4).map((subject, index) => {
          const colorClasses = getColorClasses(subject.color);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white rounded-3xl border border-gray-100 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative h-96`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={subject.image}
                  alt={subject.name}
                  fill
                  className="object-cover"
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20"></div>
              </div>

              {/* Stats Badge */}
              {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <FaUsers className="text-blue-600" />
                  <span>{subject.students}</span>
                </div>
              </div> */}

              {/* Rating Badge */}
              {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <FaStar className="text-yellow-500" />
                  <span>{subject.rating}</span>
                </div>
              </div> */}

              {/* Content - Bottom Half */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-extrabold text-white text-center mb-3">
                  {subject.name}
                </h3>
                <p className="text-white/90 text-center mb-4 leading-relaxed text-sm">
                  {subject.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-white/80 mb-2 text-center">
                    Key Topics:
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center">
                  <button
                    className="relative overflow-hidden px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition flex items-center justify-center gap-2 group"
                  >
                    <FaPlay className="text-sm group-hover:translate-x-1 transition-transform" />
                    Start Learning
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Second row - 3 subjects centered */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subjects.slice(4).map((subject, index) => {
          const colorClasses = getColorClasses(subject.color);
          return (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white rounded-3xl border border-gray-100 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative h-96`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={subject.image}
                  alt={subject.name}
                  fill
                  className="object-cover"
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20"></div>
              </div>

              {/* Stats Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <FaUsers className="text-blue-600" />
                  <span>{subject.students}</span>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <FaStar className="text-yellow-500" />
                  <span>{subject.rating}</span>
                </div>
              </div>

              {/* Content - Bottom Half */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-extrabold text-white text-center mb-3">
                  {subject.name}
                </h3>
                <p className="text-white/90 text-center mb-4 leading-relaxed text-sm">
                  {subject.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-white/80 mb-2 text-center">
                    Key Topics:
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center">
                  <button
                    className="relative overflow-hidden px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition flex items-center justify-center gap-2 group"
                  >
                    <FaPlay className="text-sm group-hover:translate-x-1 transition-transform" />
                    Start Learning
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
 

         </div>

        {/* Bottom CTA Section */}
        <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can&apos;t Find Your Subject?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We offer personalized tutoring for additional subjects and
              specialized topics. Let us know what you need!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                <FaBookOpen className="text-lg" />
                Request Custom Subject
              </button>
              {/* <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                View All Subjects
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Subject Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Custom Subject"
        size="lg"
      >
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <FaGraduationCap className="text-2xl text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Personalized Learning Request
                </h4>
                <p className="text-gray-600">
                  Tell us about the subject you&apos;d like to learn
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaUser className="inline mr-2 text-blue-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaEnvelope className="inline mr-2 text-blue-600" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaPhone className="inline mr-2 text-blue-600" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Grade Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaGraduationCap className="inline mr-2 text-blue-600" />
                  Grade/Class *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                >
                  <option value="">Select Grade</option>
                  <option value="1st">1st Grade</option>
                  <option value="2nd">2nd Grade</option>
                  <option value="3rd">3rd Grade</option>
                  <option value="4th">4th Grade</option>
                  <option value="5th">5th Grade</option>
                  <option value="6th">6th Grade</option>
                  <option value="7th">7th Grade</option>
                  <option value="8th">8th Grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                  <option value="college">College Level</option>
                </select>
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaBookOpen className="inline mr-2 text-blue-600" />
                Subject/Topic *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                placeholder="e.g., Advanced Physics, Computer Programming, French Language"
              />
            </div>

            {/* Preferred Time Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaClock className="inline mr-2 text-blue-600" />
                Preferred Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              >
                <option value="">Select Preferred Time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                <option value="evening">Evening (6 PM - 10 PM)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                placeholder="Tell us more about your learning goals, specific topics you want to cover, or any special requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isFormValid()}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-sm" />
                Send Request
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default SubjectsSection;
