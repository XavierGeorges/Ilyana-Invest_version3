import React, { useState, useEffect } from 'react';
import { Landmark, Menu, X } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate('home');
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    
    // Allow React to render the home page components if we were on another page
    setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80; // Adjust for fixed header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, 100);
  };

  const navLinks = [
    { label: "Tiers de confiance", href: "#concept" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#roadmap" },
    { label: "Partenaires", href: "#ecosystem" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
          <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Ilyana Invest</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/20 block"
          >
            Réserver mon Créneau
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-6 shadow-2xl">
           {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-slate-900"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('booking');
            }}
            className="bg-primary text-white px-6 py-3 rounded-full text-base font-bold w-full text-center block"
          >
            Réserver mon Créneau
          </button>
        </div>
      )}
    </header>
  );
};