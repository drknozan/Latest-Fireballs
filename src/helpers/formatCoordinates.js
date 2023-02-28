export default function formatCoordinates(data) {
  const coordinates = [];

  data.forEach((d) => {
    let fireballInfo = {};
    let lat = '';
    let lon = '';

    if (d[4] === 'S') {
      lat = d[3];
      lat = Number(lat);
      lat = lat * -1;
    }

    if (d[4] === 'N') {
      lat = d[3];
      lat = Number(lat);
    }

    if (d[6] === 'W') {
      lon = d[5];
      lon = Number(lon);
      lon = lon * -1;
    }

    if (d[6] === 'E') {
      lon = d[5];
      lon = Number(lon);
    }

    fireballInfo.lat = lat;
    fireballInfo.lon = lon;
    fireballInfo.impact = Number(d[2]);
    fireballInfo.date = d[0];

    coordinates.push(fireballInfo);
  });

  return coordinates;
}
