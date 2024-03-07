import BannerContent from "./BannerContent";

const Banner = () => {
    return (
        <div className="relative">
            <img className="h-96 w-full" src="https://i.ibb.co/86wr5nL/Rectangle-2.png" alt="" />
            <div className="absolute md:bottom-8 bottom-4 left-16 lg:bottom-16 lg:left-72 md:left-36">
                <BannerContent></BannerContent>
            </div>
        </div>
    );
};

export default Banner;