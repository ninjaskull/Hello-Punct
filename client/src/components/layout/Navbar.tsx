import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { href: "#services", label: "Services", testId: "link-services" },
    { href: "#pricing", label: "Pricing", testId: "link-pricing" },
    { href: "#contact", label: "Contact", testId: "link-contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "top-4 left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl" 
            : "bg-white/80 backdrop-blur-md border-transparent"
        )}
      >
        <div className={cn(
          "container mx-auto px-4 md:px-6 transition-all duration-300",
          isScrolled && "px-6 md:px-8"
        )}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-16">
            <Link href="/" data-testid="link-home" className="flex-shrink-0">
              <Logo variant="dark" className="h-10 w-auto object-contain" />
            </Link>

            <div className="flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.testId}
                  href={item.href}
                  data-testid={item.testId}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button 
                variant="ghost"
                className="hidden lg:inline-flex text-sm font-medium text-gray-700 hover:text-black gap-2 h-9"
                data-testid="button-call-now"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Link href="/booking">
                <Button 
                  className="bg-black text-white hover:bg-black/90 font-semibold rounded-lg text-sm h-10 px-5 inline-flex gap-2 transition-all duration-300"
                  data-testid="button-book-service"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between h-14">
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:bg-black/5 h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>

            <Link href="/" data-testid="link-home" className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
              <Logo variant="dark" className="h-11 w-auto object-contain" />
            </Link>

            <Link href="/booking">
              <Button
                className="bg-primary text-black hover:bg-primary/90 font-bold rounded-lg text-sm h-9 px-4 transition-all"
                data-testid="button-mobile-book-quick"
              >
                Book
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm" 
          onClick={closeMobileMenu} 
        />
      )}
      <div
        className={cn(
          "fixed left-0 top-0 h-screen w-80 bg-white z-40 md:hidden transform transition-transform duration-300 ease-out shadow-2xl",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Menu Header */}
        <div className="sticky top-0 bg-white py-4 px-6 border-b border-gray-200 flex items-center justify-between">
          <Logo variant="dark" className="h-10 w-auto object-contain" />
          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:bg-gray-100 h-9 w-9"
            onClick={closeMobileMenu}
            data-testid="button-close-menu"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="py-8 px-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.testId}
              href={item.href}
              onClick={closeMobileMenu}
              data-testid={item.testId}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 hover:text-black transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile CTA Buttons */}
        <div className="border-t border-gray-200 p-6 space-y-3">
          <Button 
            className="w-full bg-black text-white hover:bg-black/90 font-semibold rounded-lg h-11 transition-all"
            onClick={closeMobileMenu}
            data-testid="button-mobile-book"
          >
            Book Service
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-2 border-black text-black hover:bg-gray-50 font-semibold rounded-lg h-11"
            data-testid="button-mobile-call"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call +91 98765 43210
          </Button>
        </div>
      </div>
    </>
  );
}
