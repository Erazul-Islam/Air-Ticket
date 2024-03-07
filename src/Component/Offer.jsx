const Offer = () => {
    return (
        <div className="mt-20 lg:ml-44">
            <p className="text-3xl font-bold text-black">Deals and Offers</p>
            <div className="grid lg:mt-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <div className="card card-side w-96 h-48  bg-base-100 shadow-xl">
                    <figure><img className="h-full w-56" src="https://i.postimg.cc/J4yy4LCF/slider-Up-to-14-discount-on-Domestic-flights-2.png" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="">With Bkash Payment only</h2>
                        <p>Upto 14% discount on the base Fare of Domestic Flights</p>
                    </div>
                </div>
                <div className="card card-side w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-full w-56" src="https://i.postimg.cc/6QbY6z1v/slider-Up-to-14-discount-on-Domestic-flights-2-2.png" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="">With Bkash Payment only</h2>
                        <p>Upto 14% discount on the base Fare of Domestic Flights</p>
                    </div>
                </div>
                <div className="card card-side w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-full w-56" src="https://i.postimg.cc/qR31sFPM/slider-Up-to-14-discount-on-Domestic-flights-2-1.png" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="">With Bkash Payment only</h2>
                        <p>Upto 14% discount on the base Fare of Domestic Flights</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;