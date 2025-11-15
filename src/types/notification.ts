export interface Notification {
  id: string;
  userId: string;
  title: string;
  body?: string;
  read: boolean;
  data?: Record<string, any>;
  createdAt: string;
}
