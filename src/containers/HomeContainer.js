import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollText from '@/components/ScrollText';
import Contact from '@/components/Contact';
import Image from 'next/image';
import mapmarkers from '../../public/mapmarkers.svg';
import earthmap from '../../public/earthmap.svg';
import research from '../../public/research.svg';
import outerspace from '../../public/outerspace.svg';

export default function HomeContainer() {
  return (
    <div>
      <motion.div
        className="flex flex-col sm:flex-row h-[calc(100vh-80px)] w-full relative"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
      >
        <div className="flex flex-col justify-center items-center text-center w-full h-1/2 sm:h-full sm:w-1/2 text-red-500">
          <h1 className="text-5xl block md:text-8xl tracking-wide uppercase">
            Latest
          </h1>
          <h2 className="text-3xl block md:text-6xl tracking-wider mt-1 uppercase">
            Fireballs
          </h2>
          <p className="text-sm sm:text-md text-red-300 mt-4 w-80">
            Fireballs are astronomical terms for exceptionally bright meteors
            that are spectacular enough to be seen over a very wide area.
          </p>
          <Link
            className="border-2 border-red-500 rounded p-3 mt-6 active:scale-90 hover:bg-red-500 hover:text-gray-100"
            href="/fireball-map"
          >
            Go To Map
          </Link>
        </div>
        <div className="flex justify-center items-center px-4">
          <Image src={mapmarkers} alt="mapmarkers"></Image>
        </div>
      </motion.div>
      <ScrollText />
      <div className="sm:h-screen flex flex-col sm:flex-row justify-center items-center mt-24 mb-24 gap-y-16 sm:gap-x-12">
        <div className="w-80 sm:w-1/3 h-[600px] flex flex-col items-center border-2 border-red-300 rounded-lg shadow-xl p-4 text-red-400 transition-all">
          <Image
            className="h-60 w-80 mt-6"
            src={earthmap}
            alt="earthmap"
          ></Image>
          <h1 className="text-2xl mt-8">Dynamic Map</h1>
          <p className="text-sm mt-4 w-2/3 text-center">
            Display all fireballs reported in 2023 with dynamic map.
          </p>
        </div>
        <div className="w-80 sm:w-1/3 h-[600px] flex flex-col items-center border-2 border-red-300 rounded-lg shadow-xl p-4 text-red-400 transition-all">
          <Image
            className="h-60 w-80 mt-6"
            src={research}
            alt="research"
          ></Image>
          <h1 className="text-2xl mt-8">Updating Instantly</h1>
          <p className="text-sm mt-4 w-2/3 text-center">
            You can display the latest fireballs.
          </p>
        </div>
        <div className="w-80 sm:w-1/3 h-[600px] flex flex-col items-center border-2 border-red-300 rounded-lg shadow-xl p-4 text-red-400 transition-all">
          <Image
            className="h-60 w-80 mt-6"
            src={outerspace}
            alt="outersapce"
          ></Image>
          <h1 className="text-2xl mt-8">Data Source</h1>
          <p className="text-sm mt-4 w-2/3 text-center">
            All data is coming from NASA api. You can see the link in footer.
          </p>
        </div>
      </div>
      <hr></hr>
      <Contact />
    </div>
  );
}
