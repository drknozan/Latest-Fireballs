import GoogleMapReact from 'google-map-react';
import MapMarker from '@/components/MapMarker';
import InfoCard from '@/components/InfoCard';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MapContainer({ coordinates }) {
  const [clickedMarker, setClickedMarker] = useState(null);

  const handleMarkerClicked = (markerInfo) => {
    setClickedMarker(markerInfo);
  };

  const defaultProps = {
    center: {
      lat: 40.4168,
      lng: -3.7038,
    },
    zoom: 5,
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-80px)]"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.3 }}
    >
      <div className="h-[calc(100vh-80px)] relative my-16">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {coordinates.map((c) => (
            <MapMarker
              key={c.date}
              lat={c.lat}
              lng={c.lon}
              info={c}
              handleMarkerClicked={handleMarkerClicked}
            />
          ))}
        </GoogleMapReact>
        {clickedMarker && <InfoCard info={clickedMarker} />}
      </div>
    </motion.div>
  );
}
