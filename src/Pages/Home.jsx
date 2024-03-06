import Banner from "../Component/Banner";
import Card from "../Component/Card";
import Navbar from "../Component/Navbar";
import Offer from "../Component/Offer";

const Home = () => {
    return (
        <div>
            <div>
                <div className="lg:ml-10 lg:mr-10">
                    <Navbar></Navbar>
                </div>
                <div>
                    <Banner></Banner>
                </div>
            </div>
            <Card></Card>
            <Offer></Offer>
        </div>
    );
};

export default Home;