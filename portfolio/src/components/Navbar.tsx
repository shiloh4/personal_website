import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userProfilePic from '../assets/pfp.jpg';
import { useDarkMode } from '../hooks/useDarkMode.tsx';

function ImageAvatar() {
  return (
    <img 
      src={userProfilePic} 
      alt="Ethan" 
      className="h-10 w-10 rounded-full object-cover border-2 border-tech-gold"
    />
  );
}

function ThemeToggleButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button 
      onClick={toggleDarkMode} 
      className="lg:p-2 p-1 rounded-full text-tech-gold hover:bg-light-paper dark:hover:bg-dark-paper transition-colors"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <nav 
        className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out 
          ${show ? 'transform-none' : '-translate-y-full'}
          bg-light-default/10 dark:bg-dark-default/10 backdrop-blur-md
          py-4 shadow-none`}
      >
        <div className={`flex justify-between items-center mx-auto px-4 ${isMobile ? 'w-mobile' : 'w-desktop'}`}>
          <div className="flex items-center">
            <Link to="/" className="block" title="That's me!">
              <ImageAvatar />
            </Link>
          </div>

          <div className="flex items-center">
            <Link to="/resume" className="mx-1">
              <button className="lg:px-3 py-1 text-tech-gold hover:bg-light-paper/30 dark:hover:bg-dark-paper/30 rounded transition-colors">
                resume
              </button>
            </Link>
            <Link to="/portfolio" className="mx-1">
              <button className="lg:px-3 py-1 text-tech-gold hover:bg-light-paper/30 dark:hover:bg-dark-paper/30 rounded transition-colors">
                portfolio
              </button>
            </Link>
            <Link to="/contact" className="mx-1">
              <button className="lg:px-3 py-1 text-tech-gold hover:bg-light-paper/30 dark:hover:bg-dark-paper/30 rounded transition-colors">
                contact
              </button>
            </Link>
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;