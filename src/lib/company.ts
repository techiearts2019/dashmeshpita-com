export const company = {
  name: "Dashmeshpita Management and Consulting Private Limited",
  shortName: "Dashmeshpita",
  tagline:
    "Professional Verification, Recovery, Collection, Repossession and Asset Management Services.",
  phone: "+91 9650386662",
  phoneHref: "tel:+919650386662",
  email: "dashmeshpitamanagement@gmail.com",
  website: "www.dashmeshpita.com",
  address:
    "B-15 Basement, Block B, Community Centre, Janakpuri, New Delhi 110058",
  mapsQuery:
    "B-15 Basement, Block B, Community Centre, Janakpuri, New Delhi 110058",
  cin: "U80100DL2023PTC416936",
  pan: "AAKCD1538R",
  tan: "DELD28998E",
  gst: "07AAKCD1538R1Z3",
};

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  company.mapsQuery,
)}&output=embed`;

export const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  company.mapsQuery,
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Verticals", to: "/verticals" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Clients", to: "/clients" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const services = [
  {
    slug: "recovery-collection",
    icon: "wallet",
    title: "Recovery & Collection",
    description:
      "Structured recovery and collection support across credit cards, personal loans, auto, two wheeler, home and business loan portfolios.",
  },
  {
    slug: "repossession",
    icon: "truck",
    title: "Repossession Services",
    description:
      "End to end repossession of vehicles, mobile handsets and other financed assets, with secure custody and reporting.",
  },
  {
    slug: "verification",
    icon: "search-check",
    title: "Verification Services",
    description:
      "Residential, address, educational, reference and background verification assignments executed by trained field teams.",
  },
  {
    slug: "npa-recovery",
    icon: "file-check",
    title: "NPA & Recovery Assignments",
    description:
      "Support for NPA settlement, write off portfolios and specialised debtor recovery assignments as per client instructions.",
  },
  {
    slug: "asset-management",
    icon: "warehouse",
    title: "Asset Management",
    description:
      "Custody, parking, documentation and condition reporting for repossessed and client allocated assets.",
  },
  {
    slug: "field-operations",
    icon: "map-pinned",
    title: "Specialized Field Operations",
    description:
      "Liaisoning, field coordination, customer engagement and tele calling support across Delhi & NCR field networks.",
  },
] as const;

export const products = [
  "Credit Cards",
  "Personal Loans",
  "Two Wheeler Loans",
  "Auto Loans",
  "Home Loans",
  "Business Loans",
  "Consumer Durable Finance",
  "NPA Portfolios",
  "Write Off Portfolios",
];

export const industries = [
  {
    title: "Banking Institutions",
    description:
      "Solutions for multinational and public sector banking organizations.",
    icon: "landmark",
  },
  {
    title: "NBFCs",
    description:
      "Recovery, collection, repossession and portfolio management support.",
    icon: "building-2",
  },
  {
    title: "Telecommunications",
    description:
      "Verification, collection and customer related field assignments.",
    icon: "radio-tower",
  },
  {
    title: "Corporate Organizations",
    description:
      "Specialized recovery, verification and debtor related assignments.",
    icon: "briefcase",
  },
] as const;

export const verticals = [
  {
    title: "Multinational Banking Institutions",
    description:
      "Professional recovery, collection, verification and field support for banking portfolios.",
  },
  {
    title: "Public Sector Banking",
    description:
      "Structured support for recovery and collection assignments across applicable banking portfolios.",
  },
  {
    title: "Non Banking Financial Companies",
    description:
      "Portfolio focused collection, recovery, repossession and verification services.",
  },
  {
    title: "Telecommunications & Cellular Service Providers",
    description:
      "Verification, customer related field services and collection support.",
  },
  {
    title: "Corporate & Business Houses",
    description:
      "Specialized recovery and debtor related assignments tailored to corporate requirements.",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Professionals",
    description:
      "Leadership and supervisory experience across banking, NBFC and telecom recovery assignments.",
    icon: "users",
  },
  {
    title: "Trained Recovery Workforce",
    description:
      "IIBF trained executives, supervisors and managers handling recovery and repossession work.",
    icon: "graduation-cap",
  },
  {
    title: "Structured Field Network",
    description:
      "Field executives coordinated through supervisors and managers for consistent coverage.",
    icon: "network",
  },
  {
    title: "Strong Operational Supervision",
    description:
      "Layered oversight from management through supervisors to field level execution.",
    icon: "shield-check",
  },
  {
    title: "MIS & Reporting Systems",
    description:
      "Management information and reporting supporting timely monitoring and communication.",
    icon: "bar-chart-3",
  },
  {
    title: "Compliance Focused Processes",
    description:
      "Assignments executed in line with applicable laws, regulations and client instructions.",
    icon: "scale",
  },
  {
    title: "Client Centric Execution",
    description:
      "Service delivery aligned to portfolio requirements and client service expectations.",
    icon: "handshake",
  },
  {
    title: "Confidential Data Management",
    description:
      "Controlled access and structured handling of client and customer information.",
    icon: "lock",
  },
] as const;

export const infrastructureItems = [
  {
    title: "Trained & Skilled Workforce",
    description:
      "Experienced personnel supporting field and operational requirements.",
    icon: "users",
  },
  {
    title: "Internal Control System",
    description:
      "Reliable internal procedures designed to maintain operational discipline.",
    icon: "shield-check",
  },
  {
    title: "MIS & Reporting",
    description:
      "Management information and reporting systems supporting timely monitoring and communication.",
    icon: "bar-chart-3",
  },
  {
    title: "Protected Database Management",
    description:
      "Structured database management with emphasis on data security and controlled access.",
    icon: "database",
  },
  {
    title: "Employee Work Environment",
    description:
      "Cool and comfortable seating arrangements supporting productive operations.",
    icon: "armchair",
  },
  {
    title: "File Storage",
    description: "Furnished file storage cabinets for systematic documentation.",
    icon: "folder-closed",
  },
  {
    title: "Electrical Infrastructure",
    description: "Adequate lighting and electrical fittings.",
    icon: "plug-zap",
  },
  {
    title: "Computer Systems",
    description:
      "Dedicated computer systems for operational and administrative work.",
    icon: "monitor",
  },
  {
    title: "Printers",
    description: "Printing infrastructure for documentation and reporting.",
    icon: "printer",
  },
  {
    title: "Telephone Lines",
    description: "Reliable communication facilities.",
    icon: "phone-call",
  },
  {
    title: "Internet Connectivity",
    description:
      "Internet infrastructure supporting daily operations and communication.",
    icon: "wifi",
  },
] as const;

export const clients = [
  {
    name: "L&T Finance Ltd.",
    portfolio: ["Two Wheeler: BKT 1 & 2", "Personal Loans: BKT 1 & 3", "Write Off"],
  },
  {
    name: "RBL Bank Ltd.",
    portfolio: ["Credit Cards: BKT 1 & 2", "NPA & Recovery"],
  },
  {
    name: "Tata Capital Ltd.",
    portfolio: ["Two Wheeler: BKT 1 & 3", "NPA & Write Off"],
  },
  {
    name: "ICICI Bank Ltd.",
    portfolio: [
      "Consumer Durable: BKT 3+",
      "Credit Cards: BKT 1",
      "Personal Loans: BKT 1 & 2",
      "Write Off",
    ],
  },
  {
    name: "HDB Financial Services",
    portfolio: ["Two Wheeler: BKT 1, 2 & 3", "Write Off"],
  },
  {
    name: "Groww Serv Private Limited",
    portfolio: ["Personal Loans: BKT 1, 2, 3 & 4", "NPA & Write Off"],
  },
  {
    name: "Muthoot Capital Services Ltd.",
    portfolio: ["Two Wheeler: BKT 0, 1, 2 & 3"],
  },
  {
    name: "Hinduja Leyland Finance Limited",
    portfolio: ["Two Wheeler: BKT X, 1 & 2"],
  },
  {
    name: "Bajaj Finance Limited",
    portfolio: ["Two Wheeler: BKT X, 1 & 2"],
  },
  {
    name: "Moneyview",
    portfolio: ["Personal Loans: BKT 1, 2 & 3", "Recovery"],
  },
  {
    name: "Hero FinCorp Limited",
    portfolio: ["Two Wheeler: Recovery"],
  },
  {
    name: "Piramal Finance",
    portfolio: ["Personal Loans: BKT 2 & 3", "NPA"],
  },
];

export const clientDisclaimer =
  "Client names and logos are displayed subject to applicable permissions and contractual requirements.";
