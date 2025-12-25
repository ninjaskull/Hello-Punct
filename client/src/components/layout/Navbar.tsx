import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src="/attached_assets/1_HPC_38in_X_34in_One_way_Vision-removebg-preview-fotor-20250_1766664609446.webp" 
              alt="Hello Puncture" 
              className="h-12 w-auto object-contain brightness-0 invert" 
            />
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-sm font-medium text-white/90 hover:text-primary transition-colors">Home</a></Link>
          <Link href="#services"><a className="text-sm font-medium text-white/90 hover:text-primary transition-colors">Services</a></Link>
          <Link href="#pricing"><a className="text-sm font-medium text-white/90 hover:text-primary transition-colors">Bike Servicing Packages</a></Link>
          <Link href="#about"><a className="text-sm font-medium text-white/90 hover:text-primary transition-colors">About</a></Link>
          <Link href="#contact"><a className="text-sm font-medium text-white/90 hover:text-primary transition-colors">Contact</a></Link>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-black font-semibold rounded-none uppercase tracking-wide text-xs"
          >
            <Phone className="w-3 h-3 mr-2" />
            Call Now
          </Button>
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold rounded-none uppercase tracking-wide text-xs px-6"
          >
            Book Door-Step Service
          </Button>
        </div>
      </div>
    </nav>
  );
}
