import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TenantDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your tenant portal
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Next Rent Due
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,200</div>
            <p className="text-xs text-muted-foreground">
              Due on Dec 1, 2025
            </p>
            <Button size="sm" className="mt-3" asChild>
              <Link href="/tenant/payments">Pay Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              My Unit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apt 305</div>
            <p className="text-xs text-muted-foreground">
              Oak Building
            </p>
            <Button size="sm" variant="outline" className="mt-3" asChild>
              <Link href="/tenant/my-unit">View Details</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 in progress
            </p>
            <Button size="sm" variant="outline" className="mt-3" asChild>
              <Link href="/tenant/maintenance">View All</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/tenant/payments">Make Payment</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tenant/maintenance/new">Submit Maintenance Request</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tenant/lease">View Lease</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
