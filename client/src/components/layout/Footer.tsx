import { Link } from "wouter";
import Logo from "@/components/Logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo variant="light" className="h-16 w-auto object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for door-step vehicle repair and maintenance. Fast, reliable, and professional service at your convenience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" data-testid="social-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" data-testid="social-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" data-testid="social-twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" data-testid="footer-link-home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer" data-testid="footer-link-services">Our Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer" data-testid="footer-link-packages">Servicing Packages</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer" data-testid="footer-link-about">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer" data-testid="footer-link-contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Car Puncture Repair</li>
              <li className="text-gray-400 text-sm">Bike Puncture Repair</li>
              <li className="text-gray-400 text-sm">Tyre Replacement</li>
              <li className="text-gray-400 text-sm">Stepney Change</li>
              <li className="text-gray-400 text-sm">Full Bike Servicing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Call Anytime</p>
                  <p className="text-white font-medium">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Email Us</p>
                  <p className="text-white font-medium">support@hellopuncture.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Service Area</p>
                  <p className="text-white font-medium">Available across City Limits</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" data-testid="footer-copyright">© 2024 Hello Puncture. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
