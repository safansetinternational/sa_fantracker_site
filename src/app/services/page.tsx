"use client";

import {
  MapPin, Fuel, Gauge, Video, Truck, Thermometer, BarChart3, Radar, CheckCircle, ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

const services = [
  {
    id: "vehicle-tracking",
    icon: MapPin,
    title: "Real-Time Vehicle Tracking",
    subtitle: "Continuous Location Intelligence",
    description:
      "Advanced GPS and telematics system providing continuous updates on vehicle location, movement patterns, and trip reports for complete fleet intelligence.",
    features: [
      "Real-time GPS location updates",
      "Movement patterns & trip reports",
      "Route history & playback",
      "Geofencing with instant alerts",
      "Ignition on/off detection",
      "Stolen vehicle recovery support",
    ],
  },
  {
    id: "fuel-monitoring",
    icon: Fuel,
    title: "Fuel Monitoring",
    subtitle: "Every Drop Accounted For",
    description:
      "Precision fuel management with real-time tank levels to alerts on refueling and potential theft, helping reduce wastage and detect fraud.",
    features: [
      "Real-time fuel tank levels",
      "Refueling event alerts",
      "Fuel theft & drain detection",
      "Consumption trend analysis",
      "Cost-per-kilometer reports",
      "Anomaly detection algorithms",
    ],
  },
  {
    id: "speed-limiting",
    icon: Gauge,
    title: "Speed Limiters",
    subtitle: "Regulatory Compliance Made Simple",
    description:
      "Restrict vehicle speed to approved limits, ensuring full compliance with local and international transport laws with tamper detection and secure installation.",
    features: [
      "SAZ-approved devices",
      "Configurable speed thresholds",
      "Tamper-proof installation",
      "Speed violation reports",
      "Compliance documentation",
      "Over-speed instant alerts",
    ],
  },
  {
    id: "fleet-management",
    icon: Truck,
    title: "Fleet Management",
    subtitle: "One Powerful Dashboard",
    description:
      "Centralized platform combining GPS tracking, route optimization, fuel monitoring, and driver analytics into one powerful dashboard with automated reports and maintenance alerts.",
    features: [
      "Centralized fleet dashboard",
      "Route optimization",
      "Driver behavior analytics",
      "Automated reporting",
      "Maintenance scheduling & alerts",
      "Dispatch management",
    ],
  },
  {
    id: "video-telematics",
    icon: Video,
    title: "Video Telematics",
    subtitle: "See What Your Drivers See",
    description:
      "Live video feeds and driving analytics providing valuable operational insights for incident investigation, driver coaching, and liability protection.",
    features: [
      "Dual-facing HD cameras",
      "Live video streaming",
      "Event-triggered recording",
      "Cloud video storage",
      "Driver coaching tools",
      "Insurance claim support",
    ],
  },
  {
    id: "temperature-monitoring",
    icon: Thermometer,
    title: "Temperature Monitoring",
    subtitle: "Protect Sensitive Cargo",
    description:
      "Precise temperature control with real-time alerts for sensitive cargo safety — ideal for cold chain logistics, pharmaceutical, and food distribution.",
    features: [
      "Real-time temperature sensors",
      "Multi-zone monitoring",
      "Temperature deviation alerts",
      "Cold chain compliance reports",
      "Door open/close detection",
      "Historical data logging",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Advanced Analytics & Reporting",
    subtitle: "Data-Driven Decisions",
    description:
      "Comprehensive data-driven decision-making tools with detailed reports on vehicle performance, fuel usage, driver behavior, and maintenance logs.",
    features: [
      "Vehicle performance reports",
      "Fuel usage analytics",
      "Driver behavior scoring",
      "Maintenance log tracking",
      "Custom report builder",
      "Export & scheduling options",
    ],
  },
  {
    id: "geofencing",
    icon: Radar,
    title: "Geofencing & Safe Zones",
    subtitle: "Virtual Boundary Protection",
    description:
      "Virtual boundary setting with breach alerts for enhanced security. Define safe zones and get notified when vehicles enter or exit designated areas.",
    features: [
      "Custom geofence creation",
      "Entry & exit alerts",
      "Zone dwell-time tracking",
      "Multiple zone support",
      "Historical zone reports",
      "Unauthorized use detection",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Tracking & Fleet Solutions"
            description="Cutting-edge technology with real-time updates, seamless integration, and a proven track record with 5,000+ global assets tracked."
            light
          />
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <FadeIn key={service.id}>
              <div
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div
                      className={`inline-flex w-14 h-14 rounded-2xl border items-center justify-center mb-6 ${
                        i % 2 === 0
                          ? "bg-primary/10 text-primary border-primary/10"
                          : "bg-accent/10 text-accent border-accent/10"
                      }`}
                    >
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-3xl font-bold text-charcoal mb-2">
                      {service.title}
                    </h2>
                    <p className="text-accent font-medium mb-4">{service.subtitle}</p>
                    <p className="text-gray-500 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${i % 2 === 0 ? "text-primary" : "text-accent"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`rounded-2xl border border-gray-100 h-64 lg:h-80 flex items-center justify-center ${
                      i % 2 === 0 ? "bg-primary/5" : "bg-accent/5"
                    } ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
                  >
                    <service.icon className={`w-24 h-24 ${i % 2 === 0 ? "text-primary/20" : "text-accent/20"}`} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
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
              Ready to <span className="text-accent">Get Started?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Contact us today for a consultation. We&apos;ll guide you through onboarding, hardware setup, and team training.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Make Appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href="tel:+27829660677"
                variant="outline"
                size="lg"
                className="!border-white/20 !text-white hover:!bg-white/10 hover:!text-white hover:!border-white/40"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
