import { Link } from "wouter";
import Logo from "@/components/Logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 md:pt-24 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Logo variant="light" className="h-12 w-auto object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Professional vehicle repair and maintenance service delivered to your doorstep. Fast, reliable, and trusted.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, testId: "social-facebook" },
                { icon: Instagram, testId: "social-instagram" },
                { icon: Twitter, testId: "social-twitter" },
                { icon: Linkedin, testId: "social-linkedin" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.testId}
                    href="#" 
                    data-testid={social.testId}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-8 text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-3.5">
              <li><Link href="/" data-testid="footer-link-home" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Home</Link></li>
              <li><a href="#services" data-testid="footer-link-services" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium cursor-pointer">Services</a></li>
              <li><a href="#pricing" data-testid="footer-link-packages" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium cursor-pointer">Pricing</a></li>
              <li><a href="#about" data-testid="footer-link-about" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium cursor-pointer">About Us</a></li>
              <li><a href="#contact" data-testid="footer-link-contact" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium cursor-pointer">Support</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base mb-8 text-white tracking-tight">Services</h4>
            <ul className="space-y-3.5">
              <li className="text-gray-400 text-sm font-medium">Puncture Repair</li>
              <li className="text-gray-400 text-sm font-medium">Tyre Change</li>
              <li className="text-gray-400 text-sm font-medium">Bike Servicing</li>
              <li className="text-gray-400 text-sm font-medium">Oil Change</li>
              <li className="text-gray-400 text-sm font-medium">General Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-base mb-8 text-white tracking-tight">Get In Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Phone</p>
                  <p className="text-white text-sm font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Email</p>
                  <p className="text-white text-sm font-medium">support@hellopuncture.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Service Area</p>
                  <p className="text-white text-sm font-medium">Across City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium" data-testid="footer-copyright">© 2024 Hello Puncture. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" data-testid="link-privacy" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" data-testid="link-terms" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
