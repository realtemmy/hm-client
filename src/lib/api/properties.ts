import { apiClient } from "./client";
import type { Property, Building, Address } from "@/types/property";
import type { ApiResponse, PaginatedResponse } from "@/types/api";

export interface PropertyFilters {
  page?: number;
  limit?: number;
  type?: string;
  verified?: boolean;
  isActive?: boolean;
  ownerId?: string;
}

export interface CreatePropertyData {
  title: string;
  description?: string;
  type: "APARTMENT" | "HOUSE" | "HOSTEL";
}

export interface UpdatePropertyData {
  title?: string;
  description?: string;
  type?: "APARTMENT" | "HOUSE" | "HOSTEL";
  isActive?: boolean;
  verified?: boolean;
}

export interface CreateBuildingData {
  name?: string;
  propertyId: string;
  floors?: number;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    longitude?: number;
    latitude?: number;
  };
}

export interface UpdateBuildingData {
  name?: string;
  floors?: number;
}

export const propertiesApi = {
  /**
   * Get all properties with filters
   */
  list: async (
    filters?: PropertyFilters
  ): Promise<ApiResponse<PaginatedResponse<Property>>> => {
    const response = await apiClient.get<
      ApiResponse<PaginatedResponse<Property>>
    >("/property", { params: filters });
    return response.data;
  },

  /**
   * Get single property by ID
   */
  get: async (id: string): Promise<ApiResponse<Property>> => {
    const response = await apiClient.get<ApiResponse<Property>>(
      `/property/${id}`
    );
    return response.data;
  },

  /**
   * Create new property
   */
  create: async (
    data: CreatePropertyData
  ): Promise<ApiResponse<Property>> => {
    const response = await apiClient.post<ApiResponse<Property>>(
      "/property",
      data
    );
    return response.data;
  },

  /**
   * Update property
   */
  update: async (
    id: string,
    data: UpdatePropertyData
  ): Promise<ApiResponse<Property>> => {
    const response = await apiClient.patch<ApiResponse<Property>>(
      `/property/${id}`,
      data
    );
    return response.data;
  },

  /**
   * Delete property
   */
  delete: async (id: string): Promise<ApiResponse<{ message: string }>> => {
    const response = await apiClient.delete<ApiResponse<{ message: string }>>(
      `/property/${id}`
    );
    return response.data;
  },

  /**
   * Get buildings for a property
   */
  getBuildings: async (
    propertyId: string
  ): Promise<ApiResponse<Building[]>> => {
    const response = await apiClient.get<ApiResponse<Building[]>>(
      `/property/${propertyId}/buildings`
    );
    return response.data;
  },

  /**
   * Create building for property
   */
  createBuilding: async (
    data: CreateBuildingData
  ): Promise<ApiResponse<Building>> => {
    const response = await apiClient.post<ApiResponse<Building>>(
      `/property/${data.propertyId}/buildings`,
      data
    );
    return response.data;
  },

  /**
   * Get single building
   */
  getBuilding: async (id: string): Promise<ApiResponse<Building>> => {
    const response = await apiClient.get<ApiResponse<Building>>(
      `/buildings/${id}`
    );
    return response.data;
  },

  /**
   * Update building
   */
  updateBuilding: async (
    id: string,
    data: UpdateBuildingData
  ): Promise<ApiResponse<Building>> => {
    const response = await apiClient.patch<ApiResponse<Building>>(
      `/buildings/${id}`,
      data
    );
    return response.data;
  },

  /**
   * Delete building
   */
  deleteBuilding: async (
    id: string
  ): Promise<ApiResponse<{ message: string }>> => {
    const response = await apiClient.delete<ApiResponse<{ message: string }>>(
      `/buildings/${id}`
    );
    return response.data;
  },
};
