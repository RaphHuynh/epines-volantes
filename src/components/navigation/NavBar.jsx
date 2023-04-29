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
            <div className="fixed w-full h-15 z-10">
                <div className="flex items-center">
                    <div className="m-3">
                        <a href="#Home" onClick={() => audio.play()}>
                            <img src={logo} alt="epine volante" width="50px" height="50px"/>
                        </a>
                    </div>
                    <div className="flex flex-row mr-0 ml-auto">
                        {menu.map((text) => (
                            <a key={text.id} href={text.id} className="sound text-whitetext-lg m-3 rounded-full py-2 px-4 transition duration-500 hover:bg-yellow-400 hover:text-stone-800" onClick={() => audio.play()}>{text.content}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}