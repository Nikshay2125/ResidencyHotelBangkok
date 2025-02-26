import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "About Us", href: "#aboutus" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Guest Reviews", href: "#reviews" },
  { label: "Nearby Attractions", href: "#attractions" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndexPage, setIsIndexPage] = useState(false);

  useEffect(() => {
    setIsIndexPage(window.location.pathname === "/");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsOpen(false); // Close menu on any scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (isIndexPage) {
      // Scroll to section if on the index page
      const section = document.querySelector(href);
      if (section) {
        const yOffset = -90; // Adjust this value as needed
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // Navigate to the homepage with the hash
      window.location.href = `/${href}`;
    }
  };
  
  

  // Determine text color based on scroll and page state
  const textColor = isIndexPage && !isScrolled ? "text-white" : "text-black";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className={`font-serif text-2xl font-bold ${textColor}`}>
              RESIDENCY HOTEL
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`font-sans text-sm transition-colors duration-200 ${textColor} hover:text-gold`}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="border-gold bg-gold text-white"
                onClick={() => {
                  const section = document.getElementById('booking');
                  const yOffset = -100; // Adjust this value as needed
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
              >
                BOOK NOW
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-200 ${textColor} hover:text-gold`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            

          </div>
        </div>
      </div>

      
       {/* Mobile menu */}
        {/* Mobile menu */}
<div
  className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setIsOpen(false)}
>
  <div
    className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="px-4 pt-5 pb-3 space-y-1">
      {navItems.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item.href);
            setIsOpen(false); // Close menu on click
          }}
          className="block px-3 py-2 text-base font-sans text-gray-700 hover:text-gold hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out"
        >
          {item.label}
        </a>
      ))}
    </div>
    {/* BOOK NOW button at the bottom */}
    <div className="px-4 pb-4">
      <Button
        variant="outline"
        className="w-full bg-gold text-white rounded-md py-2 transition-all duration-300 ease-in-out"
        onClick={() => {
          const section = document.getElementById('booking');
          const yOffset = -100; // Adjust this value as needed
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      >
        BOOK NOW
      </Button>
    </div>
  </div>
</div>



    </nav>
  );
};

export default Navbar;
