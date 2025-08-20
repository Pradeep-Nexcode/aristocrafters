'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '📖' },
    { name: 'Courses', href: '/courses', icon: '📚' },
    { name: 'Why Choose Us', href: '/#why-choose-us', icon: '⭐' },
    { name: 'Testimonials', href: '/#testimonials', icon: '💬' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  return (
    <>
      {/* Backdrop blur overlay */}
      <div className={`fixed top-0 left-0 right-0 h-24 z-40 transition-all duration-700 ${
        isScrolled ? 'bg-white/10 backdrop-blur-xl' : 'bg-transparent'
      }`} />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-2xl shadow-black/5 border-b border-white/20' 
          : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm'
      }`}>
        {/* Animated gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 group">
            <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-blue-500/25' 
                : 'bg-gradient-to-br from-white/20 via-white/10 to-transparent border border-white/30 backdrop-blur-sm shadow-white/10'
            }`}>
              {/* Animated background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className={`relative z-10 font-black text-xl tracking-tight transition-all duration-500 ${
                isScrolled ? 'text-white' : 'text-white drop-shadow-lg'
              }`}>AC</span>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
            </div>
            <div className="transition-all duration-500 group-hover:translate-x-1">
              <h1 className={`text-2xl font-black tracking-tight transition-all duration-500 ${
                isScrolled 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800' 
                  : 'text-white drop-shadow-2xl'
              }`}>
                AristoCrafters
              </h1>
              <p className={`text-sm font-medium tracking-wide transition-all duration-500 ${
                isScrolled 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-blue-600' 
                  : 'text-white/90 drop-shadow-lg'
              }`}>
                Excellence in Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative px-4 py-2 rounded-xl font-semibold text-sm tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25' 
                    : 'text-white/90 hover:text-white hover:bg-white/20 hover:backdrop-blur-md hover:shadow-lg hover:shadow-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                
                {/* Icon and text */}
                <div className="flex items-center space-x-2 relative z-10">
                  <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300">{item.icon}</span>
                  <span className="relative">
                    {item.name}
                    {/* Underline effect */}
                    <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${
                      isScrolled 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                        : 'bg-white'
                    } scale-x-0 group-hover:scale-x-100`} />
                  </span>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-600 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-20" />
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Phone Number */}
            <div className="group flex items-center space-x-3 cursor-pointer">
              <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50 shadow-lg shadow-blue-500/10' 
                  : 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-white/10'
              }`}>
                {/* Animated background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <svg className={`relative z-10 w-5 h-5 transition-all duration-500 ${
                  isScrolled ? 'text-blue-600 group-hover:text-white' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 animate-pulse opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </div>
              <div className="transition-all duration-500 group-hover:translate-x-1">
                <p className={`text-sm font-bold tracking-wide transition-all duration-500 ${
                  isScrolled 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-700' 
                    : 'text-white drop-shadow-lg'
                }`}>
                  +91-9876543210
                </p>
                <p className={`text-xs font-medium tracking-wide transition-all duration-500 ${
                  isScrolled 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-purple-600' 
                    : 'text-white/80 drop-shadow-md'
                }`}>
                  📞 Call Now
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-3 rounded-2xl font-black text-sm tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center space-x-2">
                <span className="text-white drop-shadow-lg">🚀</span>
                <span className="text-white drop-shadow-lg">Book Free Demo</span>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`group lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 ${
              isScrolled 
                ? 'bg-gradient-to-br from-gray-100 to-blue-100 border border-gray-200/50 text-gray-900 shadow-lg shadow-blue-500/10' 
                : 'bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg shadow-white/10'
            }`}
          >
            {/* Animated background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <svg className="relative z-10 w-6 h-6 transition-all duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/10 animate-in slide-in-from-top-2 duration-500">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50" />
            
            <div className="relative z-10 px-6 py-8 space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center space-x-3 py-4 px-5 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                  </div>
                  
                  {/* Text */}
                  <span className="flex-1 transition-all duration-500">{item.name}</span>
                  
                  {/* Arrow */}
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-6 mt-6 border-t border-gradient-to-r from-blue-200 to-purple-200">
                <div className="group flex items-center space-x-4 py-4 px-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold text-lg">+91-9876543210</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium">📞 Call for Free Consultation</p>
                  </div>
                </div>
                
                <button className="group relative w-full mt-6 px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 hover:scale-105 overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center space-x-3">
                    <span className="text-white drop-shadow-lg text-xl">🚀</span>
                    <span className="text-white drop-shadow-lg">Book Free Demo Now</span>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;