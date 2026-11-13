// Single source of truth for navigation and the list of pages migrated from Webflow.
export const pages = [
  { slug: "company", title: "Company" },
  { slug: "agent", title: "For Agents" },
  { slug: "investor", title: "For Investors" },
  { slug: "careers", title: "Careers" },
  { slug: "contact-us", title: "Contact us" },
  { slug: "about-company", title: "About company" },
  { slug: "tether-and-reelly", title: "Tether & Reelly" },
  { slug: "agency", title: "For Agencies" },
  { slug: "api-extended", title: "API" },
  { slug: "agency-leaders", title: "Agency leaders" },
  { slug: "consulting", title: "Consulting" },
  { slug: "white-label", title: "White label" },
  { slug: "for-developer", title: "For Developers" },
] as const;

export const legalPages = [
  { slug: "cookie-policy", title: "Cookie policy" },
  { slug: "terms-of-use", title: "Terms of use" },
  { slug: "license", title: "License" },
  { slug: "privacy-policy", title: "Privacy policy" },
] as const;

export const nav = [
  { href: "/company", label: "Company" },
  { href: "/agent", label: "For Agents" },
  { href: "/investor", label: "For Investors" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export const appLinks = {
  signIn: "https://soft.reelly.io/sign-in",
  signUp: "https://soft.reelly.io/sign-up",
};
