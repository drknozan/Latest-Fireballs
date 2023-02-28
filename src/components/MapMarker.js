import { FaMeteor } from 'react-icons/fa';

export default function MapMarker({ info, handleMarkerClicked }) {
  return (
    <div
      className="h-8 w-8 hover:scale-125 transition-all cursor-pointer"
      onClick={() => handleMarkerClicked(info)}
    >
      <FaMeteor className="h-8 w-8 text-red-500" />
    </div>
  );
}
