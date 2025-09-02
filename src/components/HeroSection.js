"use client";
import React, { useState, useEffect } from "react";

import {
  FaCheckCircle,
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaRupeeSign,
  FaBookOpen,
  FaChalkboardTeacher,
  FaStar,
  FaChartLine,
  FaBullseye,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";
import StudentRegistrationForm from "./StudentRegistrationForm";

import TeacherApplicationForm from "./TeacherApplicationForm";

const HeroSection = ({ onOpenModal }) => {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="relative py-5 sm:py-7 md:py-0 h-auto md:min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-32 sm:w-72 h-32 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-32 sm:w-72 h-32 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)] gap-8 lg:gap-12">
            {/* Left Content */}
            <div className={`lg:w-1/2 mb-8 lg:mb-0 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Animated Badge */}
              {/* <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-bounce' : ''}`}>
                <FaGraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                <span className="animate-pulse">🔥 1-to-1 Online Coaching</span>
              </div> */}

              <h1 className="text-3xl  lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Help Your Child
                <br className="hidden sm:block" />
                <span className="block mt-2">
                  Succeed with{" "}
                  <span className="text-blue-600">
                   1-on-1  Expert Tutoring
                  </span>
                </span>
                <span className="block text-3xl  lg:text-4xl xl:text-5xl mt-2 text-gray-700">
                  from Aristocrafters
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl font-nunito">
                Personalized lessons for Classes 5–10 in Tamil, English, Maths,
                Science, and Social Science — taught in simple, engaging
                one-to-one sessions.
              </p>
              {/* Key Features */}
              {/* <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaGraduationCap className="text-blue-600 text-xl" />
                  <span className="text-sm font-medium font-nunito">
                    Expert Tutors
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUsers className="text-green-600 text-xl" />
                  <span className="text-sm font-medium font-nunito">
                    1-to-1 Attention
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaRupeeSign className="text-purple-600 text-xl" />
                  <span className="text-sm font-medium font-nunito">
                    Affordable Fees
                  </span>
                </div>
              </div> */}

              {/* Enhanced Highlights with Animations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
                {[
                  { icon: FaCheckCircle, color: "text-green-500", text: "Experienced & Passionate Tutors", delay: "delay-100" },
                  { icon: FaCheckCircle, color: "text-green-500", text: "Covers School Curriculum (State, CBSE, ICSE, Cambridge)", delay: "delay-200" },
                  { icon: FaClock, color: "text-blue-500", text: "Flexible Online Scheduling", delay: "delay-300" },
                  { icon: FaUsers, color: "text-purple-500", text: "1-to-1 Personalized Coaching", delay: "delay-400" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className={`flex items-center gap-3 text-gray-700 p-3 sm:p-4 bg-white/80 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300 hover:scale-105 transform ${item.delay} ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                      <IconComponent className={`${item.color} text-lg sm:text-xl flex-shrink-0`} />
                      <span className="font-nunito font-medium text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons for Mobile */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:hidden">
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl text-base transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <FaPlay className="text-sm" />
                  Book FREE Demo
                </button>
                <a href="#classformats" className="flex-1 bg-white/80 hover:bg-white text-gray-800 font-semibold py-4 px-6 rounded-2xl text-base transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-gray-200 flex items-center justify-center gap-2">
                  <FaArrowRight className="text-sm" />
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Content - Enhanced Demo Card (Desktop Only) */}
            <div className={`hidden lg:block lg:w-1/2 relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-2000"></div>
                
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  {/* Animated Header */}
                  <div className="text-center mb-8">
                    {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 px-5 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                      <FaStar className="text-green-600 animate-spin" />
                      <span>FREE Demo Class</span>
                    </div> */}
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                      Experience Our Teaching Excellence
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      No commitment required • 30-minute session
                    </p>
                  </div>

                  {/* Enhanced Benefits with Hover Effects */}
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: FaGraduationCap, color: "text-blue-500", text: "Expert qualified teachers", bg: "hover:bg-blue-50" },
                      { icon: FaBookOpen, color: "text-purple-500", text: "Personalized learning approach", bg: "hover:bg-purple-50" },
                      { icon: FaClock, color: "text-green-500", text: "Flexible scheduling", bg: "hover:bg-green-50" }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className={`flex items-center gap-3 text-gray-700 p-3 rounded-xl transition-all duration-300 ${item.bg} hover:scale-105 cursor-pointer`}>
                          <IconComponent className={`${item.color} text-xl animate-pulse`} />
                          <span className="text-base font-medium">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Enhanced CTA Button */}
                  <button
                    onClick={() => setIsStudentModalOpen(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform active:scale-95 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaPlay className="text-sm group-hover:animate-pulse" />
                      Book Your FREE Demo Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  {/* Enhanced Trust Indicators */}
                  <div className="mt-6 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                      {["✓ No Credit Card", "✓ Instant Booking", "✓ 100% Free"].map((item, index) => (
                        <span key={index} className="hover:text-gray-700 transition-colors duration-200 cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <StudentRegistrationForm
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
      />

      <TeacherApplicationForm
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
