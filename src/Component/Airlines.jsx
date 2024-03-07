import { useEffect } from "react";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";

const Airlines = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('index.json')
            .then(res => res.json())
            .then(x => setData(x))
    }, [])

    return (
        <div className="lg:ml-48 mt-20">
            <p className="text-3xl font-bold text-black">Popular Airlines</p>
            <div className="grid mt-14 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(one => <div key={one.id}>
                        <div className="flex gap-7">
                            <img src={one.img} alt="" />
                            <div>
                                <p className="text-blue-700 font-semibold">{one.title}</p>
                                <p className="flex gap-2">
                                    <p className="text-yellow-600 mt-1  fill-yellow-600"><FaRegStar /></p>
                                    <p>{one.rating} {one.review} </p></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Airlines;