type City = string;
type Street = string;
export interface IGetAddressResponse {
  address: [City, Street];
}

export interface IPosition {
  lat: number;
  lng: number;
}

export type ISearchAddressResponse = IPosition;
