import React from 'react';
import { GoPersonFill } from "react-icons/go";
const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full translate-y-48 -translate-x-48 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-md font-medium mb-4">
            {/* <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> */}
            <GoPersonFill className="  mr-2" />
            About Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Young Learners
            <span className="block text-blue-600">with Aristocrafters</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Aristocrafters, we believe that every student has the potential to excel. Our mission is to make learning simple, engaging, and result-oriented.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Story */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With a team of dedicated educators, we provide academic support for students from 5th to 10th standard, helping them build strong foundations and confidence in their subjects.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower young learners with knowledge, skills, and confidence to succeed in academics and beyond.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">👨‍🏫</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Expert Tutors</div>
              </div>
              
              {/* <div className="bg-purple-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </div>
              
              <div className="bg-orange-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div> */}
            </div>
            
            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Meet Our Team
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                Our Methodology
              </button>
            </div> */}
          </div>
          
          {/* Right Content - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4">Why Students Love Us</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Personalized Learning Plans</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>24/7 Doubt Resolution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Regular Progress Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Interactive Learning Tools</span>
                    </div>
                  </div>
                </div>
                
                {/* Student Testimonial Preview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">👨‍🎓</span>
                    </div>
                    <div>
                      <div className="font-semibold">Rahul Sharma</div>
                      <div className="text-sm opacity-80">Class 10 Student</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 italic">
                    &ldquo;The personalized attention and interactive sessions helped me improve my grades significantly!&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-2xl p-4 shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            
            {/* <div className="absolute -bottom-6 -left-6 bg-green-500 rounded-2xl p-4 shadow-lg">
              <span className="text-2xl text-white">📈</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;