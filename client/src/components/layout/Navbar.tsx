import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            className="bg-primary text-black hover:bg-primary/90 font-bold rounded-lg uppercase tracking-wide text-xs md:text-sm h-10 md:h-11 px-3 md:px-6 lg:px-8 whitespace-nowrap"
            data-testid="button-book-service"
          >
            <span className="md:hidden">Book</span>
            <span className="hidden md:inline">Book Service</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
