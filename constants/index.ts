// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/how-it-works", key: "how_hilink_work", label: "How Hilink Works" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/pricing", key: "pricing", label: "Pricing" },
  { href: "/contact", key: "contact_us", label: "Contact Us" },
] as const;

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
] as const;

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Offline Maps",
    icon: "/map.svg",
    variant: "green",
    description: "Use maps without internet. Ideal for remote areas.",
  },
  {
    title: "Adventure Scheduling",
    icon: "/calendar.svg",
    variant: "green",
    description: "Plan trips and manage schedules بسهولة.",
  },
  {
    title: "AR Navigation",
    icon: "/tech.svg",
    variant: "green",
    description: "Navigate trails using augmented reality.",
  },
  {
    title: "Monthly New Locations",
    icon: "/location.svg",
    variant: "orange",
    description: "Explore new places shared by global users.",
  },
] as const;

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { label: "About Hilink", href: "/about" },
      { label: "Press Releases", href: "/press" },
      { label: "Environment", href: "/environment" },
      { label: "Jobs", href: "/jobs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Climbing", href: "/climbing" },
      { label: "Hiking", href: "/hiking" },
      { label: "Hilink Community", href: "/community" },
    ],
  },
] as const;

// CONTACT
export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Phone", value: "123-456-7890" },
    { label: "Email", value: "hilink@akinthil.com" },
  ],
} as const;

// SOCIALS
export const SOCIALS = {
  title: "Social",
  links: [
    { icon: "/facebook.svg", href: "https://facebook.com" },
    { icon: "/instagram.svg", href: "https://instagram.com" },
    { icon: "/twitter.svg", href: "https://twitter.com" },
    { icon: "/youtube.svg", href: "https://youtube.com" },
  ],
} as const;

// FOOTER COPYRIGHT
export const FOOTER_COPYRIGHT = {
  title: "© 2023 Hilink. All rights reserved.",
} as const;