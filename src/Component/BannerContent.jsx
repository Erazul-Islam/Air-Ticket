import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";


const BannerContent = () => {
    return (
        <div>
            <div className="">
                <p className="text-3xl font-semibold">Welcome To <span className="text-blue-600">AirBook</span> </p>
                <div className="w-[1280px] rounded-lg bg-gray-600 h-56">
                    <div className="flex justify-between pt-10 pl-14 pr-14">
                        <div className="flex gap-4">
                            <button className="bg-gray-300 w-24 h-7 rounded-md">
                                <p className="flex gap-2 justify-center">
                                    <p className="mt-1">
                                        <FaRegCircle />
                                    </p>
                                    <p className="">One way</p>
                                </p>
                            </button>
                            <button className="bg-gray-300 w-24 h-7 rounded-md">
                                <p className="flex gap-1 justify-center">
                                    <p className="mt-1">
                                        <FaRegCircle />
                                    </p>
                                    <p className="">Rounded</p>
                                </p>
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-gray-300 w-24 h-7 rounded-md">
                                <p className="flex gap-2 justify-center">
                                    <p className="mt-1">
                                        <IoIosArrowDown />
                                    </p>
                                    <p className="">Traveller</p>
                                </p>
                            </button>
                            <button className="bg-gray-300 w-24 h-7 rounded-md">
                                <p className="flex gap-2 justify-center">
                                    <p className="mt-1">
                                        <IoIosArrowDown />
                                    </p>
                                    <p className="">Economy</p>
                                </p>
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 ml-14 flex gap-4">
                        <div className="flex gap-1 border-2 w-64 h-14 rounded-lg border-gray-500">
                            <p className="mt-3">DAC</p>
                            <p className="border-l-pink-600"></p>
                            <p>
                                <p>Dhaka</p>
                                <p>Shahjalal International</p>
                            </p>
                        </div>
                        <div className="flex gap-1 border-2 w-64 h-14 rounded-lg border-gray-500">
                            <p className="mt-3">COX</p>
                            <p className="border-l-pink-600"></p>
                            <p>
                                <p>Coxs</p>
                                <p>Coxs Bazar International</p>
                            </p>
                        </div>
                        <div className="flex gap-1 border-2 w-64 h-14 rounded-lg border-gray-500">
                            <p className="mt-3">03</p>
                            <p className="border-l-pink-600"></p>
                            <p>
                                <p>Octobee</p>
                                <p>Tuesday 2023</p>
                            </p>
                        </div>
                        <div className="flex gap-1 border-2 w-64 h-14 rounded-lg border-gray-500">
                            <p className="mt-3">05</p>
                            <p className="border-l-pink-600"></p>
                            <p>
                                <p>October</p>
                                <p>Tuesday 2023</p>
                            </p>
                        </div>
                        <div className="bg-yellow-500 w-20 rounded-lg h-14">
                            <p className="text-white font-extrabold pl-6 pt-3 text-3xl"><IoSearchOutline /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;