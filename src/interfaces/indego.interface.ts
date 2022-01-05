export interface Indego {
  features: {
    geometry?: { coordinates: number[]; type: string };
    properties?: {
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
      bikes: { dockNumber: number; isElectric: boolean; isAvailable: boolean; battery: number | null }[];
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
    };
    type?: string;
  }[];
  type: string;
}
