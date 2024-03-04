import React from "react";

//Logos
//Light Mode Logo
import LightLogo from '../images/PeartreeLogoBlack.png';
//Dark Mode Logo
import DarkLogo from '../images/PeartreeLogoWhite.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-200 p-3">
            <div className="container mx-auto flex">
                {/* Logo */}
                <a href="/" className="">
                    <img src={LightLogo} className="w-52 h-auto rounded-lg"/>
                </a>

                <ul className="flex space-x-4 ml-auto p-5">
                    <li className="flex-1 w-36">
                        <a href="/">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;