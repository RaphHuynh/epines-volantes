import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

//importation des images
//importation des logo des 2 rosters

import logoRosterEpine from "./../../assets/logo2.png"
import logoRosterEclair from "./../../assets/logoEclair.png"

//imporation des avatar roster 1
import doug from "./../../assets/avatar/doug1.png"
import mael from "./../../assets/avatar/mael.png"
import noug from "./../../assets/avatar/noug1.png"
import popop from "./../../assets/avatar/popop.png"
import saru from "./../../assets/avatar/saru.png"
import sunset from "./../../assets/avatar/sunset.png"
import centi from "./../../assets/avatar/centi.png"
import zorm from "./../../assets/avatar/zorm.png"
import rafou from "./../../assets/avatar/rafou.png"

//importation des avatars roster 2

import kap2l from "./../../assets/avatar/kap2l.png"
import mpb from "./../../assets/avatar/mpb.png"
import lucas from "./../../assets/avatar/lucas.png"
import pitho from "./../../assets/avatar/pitho.png"
import lebaz from "./../../assets/avatar/lebaz.png"
import bfries from "./../../assets/avatar/bfries.png"
import maxio from "./../../assets/avatar/maxio.png"
import raquel from "./../../assets/avatar/raquel.png"
import senoucy from "./../../assets/avatar/senoucy.png"
import kuni from "./../../assets/avatar/kuni.png"
import norsk from "./../../assets/avatar/norsk.png"
import guimauve from "./../../assets/avatar/guimauve1.png"
import kitkat from "./../../assets/avatar/kitkat.png"

export default Roster;


function Roster(){
    //state
    const rosterEpine = [
        {id:"Doug", twitch:"", avatar:doug},
        {id:"Maël", twitch:"", avatar:mael},
        {id:"Noug", twitch:"", avatar:noug},
        {id:"Popop", twitch:"", avatar:popop},
        {id:"Saru", twitch:"https://www.twitch.tv/saruzzz?sr=a", avatar:saru},
        {id:"Sunset", twitch:"https://www.twitch.tv/sunset_mk8d?sr=a", avatar:sunset},
        {id:"Centi", twitch:"", avatar:centi},
        {id:"Zorm", twitch:"", avatar:zorm},
        {id:"Rafou", twitch:"", avatar:rafou}
    ]

    const rosterEclair = [
        {id:"Kap2l", twitch:"", avatar:kap2l},
        {id:"Mpb", twitch:"https://www.twitch.tv/mpb_mk?sr=a", avatar:mpb},
        {id:"Lucas", twitch:"", avatar:lucas},
        {id:"Pitho", twitch:"", avatar:pitho},
        {id:"Lebaz", twitch:"", avatar:lebaz},
        {id:"Bfries", twitch:"", avatar:bfries},
        {id:"Maxio", twitch:"", avatar:maxio},
        {id:"Rachel", twitch:"", avatar:raquel},
        {id:"Senoucy", twitch:"", avatar:senoucy},
        {id:"Kuni", twitch:"", avatar:kuni},
        {id:"Norsk", twitch:"", avatar:norsk},
        {id:"Guimauve", twitch:"https://www.twitch.tv/guimauvetv?sr=a", avatar:guimauve},
        {id:"Kitkat", twitch:"https://www.twitch.tv/khanapecheeeee?sr=a", avatar:kitkat}
    ]

    const division = [
        {roster: 1, division: 8},
        {roster: 2, division: 17}
    ]

    //function

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div>
             <div id="Roster" className="flex items-center w-full min-h-screen justify-center">
                <div>
                    <div className="flex items-center justify-center" data-aos="fade" data-aos-duration="2000">
                        <img src={logoRosterEpine} alt="epines volantes" width="100px"></img>
                        <h1 className="ml-5 text-7xl text-amber-400">Roster 1 : Epines Volantes</h1>
                    </div>
                    <div className="w-full flex items-center justify-center" data-aos="fade" data-aos-duration="2000">
                        <p className="my-5 text-justify max-w-3xl text-lg">Voici le Roster 1 de Epines volantes. Actuellement, notre roster est en division {division[0].division} de la MKU. Notre objectif est de remporter le titre de notre division pour devenir une high div.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center w-4/6">
                            {rosterEpine.map((roster)=>(
                                <div className="bg-white/5 rounded-lg sm:mx-5 my-5 px-4 hover:bg-blue-400/10 transition delay-50 py-5" data-aos="fade" data-aos-duration="2000">
                                    <img src={roster.avatar} alt="epines volantes" width="225px" className="flex justify-center m-auto"></img>
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
            <div className="flex items-center w-full min-h-screen justify-center mt-10">
                <div>
                    <div className="flex items-center justify-center" data-aos="fade" data-aos-duration="2000">
                        <img src={logoRosterEclair} alt="epines volantes" width="100px"></img>
                        <h1 className="ml-5 text-7xl text-amber-400">Roster 2 : Eclair Vicieuse</h1>
                    </div>
                    <div className="w-full flex items-center justify-center" data-aos="fade" data-aos-duration="2000">
                        <p className="my-5 text-justify max-w-3xl text-lg">Voici le Roster 2 de Epines volantes, l'éclair vicieuse. Pour le moment, notre roster est en division {division[1].division} de la MKU. Nous avons pour but d'essayer de remporter notre division pour monter mais notre premier objectif est dans un premier temps de nous améliorer sur les bases du jeu en équipe.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center w-4/6">
                            {rosterEclair.map((roster)=>(
                                <div className="bg-white/5 rounded-lg sm:mx-5 my-5 px-4 hover:bg-blue-400/10 transition delay-50 py-5" data-aos="fade" data-aos-duration="2000">
                                    <img src={roster.avatar} alt="epines volantes" width="225px" className="flex justify-center m-auto"></img>
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