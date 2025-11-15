export type LeaseStatus = "ACTIVE" | "PENDING" | "TERMINATED" | "EXPIRED";

export interface Lease {
  id: string;
  unitId: string;
  tenantId: string;
  startDate: string;
  endDate: string;
  rentAmount: number;
  securityDeposit?: number;
  status: LeaseStatus;
  createdAt: string;
  updatedAt: string;
}

export interface LeaseRenewal {
  id: string;
  leaseId: string;
  requestedAt: string;
  newStart: string;
  newEnd: string;
  newRent?: number;
  approved?: boolean;
}
