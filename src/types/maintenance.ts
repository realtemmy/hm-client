export type MaintenanceStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CANCELLED";

export interface MaintenanceRequest {
  id: string;
  title: string;
  description?: string;
  unitId: string;
  requesterId: string;
  assigneeId: string;
  status: MaintenanceStatus;
  priority?: number; // 1 (urgent) to 5 (low)
  requestedAt: string;
  resolvedAt?: string;
}

export interface MaintenanceNote {
  id: string;
  requestId: string;
  authorId: string;
  body: string;
  createdAt: string;
}

export interface Attachment {
  id: string;
  url: string;
  filename?: string;
  mimeType?: string;
  size?: number;
  uploadedById: string;
  maintenanceId?: string;
  createdAt: string;
}
