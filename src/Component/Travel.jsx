import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Travel = () => {
    return (
        <div className="mt-12">
            <p className="text-3xl font-bold text-black">Travel Blog</p>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full" src="https://i.ibb.co/p3F0LmD/Rectangle-18-1.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="font-semibold text-2xl">Stopover Opportunity in Istanbul with Turkish Airlines</p>
                    <div className="card-actions justify-between">
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
        </div>
    );
};

export default Travel;