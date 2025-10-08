import React from "react";
import Link from "next/link";
import { CiFaceSmile } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Our Subjects", href: "/#subjects" },
    { name: "Why Choose Us", href: "/about#why-choose-us" },
    { name: "Feedback", href: "/#feedback" },
  ];

  const subjects = [
    { name: "Tamil", href: "/#tamil" },
    { name: "Mathematics", href: "/#mathematics" },
    { name: "English", href: "/#english" },
    { name: "Science", href: "/#science" },
    { name: "Social Science", href: "/#social-science" },
    { name: "Hindi", href: "/#hindi" },
    { name: "Sanskrit", href: "/#sanskrit" },
  ];

  const resources = [
    { name: "Study Materials", href: "/#subjects" },
    { name: "Practice Tests", href: "/#subjects" },
    { name: "Video Lectures", href: "/#subjects" },
    { name: "Assignment Help", href: "/contact" },
    { name: "Exam Preparation", href: "/#subjects" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/yourpage",
      icon: <FaFacebook className="text-xl" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aristocrafters2",
      icon: <FaInstagram className="text-xl" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/yourchannel",
      icon: <FaYoutube className="text-xl" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      icon: <FaLinkedin className="text-xl" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500 opacity-10 rounded-full translate-x-40"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500 opacity-10 rounded-full translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-900 font-bold text-xl">AC</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AristoCrafters</h3>
                  <p className="text-gray-300 text-sm">Excellence in Education</p>
                </div>
              </div>
              {/* <Link
                href="/"
                className="flex items-start justify-start  cursor-pointer"
              >
                <div className="relative w-full max-w-[120px] lg:py-2 lg:max-w-[200px] h-auto">
                  <Image
                    src="/aristocrafters-logo.png"
                    alt="AristoCrafters"
                    layout="responsive"
                    width={100}
                    height={70}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </Link> */}

              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering students to achieve academic excellence through
                personalized tutoring, innovative teaching methods, and
                dedicated support. Join thousands of successful students who
                have transformed their academic journey with us.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">+91 93601 39254</p>
                    <p className="text-gray-400 text-sm">Call us anytime</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">aristocrafters2025@gmail.com</p>
                    <p className="text-gray-400 text-sm">Send us an email</p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">123 Education Street</p>
                    <p className="text-gray-400 text-sm">New Delhi, India 110001</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Subjects</h4>
              <ul className="space-y-3">
                {subjects.map((subject) => (
                  <li key={subject.name}>
                    <Link
                      href={subject.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {subject.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <p className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {resource.name}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              {/* <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-center">
                  <h5 className="font-bold mb-2 text-white">Stay Updated</h5>
                  <p className="text-gray-300 text-sm mb-6">Get latest updates on courses and offers</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Social Media & Awards */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-center lg:text-left">
                Follow Us
              </h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Awards & Certifications */}
            {/* <div className="text-center lg:text-right">
              <h4 className="text-lg font-bold mb-4">Trusted & Certified</h4>
              <div className="flex justify-center lg:justify-end space-x-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium">ISO Certified</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Award Winner</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Verified</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 AristoCrafters. All rights reserved. |
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300 ml-1"
                >
                  Privacy Policy
                </a>{" "}
                |
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300 ml-1"
                >
                  Terms of Service
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-md">
                    <CiFaceSmile className="text-xl" />
                  </span>
                </div>
                <span className="text-white font-medium text-sm">
                  Truelyzer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
