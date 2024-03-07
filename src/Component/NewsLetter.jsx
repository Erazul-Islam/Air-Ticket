const NewsLetter = () => {
    return (
        <div className="lg:ml-64 mt-16">
            <div className="flex justify-between">
                <div>
                    <img src="https://i.ibb.co/q5gStxF/Isolation-Mode.png" alt="" />
                </div>
                <div className="lg:ml-96">
                    <p className="md:text-7xl text-2xl font-bold text-black">Subsribe To our <br /> NewsLetter!</p>
                    <p className="text-2xl text-blue-400">Subsribe To our NewsLetter and Stay updated</p>
                    <input placeholder="Your email" className="lg:w-[700px] w-52 h-16 mt-5 pl-6 bg-slate-300 rounded-lg border-blue-400 border-1" type="text" />
                    <button className="lg:w-[700px] w-52 h-16 mt-5 bg-yellow-500 rounded-lg  text-black md:text-2xl">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;