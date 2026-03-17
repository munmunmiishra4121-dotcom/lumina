/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Instagram, Facebook, Twitter, Menu as MenuIcon, X, ArrowRight, Star } from 'lucide-react';

const MENU_ITEMS = [
  {
    category: "Starters",
    items: [
      { name: "Wild Mushroom Arancini", description: "Truffle aioli, shaved parmesan, micro herbs", price: "$14" },
      { name: "Citrus Cured Salmon", description: "Pickled fennel, dill oil, crème fraîche, rye crisp", price: "$18" },
      { name: "Heirloom Tomato Tartare", description: "Caper berries, shallots, basil emulsion, sourdough", price: "$15" }
    ]
  },
  {
    category: "Mains",
    items: [
      { name: "Pan-Seared Halibut", description: "Saffron risotto, charred asparagus, lemon butter sauce", price: "$38" },
      { name: "Dry-Aged Ribeye", description: "Pommes purée, roasted bone marrow, red wine jus", price: "$52" },
      { name: "Hand-Rolled Gnocchi", description: "Foraged mushrooms, brown butter, sage, pecorino", price: "$28" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Dark Chocolate Nemesis", description: "Raspberry coulis, vanilla bean mascarpone", price: "$12" },
      { name: "Lemon Verbena Panna Cotta", description: "Macerated strawberries, pistachio crumble", price: "$11" }
    ]
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-olive selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-semibold tracking-wide z-50">LUMINA</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-brand-olive transition-colors">About</a>
            <a href="#menu" className="text-sm uppercase tracking-widest hover:text-brand-olive transition-colors">Menu</a>
            <a href="#ambiance" className="text-sm uppercase tracking-widest hover:text-brand-olive transition-colors">Ambiance</a>
            <a href="#reservations" className="px-6 py-3 border border-brand-ink rounded-full text-sm uppercase tracking-widest hover:bg-brand-ink hover:text-brand-bg transition-colors">
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-bg z-40 flex flex-col items-center justify-center space-y-8"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">About</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Menu</a>
            <a href="#ambiance" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Ambiance</a>
            <a href="#reservations" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-brand-olive">Book a Table</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/finedining/1920/1080" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-6"
          >
            A Culinary Journey
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8"
          >
            Where flavor meets <br className="hidden md:block" /><span className="italic font-light">elegance.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a href="#reservations" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-ink rounded-full text-sm uppercase tracking-widest hover:bg-brand-sand transition-colors">
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 md:order-1 relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden">
              <img 
                src="https://picsum.photos/seed/chefplating/800/1200" 
                alt="Chef plating a dish" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-sand rounded-full -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Rooted in tradition, <br/><span className="italic text-brand-olive">crafted for today.</span></h2>
            <p className="text-lg text-brand-ink/70 mb-6 leading-relaxed">
              At Lumina, we believe that dining is more than just a meal—it's an experience that engages all the senses. Our culinary team sources the finest seasonal ingredients from local purveyors to create dishes that are both innovative and deeply comforting.
            </p>
            <p className="text-lg text-brand-ink/70 mb-10 leading-relaxed">
              Set in a beautifully restored historic building, our dining room offers an atmosphere of refined warmth, perfect for intimate dinners, celebratory gatherings, and everything in between.
            </p>
            <a href="#menu" className="inline-flex items-center text-brand-olive font-medium uppercase tracking-widest text-sm hover:text-brand-ink transition-colors group">
              Discover our menu 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32 bg-brand-sand/30">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-brand-olive mb-4">Seasonal Offerings</p>
            <h2 className="text-4xl md:text-6xl font-serif">Tasting Menu</h2>
          </motion.div>

          <div className="space-y-20">
            {MENU_ITEMS.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <motion.h3 variants={fadeUp} className="text-2xl font-serif italic mb-10 text-center border-b border-brand-ink/10 pb-4">
                  {section.category}
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                  {section.items.map((item, itemIdx) => (
                    <motion.div key={itemIdx} variants={fadeUp} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg font-medium tracking-wide">{item.name}</h4>
                        <div className="flex-grow border-b border-dotted border-brand-ink/30 mx-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-lg font-serif">{item.price}</span>
                      </div>
                      <p className="text-sm text-brand-ink/60 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-sm text-brand-ink/50 italic">Please inform us of any dietary requirements. A 20% gratuity is added to parties of 6 or more.</p>
          </div>
        </div>
      </section>

      {/* Ambiance/Gallery Section */}
      <section id="ambiance" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif">The Atmosphere</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-square md:col-span-2 overflow-hidden rounded-2xl"
          >
            <img src="https://picsum.photos/seed/restaurant1/1200/800" alt="Dining room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square overflow-hidden rounded-2xl"
          >
            <img src="https://picsum.photos/seed/wineglass/800/800" alt="Wine pouring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="aspect-square overflow-hidden rounded-2xl"
          >
            <img src="https://picsum.photos/seed/dessert/800/800" alt="Dessert" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="aspect-square md:col-span-2 overflow-hidden rounded-2xl"
          >
            <img src="https://picsum.photos/seed/kitchen/1200/800" alt="Open kitchen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservations" className="py-24 md:py-32 bg-brand-ink text-brand-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Join Us</h2>
            <p className="text-brand-bg/70 mb-12 text-lg leading-relaxed max-w-md">
              Reserve your table online or contact us directly for parties larger than 6 people or special events.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-olive shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium uppercase tracking-widest text-sm mb-2">Location</h4>
                  <p className="text-brand-bg/70">123 Culinary Avenue<br/>Metropolis, NY 10012</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-brand-olive shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium uppercase tracking-widest text-sm mb-2">Hours</h4>
                  <p className="text-brand-bg/70">Tue - Thu: 5:30 PM - 10:00 PM<br/>Fri - Sat: 5:00 PM - 11:00 PM<br/>Sun: 5:00 PM - 9:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-brand-olive shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium uppercase tracking-widest text-sm mb-2">Contact</h4>
                  <p className="text-brand-bg/70">(555) 123-4567<br/>hello@luminarestaurant.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white text-brand-ink p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-serif mb-8 text-center">Make a Reservation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-brand-ink/60">Date</label>
                  <input type="date" className="w-full border-b border-brand-ink/20 py-2 focus:outline-none focus:border-brand-olive bg-transparent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-brand-ink/60">Time</label>
                  <select className="w-full border-b border-brand-ink/20 py-2 focus:outline-none focus:border-brand-olive bg-transparent transition-colors appearance-none">
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-brand-ink/60">Guests</label>
                <select className="w-full border-b border-brand-ink/20 py-2 focus:outline-none focus:border-brand-olive bg-transparent transition-colors appearance-none">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-brand-ink/60">Name</label>
                <input type="text" placeholder="John Doe" className="w-full border-b border-brand-ink/20 py-2 focus:outline-none focus:border-brand-olive bg-transparent transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-brand-ink/60">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border-b border-brand-ink/20 py-2 focus:outline-none focus:border-brand-olive bg-transparent transition-colors" />
              </div>

              <button className="w-full bg-brand-olive text-white py-4 rounded-full uppercase tracking-widest text-sm hover:bg-brand-olive-light transition-colors mt-8">
                Find a Table
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg py-12 border-t border-brand-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-serif font-semibold tracking-wide mb-6 md:mb-0">LUMINA</div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-brand-ink/60 hover:text-brand-olive transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-brand-ink/60 hover:text-brand-olive transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-brand-ink/60 hover:text-brand-olive transition-colors"><Twitter size={20} /></a>
          </div>
          
          <div className="text-sm text-brand-ink/50">
            &copy; {new Date().getFullYear()} Lumina Restaurant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
