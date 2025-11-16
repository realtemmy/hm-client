import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { propertiesApi, type PropertyFilters } from "@/lib/api/properties";
import type {
  CreatePropertyData,
  UpdatePropertyData,
  CreateBuildingData,
  UpdateBuildingData,
} from "@/lib/api/properties";
import { toast } from "sonner";

/**
 * Get all properties
 */
export function useProperties(filters?: PropertyFilters) {
  return useQuery({
    queryKey: ["properties", filters],
    queryFn: () => propertiesApi.list(filters),
  });
}

/**
 * Get single property
 */
export function useProperty(id: string) {
  return useQuery({
    queryKey: ["properties", id],
    queryFn: () => propertiesApi.get(id),
    enabled: !!id,
  });
}

/**
 * Create property mutation
 */
export function useCreateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePropertyData) => propertiesApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property created successfully");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error?.message ||
          "Failed to create property"
      );
    },
  });
}

/**
 * Update property mutation
 */
export function useUpdateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatePropertyData }) =>
      propertiesApi.update(id, data),
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["properties", id] });
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property updated successfully");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error?.message ||
          "Failed to update property"
      );
    },
  });
}

/**
 * Delete property mutation
 */
export function useDeleteProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => propertiesApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property deleted successfully");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error?.message ||
          "Failed to delete property"
      );
    },
  });
}

/**
 * Get buildings for a property
 */
export function useBuildings(propertyId: string) {
  return useQuery({
    queryKey: ["properties", propertyId, "buildings"],
    queryFn: () => propertiesApi.getBuildings(propertyId),
    enabled: !!propertyId,
  });
}

/**
 * Get single building
 */
export function useBuilding(id: string) {
  return useQuery({
    queryKey: ["buildings", id],
    queryFn: () => propertiesApi.getBuilding(id),
    enabled: !!id,
  });
}

/**
 * Create building mutation
 */
export function useCreateBuilding() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBuildingData) =>
      propertiesApi.createBuilding(data),
    onSuccess: (response, { propertyId }) => {
      queryClient.invalidateQueries({
        queryKey: ["properties", propertyId, "buildings"],
      });
      queryClient.invalidateQueries({
        queryKey: ["properties", propertyId],
      });
      toast.success("Building created successfully");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error?.message ||
          "Failed to create building"
      );
    },
  });
}

/**
 * Update building mutation
 */
export function useUpdateBuilding() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateBuildingData }) =>
      propertiesApi.updateBuilding(id, data),
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["buildings", id] });
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Building updated successfully");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error?.message ||
          "Failed to update building"
      );
    },
  });
}

/**
 * Delete building mutation
 */
export function useDeleteBuilding() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => propertiesApi.deleteBuilding(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["buildings"] });
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Building deleted successfully");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error?.message ||
          "Failed to delete building"
      );
    },
  });
}
