"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    q: "What is fleet management?",
    a: "Fleet management involves overseeing and managing a company's vehicles, including vehicle tracking, maintenance scheduling, fuel management, and driver behavior monitoring to improve efficiency and safety.",
  },
  {
    q: "How does vehicle tracking work?",
    a: "Vehicle tracking uses GPS technology to monitor the real-time location, speed, and route of a vehicle. Data is transmitted to a central system where it can be accessed via a web or mobile app.",
  },
  {
    q: "What are the benefits of driver behavior monitoring?",
    a: "Driver behavior monitoring helps identify unsafe practices, reduce fuel consumption, lower maintenance costs, and enhance road safety.",
  },
  {
    q: "Can I track fuel consumption of my fleet?",
    a: "Yes, our fuel monitoring system provides real-time insights into fuel levels, consumption patterns, and helps detect any potential fuel theft or inefficiencies.",
  },
  {
    q: "Is it possible to set geofencing alerts?",
    a: "Yes, our system allows you to set up geofences and receive alerts when vehicles enter or exit designated areas, enhancing security and operational control.",
  },
  {
    q: "How can fleet maintenance software help my business?",
    a: "Our fleet maintenance software automates service schedules, tracks maintenance history, and provides alerts for upcoming service needs, reducing downtime and extending vehicle lifespan.",
  },
  {
    q: "What kind of reports can I generate?",
    a: "You can generate detailed reports on vehicle performance, fuel usage, driver behavior, maintenance logs, and more, providing valuable insights for data-driven decision-making.",
  },
  {
    q: "Do you offer trailer tracking as well?",
    a: "Yes, we offer trailer tracking solutions to monitor the location, status, and safety of your trailers, even when detached from the vehicle.",
  },
  {
    q: "How does video telematics work?",
    a: "Video telematics combines video footage with telematics data, allowing you to view driving incidents, enhance driver training, and improve safety measures.",
  },
  {
    q: "Is your system compatible with all vehicle types?",
    a: "Our fleet management solutions are compatible with a wide range of vehicles, including cars, trucks, trailers, and specialized fleet vehicles.",
  },
  {
    q: "Can I access the system on mobile devices?",
    a: "Yes, our platform is mobile-friendly, allowing you to manage your fleet and access critical data from anywhere using your smartphone or tablet.",
  },
  {
    q: "How do I get notified of critical events?",
    a: "You will receive real-time notifications via SMS, email, or in-app alerts for important events such as unauthorized vehicle use, maintenance due dates, and geofence breaches.",
  },
  {
    q: "Do you provide customer support?",
    a: "Yes, we offer 24/7 customer support to assist you with any queries, technical issues, or training needs you may have.",
  },
  {
    q: "How do I get started with your services?",
    a: "Getting started is simple! Contact us today for a consultation, and we'll guide you through the onboarding process, including setting up hardware and software, and training your team.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.04}>
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-charcoal pr-4">{faq.q}</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our tracking solutions and support."
            light
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
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
              Can&apos;t find what you&apos;re looking for? Our team is available 24/7 to help.
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
