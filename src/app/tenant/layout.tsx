"use client";

import {
  Home,
  Building,
  FileText,
  Receipt,
  CreditCard,
  Wrench,
  FolderOpen,
  User,
} from "lucide-react";
import { Sidebar, type NavItem } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { AuthProvider } from "@/components/providers/auth-provider";

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/tenant/dashboard",
    icon: Home,
  },
  {
    title: "My Unit",
    href: "/tenant/my-unit",
    icon: Building,
  },
  {
    title: "Lease",
    href: "/tenant/lease",
    icon: FileText,
  },
  {
    title: "Invoices",
    href: "/tenant/invoices",
    icon: Receipt,
  },
  {
    title: "Payments",
    href: "/tenant/payments",
    icon: CreditCard,
  },
  {
    title: "Maintenance",
    href: "/tenant/maintenance",
    icon: Wrench,
  },
  {
    title: "Documents",
    href: "/tenant/documents",
    icon: FolderOpen,
  },
  {
    title: "Profile",
    href: "/tenant/profile",
    icon: User,
  },
];

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar items={navItems} title="Tenant Portal" />
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
