import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

function JoinCommunity({ isOpen, onClose }) {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            closeIcon={<IoIosCloseCircleOutline color='white' size={26} />}
            center
            styles={{
                overlay: {
                    background: "rgba(0, 0, 0, 0.8)",
                },
                modal: {
                    background: "#FFFFFF33",
                    backdropFilter: "blur(5px)",
                    border: "1px solid #FFFFFF66",
                    width: "90%",
                    maxWidth: "500px",
                    borderRadius: "4px",
                    padding: "20px",
                }
            }}
        >
            <div>
                <div className='w-full flex justify-center'>
                    <img src={require("../assets/images/hourglass.png")} className='h-20' alt='hour glass' />
                </div>
                <h2 className="text-xl font-semibold py-4 text-white text-center">👋 JOIN THE COMMUNITY, BE THE FIRST TO KNOW!</h2>
                <p className="text-sm text-white mb-8 text-center font-light">
                    We're building something amazing! Be among the first to experience personalized care services and support.
                    Sign up to secure your spot and get exclusive updates.
                </p>

                <div className="mt-4">
                    <p className='text-sm text-white mb-2'>Enter Your Email to Join the Waitlist</p>
                    <div className='relative w-full'>
                        <MdOutlineMail className='text-[#FFFFFF66] absolute left-3 top-1/2 transform -translate-y-1/2 text-lg' />
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="bg-transparent border-b border-[#FFFFFF66] py-2 text-sm text-white w-full pl-10 focus:outline-none"
                        />
                    </div>
                    <button className="mt-4 w-full text-center bg-transparent text-white py-2 rounded-md font-bold text-xl">
                        SUBMIT →
                    </button>
                </div>

            </div>
        </Modal>
    );
}

export default JoinCommunity;