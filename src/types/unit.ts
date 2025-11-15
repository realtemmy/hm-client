export type UnitStatus = "AVAILABLE" | "OCCUPIED" | "MAINTENANCE" | "RESERVED";

export interface Unit {
  id: string;
  unitNumber: string;
  propertyId: string;
  buildingId?: string;
  floor?: number;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  status: UnitStatus;
  rentAmount: number;
  depositAmount?: number;
  occupantId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Photo {
  id: string;
  url: string;
  caption?: string;
  unitId?: string;
  createdAt: string;
}
