"use client";
import { useCallback, useEffect, useRef, useState } from "react";
// leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
// services
import { ApiService } from "@/services/apiService";
// utils
import { debounce } from "@/utils";
// components
import { SearchBar } from "./SearchBar";
import { StaticMarker } from "./StaticMarker";
import { IPosition } from "@/types";

import("@/mocks").then(({ setupMocks }) => {
  setupMocks();
});

export const Map = () => {
  const mapRef = useRef<L.Map>(null);

  const [isMapRendered, setIsMapRendered] = useState(false);

  const setMapView = useCallback((position: IPosition) => {
    if (mapRef.current) {
      mapRef.current.setView(position);
    }
  }, []);

  const onMove = useCallback(async () => {
    if (mapRef.current) {
      const position = mapRef.current.getCenter();
      const {
        address: [city, street],
      } = await ApiService.getAddress(position);
      console.log(`موقعیت پوینتر در نقشه: شهر ${city}, خیابان: ${street}`);
    }
  }, []);
  const debouncedHandleMove = useCallback(debounce(onMove, 500), [onMove]);

  useEffect(() => {
    if (isMapRendered) {
      mapRef?.current?.on("move", debouncedHandleMove);
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.off("move", debouncedHandleMove);
      }
    };
  }, [isMapRendered, debouncedHandleMove]);

  return (
    <div className="fixed h-full w-full flex justify-center items-center z-10 bg-gray-300">
      <MapContainer
        ref={(node) => {
          mapRef.current = node;
          setIsMapRendered(Boolean(node));
        }}
        className="size-96"
        center={[35.6892, 51.389]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
        <StaticMarker />
        <ZoomControl position="bottomleft" />
        <SearchBar setMapViewtoSearchResult={setMapView} />
      </MapContainer>
    </div>
  );
};
