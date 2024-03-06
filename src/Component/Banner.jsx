import BannerContent from "./BannerContent";

const Banner = () => {
    return (
        <div>
            <img className="h-96 w-full" src="https://i.ibb.co/86wr5nL/Rectangle-2.png" alt="" />
            <div>
                <BannerContent></BannerContent>
            </div>
        </div>
    );
};

export default Banner;