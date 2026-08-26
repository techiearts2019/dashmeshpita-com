import {
  Armchair,
  BarChart3,
  Briefcase,
  Building2,
  Database,
  FileCheck,
  FolderClosed,
  GraduationCap,
  Handshake,
  Landmark,
  Lock,
  MapPinned,
  Monitor,
  Network,
  PhoneCall,
  PlugZap,
  Printer,
  RadioTower,
  Scale,
  SearchCheck,
  ShieldCheck,
  Truck,
  Users,
  Wallet,
  Warehouse,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  armchair: Armchair,
  "bar-chart-3": BarChart3,
  briefcase: Briefcase,
  "building-2": Building2,
  database: Database,
  "file-check": FileCheck,
  "folder-closed": FolderClosed,
  "graduation-cap": GraduationCap,
  handshake: Handshake,
  landmark: Landmark,
  lock: Lock,
  "map-pinned": MapPinned,
  monitor: Monitor,
  network: Network,
  "phone-call": PhoneCall,
  "plug-zap": PlugZap,
  printer: Printer,
  "radio-tower": RadioTower,
  scale: Scale,
  "search-check": SearchCheck,
  "shield-check": ShieldCheck,
  truck: Truck,
  users: Users,
  wallet: Wallet,
  warehouse: Warehouse,
  wifi: Wifi,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? ShieldCheck;
  return <Cmp className={className} aria-hidden="true" />;
}
