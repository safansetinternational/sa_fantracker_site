"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin, Fuel, Gauge, Truck, Video, Thermometer, Shield,
  TrendingUp, Eye, Droplets, HeadphonesIcon, DollarSign,
  ArrowRight, Phone, Mail, Satellite, Activity, CheckCircle2,
} from "lucide-react";
import Link from "next/link";

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", setDisplay);
    return () => { controls.stop(); unsub(); };
  }, [count, rounded, target]);

  return <>{display}{suffix}</>;
}

/* ─── Rotating words ─── */
const heroWords = [
  "Vehicle Tracking",
  "Fuel Monitoring",
  "Speed Limiting",
  "Fleet Management",
  "Trailer Tracking",
  "Video Telematics",
  "Temperature Monitoring",
];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % heroWords.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block min-w-[280px] sm:min-w-[360px] text-left">
      {heroWords.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={i === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          {word}
        </motion.span>
      ))}
      {/* invisible spacer */}
      <span className="invisible">Temperature Monitoring</span>
    </span>
  );
}

/* ─── Live Dashboard Mockup ─── */
function LiveDashboard() {
  return (
    <div className="relative">
      {/* Floating glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />

      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span className="text-xs text-white/40 font-mono">app.fantracker.net</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] text-primary font-medium">LIVE</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          {/* Mini stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Active", value: "142", color: "text-primary" },
              { label: "Alerts", value: "3", color: "text-accent" },
              { label: "km Today", value: "8,426", color: "text-white" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Map area with dots */}
          <div className="relative h-48 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light overflow-hidden border border-white/5">
            {/* Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
              <defs>
                <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>

            {/* Route lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
              <motion.path d="M 40 150 Q 100 80 180 100 T 300 60 T 370 40" fill="none" stroke="#FEB039" strokeWidth="1.5" strokeDasharray="6 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }} opacity={0.5} />
              <motion.path d="M 30 40 Q 80 100 160 80 T 280 140 T 380 170" fill="none" stroke="#226502" strokeWidth="1.5" strokeDasharray="6 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }} opacity={0.4} />
            </svg>

            {/* Vehicle dots */}
            {[
              { x: "20%", y: "70%", delay: 0.8, label: "TRK-204 • 67 km/h", c: "bg-primary" },
              { x: "50%", y: "45%", delay: 1.1, label: "VAN-087 • Idle", c: "bg-accent" },
              { x: "75%", y: "25%", delay: 1.4, label: "FLT-315 • 92 km/h", c: "bg-primary" },
              { x: "88%", y: "80%", delay: 1.7, label: "TRL-142 • Stopped", c: "bg-accent" },
            ].map((dot, i) => (
              <motion.div key={i} className="absolute" style={{ left: dot.x, top: dot.y }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: dot.delay, type: "spring", stiffness: 200 }}>
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute h-full w-full rounded-full ${dot.c} opacity-30`} />
                  <span className={`relative rounded-full h-3 w-3 ${dot.c} shadow-lg`} />
                </span>
                <motion.div className="absolute left-5 -top-1 bg-black/60 backdrop-blur rounded px-1.5 py-0.5 text-[9px] text-white/70 whitespace-nowrap font-mono" initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: dot.delay + 0.3 }}>
                  {dot.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Activity feed */}
          <div className="space-y-2">
            {[
              { text: "TRK-204 entered Johannesburg zone", time: "2s ago", color: "bg-primary" },
              { text: "Fuel alert: VAN-087 low tank level", time: "14s ago", color: "bg-accent" },
              { text: "FLT-315 exceeded speed limit", time: "28s ago", color: "bg-red-400" },
            ].map((item, i) => (
              <motion.div key={i} className="flex items-center gap-2 text-[10px]" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 + i * 0.2 }}>
                <span className={`w-1.5 h-1.5 rounded-full ${item.color} shrink-0`} />
                <span className="text-white/50 flex-1 truncate">{item.text}</span>
                <span className="text-white/25 shrink-0">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero background images ─── */
const heroImages = [
  "/images/scania_1.jpeg",
  "/images/scania_3.jpeg",
  // "/images/trackin_2-300x200.jpg",
  // "/images/yellow_machine_1-300x200.jpeg",
];

/* ─── HERO ─── */
function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrentImage((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Auto-changing background images */}
      {heroImages.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === currentImage ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/30" />

      {/* Floating orbs */}
      <motion.div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-accent/40" animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute top-40 right-[15%] w-1.5 h-1.5 rounded-full bg-primary/60" animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
      <motion.div className="absolute bottom-32 left-[30%] w-1 h-1 rounded-full bg-accent/50" animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} />
      <motion.div className="absolute top-[60%] right-[25%] w-2.5 h-2.5 rounded-full bg-primary/30" animate={{ y: [0, -18, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 bg-gradient-to-r from-accent/15 to-primary/15 text-accent border border-accent/20">
                <Satellite className="w-3.5 h-3.5" />
                5,000+ Assets Tracked Globally
              </span>
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              The Best
              <br />
              <RotatingWord />
              <br />
              Service Provider
            </motion.h1>

            <motion.p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              We specialize in cutting-edge tracking solutions including fuel
              monitoring, vehicle tracking, speed limiting, trailer tracking,
              stolen vehicle recovery, and video telematics with real-time
              monitoring and enhanced security.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button href="/contact" variant="secondary" size="lg">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="!border-white/15 !text-white hover:!bg-white/5 hover:!text-white hover:!border-accent/40">
                See Our Services
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div className="mt-10 flex items-center gap-6 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              {[
                { icon: Shield, text: "Encrypted Data" },
                { icon: Activity, text: "Real-Time GPS" },
                { icon: HeadphonesIcon, text: "24/7 Support" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon className="w-4 h-4 text-accent/70" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <LiveDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES OVERVIEW ─── */
const primaryServices = [
  { icon: MapPin, title: "Vehicle Tracking", description: "24-hour vehicle monitoring service that is customised for you.", href: "/services#vehicle-tracking" },
  { icon: Fuel, title: "Fuel Monitoring", description: "Every drop that drips out of your tank can be detected by our drop sensors.", href: "/services#fuel-monitoring" },
  { icon: Gauge, title: "Speed Limiting", description: "SAZ approved device that limits speed for your vehicles.", href: "/services#speed-limiting" },
  { icon: Truck, title: "Trailer Tracking", description: "Trailer tracking devices can sustain for a lifetime without losing connectivity.", href: "/services#trailer-tracking" },
];

function ServicesOverview() {
  return (
    <section className="py-24 bg-white relative">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Our Services" title="What We Offer" description="Cutting-edge tracking solutions with unmatched reliability, security, and support." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryServices.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <Link href={s.href} className="group relative block p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 h-full overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-300 rounded-2xl" />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${i % 2 === 0 ? "bg-primary/10" : "bg-accent/10"}`}>
                    <s.icon className={`w-7 h-7 ${i % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md">
            View All 8 Services <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT / STATS ─── */
const allServices = ["Vehicle Tracking", "Fuel Monitoring", "Video Telematics", "Temperature Monitoring", "Fleet Management", "Trailer Tracking", "Driver Behavior Scoring", "Speed Limiting"];

function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent mb-4">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
                Cutting-Edge Tracking Solutions with <span className="text-primary">Unmatched Reliability</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                At FANTRACKER we specialize in providing advanced solutions for vehicle tracking, fuel monitoring, speed limiting, video telematics, and temperature control. Our cutting-edge technology helps businesses improve safety, optimize operations, and enhance efficiency with real-time data and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {allServices.map((s, i) => (
                  <span key={s} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${i % 2 === 0 ? "bg-primary/5 text-primary border-primary/10" : "bg-accent/5 text-accent border-accent/10"}`}>{s}</span>
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-charcoal">Starting from</span>
                <span className="text-4xl font-bold text-accent">$20</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 5000, suffix: "+", label: "Assets Tracked Globally", bg: "bg-gradient-to-br from-primary to-primary-dark text-white" },
                { value: 10, suffix: "+", label: "Years in Industry", bg: "bg-white text-charcoal border border-gray-200" },
                { value: 20, suffix: "+", label: "Countries Covered", bg: "bg-white text-charcoal border border-gray-200" },
                { value: 3000, suffix: "+", label: "Satisfied Clients", bg: "bg-gradient-to-br from-accent to-accent-light text-charcoal" },
              ].map((stat, i) => (
                <motion.div key={stat.label} className={`p-6 rounded-2xl ${stat.bg} shadow-sm`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="text-3xl font-bold mb-1">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className={`text-sm ${i === 0 ? "text-white/70" : i === 3 ? "text-charcoal/60" : "text-gray-500"}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
const reasons = [
  { icon: Shield, title: "Secure & Reliable", description: "Advanced encryption protects your tracking data with enterprise-grade security infrastructure." },
  { icon: TrendingUp, title: "Operational Efficiency", description: "Optimize routes, reduce costs, and improve fleet productivity with intelligent analytics." },
  { icon: Eye, title: "Real-Time Insights", description: "Monitor vehicle locations and fuel usage with live data, updated every few seconds." },
  { icon: Droplets, title: "Fuel Theft Prevention", description: "Detect unauthorized fuel usage and drain events instantly with precision drop sensors." },
  { icon: HeadphonesIcon, title: "Support 24/7", description: "Expert help anytime — our dedicated team assists with setup, troubleshooting, and optimization." },
  { icon: DollarSign, title: "Competitive Pricing", description: "Flexible options for all business sizes. Starting from just $20/month per vehicle." },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Why Choose Us" title="Why Businesses Trust FanTracker" description="Cutting-edge technology, unmatched reliability, and 24/7 support." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.08}>
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-transparent bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${i % 2 === 0 ? "bg-primary/10" : "bg-accent/10"}`}>
                  <r.icon className={`w-6 h-6 ${i % 2 === 0 ? "text-primary" : "text-accent"}`} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(34,101,2,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_40%,rgba(254,176,57,0.15),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Stay Connected, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Stay in Control!</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Join 3,000+ businesses that trust FanTracker for real-time vehicle monitoring, fuel management, and fleet optimization.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="tel:+27829660677" variant="outline" size="lg" className="!border-white/15 !text-white hover:!bg-white/5 hover:!text-white hover:!border-accent/40">
              <Phone className="w-4 h-4" /> Call Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CONTACT STRIP ─── */
function ContactStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: MapPin, label: "Head Office", value: "267 Oak Avenue, Ferndale, Randburg RSA" },
            { icon: Mail, label: "Email Us", value: "info@fantracker.net" },
            { icon: Phone, label: "Call Us", value: "+27 82 966 0677" },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-charcoal mb-1">{item.label}</h4>
                <p className="text-sm text-gray-500">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
      <ContactStrip />
    </>
  );
}
