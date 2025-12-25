import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/attached_assets/1_HPC_38in_X_34in_One_way_Vision-removebg-preview-fotor-20250_1766664609446.webp" 
              alt="Hello Puncture" 
              className="h-16 w-auto object-contain brightness-0 invert" 
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for door-step vehicle repair and maintenance. Fast, reliable, and professional service at your convenience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/"><a className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></Link></li>
              <li><Link href="#services"><a className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</a></Link></li>
              <li><Link href="#pricing"><a className="text-gray-400 hover:text-white transition-colors text-sm">Servicing Packages</a></Link></li>
              <li><Link href="#about"><a className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></Link></li>
              <li><Link href="#contact"><a className="text-gray-400 hover:text-white transition-colors text-sm">Contact Support</a></Link></li>
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
          <p className="text-gray-500 text-sm">© 2024 Hello Puncture. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
