const Card = () => {
    return (
        <div>
            <p className="text-3xl lg:ml-48 lg:mt-32 text-black font-bold">Featured Destination</p>
            <div className="grid lg:mt-32 lg:ml-48 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/HNrx9ZD/Rectangle-181.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="font-semibold text-2xl">Stopover Opportunity in Istanbul with Turkish Airlines</p>
                        <div className="card-actions justify-center">
                            <button className="w-48 h-10 rounded-lg bg-orange-400">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/8X7DdzS/Rectangle-18-11.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="font-semibold text-2xl">Discover the timeliness City With touristanbul Turkish Airlines</p>
                        <div className="card-actions justify-center">
                            <button className="w-48 h-10 rounded-lg bg-orange-400">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/41K2Qzj/Rectangle-18-22.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="font-semibold text-2xl">The best Abu Dhabi with Exclusive Etihad Airways</p>
                        <div className="card-actions justify-center">
                            <button className="w-48 h-10 rounded-lg bg-orange-400">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;