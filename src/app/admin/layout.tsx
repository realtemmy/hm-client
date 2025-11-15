"use client";

import {
  Home,
  Building2,
  Building,
  Users,
  FileText,
  Receipt,
  CreditCard,
  Wrench,
  Bell,
  Settings,
} from "lucide-react";
import { Sidebar, type NavItem } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { AuthProvider } from "@/components/providers/auth-provider";

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Properties",
    href: "/admin/properties",
    icon: Building2,
  },
  {
    title: "Units",
    href: "/admin/units",
    icon: Building,
  },
  {
    title: "Tenants",
    href: "/admin/tenants",
    icon: Users,
  },
  {
    title: "Leases",
    href: "/admin/leases",
    icon: FileText,
  },
  {
    title: "Invoices",
    href: "/admin/invoices",
    icon: Receipt,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Maintenance",
    href: "/admin/maintenance",
    icon: Wrench,
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar items={navItems} title="Admin Panel" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
