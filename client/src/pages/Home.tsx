import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
  ChevronDown,
  Sparkles,
  Gauge,
  Shield,
  Award
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

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION - MODERN MINIMAL */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16 md:pt-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-black/3 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-2 md:px-5 md:py-2.5 mx-auto"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-black">⚡ One-Call Service Solution</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight"
            >
              Professional Vehicle <br/>
              <span className="relative inline-block">
                Care <span className="text-primary">Delivered Fast</span>
              </span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
            >
              Get professional puncture repairs, tyre changes, and bike servicing delivered straight to your location. Fast response times, certified technicians, and transparent pricing.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/booking">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-black/90 font-bold h-12 md:h-14 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-testid="button-book-hero"
                >
                  Book Service Now
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-black text-black hover:bg-black/5 font-bold h-12 md:h-14 px-8 rounded-xl"
                data-testid="button-view-services-hero"
              >
                View Services
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 max-w-2xl mx-auto"
            >
              {[
                { icon: Clock, label: "30 Min", value: "Response" },
                { icon: Star, label: "4.9/5", value: "Rating" },
                { icon: Award, label: "200+", value: "Technicians" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm md:text-base font-bold">{item.label}</p>
                    <p className="text-xs md:text-sm text-gray-600">{item.value}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION - MODERN MINIMAL */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { number: "15K+", label: "Happy Customers" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "200+", label: "Expert Team" },
              { number: "24/7", label: "Always Available" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - DETAILED ANIMATED */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            {...fadeIn}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6">How It Works - Simple 4 Steps</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've made it incredibly easy to get professional vehicle care. Here's exactly what happens from the moment you book until we're done.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto items-center">
            {/* Steps List */}
            <div className="space-y-6">
              {[
                { 
                  step: 1, 
                  title: "Book in 30 Seconds", 
                  desc: "Call us or use our app. Tell us your location and problem. That's it!",
                  icon: PhoneCall,
                  details: "No complex forms, no long waits. Quick and straightforward."
                },
                { 
                  step: 2, 
                  title: "Get Instant Quote", 
                  desc: "Receive transparent pricing within 2 minutes. No surprises.",
                  icon: Gauge,
                  details: "Our AI calculates exact prices based on your vehicle type and issue."
                },
                { 
                  step: 3, 
                  title: "Technician Arrives", 
                  desc: "Expert arrives at your location within 30 minutes on average.",
                  icon: Wrench,
                  details: "GPS tracked, professional, certified, and fully equipped."
                },
                { 
                  step: 4, 
                  title: "Service & You're Done", 
                  desc: "Professional service with flexible payment options.",
                  icon: CheckCircle2,
                  details: "Pay online or cash. 100% warranty on all work."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="group relative"
                  >
                    <div className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center font-display font-bold text-xl z-10 relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.step}
                        </motion.div>
                        {i < 3 && (
                          <motion.div 
                            className="w-1 h-12 bg-gradient-to-b from-primary to-gray-300 mt-2"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                          />
                        )}
                      </div>
                      <div className="pt-2 pb-8 flex-1">
                        <h3 className="font-bold text-lg mb-1 font-display">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                        <p className="text-xs text-gray-500 italic">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-sm">
                {/* Animated background circles */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-primary/5 border-2 border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-8 rounded-full bg-primary/10 border border-primary/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-center z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-16 h-16 text-primary mx-auto mb-3" />
                    <p className="font-bold text-lg text-black">Fast & Easy</p>
                    <p className="text-sm text-gray-600">4 Simple Steps</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline on mobile */}
          <motion.div 
            {...fadeIn}
            className="lg:hidden mt-12 flex justify-between items-center gap-2 text-xs text-gray-600"
          >
            <span className="text-center">Book</span>
            <span className="flex-1 h-1 bg-primary/30" />
            <span className="text-center">Quote</span>
            <span className="flex-1 h-1 bg-primary/30" />
            <span className="text-center">Arrive</span>
            <span className="flex-1 h-1 bg-primary/30" />
            <span className="text-center">Done</span>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - MODERN CARDS */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">What We Offer</h2>
            <p className="text-base md:text-lg text-gray-600">Everything you need for vehicle maintenance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Disc, title: "Puncture Repairs", desc: "Quick car & bike puncture fixes with quality repairs", items: ["Car & Bike", "Emergency", "Fast Service"] },
              { icon: Wrench, title: "Tyre Services", desc: "Professional tyre changes and wheel balancing", items: ["Premium Brands", "Fitting", "Balancing"] },
              { icon: Bike, title: "Bike Servicing", desc: "Complete maintenance for motorcycles", items: ["Oil Change", "Brake Check", "Polish"] }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={i}
                  {...fadeIn} 
                  transition={{ delay: i * 0.1 }}
                  className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIKE SERVICING - MODERN CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Complete Bike Health</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our comprehensive inspection covers all vital components. Fast diagnostics. Quality repairs. Guaranteed satisfaction.
              </p>
              <div className="space-y-3 mb-8">
                {["Full Inspection", "Branded Oil", "Brake Check", "Polish & Wash"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/booking">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold h-12 px-8 rounded-xl" data-testid="button-book-inspection">
                  Book Service
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-primary/30">
                <img src={bikeServiceImage} alt="Bike servicing" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE - MODERN ICONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Why We Stand Out</h2>
            <p className="text-base md:text-lg text-gray-600">Trusted by thousands for quality and reliability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Fast Response", desc: "30-minute arrival time" },
              { icon: Award, title: "Certified Team", desc: "Government verified" },
              { icon: MapPin, title: "Wide Coverage", desc: "All major areas" },
              { icon: Shield, title: "Full Warranty", desc: "100% guaranteed" },
              { icon: Star, title: "Quality Parts", desc: "Original only" },
              { icon: Clock, title: "24/7 Available", desc: "No holidays" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.08 }}
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-1 font-display">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
                  
                  <Link href="/booking" className="block">
                    <Button 
                      className={pkg.featured ? 'w-full bg-gradient-to-r from-primary to-yellow-500 text-black hover:shadow-lg hover:shadow-primary/50 rounded-lg font-bold uppercase tracking-wide h-12 transition-all duration-300' : 'w-full border-2 border-black text-black hover:bg-black hover:text-white rounded-lg font-bold uppercase tracking-wide transition-all duration-300'}
                      variant={pkg.featured ? 'default' : 'outline'}
                      data-testid={`button-book-${pkg.name.toLowerCase()}`}
                    >
                      Book {pkg.name}
                    </Button>
                  </Link>
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
              <Link href="/booking">
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold h-14 px-10 text-lg rounded-lg uppercase tracking-wide transition-all duration-300" data-testid="button-book-final">
                  Book Online
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
