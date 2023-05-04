import React, { useRef } from 'react';
import {useEffect} from "react";
import { TwitchEmbed } from 'react-twitch-embed';

import logo from "./../../assets/pokerlogo.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

function Twitch(){
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
  const handleReady = (e) => {
    embed.current = e;
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="Twitch" className="flex items-center w-full min-h-screen justify-center p-5">
      <section>
          <h1 className="text-4xl lg:text-7xl text-amber-400 text-center" data-aos="fade" data-aos-duration="2000" >Twitch</h1>
          <div className="w-full flex items-center justify-center my-5">
            <p className="my-5 text-justify max-w-3xl text-sm md:text-lg" data-aos="fade" data-aos-duration="2000">Vous pouvez retrouver notre équipe en live sur notre chaine Twitch.</p>
          </div>
          <TwitchEmbed className="hidden lg:flex" channel="epinesvolantes" autoplay muted withChat darkMode={true} hideControls onVideoReady={handleReady} data-aos="fade" data-aos-duration="2000" data-aos-delay="500"/>
          <div className='flex items-center justify-center'>
            <img src={logo} alt='epines volantes' height="300px" width="300px" className='flex lg:hidden' data-aos="fade" data-aos-duration="2000"></img>
          </div>
      </section>
    </div>
  );
};

export default Twitch;