export interface QuickAction {
  id: string;
  label: string;
  href: string;
  icon: string; // SVG path data
}

export const quickActions: QuickAction[] = [
  {
    id: "book-online",
    label: "Book Online Consultation",
    href: "#",
    icon: "online-consultation",
  },
  {
    id: "book-hospital",
    label: "Book Hospital Visit",
    href: "#",
    icon: "hospital-visit",
  },
  {
    id: "pregnancy-tracker",
    label: "Pregnancy Tracker",
    href: "#",
    icon: "pregnancy-tracker",
  },
  {
    id: "book-scans",
    label: "Book Scans",
    href: "#",
    icon: "book-scans",
  },
];
