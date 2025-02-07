import { IPosition } from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.map.com";

export const API_ENDPOINTS = {
  SEARCH_ADDRESS: (address: string) => {
    return `${API_BASE_URL}/search/search-address?address=${address}`;
  },
  GET_ADDRESS: ({ lat, lng }: IPosition) => {
    return `${API_BASE_URL}/search/get-address?lat=${lat}&lng=${lng}`;
  },
};
