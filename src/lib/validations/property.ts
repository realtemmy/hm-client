import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(1, "Property title is required"),
  description: z.string().optional(),
  type: z.enum(["APARTMENT", "HOUSE", "HOSTEL"], {
    required_error: "Property type is required",
  }),
});

export type PropertyFormData = z.infer<typeof propertySchema>;

export const buildingSchema = z.object({
  name: z.string().optional(),
  propertyId: z.string().min(1, "Property is required"),
  floors: z.number().int().min(1).optional(),
});

export type BuildingFormData = z.infer<typeof buildingSchema>;

export const addressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required").default("Nigeria"),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
});

export type AddressFormData = z.infer<typeof addressSchema>;

export const buildingWithAddressSchema = buildingSchema.extend({
  address: addressSchema.optional(),
});

export type BuildingWithAddressFormData = z.infer<
  typeof buildingWithAddressSchema
>;
