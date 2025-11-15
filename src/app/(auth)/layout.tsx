import { config } from "@/lib/config";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Logo/Branding */}
      <div className="absolute left-8 top-8">
        <h1 className="text-2xl font-bold">{config.app.name}</h1>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
}
