// icons
import { MinusIcon } from "@/icons/MinusIcon";
import { PlusIcon } from "@/icons/PlusIcon";

interface CustomZoomControlProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const CustomZoomControl = ({
  onZoomIn,
  onZoomOut,
}: CustomZoomControlProps) => {
  return (
    <div className="absolute bottom-4 left-4 z-[500] flex flex-col rounded overflow-hidden shadow-lg">
      <button
        className="p-1 border border-gray-200 transition-all bg-white hover:bg-gray-200"
        onClick={onZoomIn}
      >
        <PlusIcon />
      </button>
      <button
        className="p-1 border border-gray-200 transition-all bg-white hover:bg-gray-200"
        onClick={onZoomOut}
      >
        <MinusIcon />
      </button>
    </div>
  );
};
