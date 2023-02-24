import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex justify-between h-20 bg-red-500 px-4 sm:px-6">
            <div className="my-auto text-white text-center uppercase border-2 border-gray-100 p-1 rounded">
                <h1 className="text-xl tracking-wide">Latest</h1>
                <h2 className="text-sm">Fireballs</h2>
            </div>
            <div className="hidden sm:block my-auto text-md tracking-widest text-gray-100">
                <Link href="/" className="hover:border-b-2">Home</Link>
                <Link href="/fireball-map" className="mx-12 hover:border-b-2">Fireball Map</Link>
                <Link href="/#contact" className="hover:border-b-2">Contact</Link>
            </div>
            <div className="block sm:hidden my-auto">
                <MdOutlineMenu className="w-8 h-8 text-gray-100" onClick={() => { setIsOpen(true) }} />
            </div>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.nav
                            key="menu"
                            className={`${isOpen ? "block" : "hidden"} fixed inset-0 z-10`} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-full h-full bg-red-500 text-gray-100 flex flex-col items-center gap-y-10 p-6">
                                <MdOutlineClose className="w-8 h-8 text-gray-100 ml-auto" onClick={() => { setIsOpen(false) }} />
                                <div className="w-36 text-center border-2 border-gray-100 text-gray-100 px-4 py-2 rounded active:bg-white active:text-red-500">
                                    <Link href="/" onClick={() => { setIsOpen(false) }}>Home</Link>
                                </div>
                                <div className="w-36 text-center border-2 border-gray-100 text-gray-100 px-4 py-2 rounded active:bg-white active:text-red-500">
                                    <Link href="/fireball-map" onClick={() => { setIsOpen(false) }}>Fireball Map</Link>
                                </div>
                                <div className="w-36 text-center border-2 border-gray-100 text-gray-100 px-4 py-2 rounded active:bg-white active:text-red-500">
                                    <Link href="/#contact" onClick={() => { setIsOpen(false) }}>Contact</Link>
                                </div>
                            </div>
                        </motion.nav>
                    )
                }
            </AnimatePresence>
        </div>
    );
}