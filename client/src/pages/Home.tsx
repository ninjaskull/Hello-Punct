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
  Disc,
  MapPin,
  Star,
  Zap,
  TrendingUp,
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Stock images
import heroImage from "@assets/stock_images/mechanic_repairing_c_25c5e607.jpg";
import bikeServiceImage from "@assets/stock_images/mechanic_servicing_m_2b00c474.jpg";
import tyreImage from "@assets/stock_images/car_tyre_close_up_tr_febb9c67.jpg";
import mechanicImage from "@assets/stock_images/professional_mechani_cb08bc99.jpg";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-hidden pt-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/85 z-10" />
          
          {/* Accent glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-40" />
          
          {/* Background image */}
          <img 
            src={heroImage} 
            alt="Mechanic repairing tyre" 
            className="w-full h-full object-cover opacity-35"
          />
        </div>

        {/* Premium vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent z-20" />

        <div className="container relative z-20 px-4 md:px-6 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto md:mx-0"
          >
            {/* Premium badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block glass px-6 py-2.5 mb-8 md:mb-10 rounded-full border border-primary/30 backdrop-blur-md"
            >
              <span className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                One Call Service | Your Problems, Our Solutions
              </span>
            </motion.div>
            
            {/* Premium headline with enhanced typography */}
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight mb-8 md:mb-10 tracking-tight">
              Door-Step <br className="md:hidden"/>
              <span className="block md:inline">Puncture</span>
              <br/>
              <span className="relative inline-block">
                <span className="gradient-text text-5xl md:text-8xl">& Bike Servicing</span>
                <div className="absolute -bottom-4 left-0 w-32 h-1.5 bg-primary rounded-full" />
              </span>
            </h1>
            
            {/* Enhanced subheading */}
            <p className="text-base md:text-lg text-gray-200 mb-12 md:mb-14 max-w-2xl md:max-w-xl leading-relaxed font-light">
              Professional car and bike puncture repair, tyre changes, and complete bike servicing delivered directly to your location. Fast. Reliable. Trusted by thousands.
            </p>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mb-16 md:mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary via-yellow-400 to-yellow-500 text-black hover:shadow-2xl hover:shadow-primary/60 font-bold h-14 px-10 text-base rounded-xl uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 border border-yellow-400/30 w-full sm:w-auto" data-testid="button-book-hero">
                  Book Your Service
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black hover:shadow-2xl font-bold h-14 px-10 text-base rounded-xl uppercase tracking-wide transition-all duration-300 w-full sm:w-auto" data-testid="button-view-services-hero">
                  Our Services
                </Button>
              </motion.div>
            </div>

            {/* Premium trust indicators */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center gap-2.5 text-white">
                  <Clock className="text-primary w-5 h-5" />
                  <span className="font-bold text-sm md:text-base">30 Min</span>
                </div>
                <span className="text-xs text-gray-400">Fast Arrival</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center gap-2.5 text-white">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span className="font-bold text-sm md:text-base">100%</span>
                </div>
                <span className="text-xs text-gray-400">Guaranteed</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center gap-2.5 text-white">
                  <Settings className="text-primary w-5 h-5" />
                  <span className="font-bold text-sm md:text-base">Expert</span>
                </div>
                <span className="text-xs text-gray-400">Certified Techs</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Premium floating element */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm hidden lg:block z-20"
        />
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-black text-white border-b border-primary/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div {...fadeIn} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">15K+</div>
              <p className="text-gray-400 font-medium">Happy Customers</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">98%</div>
              <p className="text-gray-400 font-medium">Satisfaction Rate</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">200+</div>
              <p className="text-gray-400 font-medium">Expert Technicians</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-400 font-medium">Service Available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-3">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base">Simple, fast, and hassle-free. Get professional service in just 4 easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
            {[
              { step: 1, title: "Call or Book Online", desc: "Contact us via phone or our booking platform" },
              { step: 2, title: "Get Instant Quote", desc: "Receive transparent pricing within minutes" },
              { step: 3, title: "Technician Arrives", desc: "Expert arrives at your location on time" },
              { step: 4, title: "Service & Payment", desc: "Professional service with flexible payment options" }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center font-display font-bold text-xl mb-4 relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-1 font-display">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-1 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-3">Our Core Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base">Professional vehicle care delivered right to your doorstep. We handle everything from flat tyres to full engine diagnostics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: Disc, title: "Door-Step Puncture", items: ["Car & Bike Support", "Tubeless & Tube Repair", "Emergency Response"] },
              { icon: Wrench, title: "Tyre & Tube Change", items: ["Premium Brands", "Professional Fitting", "Wheel Balancing"] },
              { icon: Bike, title: "Complete Bike Servicing", items: ["Engine Oil Change", "Brake & Clutch Check", "Foam Wash & Polish"] }
            ].map((service, i) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={i}
                  {...fadeIn} 
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 group-hover:from-primary group-hover:to-yellow-500 transition-all duration-300 flex items-center justify-center mb-4 md:mb-6 rounded-xl">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-display">{service.title}</h3>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIKE SERVICING DETAIL SECTION */}
      <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src={bikeServiceImage} alt="Bike servicing background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-block bg-primary text-black font-bold text-xs px-3 py-1 mb-4 md:mb-6 uppercase tracking-wider">Premium Care</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">Comprehensive <br/><span className="text-primary">Bike Health Check</span></h2>
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                We don't just fix problems; we prevent them. Our 25-point inspection covers every vital component of your two-wheeler to ensure a smooth, safe ride.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-6 md:gap-x-8">
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
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="font-medium text-xs md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 md:mt-10 bg-primary text-black hover:bg-white hover:text-black font-bold rounded-lg h-11 md:h-12 px-6 md:px-8 uppercase tracking-wide text-sm md:text-base w-full sm:w-auto" data-testid="button-book-inspection">
                Book Inspection
              </Button>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square relative group">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                 <div className="absolute inset-0 bg-gray-900 overflow-hidden rounded-3xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                    <img src={bikeServiceImage} alt="Mechanic working" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-3 md:mb-4">Why Choose Hello Puncture?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base">What sets us apart from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "30-minute average response time across the city" },
              { icon: TrendingUp, title: "Certified Technicians", desc: "All mechanics are trained and government verified" },
              { icon: MapPin, title: "Wider Coverage", desc: "Serving all major areas and neighborhoods" },
              { icon: ShieldCheck, title: "Warranty on Work", desc: "100% warranty on all repairs and services" },
              { icon: Star, title: "Premium Quality", desc: "Only original spare parts and branded oils" },
              { icon: Clock, title: "Available 24/7", desc: "Round-the-clock service even on holidays" }
            ].map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.08 }}
                  className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary group-hover:to-yellow-500 group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-3 md:mb-4">Transparent Pricing</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base">Choose the package that fits your needs. No hidden charges, just honest service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { name: "Silver", price: 499, items: ["25 Points Checkup", "Bosch Engine Oil", "10-Point Cleaning"] },
              { name: "Golden", price: 699, items: ["25 Points Checkup", "Premium Branded Oil", "10-Point Cleaning & Polish", "Chain Lubrication"], featured: true },
              { name: "Platinum", price: 999, items: ["25 Points Checkup", "Semi-Synthetic Oil", "12-Point Deep Cleaning", "Engine Flush"] }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col relative group ${pkg.featured ? 'md:-translate-y-4' : ''}`}
              >
                <div className={`${pkg.featured ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-primary shadow-2xl rounded-2xl' : 'bg-white border border-gray-200 rounded-2xl hover:shadow-xl'} p-6 md:p-8 flex flex-col flex-1 transition-all duration-300`}>
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                      Best Value
                    </div>
                  )}
                  <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-sm text-gray-500 font-medium">₹</span>
                    <span className="text-4xl font-bold text-black">{pkg.price}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.items.map((item, j) => (
                      <li key={j} className={`flex items-start gap-3 text-sm ${pkg.featured ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>
                        <CheckCircle2 className={`w-5 h-5 ${pkg.featured ? 'text-primary' : 'text-gray-400'} shrink-0`} /> {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={pkg.featured ? 'w-full bg-gradient-to-r from-primary to-yellow-500 text-black hover:shadow-lg hover:shadow-primary/50 rounded-lg font-bold uppercase tracking-wide h-12 transition-all duration-300' : 'w-full border-2 border-black text-black hover:bg-black hover:text-white rounded-lg font-bold uppercase tracking-wide transition-all duration-300'}
                    variant={pkg.featured ? 'default' : 'outline'}
                    data-testid={`button-book-${pkg.name.toLowerCase()}`}
                  >
                    Book {pkg.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-block bg-primary text-black font-bold text-xs px-3 py-1 mb-6 uppercase tracking-wider">Coverage</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Serving Your Area with Excellence</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Hello Puncture operates across the city with strategically placed service centers and mobile units to ensure fastest response times and maximum coverage.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "North Zone: Serving 15+ neighborhoods",
                  "South Zone: Covering 18+ areas",
                  "Central Zone: 12+ operational zones",
                  "Airport & Highway Routes: 24/7 coverage"
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-gray-700">{area}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-primary to-yellow-500 text-black hover:shadow-lg hover:shadow-primary/50 font-bold rounded-lg h-12 px-8 uppercase tracking-wide transition-all duration-300" data-testid="button-check-coverage">
                Check Service Area
              </Button>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-black/5 border-2 border-primary/20 flex items-center justify-center">
                <img src={tyreImage} alt="Service coverage" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">What Customers Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600">Real feedback from thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", rating: 5, text: "Outstanding service! Technician arrived exactly on time and fixed the puncture professionally. Highly recommended!" },
              { name: "Priya Sharma", rating: 5, text: "Got my bike serviced and it runs like new. The technicians are well-trained and courteous. Great experience overall." },
              { name: "Amit Patel", rating: 5, text: "Transparent pricing, quality work, and excellent customer service. Will definitely book again for my next service." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-500" />
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600">Everything you need to know about our services</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How quickly can you arrive at my location?", a: "Our average response time is 30 minutes from the time of booking. Response time varies based on location and traffic conditions." },
              { q: "Do you offer warranty on repairs?", a: "Yes! We provide 100% warranty on all our repairs and service work. Any issues within 30 days will be fixed free of charge." },
              { q: "What payment methods do you accept?", a: "We accept all major payment methods including cash, cards, UPI, and digital wallets. Payment can be made after service completion." },
              { q: "Are your technicians certified?", a: "All our technicians are certified professionals with government verification and extensive training in vehicle repair and maintenance." },
              { q: "Do you use original spare parts?", a: "Absolutely! We only use 100% genuine and original spare parts. We never use counterfeit or low-quality materials." },
              { q: "Can I book a service for a specific date and time?", a: "Yes, you can book services for any preferred date and time. We maintain a flexible schedule to accommodate your needs." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5 transition-all duration-300 text-left"
                  data-testid={`faq-button-${i}`}
                >
                  <h3 className="font-bold text-gray-900 pr-4">{item.q}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${expandedFAQ === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFAQ === i && (
                  <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-primary/5 p-6">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & VALUE - ICON GRID */}
      <section className="py-12 md:py-20 bg-black text-white border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div {...fadeIn} className="p-4 flex flex-col items-center">
              <PhoneCall className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">One Call Service</h4>
              <p className="text-sm text-gray-500">Just dial, and we're there</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-4 flex flex-col items-center">
              <Settings className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Expert Technicians</h4>
              <p className="text-sm text-gray-500">Trained & Verified Staff</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-4 flex flex-col items-center">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Fast Response</h4>
              <p className="text-sm text-gray-500">30-45 Minute Arrival</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="p-4 flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Genuine Parts</h4>
              <p className="text-sm text-gray-500">100% Original Spares</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={mechanicImage} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">
              Need Immediate Puncture or Bike Service?
            </h2>
            <p className="text-black/80 text-xl mb-10 font-medium max-w-2xl mx-auto">
              Don't get stranded. Our mobile workshop is just one call away. Professional service, guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/80 font-bold h-14 px-10 text-lg rounded-lg uppercase tracking-wide transition-all duration-300" data-testid="button-call-final">
                <PhoneCall className="w-5 h-5 mr-3" /> Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold h-14 px-10 text-lg rounded-lg uppercase tracking-wide transition-all duration-300" data-testid="button-book-final">
                Book Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
