export const StaticMarker = () => {
  return (
    <div className="absolute z-[500] top-48 left-48 -translate-x-1/2 -translate-y-1/2 w-6 h-10 flex justify-center">
      <div className="absolute size-6 rounded-full bg-purple-700 flex items-center justify-center">
        <div className="size-3 rounded-full bg-white"></div>
      </div>
      <div className="w-0.5 h-full bg-black"></div>
    </div>
  );
};
