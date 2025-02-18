import { useState } from 'react';
import JoinCommunity from '../components/JoinCommunity';

export default function LaunchingSoon() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section
                style={{ backgroundImage: `url(${require('../assets/images/bg-index-gradient.png')})` }}
                className='bg-cover h-full w-full flex flex-col items-center justify-between'
            >
                <div className='flex justify-center h-48'>
                    <img src={require('../assets/images/harambee.png')} alt="harambee icon" />
                </div>

                <div className='text-center px-4 md:px-0'>
                    <h1 className='text-4xl md:text-6xl font-semibold text-white drop-shadow-[0_2px_2px_rgb(0,105,116)] mb-8'>
                        LAUNCHING SOON !!!
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='bg-white w-full md:w-[80%] h-16 rounded-full border border-[#38D3E3]'
                    >
                        <span className='bg-gradient-to-b from-[#38D3E3] to-[#006974] inline-block text-transparent bg-clip-text font-bold'>
                            JOIN THE WAITING LIST
                        </span>
                    </button>
                </div>

                <div className='flex md:h-80'>
                    <img src={require('../assets/images/hand.png')} alt="harambee icon" />
                </div>
            </section>

            <JoinCommunity isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}