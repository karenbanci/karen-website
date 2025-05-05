import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'py-4 backdrop-blur-lg bg-black/50' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            KarenB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive('/')}>
              Home
            </NavLink>
            <NavLink to="/projects" isActive={isActive('/projects')}>
              Projects
            </NavLink>
            <NavLink to="/about" isActive={isActive('/about')}>
              About
            </NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/projects" isActive={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>
            Projects
          </MobileNavLink>
          <MobileNavLink to="/about" isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/contact" isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

// Desktop navigation link
function NavLink({ to, isActive, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors text-lg ${
        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
}

// Mobile navigation link
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

function MobileNavLink({ to, isActive, onClick, children }: MobileNavLinkProps) {
  return (
    <Link
      to={to}
      className={`block py-2 px-4 font-medium rounded-lg transition-colors ${
        isActive
          ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white'
          : 'text-gray-300 hover:text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
