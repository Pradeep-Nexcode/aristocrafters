import React from 'react';
import { SiGoogleclassroom } from "react-icons/si";
import { FaDesktop, FaBullseye, FaUsers } from "react-icons/fa";
const ClassFormatsSection = () => {
  const formats = [
    {
      id: 1,
      icon: <FaDesktop />,
      title: "Online Classes",
      description: "Learn from the comfort of home with interactive online sessions",
      features: [
        "Live interactive sessions",
        "Screen sharing & digital whiteboard",
        "Recorded sessions for revision",
        "Flexible scheduling"
      ],
      color: "blue",
      popular: false
    },
    
    {
      id: 2,
      icon: <FaBullseye />,
      title: "One-to-One Coaching",
      description: "Exclusive sessions for special focus and personalized attention",
      features: [
        "100% personalized attention",
        "Customized learning pace",
        "Flexible curriculum",
        "Premium support"
      ],
      color: "purple",
      popular: true
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Small Group Batches",
      description: "Individual attention with peer learning in small groups",
      features: [
        "2-5 students per batch",
        "Peer interaction & discussion",
        "Collaborative learning",
        "Cost-effective option"
      ],
      color: "green",
      popular: false
    },
  ];

  const getColorClasses = (color, type) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        icon: 'bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'bg-green-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'bg-purple-100'
      }
    };
    return colorMap[color][type];
  };

  return (
    <section className="myPadY bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-y-[-50%] translate-x-[50%] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full translate-y-[50%] translate-x-[-50%] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-md font-medium mb-4">
            {/* <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> */}
            <SiGoogleclassroom  className="mr-2"/>
            Class Formats
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-blue-600">Learning Style</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible learning options designed to fit your schedule and learning preferences.
          </p>
        </div>

        {/* Class Formats Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {formats.map((format) => (
            <div key={format.id} className="relative">
              {/* Popular Badge */}
              {format.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-white rounded-3xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                format.popular ? 'border-orange-200 shadow-xl' : getColorClasses(format.color, 'border')
              }`}>
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(format.color, 'icon')}`}>
                    <span className="text-3xl text-black">{format.icon}</span>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {format.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {format.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {format.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${getColorClasses(format.color, 'bg')}`}>
                          <svg className={`w-3 h-3 ${getColorClasses(format.color, 'text')}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-3 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    format.popular ? 'bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700' : getColorClasses(format.color, 'button')
                  }`}>
                    Choose This Format
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which format is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Our education consultants can help you choose the best learning format based on your needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                Compare All Formats
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ClassFormatsSection;