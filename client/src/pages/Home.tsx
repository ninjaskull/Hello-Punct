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
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
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
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold h-14 px-8 text-base rounded-none uppercase tracking-wide" data-testid="button-book-hero">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold h-14 px-8 text-base rounded-none uppercase tracking-wide" data-testid="button-view-services-hero">
                View Services
              </Button>
            </div>

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

      {/* STATS SECTION */}
      <section className="py-16 bg-black text-white border-b border-primary/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600">Simple, fast, and hassle-free. Get professional service in just 4 easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
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
                <div className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center font-display font-bold text-2xl mb-6 relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 font-display">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-1 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
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
                  className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-black group-hover:bg-primary transition-colors flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
                  <ul className="space-y-3 mb-8">
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
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src={bikeServiceImage} alt="Bike servicing background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
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
              
              <Button className="mt-10 bg-primary text-black hover:bg-white hover:text-black font-bold rounded-none h-12 px-8 uppercase tracking-wide" data-testid="button-book-inspection">
                Book Inspection
              </Button>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square border-2 border-primary/30 relative">
                 <div className="absolute inset-4 bg-gray-900 overflow-hidden">
                    <img src={bikeServiceImage} alt="Mechanic working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary" />
                 <div className="absolute -bottom-3 -left-3 w-12 h-12 border-2 border-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Why Choose Hello Puncture?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600">What sets us apart from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
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
                <div className={`${pkg.featured ? 'bg-white border-2 border-primary shadow-xl' : 'bg-white border border-gray-200'} p-8 flex flex-col flex-1 transition-colors`}>
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
                    className={pkg.featured ? 'w-full bg-primary text-black hover:bg-primary/90 rounded-none font-bold uppercase tracking-wide h-12' : 'w-full border-black text-black hover:bg-black hover:text-white rounded-none font-bold uppercase tracking-wide'}
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
      <section className="py-24 bg-white">
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

              <Button className="bg-primary text-black hover:bg-primary/90 font-bold rounded-none h-12 px-8 uppercase tracking-wide" data-testid="button-check-coverage">
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
      <section className="py-24 bg-gray-50">
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
                className="bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
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
      <section className="py-24 bg-white">
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
                className="border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                  data-testid={`faq-button-${i}`}
                >
                  <h3 className="font-bold text-gray-900 pr-4">{item.q}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${expandedFAQ === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFAQ === i && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & VALUE - ICON GRID */}
      <section className="py-20 bg-black text-white border-t border-white/10">
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
      <section className="py-24 bg-primary relative overflow-hidden">
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
              <Button size="lg" className="bg-black text-white hover:bg-black/80 font-bold h-14 px-10 text-lg rounded-none uppercase tracking-wide" data-testid="button-call-final">
                <PhoneCall className="w-5 h-5 mr-3" /> Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-bold h-14 px-10 text-lg rounded-none uppercase tracking-wide" data-testid="button-book-final">
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
