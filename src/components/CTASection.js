import { FaBullseye, FaLaptop, FaUsers, FaChartBar, FaUserGraduate, FaChalkboardTeacher, FaRocket } from "react-icons/fa";

const CTASection = () => {
  const benefits = [
    {
      icon: <FaBullseye />,
      title: "Expert Tutors",
      description: "Qualified teachers with proven track records"
    },
    {
      icon: <FaLaptop />,
      title: "100% Online",
      description: "Learn from anywhere with flexible scheduling"
    },
    {
      icon: <FaUsers />,
      title: "Small Batches",
      description: "Personal attention in groups of 5-10 students"
    },
    {
      icon: <FaChartBar />,
      title: "Progress Tracking",
      description: "Regular assessments and detailed reports"
    }
  ];

  const urgencyPoints = [
    "Limited seats available for new batches",
    "Free demo class for first-time students",
    "Join thousands of successful students"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-40"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white opacity-5 rounded-full translate-y-32"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-10 w-5 h-5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center text-white mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Join Aristocrafters Today
            </div>
            
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Excel in
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Your Academic Journey?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Join Aristocrafters and experience personalized learning that makes a difference. 
              <span className="block mt-2 font-semibold text-yellow-300">Start your success story today!</span>
            </p>

            {/* Urgency Points */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {urgencyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  {point}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <FaUserGraduate className="text-2xl" />
                  <div>
                    <div>Register as a Student</div>
                    <div className="text-sm opacity-80">Start Learning Today</div>
                  </div>
                </div>
              </button>
              
              <button className="group px-10 py-5 border-3 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 relative overflow-hidden">
                <div className="relative flex items-center justify-center gap-3">
                  <FaChalkboardTeacher className="text-2xl" />
                  <div>
                    <div>Apply as a Teacher</div>
                    <div className="text-sm opacity-80">Join Our Team</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Still Have Questions?
                </h3>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Our education consultants are here to help you make the best decision for your child&apos;s academic future. Get personalized guidance and answers to all your questions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Free consultation with education expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Customized learning plan recommendation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>No obligation, completely free</span>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Contact Form Preview */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Get Started in 30 Seconds
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Child's Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Grade/Class" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center justify-center gap-2">Book My Free Assessment <FaRocket /></span>
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our terms and privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;