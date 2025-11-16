import { Building2, MapPin, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const PROPERTY_TYPE_LABELS = {
  APARTMENT: "Apartment",
  HOUSE: "House",
  HOSTEL: "Hostel",
};

export function PropertyCard({ property, onEdit, onDelete }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="space-y-2 pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Link
              href={`/admin/properties/${property.id}`}
              className="text-lg font-semibold hover:underline"
            >
              {property.title}
            </Link>
            <div className="flex items-center gap-2">
              <Badge variant={property.isActive ? "default" : "secondary"}>
                {property.isActive ? "Active" : "Inactive"}
              </Badge>
              {property.verified && (
                <Badge variant="outline" className="border-green-500 text-green-700">
                  Verified
                </Badge>
              )}
            </div>
          </div>
          <Building2 className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{PROPERTY_TYPE_LABELS[property.type]}</span>
        </div>

        {property.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {property.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 border-t pt-4">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link href={`/admin/properties/${property.id}`}>
            View Details
          </Link>
        </Button>
        {onEdit && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(property.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
        )}
        {onDelete && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(property.id)}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
