import { TbBrandStorytel } from "react-icons/tb";
import { FaBullseye, FaBook, FaChalkboardTeacher, FaBolt } from "react-icons/fa";


const TestimonialsSection = () => {
 const testimonials = [
  {
    name: "Lakshmi Narayanan",
    role: "Parent of Kavin (Grade 8)",
    subject: "Mathematics",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "Before joining, my son was very weak in maths. After these one-to-one classes, he is doing sums with full confidence. From just pass marks, now he is scoring above 90%.",
    improvement: "+2 Grades",
    duration: "6 months"
  },
  {
    name: "Suresh Kumar",
    role: "Parent of Harini (Grade 10)",
    subject: "Physics & Chemistry",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The sir explains very clearly in Tamil and English, so my daughter is understanding tough science lessons easily. Earlier she was struggling, now she got 95% in board model exam.",
    improvement: "95% Score",
    duration: "8 months"
  },
  {
    name: "Meena Ramesh",
    role: "Parent of Arav (Grade 6)",
    subject: "English & Science",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "Classes are very interactive. My son enjoys the online sessions, and I can see his improvement every week. Teachers are very patient and friendly. We are very happy with the progress.",
    improvement: "Top 10%",
    duration: "4 months"
  }
];

const stats = [
  {
    icon: <FaBullseye />,
    number: "5–10",
    label: "Grade Levels"
  },
  {
    icon: <FaBook />,
    number: "All Subjects",
    label: "Covered"
  },
  {
    icon: <FaChalkboardTeacher />,
    number: "Qualified",
    label: "Expert Tutors"
  },
  {
    icon: <FaBolt />,
    number: "Personalized",
    label: "Learning Plans"
  }
];


  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="feedback" className="myPadY bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full -translate-y-48 translate-x-48 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-48 -translate-x-48 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-md font-medium mb-4">
            {/* <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> */}
            <TbBrandStorytel className="mr-2" />
           Feedback
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Parents & Students
            <span className="block text-blue-600">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real families who have experienced remarkable academic transformation with our personalized tutoring approach
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 card-hover">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="text-xs text-gray-400">{testimonial.duration}</div>
                </div>
              </div>
              
              {/* Subject Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                {testimonial.subject}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Improvement Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Improvement:</span>
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Join Our Success Community
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Thousands of families trust us with their children&apos;s academic future
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center flex flex-col items-center justify-center group">
                  <div className="text-4xl text-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Read More Reviews
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Share Your Story
                  </button>
                </div>
              </div>  
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;