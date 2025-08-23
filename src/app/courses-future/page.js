// 'use client';
// import React, { useState } from 'react';

// const CoursesPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedLevel, setSelectedLevel] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     { id: 'all', name: 'All Courses', icon: '📚' },
//     { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
//     { id: 'science', name: 'Science', icon: '🔬' },
//     { id: 'english', name: 'English', icon: '📖' },
//     { id: 'competitive', name: 'Competitive Exams', icon: '🏆' },
//     { id: 'computer', name: 'Computer Science', icon: '💻' }
//   ];

//   const levels = [
//     { id: 'all', name: 'All Levels' },
//     { id: 'beginner', name: 'Beginner' },
//     { id: 'intermediate', name: 'Intermediate' },
//     { id: 'advanced', name: 'Advanced' }
//   ];

//   const courses = [
//     {
//       id: 1,
//       title: 'Advanced Mathematics',
//       category: 'mathematics',
//       level: 'advanced',
//       duration: '6 months',
//       students: 245,
//       rating: 4.9,
//       price: '₹15,000',
//       originalPrice: '₹20,000',
//       instructor: 'Dr. Rajesh Sharma',
//       description: 'Master calculus, algebra, and advanced mathematical concepts with our comprehensive program.',
//       features: ['Live Classes', 'Recorded Sessions', 'Practice Tests', 'Doubt Clearing'],
//       image: '🧮',
//       color: 'from-blue-500 to-purple-600',
//       popular: true
//     },
//     {
//       id: 2,
//       title: 'Physics Mastery',
//       category: 'science',
//       level: 'intermediate',
//       duration: '8 months',
//       students: 189,
//       rating: 4.8,
//       price: '₹12,000',
//       originalPrice: '₹16,000',
//       instructor: 'Prof. Priya Patel',
//       description: 'Comprehensive physics course covering mechanics, thermodynamics, and modern physics.',
//       features: ['Lab Sessions', 'Virtual Experiments', 'Problem Solving', 'Concept Building'],
//       image: '⚛️',
//       color: 'from-green-500 to-blue-600'
//     },
//     {
//       id: 3,
//       title: 'English Literature & Grammar',
//       category: 'english',
//       level: 'beginner',
//       duration: '4 months',
//       students: 156,
//       rating: 4.7,
//       price: '₹8,000',
//       originalPrice: '₹12,000',
//       instructor: 'Mr. Amit Kumar',
//       description: 'Improve your English skills with focus on grammar, vocabulary, and literature analysis.',
//       features: ['Speaking Practice', 'Writing Skills', 'Grammar Basics', 'Literature Study'],
//       image: '📝',
//       color: 'from-purple-500 to-pink-600'
//     },
//     {
//       id: 4,
//       title: 'JEE Main & Advanced',
//       category: 'competitive',
//       level: 'advanced',
//       duration: '12 months',
//       students: 324,
//       rating: 4.9,
//       price: '₹25,000',
//       originalPrice: '₹35,000',
//       instructor: 'Dr. Vikram Singh',
//       description: 'Complete JEE preparation with Physics, Chemistry, and Mathematics.',
//       features: ['Mock Tests', 'Previous Papers', 'Rank Prediction', 'Counseling'],
//       image: '🎯',
//       color: 'from-orange-500 to-red-600',
//       popular: true
//     },
//     {
//       id: 5,
//       title: 'Chemistry Fundamentals',
//       category: 'science',
//       level: 'beginner',
//       duration: '5 months',
//       students: 198,
//       rating: 4.6,
//       price: '₹10,000',
//       originalPrice: '₹14,000',
//       instructor: 'Ms. Sneha Gupta',
//       description: 'Build strong foundation in organic, inorganic, and physical chemistry.',
//       features: ['Practical Labs', 'Reaction Mechanisms', 'Formula Derivation', 'Problem Practice'],
//       image: '🧪',
//       color: 'from-teal-500 to-green-600'
//     },
//     {
//       id: 6,
//       title: 'Computer Programming',
//       category: 'computer',
//       level: 'intermediate',
//       duration: '6 months',
//       students: 267,
//       rating: 4.8,
//       price: '₹18,000',
//       originalPrice: '₹24,000',
//       instructor: 'Ms. Ritu Sharma',
//       description: 'Learn programming fundamentals with Python, Java, and web development basics.',
//       features: ['Hands-on Coding', 'Project Building', 'Industry Exposure', 'Certification'],
//       image: '💻',
//       color: 'from-indigo-500 to-purple-600'
//     },
//     {
//       id: 7,
//       title: 'NEET Biology',
//       category: 'competitive',
//       level: 'advanced',
//       duration: '10 months',
//       students: 289,
//       rating: 4.9,
//       price: '₹22,000',
//       originalPrice: '₹30,000',
//       instructor: 'Dr. Rajesh Sharma',
//       description: 'Complete NEET Biology preparation with Botany, Zoology, and Human Physiology.',
//       features: ['NCERT Focus', 'Diagram Practice', 'Memory Techniques', 'Test Series'],
//       image: '🧬',
//       color: 'from-green-400 to-blue-500',
//       popular: true
//     },
//     {
//       id: 8,
//       title: 'Spoken English',
//       category: 'english',
//       level: 'beginner',
//       duration: '3 months',
//       students: 134,
//       rating: 4.5,
//       price: '₹6,000',
//       originalPrice: '₹9,000',
//       instructor: 'Mr. Amit Kumar',
//       description: 'Improve your spoken English with confidence building and fluency training.',
//       features: ['Conversation Practice', 'Pronunciation', 'Confidence Building', 'Group Discussions'],
//       image: '🗣️',
//       color: 'from-pink-500 to-purple-600'
//     }
//   ];

//   const filteredCourses = courses.filter(course => {
//     const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
//     const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
//     return matchesCategory && matchesLevel && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Badge */}
//             <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg mb-8 group hover:scale-105 transition-all duration-500">
//               <span className="text-2xl mr-3 group-hover:animate-bounce">🎓</span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm tracking-wide">OUR COURSES</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 drop-shadow-sm">
//                 Discover Your
//               </span>
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
//                 Perfect Course
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
//               Choose from our comprehensive range of courses designed to help you excel in academics and competitive exams with expert guidance and proven methodologies.
//             </p>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
//               {[
//                 { number: '50+', label: 'Courses Available', icon: '📚' },
//                 { number: '2000+', label: 'Students Enrolled', icon: '👨‍🎓' },
//                 { number: '95%', label: 'Success Rate', icon: '🏆' },
//                 { number: '24/7', label: 'Support Available', icon: '🕒' }
//               ].map((stat, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
//                     <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
//                     <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">{stat.number}</div>
//                     <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters Section */}
//       <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-20 z-40 border-b border-white/20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             {/* Search Bar */}
//             <div className="mb-8">
//               <div className="relative max-w-md mx-auto">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <span className="text-2xl">🔍</span>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search courses or instructors..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             {/* Category Filters */}
//             <div className="mb-6">
//               <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
//                 <span className="mr-2">📂</span>
//                 Categories
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
//                       selectedCategory === category.id
//                         ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
//                         : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white border border-white/20'
//                     }`}
//                   >
//                     <span>{category.icon}</span>
//                     <span className="text-sm">{category.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Level Filters */}
//             <div>
//               <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
//                 <span className="mr-2">📊</span>
//                 Difficulty Level
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {levels.map((level) => (
//                   <button
//                     key={level.id}
//                     onClick={() => setSelectedLevel(level.id)}
//                     className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
//                       selectedLevel === level.id
//                         ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
//                         : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white border border-white/20'
//                     }`}
//                   >
//                     <span className="text-sm">{level.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             {/* Results Header */}
//             <div className="flex items-center justify-between mb-12">
//               <div>
//                 <h2 className="text-3xl font-black text-gray-900 mb-2">
//                   {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
//                 </h2>
//                 <p className="text-gray-600">
//                   {selectedCategory !== 'all' && `Filtered by ${categories.find(c => c.id === selectedCategory)?.name}`}
//                   {selectedLevel !== 'all' && ` • ${levels.find(l => l.id === selectedLevel)?.name} level`}
//                 </p>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <button className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white transition-all duration-300">
//                   <span>📊</span>
//                   <span className="text-sm font-semibold text-gray-700">Sort by</span>
//                 </button>
//               </div>
//             </div>

//             {/* Courses Grid */}
//             {filteredCourses.length > 0 ? (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredCourses.map((course) => (
//                   <div key={course.id} className="group">
//                     <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative">
//                       {/* Popular Badge */}
//                       {course.popular && (
//                         <div className="absolute top-4 right-4 z-10">
//                           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
//                             <span>⭐</span>
//                             <span>POPULAR</span>
//                           </div>
//                         </div>
//                       )}

//                       {/* Course Header */}
//                       <div className={`bg-gradient-to-br ${course.color} p-8 text-center relative overflow-hidden`}>
//                         <div className="relative z-10">
//                           <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                             {course.image}
//                           </div>
//                           <h3 className="text-2xl font-black text-white mb-2">{course.title}</h3>
//                           <p className="text-white/90 text-sm">{course.instructor}</p>
//                         </div>
                        
//                         {/* Decorative elements */}
//                         <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse" />
//                         <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-ping" />
//                       </div>

//                       {/* Course Content */}
//                       <div className="p-6">
//                         {/* Course Info */}
//                         <div className="flex items-center justify-between mb-4">
//                           <div className="flex items-center space-x-4">
//                             <div className="flex items-center space-x-1">
//                               <span className="text-yellow-500">⭐</span>
//                               <span className="text-sm font-bold text-gray-700">{course.rating}</span>
//                             </div>
//                             <div className="flex items-center space-x-1">
//                               <span className="text-blue-500">👥</span>
//                               <span className="text-sm text-gray-600">{course.students}</span>
//                             </div>
//                           </div>
                          
//                           <div className="flex items-center space-x-2">
//                             <span className={`px-2 py-1 rounded-full text-xs font-bold ${
//                               course.level === 'beginner' ? 'bg-green-100 text-green-700' :
//                               course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
//                               'bg-red-100 text-red-700'
//                             }`}>
//                               {course.level.toUpperCase()}
//                             </span>
//                           </div>
//                         </div>

//                         {/* Description */}
//                         <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

//                         {/* Features */}
//                         <div className="mb-6">
//                           <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
//                             <span className="mr-2">✨</span>
//                             What&apos;s Included
//                           </h4>
//                           <div className="grid grid-cols-2 gap-2">
//                             {course.features.map((feature, index) => (
//                               <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
//                                 <span className="text-green-500">✓</span>
//                                 <span>{feature}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Duration & Price */}
//                         <div className="flex items-center justify-between mb-6">
//                           <div className="flex items-center space-x-2">
//                             <span className="text-blue-500">⏱️</span>
//                             <span className="text-sm font-semibold text-gray-700">{course.duration}</span>
//                           </div>
                          
//                           <div className="text-right">
//                             <div className="flex items-center space-x-2">
//                               <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                                 {course.price}
//                               </span>
//                               <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
//                             </div>
//                             <div className="text-xs text-green-600 font-semibold">
//                               Save {Math.round((1 - parseInt(course.price.replace(/[^0-9]/g, '')) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
//                             </div>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="space-y-3">
//                           <button className="group relative w-full px-6 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-500 hover:scale-105 overflow-hidden">
//                             <div className={`absolute inset-0 bg-gradient-to-r ${course.color} transition-all duration-500`} />
//                             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                             <div className="relative z-10 flex items-center justify-center space-x-2">
//                               <span className="text-white drop-shadow-lg">🚀</span>
//                               <span className="text-white drop-shadow-lg">Enroll Now</span>
//                             </div>
//                             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//                           </button>
                          
//                           <button className="w-full px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl font-bold text-sm text-gray-700 hover:bg-white hover:scale-105 transition-all duration-300">
//                             <div className="flex items-center justify-center space-x-2">
//                               <span>👁️</span>
//                               <span>View Details</span>
//                             </div>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <div className="text-8xl mb-8">🔍</div>
//                 <h3 className="text-2xl font-black text-gray-700 mb-4">No Courses Found</h3>
//                 <p className="text-gray-600 mb-8">Try adjusting your filters or search terms to find the perfect course.</p>
//                 <button 
//                   onClick={() => {
//                     setSelectedCategory('all');
//                     setSelectedLevel('all');
//                     setSearchTerm('');
//                   }}
//                   className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
//                 >
//                   Clear All Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="text-6xl mb-8">🎯</div>
//             <h2 className="text-5xl font-black text-white mb-6">
//               Ready to Start Learning?
//             </h2>
//             <p className="text-xl text-white/90 mb-8 leading-relaxed">
//               Join thousands of successful students and transform your academic journey with our expert-led courses.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="group relative px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
//                 <div className="absolute inset-0 bg-white/20 backdrop-blur-md transition-all duration-500" />
//                 <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="relative z-10 flex items-center justify-center space-x-2">
//                   <span className="text-white drop-shadow-lg">📞</span>
//                   <span className="text-white drop-shadow-lg">Get Free Consultation</span>
//                 </div>
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//               </button>
              
//               <button className="group px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-2xl font-black text-lg text-white hover:bg-white/30 hover:scale-105 transition-all duration-500">
//                 <div className="flex items-center justify-center space-x-2">
//                   <span>🎥</span>
//                   <span>Watch Demo Classes</span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CoursesPage;

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
