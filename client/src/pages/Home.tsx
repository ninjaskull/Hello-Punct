import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Settings, 
  Bike, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Disc
} from "lucide-react";
import { motion } from "framer-motion";

// Stock images
import heroImage from "@assets/stock_images/mechanic_repairing_c_25c5e607.jpg";
import bikeServiceImage from "@assets/stock_images/mechanic_servicing_m_2b00c474.jpg";
import tyreImage from "@assets/stock_images/car_tyre_close_up_tr_febb9c67.jpg";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
          <img 
            src={heroImage} 
            alt="Mechanic repairing tyre" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-primary font-bold text-xs tracking-widest uppercase">One Call Service | Your Problems, Our Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Door-Step Puncture <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                & Bike Servicing
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Car & Bike puncture repair, tyre change, and complete bike servicing done at your place. Fast. Reliable. Professional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold h-14 px-8 text-base rounded-none uppercase tracking-wide">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold h-14 px-8 text-base rounded-none uppercase tracking-wide">
                View Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-start opacity-80">
              <div className="flex items-center gap-3">
                <Clock className="text-primary w-6 h-6" />
                <span className="text-white font-medium text-sm">30 Min Arrival</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary w-6 h-6" />
                <span className="text-white font-medium text-sm">Warranty Assured</span>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="text-primary w-6 h-6" />
                <span className="text-white font-medium text-sm">Expert Mechanics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Our Core Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600">Professional vehicle care delivered right to your doorstep. We handle everything from flat tyres to full engine diagnostics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div {...fadeIn} className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-black group-hover:bg-primary transition-colors flex items-center justify-center mb-6">
                <Disc className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Door-Step Puncture</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Car & Bike Support
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Tubeless & Tube Repair
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Emergency Response
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-black group-hover:bg-primary transition-colors flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Tyre & Tube Change</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Premium Brands
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Professional Fitting
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Wheel Balancing
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-black group-hover:bg-primary transition-colors flex items-center justify-center mb-6">
                <Bike className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Complete Bike Servicing</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Engine Oil Change
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Brake & Clutch Check
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Foam Wash & Polish
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BIKE SERVICING DETAIL SECTION */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src={bikeServiceImage} alt="Bike servicing background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary text-black font-bold text-xs px-3 py-1 mb-6 uppercase tracking-wider">Premium Care</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Comprehensive <br/><span className="text-primary">Bike Health Check</span></h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just fix problems; we prevent them. Our 25-point inspection covers every vital component of your two-wheeler to ensure a smooth, safe ride.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Full Bike Inspection & Diagnosis",
                  "Engine Oil Change (Branded)",
                  "Brake & Clutch Adjustment",
                  "Filter Cleaning",
                  "Spark Plug Check",
                  "Carburetor Tuning",
                  "Battery Health Check",
                  "Chain Lubrication & Adjustment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-10 bg-primary text-black hover:bg-white hover:text-black font-bold rounded-none h-12 px-8 uppercase tracking-wide">
                Book Inspection
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square border-2 border-primary/30 relative">
                 <div className="absolute inset-4 bg-gray-900 overflow-hidden">
                    <img src={bikeServiceImage} alt="Mechanic working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary" />
                 <div className="absolute -bottom-3 -left-3 w-12 h-12 border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Transparent Pricing</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600">Choose the package that fits your needs. No hidden charges, just honest service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Silver */}
            <div className="bg-white border border-gray-200 p-8 flex flex-col relative group hover:border-gray-300 transition-colors">
              <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">Silver</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-500 font-medium">₹</span>
                <span className="text-4xl font-bold text-black">499</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> 25 Points Checkup
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> Bosch Engine Oil
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> 10-Point Cleaning
                </li>
              </ul>
              
              <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white rounded-none font-bold uppercase tracking-wide">
                Book Silver
              </Button>
            </div>

            {/* Gold */}
            <div className="bg-white border-2 border-primary p-8 flex flex-col relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                Best Value
              </div>
              <h3 className="font-display font-bold text-2xl text-black mb-2">Golden</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-500 font-medium">₹</span>
                <span className="text-4xl font-bold text-black">699</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 25 Points Checkup
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Premium Branded Oil
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 10-Point Cleaning & Polish
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Chain Lubrication
                </li>
              </ul>
              
              <Button className="w-full bg-primary text-black hover:bg-primary/90 rounded-none font-bold uppercase tracking-wide h-12">
                Book Golden
              </Button>
            </div>

            {/* Platinum */}
            <div className="bg-white border border-gray-200 p-8 flex flex-col relative group hover:border-gray-300 transition-colors">
              <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">Platinum</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-500 font-medium">₹</span>
                <span className="text-4xl font-bold text-black">999</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> 25 Points Checkup
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> Semi-Synthetic Oil
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> 12-Point Deep Cleaning
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> Engine Flush
                </li>
              </ul>
              
              <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white rounded-none font-bold uppercase tracking-wide">
                Book Platinum
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & VALUE - ICON GRID */}
      <section className="py-20 bg-black text-white border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 flex flex-col items-center">
              <PhoneCall className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">One Call Service</h4>
              <p className="text-sm text-gray-500">Just dial, and we're there</p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <Settings className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Expert Technicians</h4>
              <p className="text-sm text-gray-500">Trained & Verified Staff</p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Fast Response</h4>
              <p className="text-sm text-gray-500">30-45 Minute Arrival</p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Genuine Parts</h4>
              <p className="text-sm text-gray-500">100% Original Spares</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-primary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">
            Need Immediate Puncture or Bike Service?
          </h2>
          <p className="text-black/80 text-xl mb-10 font-medium max-w-2xl mx-auto">
            Don't get stranded. Our mobile workshop is just one call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/80 font-bold h-14 px-10 text-lg rounded-none uppercase tracking-wide">
              <PhoneCall className="w-5 h-5 mr-3" /> Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-bold h-14 px-10 text-lg rounded-none uppercase tracking-wide">
              Book Online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
