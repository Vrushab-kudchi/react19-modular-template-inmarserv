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
