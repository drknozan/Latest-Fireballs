import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import MapContainer from '@/containers/MapContainer';
import formatCoordinates from '@/helpers/formatCoordinates';
import { useEffect, useState } from 'react';

export default function FireballMap() {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    fetch(
      'https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2023-01-01&req-loc=true',
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = formatCoordinates(data.data);
        setCoordinates(formattedData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!coordinates) {
    return <Error />;
  }

  return <MapContainer coordinates={coordinates} />;
}
