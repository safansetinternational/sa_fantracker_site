import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Vehicle Tracking", href: "/services#vehicle-tracking" },
    { label: "Fuel Monitoring", href: "/services#fuel-monitoring" },
    { label: "Speed Limiting", href: "/services#speed-limiting" },
    { label: "Video Telematics", href: "/services#video-telematics" },
    { label: "Fleet Management", href: "/services#fleet-management" },
    { label: "Temperature Monitoring", href: "/services#temperature-monitoring" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Login Portal", href: "https://app.fantracker.net", external: true },
    { label: "24/7 Support", href: "/contact" },
    { label: "Request Demo", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo_fantracker.png"
                alt="FanTracker — Real. Ultimate. Control."
                className="h-14 w-auto rounded-lg"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cutting-edge vehicle tracking and fleet management solutions trusted by 3,000+ clients across 20+ countries.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>267 Oak Avenue, Ferndale, Randburg, RSA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@fantracker.net" className="hover:text-white transition-colors">
                  info@fantracker.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+27829660677" className="hover:text-white transition-colors">
                  +27 82 966 0677
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Zimbabwe Office */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Zimbabwe
            </h3>
            <a
              href="https://fantracker.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              Visit Zimbabwe Office
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FanTracker. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              24/7 Live Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
