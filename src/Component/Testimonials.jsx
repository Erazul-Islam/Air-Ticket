import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className="mt-16 rounded">
            <p className="text-2xl lg:ml-48 font-bold text-black">Testimonials</p>
            <div className="w-full mt-6 h-96 bg-blue-500">
                <div className="flex">
                    <div className="relative">
                        <img className="pt-14 opacity-30 lg:pl-48" src="https://i.ibb.co/mD1ksFV/Rectangle-30.png" alt="" />
                        <p className="text-3xl lg:pl-56 absolute bottom-28 rig text-white"><FaArrowLeftLong /></p>
                    </div>
                    <div className="lg:ml-40 lg:mt-14 "> 
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/8d5894C/Rectangle-32.png" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="text-2xl text-black">Unforgottable journeys with John and Sarah <br /> Their Travel Expertise Turned our Dreams <br /> into reality.Can't wait to explore with them again</p>
                                <div className="">
                                    <p className="text-2xl">Emily</p><br />
                                    <p>Adventure Enthusist</p>
                                    <div className="flex">
                                        <img className="w-5 h-5" src="https://i.ibb.co/FnVDx6B/star.png" alt="" />
                                        <img className="w-5 h-5" src="https://i.ibb.co/FnVDx6B/star.png" alt="" />
                                        <img className="w-5 h-5" src="https://i.ibb.co/FnVDx6B/star.png" alt="" />
                                        <img className="w-5 h-5" src="https://i.ibb.co/FnVDx6B/star.png" alt="" />
                                    </div>
                                    {/* <p className="text-8xl justify-end text-blue-500">,,</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="pt-14 opacity-30 lg:pl-40" src="https://i.ibb.co/qrDPhkq/Rectangle-33.png" alt="" />
                        <p className="text-3xl lg:pl-56 absolute bottom-28 rig text-white"><FaArrowRightLong /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;