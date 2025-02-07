import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.map.com/search/get-address", ({ request }) => {
    const url = new URL(request.url);
    const lat = url.searchParams.get("lat");
    const lng = url.searchParams.get("lng");
    if (lat && lng) {
      console.log({ lat, lng });
      return HttpResponse.json({ address: ["تهران", "آزادی"] });
    }
  }),
  http.get("https://api.map.com/search/search-address", ({ request }) => {
    const url = new URL(request.url);
    const address = url.searchParams.get("address");

    if (address) {
      return HttpResponse.json([35.7, 51.34]);
    }
  }),
];
