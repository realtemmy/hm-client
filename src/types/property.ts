export type PropertyType = "APARTMENT" | "HOUSE" | "HOSTEL";

export interface Property {
  id: string;
  title: string;
  description?: string;
  type: PropertyType;
  ownerId: string;
  isActive: boolean;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Building {
  id: string;
  name?: string;
  propertyId: string;
  addressId?: string;
  floors?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  longitude?: number;
  latitude?: number;
  buildingId?: string;
}
