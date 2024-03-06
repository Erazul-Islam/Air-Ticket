import Banner from "../Component/Banner";
import Navbar from "../Component/Navbar";

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
            
        </div>
    );
};

export default Home;