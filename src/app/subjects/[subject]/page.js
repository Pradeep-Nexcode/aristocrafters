// "use client";

// import React from "react";
// import { notFound } from "next/navigation";
// import {
//   FaGraduationCap,
//   FaUsers,
//   FaStar,
//   FaClock,
//   FaBookOpen,
//   FaChartLine,
//   FaUserTie,
//   FaLightbulb,
//   FaCheckCircle,
//   FaPlay,
//   FaDownload,
//   FaCalendarAlt,
//   FaBook,
//   FaCalculator,
//   FaMicroscope,
//   FaGlobe,
//   FaPen,
//   FaScroll,
//   FaMusic,
//   FaTheaterMasks,
//   FaMicrophone,
//   FaPuzzlePiece,
//   FaBolt,
//   FaCastle,
//   FaMagic,
//   FaBrain,
//   FaRuler,
//   FaFlask,
//   FaDna,
//   FaEarth,
//   FaClock as FaClockIcon,
//   FaSearch,
//   FaLandmark,
//   FaNewspaper,
//   FaPalette,
//   FaFilm,
//   FaTongue,
//   FaCubes,
//   FaParty,
//   FaOm,
//   FaChartBar,
// } from "react-icons/fa";
// import { TbBooks } from "react-icons/tb";

// // Subject data with detailed information
// const subjectsData = {
//   tamil: {
//     name: "Tamil",
//     description: "Strong foundation in grammar, reading, comprehension & writing",
//     icon: <FaBook />,
//     color: "blue",
//     students: "15K+",
//     rating: "4.9",
//     duration: "6-12 months",
//     topics: ["Grammar", "Reading", "Writing"],
//     overview: "Master Tamil language with our comprehensive curriculum designed for students from grades 1-12. Our expert teachers focus on building strong fundamentals in grammar, vocabulary, and literature appreciation.",
//     curriculum: [
//       {
//         module: "Foundation Grammar",
//         topics: ["Basic sentence structure", "Noun and verb identification", "Simple tenses", "Punctuation rules"],
//         duration: "4 weeks"
//       },
//       {
//         module: "Reading & Comprehension",
//         topics: ["Story reading", "Poem analysis", "Comprehension exercises", "Vocabulary building"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Creative Writing",
//         topics: ["Essay writing", "Letter writing", "Story composition", "Poetry appreciation"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Literature & Culture",
//         topics: ["Classical literature", "Modern poetry", "Cultural context", "Literary devices"],
//         duration: "6 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Tamil Poetry Magic",
//         description: "Learn beautiful Tamil poems with rhythm and melody! Use music to remember verses and understand deeper meanings.",
//         icon: <FaMusic />
//       },
//       {
//         title: "Grammar Through Stories",
//         description: "Master Tamil grammar rules through engaging stories and characters. Make complex rules simple and memorable!",
//         icon: <FaBook />
//       },
//       {
//         title: "Cultural Connection",
//         description: "Connect Tamil language with rich cultural traditions, festivals, and history. Learn language through cultural stories!",
//         icon: <FaTheaterMasks />
//       },
//       {
//         title: "Word Building Games",
//         description: "Build vocabulary through fun word games, puzzles, and creative exercises. Make learning Tamil words exciting!",
//         icon: <FaPuzzlePiece />
//       },
//       {
//         title: "Speaking Confidence",
//         description: "Build confidence in Tamil speaking through role-plays, debates, and storytelling sessions. Speak Tamil fluently!",
//         icon: <FaMicrophone />
//       }
//     ],
//     features: [
//       "One-on-one personalized attention",
//       "Interactive digital learning materials",
//       "Regular progress assessments",
//       "Flexible scheduling options",
//       "Expert native Tamil teachers",
//       "Cultural context integration"
//     ]
//   },
//   english: {
//     name: "English",
//     description: "Grammar, vocabulary, reading skills & exam preparation",
//     icon: <FaBook />,
//     color: "purple",
//     students: "18K+",
//     rating: "4.9",
//     duration: "8-12 months",
//     topics: ["Grammar", "Vocabulary", "Reading"],
//     overview: "Develop fluency in English with our structured approach covering grammar, vocabulary, reading comprehension, and communication skills for academic and practical success.",
//     curriculum: [
//       {
//         module: "Grammar Fundamentals",
//         topics: ["Parts of speech", "Sentence structure", "Tenses", "Active/Passive voice"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Vocabulary Building",
//         topics: ["Word formation", "Synonyms & antonyms", "Idioms & phrases", "Context clues"],
//         duration: "4 weeks"
//       },
//       {
//         module: "Reading & Comprehension",
//         topics: ["Reading strategies", "Text analysis", "Critical thinking", "Speed reading"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Writing Skills",
//         topics: ["Essay writing", "Creative writing", "Formal letters", "Report writing"],
//         duration: "6 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Word Power Explosion",
//         description: "Learn 10 new words daily with fun memory tricks! Use word associations, rhymes, and visual imagery to never forget vocabulary.",
//         icon: <FaBolt />
//       },
//       {
//         title: "Grammar Made Simple",
//         description: "Master tricky grammar rules with catchy songs and rhymes. Turn confusing tenses into memorable melodies!",
//         icon: <FaMusic />
//       },
//       {
//         title: "Speed Reading Secrets",
//         description: "Double your reading speed while improving comprehension! Learn eye movement techniques and chunking methods.",
//         icon: <FaBolt />
//       },
//       {
//         title: "Accent & Pronunciation Magic",
//         description: "Speak like a native with tongue twisters, mirror practice, and phonetic games. Perfect your English accent!",
//         icon: <FaTheaterMasks />
//       },
//       {
//         title: "Essay Writing Formula",
//         description: "Write impressive essays using the secret PEEL structure. Turn your thoughts into powerful, persuasive writing!",
//         icon: <FaPen />
//       }
//     ],
//     features: [
//       "Native English speaker teachers",
//       "Interactive speaking sessions",
//       "Comprehensive grammar coverage",
//       "Exam preparation support",
//       "Digital learning resources",
//       "Pronunciation improvement tools"
//     ]
//   },
//   mathematics: {
//     name: "Mathematics",
//     description: "Conceptual clarity, problem-solving, and application skills",
//     icon: <FaCalculator />,
//     color: "green",
//     students: "20K+",
//     rating: "4.8",
//     duration: "10-15 months",
//     topics: ["Algebra", "Geometry", "Problem Solving"],
//     overview: "Build strong mathematical foundations with our step-by-step approach focusing on conceptual understanding, problem-solving techniques, and real-world applications.",
//     curriculum: [
//       {
//         module: "Number Systems",
//         topics: ["Natural numbers", "Integers", "Fractions", "Decimals", "Percentages"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Algebra Basics",
//         topics: ["Variables", "Linear equations", "Inequalities", "Graphing"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Geometry",
//         topics: ["Shapes", "Area & perimeter", "Volume", "Coordinate geometry"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Statistics & Probability",
//         topics: ["Data collection", "Charts & graphs", "Mean, median, mode", "Basic probability"],
//         duration: "6 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Lightning Fast Multiplication",
//         description: "Learn Vedic math tricks to multiply 2-digit numbers in seconds! Master the cross-multiplication method and amaze everyone.",
//         icon: <FaBolt />
//       },
//       {
//         title: "Formula Memory Palace",
//         description: "Create visual stories to remember complex formulas. Turn boring equations into unforgettable adventures!",
//         icon: <FaCastle />
//       },
//       {
//         title: "Number Pattern Magic",
//         description: "Discover hidden patterns in numbers that make calculations super easy. Learn the secrets mathematicians use!",
//         icon: <FaMagic />
//       },
//       {
//         title: "Mental Math Shortcuts",
//         description: "Calculate percentages, squares, and roots in your head faster than a calculator. Become a human calculator!",
//         icon: <FaBrain />
//       },
//       {
//         title: "Geometry Visualization",
//         description: "See shapes come alive! Learn to visualize 3D objects and solve geometry problems with ease.",
//         icon: <FaRuler />
//       }
//     ],
//     features: [
//       "Visual learning with diagrams",
//       "Step-by-step problem solving",
//       "Real-world applications",
//       "Interactive math tools",
//       "Regular practice sessions",
//       "Concept mastery approach"
//     ]
//   },
//   science: {
//     name: "Science",
//     description: "Simplified explanations in Physics, Chemistry & Biology",
//     icon: <FaMicroscope />,
//     color: "orange",
//     students: "16K+",
//     rating: "4.7",
//     duration: "12-18 months",
//     topics: ["Physics", "Chemistry", "Biology"],
//     overview: "Explore the wonders of science through hands-on experiments, interactive demonstrations, and simplified explanations that make complex concepts easy to understand.",
//     curriculum: [
//       {
//         module: "Physics Fundamentals",
//         topics: ["Motion & forces", "Energy", "Light & sound", "Electricity basics"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Chemistry Basics",
//         topics: ["Matter & states", "Elements & compounds", "Chemical reactions", "Acids & bases"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Biology Essentials",
//         topics: ["Living organisms", "Human body systems", "Plants & animals", "Environment"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Scientific Method",
//         topics: ["Observation", "Hypothesis", "Experimentation", "Data analysis"],
//         duration: "4 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Kitchen Chemistry Lab",
//         description: "Turn your kitchen into a chemistry lab! Learn reactions with baking soda volcanoes, pH tests with cabbage, and crystal growing!",
//         icon: <FaFlask />
//       },
//       {
//         title: "Physics in Action",
//         description: "See physics everywhere! Understand gravity with sports, learn waves with music, and master electricity with everyday gadgets.",
//         icon: <FaBolt />
//       },
//       {
//         title: "Biology Memory Tricks",
//         description: "Remember complex biological processes with fun acronyms, body part songs, and visual mnemonics. Make biology unforgettable!",
//         icon: <FaDna />
//       },
//       {
//         title: "Science Storytelling",
//         description: "Learn scientific concepts through exciting stories! Follow atoms on adventures and join cells on their daily missions.",
//         icon: <FaBook />
//       },
//       {
//         title: "Real-World Connections",
//         description: "Connect every concept to real life! Understand photosynthesis through cooking, learn about forces through sports.",
//         icon: <FaEarth />
//       }
//     ],
//     features: [
//       "Virtual lab experiments",
//       "Interactive simulations",
//       "Real-world connections",
//       "Visual learning materials",
//       "Hands-on activities",
//       "Scientific thinking development"
//     ]
//   },
//   "social-science": {
//     name: "Social Science",
//     description: "Easy learning methods for History, Geography, Civics & Economics",
//     icon: <FaGlobe />,
//     color: "red",
//     students: "12K+",
//     rating: "4.8",
//     duration: "8-12 months",
//     topics: ["History", "Geography", "Civics"],
//     overview: "Understand the world around you through engaging stories, interactive maps, and practical examples that bring history, geography, and civics to life.",
//     curriculum: [
//       {
//         module: "History Exploration",
//         topics: ["Ancient civilizations", "Medieval period", "Modern history", "Cultural heritage"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Geography Adventures",
//         topics: ["Physical geography", "Climate & weather", "Natural resources", "World regions"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Civics & Government",
//         topics: ["Democracy", "Rights & duties", "Government structure", "Constitution basics"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Economics Basics",
//         topics: ["Money & banking", "Trade & commerce", "Resources", "Economic systems"],
//         duration: "4 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Time Travel Adventures",
//         description: "Journey through history like a time traveler! Experience ancient civilizations, meet historical figures, and witness epic events!",
//         icon: <FaClockIcon />
//       },
//       {
//         title: "Geography Detective",
//         description: "Become a geography detective! Solve mysteries about countries, discover hidden treasures on maps, and explore world wonders!",
//         icon: <FaSearch />
//       },
//       {
//         title: "Government Role-Play",
//         description: "Run your own government! Be a president, judge, or citizen. Learn civics through exciting role-playing games!",
//         icon: <FaLandmark />
//       },
//       {
//         title: "History Memory Palace",
//         description: "Build a memory palace for historical dates and events! Use visual stories and connections to never forget important facts.",
//         icon: <FaCastle />
//       },
//       {
//         title: "Current Events Connection",
//         description: "Connect past to present! See how historical events shape today's world. Make learning relevant and exciting!",
//         icon: <FaNewspaper />
//       }
//     ],
//     features: [
//       "Interactive historical timelines",
//       "Digital maps and atlases",
//       "Current events integration",
//       "Cultural awareness programs",
//       "Project-based learning",
//       "Critical thinking development"
//     ]
//   },
//   hindi: {
//     name: "Hindi",
//     description: "Improve grammar, vocabulary, reading & writing fluency in Hindi",
//     icon: <FaPen />,
//     color: "pink",
//     students: "10K+",
//     rating: "4.8",
//     duration: "6-10 months",
//     topics: ["Grammar", "Comprehension", "Writing"],
//     overview: "Develop proficiency in Hindi language through systematic learning of Devanagari script, grammar rules, and literature appreciation with cultural context.",
//     curriculum: [
//       {
//         module: "Devanagari Script",
//         topics: ["Letter recognition", "Writing practice", "Vowels & consonants", "Conjunct letters"],
//         duration: "4 weeks"
//       },
//       {
//         module: "Grammar Foundation",
//         topics: ["Noun & pronouns", "Verbs & tenses", "Sentence formation", "Gender rules"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Reading & Comprehension",
//         topics: ["Story reading", "Poetry appreciation", "Comprehension exercises", "Vocabulary building"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Writing Skills",
//         topics: ["Essay writing", "Letter writing", "Creative writing", "Formal writing"],
//         duration: "6 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Devanagari Art Magic",
//         description: "Turn Hindi letters into beautiful art! Learn script through creative drawing, calligraphy, and visual memory techniques.",
//         icon: <FaPalette />
//       },
//       {
//         title: "Bollywood Learning",
//         description: "Learn Hindi through popular Bollywood songs, dialogues, and movies! Make language learning fun and entertaining.",
//         icon: <FaFilm />
//       },
//       {
//         title: "Hindi Tongue Twisters",
//         description: "Master pronunciation with fun tongue twisters and rhyming games! Perfect your Hindi accent through playful practice.",
//         icon: <FaTongue />
//       },
//       {
//         title: "Story Building Blocks",
//         description: "Build vocabulary by creating your own Hindi stories! Use new words in creative narratives and remember them forever.",
//         icon: <FaCubes />
//       },
//       {
//         title: "Cultural Immersion",
//         description: "Experience Hindi culture through festivals, traditions, and customs. Learn language through cultural celebrations!",
//         icon: <FaParty />
//       }
//     ],
//     features: [
//       "Devanagari script mastery",
//       "Audio pronunciation guides",
//       "Cultural context learning",
//       "Literature appreciation",
//       "Interactive writing practice",
//       "Native Hindi teachers"
//     ]
//   },
//   sanskrit: {
//     name: "Sanskrit",
//     description: "Learn Sanskrit basics, shlokas, grammar & translation skills",
//     icon: <FaScroll />,
//     color: "yellow",
//     students: "8K+",
//     rating: "4.7",
//     duration: "8-12 months",
//     topics: ["Shlokas", "Grammar", "Translation"],
//     overview: "Discover the beauty of Sanskrit language through systematic learning of Devanagari script, basic grammar, shloka recitation, and translation techniques.",
//     curriculum: [
//       {
//         module: "Sanskrit Alphabet",
//         topics: ["Devanagari script", "Vowels & consonants", "Pronunciation rules", "Writing practice"],
//         duration: "4 weeks"
//       },
//       {
//         module: "Basic Grammar",
//         topics: ["Noun declensions", "Verb conjugations", "Sandhi rules", "Sentence structure"],
//         duration: "8 weeks"
//       },
//       {
//         module: "Shloka Learning",
//         topics: ["Popular shlokas", "Pronunciation", "Meaning understanding", "Recitation practice"],
//         duration: "6 weeks"
//       },
//       {
//         module: "Translation Skills",
//         topics: ["Simple sentences", "Story translation", "Shloka meanings", "Cultural context"],
//         duration: "6 weeks"
//       }
//     ],
//     teachingTricks: [
//       {
//         title: "Shloka Singing",
//         description: "Learn Sanskrit shlokas through beautiful melodies and rhythms! Turn ancient verses into memorable songs.",
//         icon: <FaMusic />
//       },
//       {
//         title: "Sanskrit Detective",
//         description: "Discover the roots of English words in Sanskrit! Become a word detective and find amazing connections.",
//         icon: <FaSearch />
//       },
//       {
//         title: "Mantra Power",
//         description: "Experience the power of Sanskrit mantras! Learn pronunciation through meditation and spiritual practice.",
//         icon: <FaOm />
//       },
//       {
//         title: "Grammar Patterns",
//         description: "Discover beautiful patterns in Sanskrit grammar! Use visual charts and memory techniques to master complex rules.",
//         icon: <FaChartBar />
//       },
//       {
//         title: "Ancient Wisdom Stories",
//         description: "Learn Sanskrit through ancient stories and wisdom tales! Connect language learning with timeless teachings.",
//         icon: <FaScroll />
//       }
//     ],
//     features: [
//       "Traditional teaching methods",
//       "Shloka recitation practice",
//       "Cultural significance learning",
//       "Translation skill development",
//       "Audio pronunciation guides",
//       "Expert Sanskrit scholars"
//     ]
//   }
// };

// const getColorClasses = (color) => {
//   const colors = {
//     blue: {
//       bg: "bg-blue-50",
//       icon: "bg-blue-600",
//       text: "text-blue-600",
//       border: "border-blue-200",
//       hover: "hover:border-blue-400",
//       gradient: "from-blue-600 to-blue-700"
//     },
//     green: {
//       bg: "bg-green-50",
//       icon: "bg-green-600",
//       text: "text-green-600",
//       border: "border-green-200",
//       hover: "hover:border-green-400",
//       gradient: "from-green-600 to-green-700"
//     },
//     purple: {
//       bg: "bg-purple-50",
//       icon: "bg-purple-600",
//       text: "text-purple-600",
//       border: "border-purple-200",
//       hover: "hover:border-purple-400",
//       gradient: "from-purple-600 to-purple-700"
//     },
//     orange: {
//       bg: "bg-orange-50",
//       icon: "bg-orange-600",
//       text: "text-orange-600",
//       border: "border-orange-200",
//       hover: "hover:border-orange-400",
//       gradient: "from-orange-600 to-orange-700"
//     },
//     red: {
//       bg: "bg-red-50",
//       icon: "bg-red-600",
//       text: "text-red-600",
//       border: "border-red-200",
//       hover: "hover:border-red-400",
//       gradient: "from-red-600 to-red-700"
//     },
//     pink: {
//       bg: "bg-pink-50",
//       icon: "bg-pink-600",
//       text: "text-pink-600",
//       border: "border-pink-200",
//       hover: "hover:border-pink-400",
//       gradient: "from-pink-600 to-pink-700"
//     },
//     yellow: {
//       bg: "bg-yellow-50",
//       icon: "bg-yellow-600",
//       text: "text-yellow-600",
//       border: "border-yellow-200",
//       hover: "hover:border-yellow-400",
//       gradient: "from-yellow-600 to-yellow-700"
//     }
//   };
//   return colors[color] || colors.blue;
// };

// export default function SubjectDetailPage({ params, onOpenModal }) {
//   const { subject } = params;
//   const subjectData = subjectsData[subject];

//   if (!subjectData) {
//     notFound();
//   }

//   const colorClasses = getColorClasses(subjectData.color);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 -translate-x-48 opacity-30"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-y-48 translate-x-48 opacity-30"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 shadow-lg">
//               <TbBooks className="mr-2 text-blue-600" />
//               Subject Details
//             </div>
            
//             <div className={`inline-flex items-center justify-center w-24 h-24 ${colorClasses.icon} rounded-3xl text-4xl text-white shadow-2xl mb-6`}>
//               {subjectData.icon}
//             </div>
            
//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               {subjectData.name}
//               <span className="block text-3xl lg:text-4xl text-gray-600 font-normal mt-2">
//                 Mastery Program
//               </span>
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//               {subjectData.overview}
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-6 mb-8">
//               <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
//                 <FaUsers className="text-blue-600" />
//                 <span className="font-semibold">{subjectData.students} Students</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
//                 <FaStar className="text-yellow-500" />
//                 <span className="font-semibold">{subjectData.rating} Rating</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
//                 <FaClock className="text-green-600" />
//                 <span className="font-semibold">{subjectData.duration}</span>
//               </div>
//             </div>
            
//             <button className={`px-8 py-4 bg-gradient-to-r ${colorClasses.gradient} text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1`}>
//               <FaPlay className="inline mr-2" />
//               Start Learning Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Teaching Tricks Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Our Teaching <span className={colorClasses.text}>Tricks</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Innovative methods and techniques that make learning fun and memorable
//             </p>
//           </div>
          
//           <div className="max-w-6xl mx-auto">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {subjectData.teachingTricks.map((trick, index) => (
//                 <div key={index} className="relative">
//                   <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
//                     <div className="text-center mb-6">
//                       <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.icon} rounded-2xl text-3xl mb-4 shadow-lg`}>
//                         {trick.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-3">{trick.title}</h3>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed text-center">{trick.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Curriculum Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Comprehensive <span className={colorClasses.text}>Curriculum</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Structured learning modules designed for progressive skill development
//             </p>
//           </div>
          
//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-6">
//               {subjectData.curriculum.map((module, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                   <div className="p-8">
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex items-center gap-4">
//                         <div className={`w-12 h-12 ${colorClasses.icon} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
//                           {index + 1}
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900">{module.module}</h3>
//                           <div className="flex items-center gap-2 mt-1">
//                             <FaClock className="text-gray-400 text-sm" />
//                             <span className="text-gray-600 font-medium">{module.duration}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="grid md:grid-cols-2 gap-4">
//                       {module.topics.map((topic, topicIndex) => (
//                         <div key={topicIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
//                           <FaCheckCircle className={`${colorClasses.text} flex-shrink-0`} />
//                           <span className="text-gray-700 font-medium">{topic}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Why Choose Our <span className={colorClasses.text}>{subjectData.name}</span> Program?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Unique features that make our teaching approach effective and engaging
//             </p>
//           </div>
          
//           <div className="max-w-6xl mx-auto">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {subjectData.features.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                   <div className={`w-8 h-8 ${colorClasses.icon} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
//                     <FaLightbulb className="text-white text-sm" />
//                   </div>
//                   <div>
//                     <p className="text-gray-800 font-medium leading-relaxed">{feature}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`py-20 bg-gradient-to-r ${colorClasses.gradient} text-white relative overflow-hidden`}>
//         <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Ready to Master {subjectData.name}?
//             </h2>
//             <p className="text-xl mb-8 opacity-90">
//               Join thousands of students who have already started their learning journey with us
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 onClick={onOpenModal}
//                 className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <FaCalendarAlt className="inline mr-2" />
//                 Book Free Demo
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
//                 <FaDownload className="inline mr-2" />
//                 Download Curriculum
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
