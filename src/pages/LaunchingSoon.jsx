import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import JoinCommunity from '../components/JoinCommunity';
import { HiOutlinePlay } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";

export default function LaunchingSoon() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <section
                className='bg-[url("../assets/images/bg-mobile.png")] sm:bg-[url("../assets/images/bg-index-gradient.png")] bg-cover h-full w-full flex flex-col items-center justify-between relative'
            >
                <div className='flex justify-center h-[127px] w-[140px]'>
                    <img src={require('../assets/images/harambee.png')} alt="harambee icon" />
                </div>

                <div className='text-center px-4 md:px-0'>
                    <h1 className='text-4xl md:text-6xl font-semibold text-white drop-shadow-[0_2px_2px_rgb(0,105,116)] mb-8'>
                        LAUNCHING
                        <span className='tracking-wider'> SOON</span>!!!
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='bg-white w-[80%] h-16 rounded-full border border-[#38D3E3]'
                    >
                        <span className='bg-gradient-to-b from-[#38D3E3] to-[#006974] inline-block text-transparent bg-clip-text font-bold'>
                            JOIN THE WAITING LIST
                        </span>
                    </button>
                </div>

                <div className='flex md:h-80'>
                    <img
                        src={require('../assets/images/hand.png')}
                        alt="harambee icon"
                        className="object-contain h-full w-auto"
                    />
                </div>


                <div
                    className={`absolute bottom-[74px] md:bottom-4 right-4 w-[90%] sm:w-[480px] aspect-video rounded-3xl overflow-hidden 
        ${showVideo ? 'block' : 'hidden'} md:block`}
                >
                    <iframe
                        src="https://www.youtube.com/embed/30ZGTlmbEtM?si=9Z0rQr5ppkZdhTYU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>


                <motion.button
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onClick={() => setShowVideo(!showVideo)}
                    className="absolute bottom-4 right-4 bg-white py-3 w-48 rounded-full flex items-center justify-center text-black border border-gray-300 shadow-md md:hidden"
                >
                    <motion.span className='flex items-center justify-center gap-2 w-full'>
                        <AnimatePresence mode="popLayout">
                            {showVideo ? (
                                <motion.span
                                    key="hide"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-2"
                                >
                                    <BiHide size={24} />
                                    <span className='text-gray-800 text-sm ml-1'>Hide Intro Video</span>
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="show"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-2"
                                >
                                    <HiOutlinePlay size={24} />
                                    <span className='text-gray-800 text-sm'>Watch Intro Video</span>
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.span>
                </motion.button>
            </section>

            <JoinCommunity isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
