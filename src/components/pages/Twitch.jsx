import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const Twitch = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
  const handleReady = (e) => {
    embed.current = e;
  };
  
  return (
    <div id="Twitch" className="flex items-center w-full min-h-screen justify-center p-5">
      <section>
          <h1 className="text-7xl text-amber-400 text-center">Twitch</h1>
          <div className="w-full flex items-center justify-center my-5">
            <p className="my-5 text-justify max-w-3xl text-lg">Vous pouvez retrouver notre équipe en live sur notre chaine Twitch.</p>
          </div>
          <TwitchEmbed channel="epinesvolantes" autoplay muted withChat darkMode={true} hideControls onVideoReady={handleReady} />
      </section>
    </div>
  );
};

export default Twitch;