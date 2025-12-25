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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <Logo variant="light" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" data-testid="link-home-nav" className="text-sm font-medium text-white/90 hover:text-primary transition-colors">Home</Link>
          <a href="#services" className="text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-services">Services</a>
          <a href="#pricing" className="text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-pricing">Bike Servicing Packages</a>
          <a href="#about" className="text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-about">About</a>
          <a href="#contact" className="text-sm font-medium text-white/90 hover:text-primary transition-colors cursor-pointer" data-testid="link-contact">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-black font-semibold rounded-none uppercase tracking-wide text-xs"
            data-testid="button-call-now"
          >
            <Phone className="w-3 h-3 mr-2" />
            Call Now
          </Button>
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold rounded-none uppercase tracking-wide text-xs px-6"
            data-testid="button-book-service"
          >
            Book Door-Step Service
          </Button>
        </div>
      </div>
    </nav>
  );
}
