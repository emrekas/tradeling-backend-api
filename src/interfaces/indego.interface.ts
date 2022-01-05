export interface Indego {
  features: Feature[];
  type: string;
}

export interface Feature {
  geometry?: Geometry;
  properties?: Properties;
  type?: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  id: number;
  name: string;
  coordinates: number[];
  totalDocks: number;
  docksAvailable: number;
  bikesAvailable: number;
  classicBikesAvailable: number;
  smartBikesAvailable: number;
  electricBikesAvailable: number;
  rewardBikesAvailable: number;
  rewardDocksAvailable: number;
  kioskStatus: string;
  kioskPublicStatus: string;
  kioskConnectionStatus: string;
  kioskType: number;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZipCode: string;
  bikes: Bike[];
  closeTime: null;
  eventEnd: null;
  eventStart: null;
  isEventBased: boolean;
  isVirtual: boolean;
  kioskId: number;
  notes: null;
  openTime: null;
  publicText: string;
  timeZone: null;
  trikesAvailable: number;
  latitude: number;
  longitude: number;
}

export interface Bike {
  dockNumber: number;
  isElectric: boolean;
  isAvailable: boolean;
  battery: number | null;
}
