export default Home;
import logo from "./../../assets/logo2.png"
import eclair from "./../../audio/lightining.mp3"


function Home(){
    const audio = new Audio(eclair);

    return (
        <div id="Home" className="flex items-center w-full min-h-screen justify-center p-5">
            <div className="container max-w-2xl m-20">
                <span className="text-yellow-400 text-xl">
                    Euh ouais salut,
                </span>
                <h1 className="text-7xl text-amber-400">Epines Volantes</h1>
                <h2 className="text-amber-400/80 text-6xl mb-5">Equipe Mario Kart</h2>
                <p className="text-stone-300 text-xl mb-6 text-justify">
                    L'épines volantes est une équipe mario kart 8. Elle possède 2 roster compétitifs. Vous pouvez nous suivre sur Twitter mais aussi nous retrouver sur Discord. Nos membres stream régulièrement sur Twitch.
                </p>
                <div>
                    <a href="https://twitter.com/epinesvolantes?lang=fr" target="_blank" className="sound rounded-full transition duration-500 py-2 px-4 bg-yellow-400 text-stone-800 hover:bg-cyan-600 mr-5 hover:text-stone-300" onClick={() => audio.play()}>Twitter</a>
                    <a href="https://discord.gg/hCHuRq4Wde" target="_blank" className="sound rounded-full transition duration-500 py-2 px-4 bg-yellow-400 text-stone-800 hover:bg-indigo-700 mr-5 hover:text-stone-300" onClick={() => audio.play()}>Discord</a>
                    <a href="https://www.twitch.tv/epinesvolantes" target="_blank" className="sound rounded-full transition duration-500 py-2 px-4 bg-yellow-400 text-stone-800 hover:bg-violet-700 mr-5 hover:text-stone-300" onClick={() => audio.play()}>Twitch</a>
                </div>
            </div>
            <div>
                <img src={logo} alt="epines volantes" width="500px" ></img>
            </div>
        </div>
    )
}