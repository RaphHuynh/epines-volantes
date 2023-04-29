export default Roster;

import logoRosterEpine from "./../../assets/logo2.png"
import logoRosterEclair from "./../../assets/logoEclair.png"
import logo from "./../../assets/logo.svg"
import logoEclair from "./../../assets/lightning.png"

function Roster(){
    //state
    const rosterEpine = [
        {id:"Doug", twitch:""},
        {id:"Maël", twitch:""},
        {id:"Noug", twitch:""},
        {id:"Popop", twitch:""},
        {id:"Saru", twitch:"https://www.twitch.tv/saruzzz?sr=a"},
        {id:"Sunset", twitch:"https://www.twitch.tv/sunset_mk8d?sr=a"},
        {id:"Centi", twitch:""},
        {id:"Zorm", twitch:""},
        {id:"Rafou", twitch:""}
    ]

    const rosterEclair = [
        {id:"Kap2l", twitch:""},
        {id:"Mpb", twitch:"https://www.twitch.tv/mpb_mk?sr=a"},
        {id:"Lucas", twitch:""},
        {id:"Pitho", twitch:""},
        {id:"Lebaz", twitch:""},
        {id:"Bfries", twitch:""},
        {id:"Kuni", twitch:""},
        {id:"Maxio", twitch:""},
        {id:"Rachel", twitch:""},
        {id:"Senoucy", twitch:""},
        {id:"Norsk", twitch:""},
        {id:"Guimauve", twitch:"https://www.twitch.tv/guimauvetv?sr=a"},
        {id:"Sanwoo", twitch:"https://www.twitch.tv/khanapecheeeee?sr=a"}
    ]

    return (
        <div>
             <div id="Roster" className="flex items-center w-full min-h-screen justify-center">
                <div>
                    <div className="flex items-center justify-center">
                        <img src={logoRosterEpine} alt="epines volantes" width="100px"></img>
                        <h1 className="ml-5 text-7xl text-amber-400">Roster 1 : Epines Volantes</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center w-4/6">
                            {rosterEpine.map((roster)=>(
                                <div className="bg-white/5 rounded-lg sm:mx-5 my-5 px-4 hover:bg-blue-400/10 transition delay-50">
                                    <img src={logo} alt="epines volantes" width="225px" className="flex justify-center m-auto"></img>
                                    <span className="flex items-center justify-center my-2 mx-auto">
                                        <h2 className="uppercase text-center text-4xl text-yellow-400">{roster.id}</h2>
                                        {roster.twitch !== "" &&
                                            <a href={roster.twitch} target="_blank" className="ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16 " className="transition delay-75 w-7 fill-white hover:fill-yellow-400">
                                                    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                                <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                                </svg>
                                            </a>
                                        }
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full min-h-screen justify-center">
                <div>
                    <div className="flex items-center justify-center">
                        <img src={logoRosterEclair} alt="epines volantes" width="100px"></img>
                        <h1 className="ml-5 text-7xl text-amber-400">Roster 2 : Eclair Vicieuse</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center w-4/6">
                            {rosterEclair.map((roster)=>(
                                <div className="bg-white/5 rounded-lg sm:mx-5 my-5 px-4 hover:bg-blue-400/10 transition delay-50 pt-5">
                                    <img src={logoEclair} alt="epines volantes" width="225px" className="flex justify-center m-auto"></img>
                                    <span className="flex items-center justify-center my-2 mx-auto">
                                        <h2 className="uppercase text-center text-4xl text-yellow-400">{roster.id}</h2>
                                        {roster.twitch !== "" &&
                                            <a href={roster.twitch} target="_blank" className="ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16 " className="transition delay-75 w-7 fill-white hover:fill-yellow-400">
                                                    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                                <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                                </svg>
                                            </a>
                                        }
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}