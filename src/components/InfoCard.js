export default function InfoCard({ info }) {
  return (
    <div className="w-56 absolute top-0 left-0 mt-10 ml-10 rounded p-4 bg-white text-gray-600 border-2 border-red-400 text-sm sm:text-md">
      <h1 className="uppercase">Fireball Info</h1>
      <hr className="my-2"></hr>
      <h2>
        Total Impact Energy:{' '}
        <span className="text-xs sm:text-sm text-red-400">
          {info.impact + ' kt'}
        </span>
      </h2>
      <h2>
        Date:{' '}
        <span className="text-xs sm:text-sm text-red-400">{info.date}</span>
      </h2>
      <h2>
        Lat: <span className="text-xs sm:text-sm text-red-400">{info.lat}</span>
      </h2>
      <h2>
        Lon: <span className="text-xs sm:text-sm text-red-400">{info.lon}</span>
      </h2>
    </div>
  );
}
