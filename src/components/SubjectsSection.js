import React from 'react';

const SubjectsSection = () => {
  const subjects = [
    {
      name: "Mathematics",
      description: "Master algebra, geometry, and calculus with interactive problem-solving sessions",
      icon: "🔢",
      color: "blue",
      students: "15K+",
      rating: "4.9",
      topics: ["Algebra", "Geometry", "Statistics"]
    },
    {
      name: "Science",
      description: "Explore physics, chemistry, and biology through hands-on experiments",
      icon: "🔬",
      color: "green",
      students: "12K+",
      rating: "4.8",
      topics: ["Physics", "Chemistry", "Biology"]
    },
    {
      name: "English",
      description: "Enhance grammar, vocabulary, and literature comprehension skills",
      icon: "📚",
      color: "purple",
      students: "18K+",
      rating: "4.9",
      topics: ["Grammar", "Literature", "Writing"]
    },
    {
      name: "Social Studies",
      description: "Understand history, geography, and civics through engaging narratives",
      icon: "🌍",
      color: "orange",
      students: "10K+",
      rating: "4.7",
      topics: ["History", "Geography", "Civics"]
    },
    {
      name: "Hindi",
      description: "Develop language proficiency and appreciate Hindi literature",
      icon: "📖",
      color: "red",
      students: "8K+",
      rating: "4.8",
      topics: ["Grammar", "Literature", "Poetry"]
    },
    {
      name: "Computer Science",
      description: "Learn programming fundamentals and digital literacy skills",
      icon: "💻",
      color: "indigo",
      students: "6K+",
      rating: "4.9",
      topics: ["Programming", "Web Dev", "AI Basics"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-400"
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-400"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-400"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-400"
      },
      red: {
        bg: "bg-red-50",
        icon: "bg-red-600",
        text: "text-red-600",
        border: "border-red-200",
        hover: "hover:border-red-400"
      },
      indigo: {
        bg: "bg-indigo-50",
        icon: "bg-indigo-600",
        text: "text-indigo-600",
        border: "border-indigo-200",
        hover: "hover:border-indigo-400"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 -translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-y-48 translate-x-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Our Subjects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master Every Subject with
            <span className="block text-blue-600">Expert Guidance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive curriculum coverage for classes 5-10 with personalized learning paths and interactive sessions
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {subjects.map((subject, index) => {
            const colorClasses = getColorClasses(subject.color);
            return (
              <div key={index} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-2 ${colorClasses.border} ${colorClasses.hover} card-hover`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${colorClasses.icon} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                    {subject.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-sm font-semibold text-gray-700">{subject.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{subject.students} students</div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {subject.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{subject.description}</p>
                
                {/* Topics */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</div>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full`}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between">
                  <button className={`px-6 py-3 ${colorClasses.icon} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                    Start Learning
                  </button>
                  <button className={`${colorClasses.text} hover:underline font-medium transition-colors`}>
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can&apos;t Find Your Subject?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We offer personalized tutoring for additional subjects and specialized topics. Let us know what you need!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Request Custom Subject
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                View All Subjects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;