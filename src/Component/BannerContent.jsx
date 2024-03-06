import { IoIosArrowDown } from "react-icons/io";


const BannerContent = () => {
    return (
        <div>
            <div>
                <p className="text-3xl font-semibold">Welcome To <span className="text-blue-600">AirBook</span> </p>
                <div className="w-[1400px] rounded-lg bg-gray-600 h-56">
                    <div className="flex gap-4">
                        <button className="bg-gray-300 w-24 h-7 rounded-md"></button>
                        <button className="bg-gray-300 w-24 h-7 rounded-md"></button>
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
            </div>
        </div>
    );
};

export default BannerContent;