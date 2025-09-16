"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaPhone } from "react-icons/fa";
import StudentRegistrationForm from "./StudentRegistrationForm";
import TeacherApplicationForm from "./TeacherApplicationForm";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const router = useRouter();

  // Handle smooth scrolling to sections when navigating with hash
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    // Handle hash navigation on page load
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  const navigationItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaBook /> },
    // { name: 'Courses', href: '/courses', icon: '📚' },
    // { name: 'Why Choose Us', href: '/#why-choose-us', icon: '⭐' },
    // { name: 'Testimonials', href: '/#testimonials', icon: '💬' },
    { name: "Contact", href: "/contact", icon: <FaPhone /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white  py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 cursor-pointer"
            >
              {/* <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-black">AristoCrafters</h1>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div> */}
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
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/#feedback"
                className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
              >
                Feedback
              </Link>
              <Link
                href="/#faq"
                className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
              >
                FAQ
              </Link>
              <button
                onClick={() => setIsTeacherModalOpen(true)}
                className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
              >
                Apply as Teacher
              </button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Phone Number */}
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-black font-medium">+91 96778 93974</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-[10px] cursor-pointer flex items-center justify-center rounded-sm hover:bg-blue-700 transition-colors duration-200 text-center font-medium text-sm"
                >
                  <p> Start Learning </p>
                </button>
                {/* <button 
                  onClick={() => setIsTeacherModalOpen(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded-sm cursor-pointer hover:bg-green-700 transition-colors duration-200 font-medium text-sm"
                >
                  Apply as Teacher
                </button> */}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-black hover:text-gray-600 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-black hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/#feedback"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-black hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  Feedback
                </Link>

                <Link
                  href="/#faq"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-black hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  FAQ
                </Link>

                <button
                  onClick={() => {
                    setIsTeacherModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-black hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  Apply as Teacher
                </button>

                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 py-3 px-4">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-black font-medium">
                      +91 96778 93974
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mt-3">
                    <button
                      onClick={() => {
                        setIsStudentModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      Start Learning
                    </button>
                    <button
                      onClick={() => {
                        setIsTeacherModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                      Teach With Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <StudentRegistrationForm
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
      />
      <TeacherApplicationForm
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
      />
    </>
  );
};

export default Header;
