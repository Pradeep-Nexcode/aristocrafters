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

const HeroSection = () => {
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
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/30 text-blue-700 rounded-lg text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaGraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                #1 Online Tutoring Platform
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-poppins">
                Shape Your Future with
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Expert Tuition
                </span>
                <span className="text-4xl lg:text-5xl">
                  from Aristocrafters
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-tight max-w-lg font-nunito">
                Personalized coaching for Classes 5th to 10th in Tamil, English,
                Maths, Science & Social Science.
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
                    Small Batches
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaRupeeSign className="text-purple-600 text-xl" />
                  <span className="text-sm font-medium font-nunito">
                    Affordable Fees
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="w-auto flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="w-auto group relative px-10 py-4  cursor-pointer bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-nunito"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaGraduationCap className="text-lg" />
                    Enroll Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                {/* <button
                  onClick={() => setIsTeacherModalOpen(true)}
              
              className="px-10 py-4 border-2 cursor-pointer border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm font-nunito">
                <span className="flex items-center gap-2">
                  <FaBookOpen className="text-lg" />
                  Join as Teacher
                </span>
              </button> */}
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
                    Covers School Curriculum (State, CBSE, ICSE)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white/100 rounded-xl backdrop-blur-sm">
                  <FaClock className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="font-nunito font-medium">
                    Flexible Online Classes
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white/100 rounded-xl backdrop-blur-sm">
                  <FaUsers className="text-purple-500 text-lg flex-shrink-0" />
                  <span className="font-nunito font-medium">
                    Small Batches for Personal Attention
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Illustration */}
            <div className="lg:w-1/2 relative z-10">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaChalkboardTeacher className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 font-poppins">
                          Live Session
                        </div>
                        <div className="text-sm text-gray-500 font-nunito">
                          Mathematics
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-sm text-gray-600 font-nunito">
                        Online
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <div className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
                      Quadratic Equations
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 font-nunito">
                      Progress: 75% Complete
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                        +5
                      </div>
                    </div>
                    <button
                      onClick={() => setIsStudentModalOpen(true)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md cursor-pointer text-sm font-medium hover:bg-blue-700 transition-colors font-nunito"
                    >
                      Join Now
                    </button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-2xl p-4 shadow-lg animate-bounce">
                  <FaStar className="text-2xl text-white" />
                </div>

                {/* <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-2xl p-4 shadow-lg animate-pulse">
                <FaChartLine className="text-2xl text-white" />
              </div> */}

                <div className="absolute top-1/2 -left-8 bg-purple-500 rounded-full p-3 shadow-lg">
                  <FaBullseye className="text-xl text-white" />
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
