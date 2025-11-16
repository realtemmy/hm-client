"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyForm } from "@/components/property/property-form";
import { useCreateProperty } from "@/lib/queries/properties";
import type { PropertyFormData } from "@/lib/validations/property";

export default function NewPropertyPage() {
  const router = useRouter();
  const createMutation = useCreateProperty();

  const handleSubmit = (data: PropertyFormData) => {
    createMutation.mutate(data, {
      onSuccess: (response) => {
        router.push(`/admin/properties/${response.data.id}`);
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/properties">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create New Property</h1>
          <p className="text-muted-foreground">
            Add a new property to your portfolio
          </p>
        </div>
      </div>

      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Property Information</CardTitle>
        </CardHeader>
        <CardContent>
          <PropertyForm
            onSubmit={handleSubmit}
            onCancel={() => router.back()}
            isLoading={createMutation.isPending}
          />
        </CardContent>
      </Card>
    </div>
  );
}
