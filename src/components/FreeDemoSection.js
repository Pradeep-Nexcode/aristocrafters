"use client";

import React from "react";
import {
  FaPlay,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaBookOpen,
  FaUsers,
  FaStar,
  FaPlayCircle,
} from "react-icons/fa";

const FreeDemoSection = ({ onOpenModal }) => {
  return (
    <section className="myPadY bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-md font-medium mb-4">
              {/* <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> */}
              <FaPlayCircle className="mr-2" />
              Free Demo Class
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Our Teaching
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their academic
              journey with our personalized approach. Book your free demo class
              today and see the difference!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Expert Teachers
                    </h3>
                    <p className="text-gray-600">
                      Learn from qualified educators with years of experience in
                      their subjects
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaBookOpen className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Personalized Learning
                    </h3>
                    <p className="text-gray-600">
                      Customized curriculum and pace tailored to your
                      child&apos;s unique needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Flexible Timing
                    </h3>
                    <p className="text-gray-600">
                      Choose convenient time slots that fit your family&apos;s
                      schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="text-center lg:text-left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FaStar className="text-green-600" />
                    <span>100% Free Demo Class</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Start Your
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {" "}
                      Learning Journey?
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Experience our teaching methodology firsthand. No commitment
                    required - just pure learning excellence!
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>Choose your preferred date & time</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaUsers className="text-purple-500" />
                    <span>One-on-one personalized session</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaPlay className="text-green-500" />
                    <span>Interactive learning experience</span>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaPlay className="text-lg" />
                  Book Your Free Demo Class
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  No credit card required • Instant confirmation • 45-minute
                  session
                </p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default FreeDemoSection;
