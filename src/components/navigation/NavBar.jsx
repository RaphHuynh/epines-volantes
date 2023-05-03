export default NavBar;

import { useState } from "react";
import logo from "./../../assets/logo.svg"
import eclair from "./../../audio/lightining.mp3"

function NavBar(){
    //state
    const [menu,setMenu] = useState([
        {id: "#Home", content: "Home"},
        {id: "#Roster", content: "Roster"},
        {id: "#Awards", content: "Awards"},
        {id: "#Twitch", content: "Twitch"}
    ])

    const audio = new Audio(eclair);

    return (
        <div>
            <div className="fixed w-full h-15 z-10 navbar backdrop-blur-sm">
                <div className="flex items-center z-20">
                    <div className="hidden md:flex md:m-3">
                        <a href="#Home" onClick={() => audio.play()}>
                            <img src={logo} alt="epine volante" width="50px" height="50px"/>
                        </a>
                    </div>
                    <div className="flex justify-center md:flex-row md:mr-0 md:ml-auto w-full md:w-auto">
                        {menu.map((text) => (
                            <a key={text.id} href={text.id} className="text-stone-700 dark:text-white text-sm md:text-lg m-3 rounded-full py-2 md:px-4 transition duration-500 hover:bg-yellow-400 hover:text-white dark:hover:text-stone-800" onClick={() => audio.play()}>{text.content}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}