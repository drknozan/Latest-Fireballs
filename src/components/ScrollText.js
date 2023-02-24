import { motion } from "framer-motion";

export default function ScrollText() {

    return (
        <div className="flex flex-col justify-center gap-y-1 w-full max-w-full overflow-x-hidden bg-red-500 my-4 py-2">
            <motion.div
                className="whitespace-nowrap"
                variants={{ scroll: { x: [0, -1035], transition: { x: { repeat: Infinity, repeatType: "loop", duration: 13, ease: "linear" } } } }}
                animate="scroll"
                >
                <h1 className="uppercase text-gray-100 text-xl sm:text-3xl">
                    Latest Latest Latest Latest Latest Latest Latest Latest 
                    Latest Latest Latest Latest Latest Latest Latest Latest 
                    Latest Latest Latest Latest Latest Latest Latest Latest 
                    Latest Latest Latest Latest Latest Latest Latest Latest 
                    Latest Latest Latest Latest Latest Latest Latest Latest 
                </h1>
            </motion.div>
            <motion.div
                className="whitespace-nowrap"
                variants={{ scroll: { x: [-1035, 0], transition: { x: { repeat: Infinity, repeatType: "loop", duration: 13, ease: "linear" } } } }}
                animate="scroll"
                >
                <h1 className="uppercase text-gray-100 text-xl sm:text-3xl">
                    Fireballs Fireballs Fireballs Fireballs Fireballs Fireballs 
                    Fireballs Fireballs Fireballs Fireballs Fireballs Fireballs 
                    Fireballs Fireballs Fireballs Fireballs Fireballs Fireballs 
                    Fireballs Fireballs Fireballs Fireballs Fireballs Fireballs 
                    Fireballs Fireballs Fireballs Fireballs Fireballs Fireballs 
                </h1>
            </motion.div>
        </div>
    );
}