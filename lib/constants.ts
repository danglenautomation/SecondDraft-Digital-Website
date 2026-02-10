export const SITE_CONFIG = {
  name: "SecondDraft Digital",
  tagline: "Professional websites, built right the second time.",
  description:
    "SecondDraft Digital rebuilds and creates websites for businesses. We offer website creation and premium hosting with global performance and enterprise security.",
  url: "https://seconddraft.digital",
  email: "hello@seconddraft.digital",
  phone: "",
  links: {
    home: "/",
    services: "/services",
    about: "/about",
    contact: "/contact",
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const SERVICES = {
  creation: {
    title: "Website Creation",
    shortDescription:
      "Modern, responsive websites built with the latest technologies.",
    description:
      "We design and build websites that look great and perform brilliantly. From small business sites to more complex projects, we deliver SEO-optimised, mobile-first experiences.",
  },
  hosting: {
    title: "Premium Hosting",
    shortDescription:
      "Fast, secure hosting that scales with your business.",
    description:
      "Your site deserves infrastructure that keeps it fast and online. We provide global content delivery, automatic SSL, and 99.99% uptime so you can focus on your business.",
  },
} as const;

export const HOSTING_BENEFITS = [
  {
    title: "Lightning-Fast Global Performance",
    description:
      "Your site loads instantly anywhere in the world through our distributed network.",
    icon: "speed",
  },
  {
    title: "Enterprise Security Built-In",
    description:
      "Bank-level security with automatic HTTPS and protection against common threats.",
    icon: "shield",
  },
  {
    title: "99.99% Uptime Guarantee",
    description: "Your site stays online, always.",
    icon: "uptime",
  },
  {
    title: "Scales Automatically",
    description: "Handle traffic spikes without breaking a sweat.",
    icon: "scale",
  },
  {
    title: "Custom Domain Included",
    description: "Professional web address for your brand.",
    icon: "domain",
  },
] as const;

export const HOSTING_FEATURES_SERVICES = [
  {
    title: "Global Content Delivery",
    description:
      "Your content is served from the location closest to each visitor for the fastest possible load times.",
  },
  {
    title: "Automatic SSL Certificates",
    description: "Secure connections out of the box. No configuration required.",
  },
  {
    title: "Infinite Scalability",
    description:
      "Grow without limits or performance concerns. Our infrastructure scales with you.",
  },
  {
    title: "Built-in DDoS Protection",
    description: "Your site stays safe from attacks with enterprise-grade protection.",
  },
  {
    title: "Zero Downtime Deployments",
    description: "Updates happen seamlessly. Your visitors never see a maintenance page.",
  },
  {
    title: "Real-time Analytics",
    description: "Track your site's performance and visitor insights in real time.",
  },
] as const;

export const PROCESS_STEPS = [
  "Consultation",
  "Design",
  "Development",
  "Launch",
  "Support",
] as const;

export const SERVICE_INTEREST_OPTIONS = [
  "Website Creation",
  "Hosting",
  "Both",
] as const;

export const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under £1,000",
  "£1,000 - £2,500",
  "£2,500 - £5,000",
  "£5,000+",
] as const;
