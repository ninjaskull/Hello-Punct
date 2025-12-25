import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Phone, User, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    serviceType: "puncture",
    date: "",
    time: "",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        location: "",
        serviceType: "puncture",
        date: "",
        time: "",
        description: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container relative z-20 px-4 md:px-6 max-w-2xl mx-auto w-full">
          {/* Back Button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            {...fadeIn}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-black text-white mb-2"
            >
              Book Your Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 mb-8"
            >
              Fill in your details below and we'll confirm your booking within minutes
            </motion.p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-primary animate-bounce" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
                <p className="text-white/80 mb-6">
                  Our team will contact you shortly at {formData.phone}
                </p>
                <p className="text-sm text-white/60">
                  Redirecting you back home...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </motion.div>

                {/* Location Field */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Your Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </motion.div>

                {/* Service Type */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary" />
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="puncture" className="bg-gray-900">Puncture Repair</option>
                    <option value="tyre" className="bg-gray-900">Tyre Change</option>
                    <option value="servicing" className="bg-gray-900">Bike Servicing</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </motion.div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                  >
                    <label className="block text-white font-semibold mb-2">Preferred Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-white font-semibold mb-2">Additional Details</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us more about your issue..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-yellow-500 text-black hover:shadow-2xl hover:shadow-primary/50 font-bold h-12 rounded-xl uppercase tracking-wide transition-all duration-300"
                    data-testid="button-confirm-booking"
                  >
                    Confirm Booking
                  </Button>
                </motion.div>

                {/* Trust Message */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center text-white/60 text-sm"
                >
                  ✓ Your information is secure and encrypted
                </motion.p>
              </form>
            )}
          </motion.div>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          >
            {[
              { label: "30 Min Response", value: "Average Arrival Time" },
              { label: "100% Transparent", value: "No Hidden Charges" },
              { label: "24/7 Available", value: "All Days Open" }
            ].map((info, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-primary font-bold text-lg">{info.label}</p>
                <p className="text-white/70 text-sm">{info.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
