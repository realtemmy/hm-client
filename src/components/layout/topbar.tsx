"use client";

import { UserMenu } from "./user-menu";
import { config } from "@/lib/config";

interface TopbarProps {
  title?: string;
}

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-xl font-semibold">
          {title || config.app.name}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search will be added later */}
        {/* Notifications will be added later */}
        <UserMenu />
      </div>
    </header>
  );
}
