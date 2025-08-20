const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Expert Tutors",
      description: "Qualified teachers with 5+ years experience and proven track records in student success",
      color: "blue",
      stat: "500+ Tutors"
    },
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Customized learning plans and one-on-one attention tailored to each student's pace",
      color: "green",
      stat: "1:1 Ratio"
    },
    {
      icon: "📱",
      title: "Interactive Platform",
      description: "Modern learning tools with virtual whiteboards, screen sharing, and multimedia content",
      color: "purple",
      stat: "24/7 Access"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Real-time performance analytics and detailed progress reports for students and parents",
      color: "orange",
      stat: "Weekly Reports"
    },
    {
      icon: "🕐",
      title: "Flexible Scheduling",
      description: "Choose your preferred time slots and reschedule classes as per your convenience",
      color: "indigo",
      stat: "Anytime"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Quality education at competitive rates with flexible payment plans and no hidden costs",
      color: "red",
      stat: "Best Value"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", icon: "bg-blue-600", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-50", icon: "bg-green-600", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", icon: "bg-purple-600", text: "text-purple-600", border: "border-purple-200" },
      orange: { bg: "bg-orange-50", icon: "bg-orange-600", text: "text-orange-600", border: "border-orange-200" },
      indigo: { bg: "bg-indigo-50", icon: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-200" },
      red: { bg: "bg-red-50", icon: "bg-red-600", text: "text-red-600", border: "border-red-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full translate-y-48 -translate-x-48 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Smart Choice for
            <span className="block text-blue-600">Academic Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine proven teaching methodologies with cutting-edge technology to deliver exceptional learning outcomes
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
            return (
              <div key={index} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-2 ${colorClasses.border} hover:border-opacity-50 card-hover`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${colorClasses.icon} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <div className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-semibold rounded-full`}>
                    {benefit.stat}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Trusted by Thousands of Students
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join our community of successful learners and experience the difference
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
                <div className="text-lg opacity-80">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-80">Expert Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-80">Years Experience</div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Free Trial Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;