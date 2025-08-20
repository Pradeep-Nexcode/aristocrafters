import React from 'react';

const LearningApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Assessment",
      description: "Comprehensive evaluation of your child's current academic level, learning style, and specific areas that need improvement.",
      icon: "🎯",
      color: "blue",
      features: ["Skill Assessment", "Learning Style Analysis", "Goal Setting"]
    },
    {
      number: "02",
      title: "Custom Learning Plan",
      description: "Personalized curriculum designed specifically for your child's needs, pace, and academic objectives.",
      icon: "📋",
      color: "green",
      features: ["Tailored Curriculum", "Flexible Pacing", "Progress Milestones"]
    },
    {
      number: "03",
      title: "Interactive Sessions",
      description: "Engaging one-on-one tutoring sessions with expert teachers using modern teaching tools and methodologies.",
      icon: "💻",
      color: "purple",
      features: ["Live Sessions", "Interactive Tools", "Real-time Feedback"]
    },
    {
      number: "04",
      title: "Progress Tracking",
      description: "Continuous monitoring of academic progress with detailed reports and regular parent-teacher consultations.",
      icon: "📈",
      color: "orange",
      features: ["Weekly Reports", "Parent Updates", "Performance Analytics"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", primary: "bg-blue-600", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
      green: { bg: "bg-green-50", primary: "bg-green-600", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" },
      purple: { bg: "bg-purple-50", primary: "bg-purple-600", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
      orange: { bg: "bg-orange-50", primary: "bg-orange-600", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-500 to-orange-600" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 -translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full translate-y-48 translate-x-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Make
            <span className="block text-blue-600">Learning Effective</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step methodology ensures every student receives personalized attention and achieves academic excellence
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 rounded-full"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const colorClasses = getColorClasses(step.color);
                return (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${colorClasses.gradient} rounded-full border-4 border-white shadow-lg z-10`}></div>
                    
                    {/* Step Card */}
                    <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-2 ${colorClasses.border} hover:border-opacity-50 card-hover group-hover:-translate-y-2`}>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        <div className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-sm font-bold rounded-full`}>
                          Step {step.number}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className={`w-1.5 h-1.5 ${colorClasses.primary} rounded-full mr-2`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const colorClasses = getColorClasses(step.color);
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 bg-white rounded-2xl shadow-lg p-6 border-2 ${colorClasses.border}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-sm font-bold rounded-full`}>
                          {step.number}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their academic performance with our proven approach
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Book Free Assessment
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningApproachSection;