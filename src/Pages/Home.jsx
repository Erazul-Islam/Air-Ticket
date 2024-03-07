import Airlines from "../Component/Airlines";
import Banner from "../Component/Banner";
import Card from "../Component/Card";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import NewsLetter from "../Component/NewsLetter";
import Offer from "../Component/Offer";
import Testimonials from "../Component/Testimonials";
import Travel from "../Component/Travel";

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
            <Airlines></Airlines>
            <Testimonials></Testimonials>
            <Travel></Travel>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;