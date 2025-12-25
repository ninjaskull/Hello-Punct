import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const mobileMenuItems = [
    { href: "/", label: "Home", testId: "link-mobile-home" },
    { href: "#services", label: "Services", testId: "link-mobile-services" },
    { href: "#pricing", label: "Bike Servicing", testId: "link-mobile-pricing" },
    { href: "#about", label: "About", testId: "link-mobile-about" },
    { href: "#contact", label: "Contact", testId: "link-mobile-contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-black/95 backdrop-blur-sm border-white/10 py-3" : "bg-black py-5"
        )}
      >
        <div className="container mx-auto px-3 md:px-6 flex items-center justify-between gap-3 md:gap-8">
          <Link href="/" data-testid="link-home">
            <Logo variant="light" className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" data-testid="link-home-nav" className="text-xs lg:text-sm font-medium text-white/90 hover:text-primary transition-colors">Home</Link>
            <a href="#services" className="text-xs lg:text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-services">Services</a>
            <a href="#pricing" className="text-xs lg:text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-pricing">Packages</a>
            <a href="#about" className="text-xs lg:text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-about">About</a>
            <a href="#contact" className="text-xs lg:text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-contact">Contact</a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button 
              variant="outline" 
              className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-black font-semibold rounded-lg uppercase tracking-wide text-xs h-10 px-4"
              data-testid="button-call-now"
            >
              <Phone className="w-3 h-3 mr-2" />
              Call Now
            </Button>
            <Button 
              className="bg-primary text-black hover:bg-primary/90 font-bold rounded-lg uppercase tracking-wide text-xs md:text-sm h-10 md:h-11 px-3 md:px-6 lg:px-8 whitespace-nowrap hidden md:flex"
              data-testid="button-book-service"
            >
              Book Service
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10 h-10 w-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm" onClick={closeMobileMenu} />
      )}
      <div
        className={cn(
          "fixed left-0 top-0 h-screen w-72 bg-black border-r border-primary/20 z-40 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Menu Header */}
        <div className="sticky top-0 bg-black py-6 px-6 border-b border-primary/20 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 h-9 w-9"
            onClick={closeMobileMenu}
            data-testid="button-close-menu"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="py-6 px-4 space-y-2">
          {mobileMenuItems.map((item) => (
            <a
              key={item.testId}
              href={item.href}
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg text-white font-medium hover:bg-primary/10 hover:text-primary transition-colors text-sm"
              data-testid={item.testId}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons in Mobile Menu */}
        <div className="border-t border-primary/20 p-4 space-y-3">
          <Button 
            className="w-full bg-primary text-black hover:bg-primary/90 font-bold rounded-lg uppercase tracking-wide text-sm h-11"
            onClick={closeMobileMenu}
            data-testid="button-mobile-book"
          >
            Book Service
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg uppercase tracking-wide text-sm h-11"
            data-testid="button-mobile-call"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </>
  );
}
