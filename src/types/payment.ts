export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";

export interface Payment {
  id: string;
  leaseId?: string;
  invoiceId?: string;
  payerId: string;
  amount: number;
  currency: string;
  method?: string;
  status: PaymentStatus;
  transactionRef?: string;
  paidAt?: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  leaseId?: string;
  title: string;
  description?: string;
  amount: number;
  dueDate?: string;
  status: PaymentStatus;
  createdAt: string;
}
