export type Vessel = {
  _id: string;
  clientId: string;
  modulesId: string[];
  name: string;
  imoNumber: string;
  mmsiNumber: string;
  callSign: string;
  flagState: string;
  vesselType: string;
  grossTonnage: number;
  deadweight: number;
  length: number;
  width: number;
  draft: number;
  yearBuilt: number;
  classificationSociety: string;
  owner: string;
  operator: string;
  clientName: string;
  status: string;
  portOfRegistry: string;
  homePort: string;
  currentLocation: string;
  createdBy: string;
  email: string;
  telephone: string;
  sat_c: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  certificateNumber?: string;
  expiryDate?: string;
  equipmentCount?: number;
};

export type DashboardResponse = {
  message: string;
  totalVessels: number;
  vessels: Vessel[];
};

export type module = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

export type VesselResponse = {
  equipmentCount: number;
  clientId: {
    _id: string;
    name: string;
  };
  modulesId: module[];
  name: string;
  imoNumber: string;
  mmsiNumber: string;
  callSign: string;
  flagState: string;
  vesselType: string;
  grossTonnage: number;
  deadweight: number;
  length: number;
  width: number;
  draft: number;
  yearBuilt: number;
  classificationSociety: string;
  owner: string;
  operator: string;
  clientName: string;
  status: string;
  portOfRegistry: string;
  homePort: string;
  currentLocation: string;
  createdBy: Date;
  email: string;
  telephone: string;
  sat_c: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  certificateNumber: string;
  expiryDate: string;
  id: string;
};

// Enums matching backend schema
export type VesselType =
  | "cargo"
  | "tanker"
  | "container"
  | "bulk_carrier"
  | "general_cargo"
  | "other";

export type VesselStatus = "active" | "inactive" | "maintenance" | "dry_dock";

// Create Vessel DTO - Required fields based on backend schema
export type CreateVesselDto = {
  // Required fields
  clientId: string;
  name: string;
  imoNumber: string;
  owner: string;

  // Optional fields
  modulesId?: string[];
  mmsiNumber?: string;
  callSign?: string;
  flagState?: string;
  vesselType?: VesselType;
  grossTonnage?: number;
  deadweight?: number;
  length?: number;
  width?: number;
  draft?: number;
  yearBuilt?: number;
  classificationSociety?: string;
  operator?: string;
  clientName?: string;
  status?: VesselStatus;
  lastInspection?: string; // ISO date string
  nextInspection?: string; // ISO date string
  portOfRegistry?: string;
  homePort?: string;
  currentLocation?: string;
  equipmentCount?: number;
  series?: string;
  vesselClass?: string;
  fleetGroup?: string;
  plannedYard?: string;
  type?: string;
  yardDate?: string; // ISO date string
  email?: string;
  telephone?: string;
  sat_c?: string;
  code?: string;
  certificateNumber?: string;
  expiryDate?: string; // ISO date string
};

// Update Vessel DTO - All fields optional except id
export type UpdateVesselDto = Partial<CreateVesselDto> & {
  id: string; // Required to identify which vessel to update
};
