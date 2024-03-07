import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Travel = () => {
    return (
        <div className="mt-12 lg:ml-48">
            <p className="text-3xl font-bold text-black">Travel Blog</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/p3F0LmD/Rectangle-18-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="flex">
                            <p className="text-yellow-400">Work and Travel</p>
                            <p>16 september 2023</p>
                        </p>
                        <p className="font-semibold text-xl text-black mt-4">Embracing The Digital Nomad Lifestyle The Digital Nomad Thr...</p>
                        <div className="divider"></div>
                        <div className="card-actions mt-0 justify-between">
                            <p className="flex gap-1">
                                <img className="w-9 h-9 rounded-full" src="https://i.ibb.co/qrDPhkq/Rectangle-33.png" alt="" />
                                <p className="mt-1">Ys Stafen</p>
                            </p>
                            <p className="flex gap-1 font-bold">
                                <p className="text-yellow-400">Read More</p>
                                <p className="text-yellow-400 font-bold mt-1"><MdKeyboardDoubleArrowRight /></p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/cDWhBLb/Rectangle-18-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="flex">
                            <p className="text-yellow-400">Work and Travel</p>
                            <p>16 september 2023</p>
                        </p>
                        <p className="font-semibold text-xl text-black mt-4">Embracing The Digital Nomad Lifestyle The Digital Nomad Thr...</p>
                        <div className="divider"></div>
                        <div className="card-actions mt-0 justify-between">
                            <p className="flex gap-1">
                                <img className="w-9 h-9 rounded-full" src="https://i.ibb.co/8d5894C/Rectangle-32.png" alt="" />
                                <p className="mt-1">Ys Stafen</p>
                            </p>
                            <p className="flex gap-1 font-bold">
                                <p className="text-yellow-400">Read More</p>
                                <p className="text-yellow-400 font-bold mt-1"><MdKeyboardDoubleArrowRight /></p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/z2HSdbQ/Rectangle-18-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="flex">
                            <p className="text-yellow-400">Work and Travel</p>
                            <p>16 september 2023</p>
                        </p>
                        <p className="font-semibold text-xl text-black mt-4">Embracing The Digital Nomad Lifestyle The Digital Nomad Thr...</p>
                        <div className="divider"></div>
                        <div className="card-actions mt-0 justify-between">
                            <p className="flex gap-1">
                                <img className="w-9 h-9 rounded-full" src="https://i.ibb.co/mD1ksFV/Rectangle-30.png" alt="" />
                                <p className="mt-1">Ys Stafen</p>
                            </p>
                            <p className="flex gap-1 font-bold">
                                <p className="text-yellow-400">Read More</p>
                                <p className="text-yellow-400 font-bold mt-1"><MdKeyboardDoubleArrowRight /></p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;