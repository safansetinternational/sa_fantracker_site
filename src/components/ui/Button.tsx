import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 focus:ring-primary",
    secondary:
      "bg-accent hover:bg-accent-light text-charcoal shadow-lg shadow-accent/25 hover:shadow-accent/40 focus:ring-accent",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-charcoal focus:ring-accent",
    ghost:
      "text-gray-600 hover:text-accent hover:bg-accent/5 focus:ring-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return <button className={cls}>{children}</button>;
}
