"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin, Fuel, Gauge, Truck, Video, Thermometer, Shield,
  TrendingUp, Eye, Droplets, HeadphonesIcon, DollarSign,
  ArrowRight, Phone, Mail, Clock,
} from "lucide-react";
import Link from "next/link";

/* ─── Hero ─── */
function Hero() {
  const words = [
    "Vehicle Tracking",
    "Fuel Monitoring",
    "Speed Limiting",
    "Fleet Management",
    "Trailer Tracking",
    "Video Telematics",
    "Temperature Monitoring",
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              5,000+ Assets Tracked Globally
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              {words[0]}
            </span>{" "}
            Service Provider
          </motion.h1>

          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {words.slice(1).map((w) => (
              <span
                key={w}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                {w}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We specialize in cutting-edge tracking solutions including fuel
            monitoring, vehicle tracking, speed limiting, trailer tracking,
            stolen vehicle recovery, and video telematics with real-time
            monitoring and enhanced security.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="!border-white/20 !text-white hover:!bg-white/10 hover:!text-white hover:!border-white/40">
              See Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview (4 primary) ─── */
const primaryServices = [
  {
    icon: MapPin,
    title: "Vehicle Tracking",
    description:
      "24-hour vehicle monitoring service that is customised for you.",
    href: "/services#vehicle-tracking",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description:
      "Every drop that drips out of your tank can be detected by our drop sensors.",
    href: "/services#fuel-monitoring",
  },
  {
    icon: Gauge,
    title: "Speed Limiting",
    description:
      "SAZ approved device that limits speed for your vehicles.",
    href: "/services#speed-limiting",
  },
  {
    icon: Truck,
    title: "Trailer Tracking",
    description:
      "Trailer tracking devices can sustain for a lifetime without losing connectivity.",
    href: "/services#trailer-tracking",
  },
];

function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="What We Offer"
          description="Cutting-edge tracking solutions with unmatched reliability, security, and support."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryServices.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <Link
                href={s.href}
                className="group block p-8 rounded-2xl border border-gray-100 hover:border-accent/30 bg-white hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${i % 2 === 0 ? "bg-primary/10" : "bg-accent/10"}`}>
                  <s.icon className={`w-6 h-6 ${i % 2 === 0 ? "text-primary" : "text-accent"}`} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline" size="md">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── About / Stats ─── */
const allServices = [
  "Vehicle Tracking",
  "Fuel Monitoring",
  "Video Telematics",
  "Temperature Monitoring",
  "Fleet Management",
  "Trailer Tracking",
  "Driver Behavior Scoring",
  "Speed Limiting",
];

const stats = [
  { value: "5,000+", label: "Assets Tracked Globally" },
  { value: "10+", label: "Years in Industry" },
  { value: "20+", label: "Countries Covered" },
  { value: "3,000+", label: "Satisfied Clients" },
];

function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
                Cutting-Edge Tracking Solutions with{" "}
                <span className="text-primary">Unmatched Reliability</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                At FANTRACKER we specialize in providing advanced solutions for
                vehicle tracking, fuel monitoring, speed limiting, video
                telematics, and temperature control. Our cutting-edge technology
                helps businesses improve safety, optimize operations, and enhance
                efficiency with real-time data and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {allServices.map((s, i) => (
                  <span
                    key={s}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      i % 2 === 0
                        ? "bg-primary/5 text-primary border-primary/10"
                        : "bg-accent/5 text-accent border-accent/10"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-2xl font-bold text-charcoal">
                Starting from{" "}
                <span className="text-accent">$20</span>{" "}
                <span className="text-base font-normal text-gray-400">Per Month</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-2xl border ${
                    i % 2 === 0
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-charcoal border-gray-200"
                  }`}
                >
                  <div className={`text-3xl font-bold mb-1 ${i % 2 !== 0 ? "text-accent" : ""}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${i % 2 === 0 ? "text-white/70" : "text-gray-500"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
const reasons = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Advanced encryption protects your tracking data with enterprise-grade security infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    description:
      "Optimize routes, reduce costs, and improve fleet productivity with intelligent analytics.",
  },
  {
    icon: Eye,
    title: "Real-Time Insights",
    description:
      "Monitor vehicle locations and fuel usage with live data, updated every few seconds.",
  },
  {
    icon: Droplets,
    title: "Fuel Theft Prevention",
    description:
      "Detect unauthorized fuel usage and drain events instantly with precision drop sensors.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    description:
      "Expert help anytime — our dedicated team assists with setup, troubleshooting, and optimization.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Flexible options for all business sizes. Starting from just $20/month per vehicle.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="Why Businesses Trust FanTracker"
          description="Cutting-edge technology, unmatched reliability, and 24/7 support."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.08}>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    i % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  <r.icon
                    className={`w-6 h-6 ${i % 2 === 0 ? "text-primary" : "text-accent"}`}
                  />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.description}
                </p>
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
    <section className="py-24 gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Stay Connected,{" "}
            <span className="text-accent">Stay in Control!</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Join 3,000+ businesses that trust FanTracker for real-time vehicle
            monitoring, fuel management, and fleet optimization.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href="tel:+27829660677"
              variant="outline"
              size="lg"
              className="!border-white/20 !text-white hover:!bg-white/10 hover:!text-white hover:!border-white/40"
            >
              <Phone className="w-4 h-4" />
              Call Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Contact Strip ─── */
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
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
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

/* ─── Page ─── */
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
