import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from "./../../assets/logo2.png"
import eclair from "./../../audio/lightining.mp3"

export default Home;

function Home(){
    const audio = new Audio(eclair);

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="Home" className="flex items-center w-full min-h-screen justify-center p-5">
            <div className="container max-w-2xl m-20">
                <span className="text-yellow-400 text-xl" data-aos="fade" data-aos-duration="2000">
                    Euh ouais salut,
                </span>
                <h1 className="text-7xl text-amber-400" data-aos="fade" data-aos-duration="2000" data-aos-delay="500">Epines Volantes</h1>
                <h2 className="text-amber-400/80 text-6xl mb-5" data-aos="fade" data-aos-duration="2000" data-aos-delay="1000">Equipe Mario Kart</h2>
                <p className="text-xl mb-6 text-justify" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500">
                    L'épines volantes est une équipe mario kart 8. Elle possède 2 roster compétitifs. Vous pouvez nous suivre sur Twitter mais aussi nous retrouver sur Discord. Nos membres stream régulièrement sur Twitch.
                </p>
                <div>
                    <a href="https://twitter.com/epinesvolantes?lang=fr" target="_blank" className="sound rounded-full transition duration-500 py-2 px-4 bg-yellow-400 text-stone-800 hover:bg-cyan-600 mr-5 hover:text-stone-300" onClick={() => audio.play()} data-aos="fade" data-aos-duration="2000" data-aos-delay="2000">Twitter</a>
                    <a href="https://discord.gg/hCHuRq4Wde" target="_blank" className="sound rounded-full transition duration-500 py-2 px-4 bg-yellow-400 text-stone-800 hover:bg-indigo-700 mr-5 hover:text-stone-300" onClick={() => audio.play()} data-aos="fade" data-aos-duration="2000" data-aos-delay="2000">Discord</a>
                    <a href="https://www.twitch.tv/epinesvolantes" target="_blank" className="sound rounded-full transition duration-500 py-2 px-4 bg-yellow-400 text-stone-800 hover:bg-violet-700 mr-5 hover:text-stone-300" onClick={() => audio.play()} data-aos="fade" data-aos-duration="2000" data-aos-delay="2000">Twitch</a>
                </div>
            </div>
            <div>
                <img src={logo} alt="epines volantes" width="500px" data-aos="fade" data-aos-duration="2000" data-aos-delay="2500"></img>
            </div>
        </div>
    )
}