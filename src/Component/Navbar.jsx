const Navbar = () => {
    return (
        <div className="">
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Blog</a></li>
                            <li><a>Offer</a></li>
                            <li><a>Airlines</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <img className="lg:ml-28 md:ml-14 " src="https://i.ibb.co/cQ1TQzx/LOGO-1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Blog</a></li>
                        <li><a>Offer</a></li>
                        <li><a>Airlines</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-blue-700 h-8 rounded-lg lg:mr-28 md:mr-14 text-white w-20 hover:bg-blue-500">Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;