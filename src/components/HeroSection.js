"use client";
import React, { useState } from "react";

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
} from "react-icons/fa";
import StudentRegistrationForm from "./StudentRegistrationForm";

import TeacherApplicationForm from "./TeacherApplicationForm";

const HeroSection = ({ onOpenModal }) => {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);

  return (
    <>
      <section className="relative md:min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 myPadY">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/30 text-blue-700 rounded-lg text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaGraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                1-to-1 Online Coaching
              </div>

              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-gray-900 mb-6 leading-tight font-poppins">
                Help Your Child Succeed with
                <span className=" bg-gradient-to-r from-blue-600 ml-2 to-purple-600 bg-clip-text text-transparent">
                  One-on-One Expert Tutoring
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  {" "}
                  from Aristocrafters
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-tight max-w-lg font-nunito">
                Personalized lessons for Classes 5–10 in Tamil, English, Maths,
                Science, and Social Science — taught in simple, engaging
                one-to-one sessions.
              </p>
              {/* Key Features */}
              <div className="flex items-center gap-6 mb-8">
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
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm">
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white/100 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                  <span className="font-nunito font-medium">
                    Experienced & Passionate Tutors
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white/100 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                  <span className="font-nunito font-medium">
                    Covers School Curriculum (State, CBSE, ICSE, Cambridge)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white/100 rounded-xl backdrop-blur-sm">
                  <FaClock className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="font-nunito font-medium">
                    Flexible Online Scheduling
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white/100 rounded-xl backdrop-blur-sm">
                  <FaUsers className="text-purple-500 text-lg flex-shrink-0" />
                  <span className="font-nunito font-medium">
                    1-to-1 Personalized Coaching
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Clean Free Demo Card */}
            <div className="lg:w-1/2 relative z-10">
              <div className="bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-50/70 text-green-800 px-5 py-2 rounded-full text-sm font-semibold">
                    <FaStar className="text-green-600" />
                    <span>FREE Demo Class</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mt-4 mb-2">
                    Experience Our Teaching Excellence
                  </h3>
                  <p className="text-gray-600 text-base">
                    No commitment required • 45-minute session
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid gap-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaGraduationCap className="text-blue-500 text-xl" />
                    <span className="text-base font-medium">
                      Expert qualified teachers
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaBookOpen className="text-purple-500 text-xl" />
                    <span className="text-base font-medium">
                      Personalized learning approach
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaClock className="text-green-500 text-xl" />
                    <span className="text-base font-medium">
                      Flexible scheduling
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
      text-white font-semibold py-4 px-6 rounded-2xl text-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Book Your FREE Demo Now
                </button>

                {/* Trust Indicators */}
                <div className="mt-6 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                    <span>✓ No Credit Card</span>
                    <span>✓ Instant Booking</span>
                    <span>✓ 100% Free</span>
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
