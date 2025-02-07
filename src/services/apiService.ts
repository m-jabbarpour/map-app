import { API_ENDPOINTS } from "@/config/apiEndPoints";
import {
  IGetAddressResponse,
  IPosition,
  ISearchAddressResponse,
} from "@/types";

export const ApiService = {
  searchAddress: async (address: string) => {
    const response = await fetch(API_ENDPOINTS.SEARCH_ADDRESS(address));
    const data = (await response.json()) as ISearchAddressResponse;
    return data;
  },
  getAddress: async (position: IPosition) => {
    const response = await fetch(API_ENDPOINTS.GET_ADDRESS(position));
    const data = (await response.json()) as IGetAddressResponse;
    return data;
  },
};
