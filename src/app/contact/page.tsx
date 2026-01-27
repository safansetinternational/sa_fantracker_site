"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["267 Oak Avenue", "Ferndale, Randburg", "South Africa"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@fantracker.net", "support@fantracker.net"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+27 82 966 0677"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon - Sat: 8:00 AM - 5:00 PM", "24/7 Support Available"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Contact Us"
            title="Talk to Us — We Don't Bite"
            description="Big idea? Small question? Hit us up! We're humans who love cool conversations and even cooler collabs."
            light
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <FadeIn className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Request a Demo
                </h3>
                <p className="text-gray-500 mb-8">
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fleet Size
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white">
                      <option>Select fleet size</option>
                      <option>1-10 vehicles</option>
                      <option>11-50 vehicles</option>
                      <option>51-200 vehicles</option>
                      <option>200+ vehicles</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your tracking needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-accent hover:bg-accent-light text-charcoal font-semibold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info Sidebar */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{info.title}</h4>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm text-gray-500">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Live Support Badge */}
                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-accent">Live Support Available</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Our support team is available 24/7 to help with installation,
                    troubleshooting, and any questions you may have.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
