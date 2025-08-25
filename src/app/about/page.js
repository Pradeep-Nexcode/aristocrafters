"use client";
import Link from "next/link";
import React from "react";
import { 
  FaBookOpen, 
  FaUsers, 
  FaStar, 
  FaGraduationCap,
  FaBullseye,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaLaptop,
  FaGlobe,
  FaVideo,
  FaMobileAlt,
  FaGem,
  FaHeart,
  FaPhone,
  FaChalkboardTeacher,
  FaFlask,
  FaBriefcase
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg mb-8 group hover:scale-105 transition-all duration-500">
              <span className="text-2xl mr-3 group-hover:animate-bounce">
                <FaGraduationCap className="inline text-black" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm tracking-wide">
                ABOUT ARISTOCRAFTERS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 drop-shadow-sm">
                Crafting Excellence
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                in Education
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              For over{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                15 years
              </span>
              , we&apos;ve been transforming lives through personalized
              education, innovative teaching methods, and unwavering commitment
              to student success.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: '15+', label: 'Years Experience', icon: '📅' },
                { number: '5000+', label: 'Students Taught', icon: '👨‍🎓' },
                { number: '98%', label: 'Success Rate', icon: '🏆' },
                { number: '50+', label: 'Expert Teachers', icon: '👩‍🏫' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">{stat.number}</div>
                    <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { label: "Personalized Learning", icon: <FaBullseye /> },
                { label: "Expert Mentorship", icon: <FaHandshake /> },
                { label: "Innovative Teaching", icon: <FaLightbulb /> },
                { label: "Student Success Focus", icon: <FaRocket /> },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 flex flex-col items-center justify-center  backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="text-3xl text-black mb-3 group-hover:animate-bounce">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="myPadY relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/30 rounded-lg shadow-sm">
                  <FaBookOpen className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm">
                    OUR STORY
                  </span>
                </div>

                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 leading-tight">
                  Building Dreams Through Education
                </h2>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2009 with a simple yet powerful vision: to make
                    quality education accessible to every student. What started
                    as a small tutoring center has transformed into a leading
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {" "}
                      online learning platform
                    </span>
                    .
                  </p>
                  <p>
                    Our journey began when our founder,{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Sangamithirai
                    </span>
                    , noticed the gap between traditional classroom methods and
                    what students actually needed to succeed in today&apos;s
                    competitive world.
                  </p>
                  <p>
                    Today, we&apos;re proud to guide students across regions
                    through engaging{" "}
                    <span className="font-semibold">live online classes</span>,
                    interactive tools, and a supportive learning
                    environment—right from the comfort of their homes.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                      {
                        icon: <FaLaptop />,
                        title: "Live Online Classes",
                        desc: "Interactive sessions with expert teachers",
                      },
                      {
                        icon: <FaBullseye />,
                        title: "Personalized Learning",
                        desc: "Tailored approach for each student",
                      },
                      {
                        icon: <FaHandshake />,
                        title: "Student-Centric",
                        desc: "Your success is our priority",
                      },
                      {
                        icon: <FaGlobe />,
                        title: "Anywhere Access",
                        desc: "Learn from home, anytime, anywhere",
                      },
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300"
                    >
                      <span className="text-2xl text-black">{point.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {point.title}
                        </h4>
                        <p className="text-sm text-gray-600">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center">
                    <div className="text-8xl mb-6"><FaLaptop /></div>
                    <h3 className="text-2xl font-black text-white mb-4">
                      Online Learning
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      A fully digital learning space designed to deliver quality
                      education—live, interactive, and accessible from anywhere.
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-3xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaVideo />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center text-2xl animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <FaMobileAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="myPadY bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/30 rounded-lg shadow-sm mb-6">
                <FaUsers className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-sm">
                  OUR TEAM
                </span>
              </div>

              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-800 mb-6">
                Meet Our Expert Educators
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our passionate team of educators brings decades of combined
                experience and innovative teaching methods to help you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Sharma",
                  role: "Founder & Director",
                  subject: "Mathematics & Physics",
                  experience: "15+ Years",
                  avatar: <FaChalkboardTeacher />,
                  color: "from-blue-500 to-purple-600",
                },
                {
                  name: "Prof. Priya Patel",
                  role: "Academic Head",
                  subject: "Chemistry & Biology",
                  experience: "12+ Years",
                  avatar: <FaFlask />,
                  color: "from-purple-500 to-pink-600",
                },
                {
                  name: "Mr. Amit Kumar",
                  role: "Senior Faculty",
                  subject: "English & Literature",
                  experience: "10+ Years",
                  avatar: <FaBriefcase />,
                  color: "from-green-500 to-blue-600",
                },
                {
                  name: "Ms. Sneha Gupta",
                  role: "Mathematics Expert",
                  subject: "Advanced Mathematics",
                  experience: "8+ Years",
                  avatar: <FaChalkboardTeacher />,
                  color: "from-pink-500 to-red-600",
                },
                {
                  name: "Dr. Vikram Singh",
                  role: "Science Faculty",
                  subject: "Physics & Chemistry",
                  experience: "11+ Years",
                  avatar: <FaFlask />,
                  color: "from-indigo-500 to-purple-600",
                },
                {
                  name: "Ms. Ritu Sharma",
                  role: "Language Expert",
                  subject: "Hindi & Sanskrit",
                  experience: "9+ Years",
                  avatar: <FaBriefcase />,
                  color: "from-orange-500 to-red-600",
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      {member.avatar}
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-black text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {member.subject}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/30 rounded-lg shadow-sm">
                        <FaStar className="w-3 h-3 mr-1 text-blue-600" />
                        <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {member.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="myPadY relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6">
                <span className="text-lg mr-2"><FaGem /></span>
                <span className="text-white font-bold text-sm">OUR VALUES</span>
              </div>

              <h2 className="text-5xl font-black text-white mb-6">
                What Drives Us Forward
              </h2>

              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our core values shape everything we do and guide us in our
                mission to provide exceptional education.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaBullseye />,
                  title: "Excellence",
                  description:
                    "We strive for the highest standards in everything we do",
                },
                {
                  icon: <FaHandshake />,
                  title: "Integrity",
                  description:
                    "Honest, transparent, and ethical in all our interactions",
                },
                {
                  icon: <FaLightbulb />,
                  title: "Innovation",
                  description:
                    "Continuously evolving our teaching methods and approaches",
                },
                {
                  icon: <FaHeart />,
                  title: "Care",
                  description:
                    "Genuine concern for each student's growth and success",
                },
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 flex flex-col items-center justify-center backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center">
                    <div className="text-5xl mb-6  group-hover:animate-bounce">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="myPadY bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 flex flex-col items-center justify-center backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-md">
              <div className="text-6xl mb-8 text-black"><FaRocket /></div>
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of successful students who have transformed their
                academic journey with AristoCrafters. Let&apos;s build your
                bright future together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Link
                    href="/contact"
                    className="relative z-10 flex items-center justify-center space-x-2"
                  >
                    <span className="text-white drop-shadow-lg"><FaPhone /></span>
                    <span className="text-white drop-shadow-lg">
                      Contact Us Today
                    </span>
                  </Link>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>

                {/* <button className="group px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-blue-200 rounded-2xl font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-white hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📚</span>
                    <span>View Courses</span>
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

