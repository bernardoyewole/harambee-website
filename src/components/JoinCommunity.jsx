import { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

function JoinCommunity({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const googleFormURL = process.env.REACT_APP_GOOGLE_FORM_URL;
    const googleFormEntryId = process.env.REACT_APP_GOOGLE_FORM_ENTRY_ID;

    const handleEmailSubmit = async () => {
        if (!email) {
            setMessage("Please enter an email address");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setMessage("Please enter a valid email address");
            return;
        }

        // Submit email to Google Form
        const formURL = googleFormURL;
        const formData = new FormData();
        formData.append(googleFormEntryId, email);

        try {
            await fetch(formURL, { method: "POST", body: formData, mode: "no-cors" });
            setMessage("✅ Email submitted successfully!");
            setEmail("");
        } catch (error) {
            setMessage("❌ Failed to submit. Please try again.");
        }
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            closeIcon={<IoIosCloseCircleOutline color="white" size={26} />}
            center
            styles={{
                overlay: { background: "rgba(0, 0, 0, 0.8)" },
                modal: {
                    background: "#FFFFFF33",
                    backdropFilter: "blur(5px)",
                    border: "1px solid #FFFFFF66",
                    width: "90%",
                    maxWidth: "500px",
                    borderRadius: "4px",
                    padding: "20px",
                },
            }}
        >
            <div>
                <div className="w-full flex justify-center">
                    <img src={require("../assets/images/hourglass.png")} className="h-20" alt="hour glass" />
                </div>
                <h2 className="text-xl font-semibold py-4 text-white text-center">👋 JOIN THE COMMUNITY, BE THE FIRST TO KNOW!</h2>
                <p className="text-sm text-white mb-8 text-center font-light">
                    We're building something amazing! Be among the first to experience personalized care services and support.
                    Sign up to secure your spot and get exclusive updates.
                </p>

                <div className="mt-4">
                    <p className="text-sm text-white mb-2">Enter Your Email to Join the Waitlist</p>
                    <div className="relative w-full mb-2">
                        <MdOutlineMail className="text-[#FFFFFF66] absolute left-3 top-1/2 transform -translate-y-1/2 text-lg" />
                        <input
                            onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-b border-[#FFFFFF66] py-2 text-sm text-white w-full pl-10 focus:outline-none"
                        />
                    </div>
                    <p className={`text-sm ml-[39px] h-2 ${!message.includes('successfully') ? 'text-red-400' : 'text-green-500'}`}>{message && message.length > 0 && message}</p>
                    <button
                        onClick={handleEmailSubmit}
                        className="mt-2 w-full text-center bg-transparent text-white py-2 rounded-md font-bold text-xl"
                    >
                        SUBMIT →
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default JoinCommunity;
