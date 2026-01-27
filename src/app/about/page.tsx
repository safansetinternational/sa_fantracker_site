"use client";

import { Target, Eye, Shield, TrendingUp, Globe, HeadphonesIcon, ArrowRight, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const stats = [
  { value: "5,000+", label: "Assets Tracked Globally" },
  { value: "3,000+", label: "Satisfied Clients" },
  { value: "10+", label: "Years in Industry" },
  { value: "20+", label: "Countries Covered" },
];

const values = [
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Advanced encryption and enterprise-grade security protect your fleet data at every level.",
  },
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    description: "Optimize routes, reduce costs, and improve fleet productivity with intelligent analytics.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Live data on vehicle locations, fuel usage, and driver behavior — updated every few seconds.",
  },
  {
    icon: Target,
    title: "Fuel Loss Prevention",
    description: "Detect unauthorized fuel usage and drain events instantly with precision drop sensors.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Assistance",
    description: "A dedicated team of industry professionals, ready to assist with setup, troubleshooting, and continuous optimization — anytime, anywhere.",
  },
  {
    icon: Globe,
    title: "Adaptable Solutions",
    description: "Flexible options designed for all business sizes, from small fleets to enterprise operations across 20+ countries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="About Us"
            title="Real. Ultimate. Control."
            description="At FANTRACKER we specialize in providing advanced solutions for vehicle tracking, fuel monitoring, speed limiting, video telematics, and temperature control."
            light
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
                  Our Vision
                </span>
                <h2 className="text-3xl font-bold text-charcoal leading-tight mb-6">
                  Transforming Global Monitoring
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  To transform global monitoring by equipping organizations with contemporary
                  security technology, instant visibility, and consistent assistance that drives
                  operational excellence and asset safeguarding.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold text-charcoal leading-tight mb-6">
                  Empowering Every Enterprise
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Creating an environment where all enterprises can effortlessly supervise,
                  direct, and shield their resources for enduring viability. Our cutting-edge
                  technology helps businesses improve safety, optimize operations, and enhance
                  efficiency with real-time data and analytics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="What Sets Us Apart"
            description="Cutting-edge technology, unmatched reliability, and 24/7 support across 20+ countries."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-white border border-gray-100 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${i % 2 === 0 ? "bg-primary/10" : "bg-accent/10"}`}>
                    <value.icon className={`w-6 h-6 ${i % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </>
  );
}
