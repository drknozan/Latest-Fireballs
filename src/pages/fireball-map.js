import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import MapContainer from '@/containers/MapContainer';
import formatCoordinates from '@/helpers/formatCoordinates';
import { useEffect, useState } from 'react';

export default function FireballMap({ coordinates }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <MapContainer coordinates={coordinates} />;
}

export async function getStaticProps() {
  const res = await fetch(
    'https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2024-01-01&req-loc=true',
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch fireballs data.');
  }

  const coordinates = formatCoordinates(data.data);

  return {
    props: {
      coordinates: coordinates,
    },
    revalidate: 1800,
  };
}
