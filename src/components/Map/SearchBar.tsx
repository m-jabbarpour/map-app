import { useCallback, useEffect, useState } from "react";
// services
import { ApiService } from "@/services/apiService";
// types
import { IPosition } from "@/types";
// utils
import { debounce } from "@/utils";
// icons
import { SearchIcon } from "@/icons/SearchIcon";

interface SearchBarProps {
  setMapViewtoSearchResult: (position: IPosition) => void;
}

export const SearchBar = ({ setMapViewtoSearchResult }: SearchBarProps) => {
  const [keyword, setKeyword] = useState("second");

  const debouncedSetKeyword = useCallback(
    debounce((value: string) => setKeyword(value), 500),
    []
  );

  useEffect(() => {
    let ignore = false;

    if (keyword) {
      ApiService.searchAddress(keyword).then((position) => {
        if (!ignore) {
          setMapViewtoSearchResult(position);
        }
      });
    }

    return () => {
      ignore = true;
    };
  }, [keyword]);

  return (
    <div className="absolute top-4 left-4 bg-white w-[352px] z-[500] rounded p-2 shadow-md overflow-hidden flex items-center gap-2 font-vazir">
      <SearchIcon />
      <div className="relative size-full">
        <input
          className="size-full outline-none peer"
          onChange={(e) => debouncedSetKeyword(e.target.value)}
        />
        <div
          className={`absolute inset-0 pointer-events-none flex items-center text-gray-400 peer-focus:hidden ${
            keyword ? "hidden" : ""
          }`}
        >
          <span>جستجو در</span>
          <span className="font-bold text-purple-600">&nbsp;تهران</span>
        </div>
      </div>
    </div>
  );
};
