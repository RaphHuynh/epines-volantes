import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import trophe from "./../../assets/trophe.png"

export default Awards;

function Awards(){
    //state
    const palmaresMKU = [
        {id:"saison",division:"Division",classement:"classement",roster:"Roster"},
        {id:"20",division:"14",classement:"1er",roster:"numéro 1"}
    ]

    const palmaresQL = [
        {id:"saison",division:"Division",classement:"classement",roster:"Roster"},
        {id:"4",division:"3",classement:"1er",roster:"numéro 1"}
    ]

    //function
    useEffect(() => {
        AOS.init();
    }, [])
    

    return (
        <div id="Awards" className="flex items-center w-full min-h-screen justify-center mt-10">
            <div>
                <h1 className="text-4xl lg:text-7xl text-amber-400 text-center mb-7" data-aos="fade" data-aos-duration="2000">
                    Awards
                </h1>
                <div className="flex items-center justify-center my-5" data-aos="fade" data-aos-duration="2000">
                    <img src={trophe} alt="mku" width="160px" className="hidden lg:flex"></img>
                        <h2 className="text-3xl lg:text-6xl text-yellow-300 text-center my-5">Tournois MKU</h2>
                    <img src={trophe} alt="mku" width="160px" className="hidden lg:flex"></img>
                </div>
                <div className="flex items-center justify-center" data-aos="fade" data-aos-duration="2000">
                    <div className="flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-lg p-5 hover:bg-blue-400/20">
                        <div className="text-center">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.id}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.division}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-stone-700 dark:text-white  uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.classement}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.roster}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <p className="my-5 text-justify mx-5 md:mx-20 text-sm md:text-l lg:max-w-3xl lg:text-lg" data-aos="fade" data-aos-duration="2000">
                        La MKU est un tournois organisé par MKC ( Mario Kart Central ). C'est le tournois de référence dans le monde de l'esport MK. Il est organisé à l'échelle modiale. Il se compose autour de 21 divisions.
                    </p>
                </div>
                <div className="flex items-center justify-center my-5" data-aos="fade" data-aos-duration="2000">
                    <img src={trophe} alt="mku" width="160px" className="hidden lg:flex"></img>
                        <h2 className="text-4xl lg:text-7xl text-yellow-300 text-center my-5">Tournois QL</h2>
                    <img src={trophe} alt="mku" width="160px" className="hidden lg:flex"></img>
                </div>
                <div className="flex items-center justify-center mx-2" data-aos="fade" data-aos-duration="2000">
                    <div className="flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-blue-400/20 rounded-lg p-5">
                        <div className="text-center">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.id}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.division}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-stone-700 dark:text-white uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.classement}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-sm md:text-xl lg:text-4xl m-auto">{mku.roster}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center" data-aos="fade" data-aos-duration="2000">
                    <p className="my-5 text-justify mx-5 md:mx-20 text-sm md:text-l lg:max-w-3xl lg:text-lg">
                        La QUATOR League est un tournois international. Il se réparti en 5 divisions. C'est un tournois mineur dans l'esport Mario Kart.
                    </p>
                </div>
            </div>
        </div>
    )
}