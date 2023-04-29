export default Awards;

import trophe from "./../../assets/trophe.png"

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

    return (
        <div id="Awards" className="flex items-center w-full min-h-screen justify-center">
            <div>
                <h1 className="text-7xl text-amber-400 text-center mb-7">
                    Awards
                </h1>
                <div className="flex items-center justify-center my-5">
                    <img src={trophe} alt="mku" width="160px"></img>
                        <h2 className="text-6xl text-yellow-300 text-center my-5">Tournois MKU</h2>
                    <img src={trophe} alt="mku" width="160px"></img>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center bg-white/10 rounded-lg p-5 hover:bg-blue-400/10">
                        <div className="text-center">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-4xl m-auto">{mku.id}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-4xl m-auto">{mku.division}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-white uppercase text-4xl m-auto">{mku.classement}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresMKU.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-4xl m-auto">{mku.roster}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center my-5">
                    <img src={trophe} alt="mku" width="160px"></img>
                        <h2 className="text-6xl text-yellow-300 text-center my-5">Tournois QL</h2>
                    <img src={trophe} alt="mku" width="160px"></img>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center bg-white/10 hover:bg-blue-400/10 rounded-lg p-5">
                        <div className="text-center">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-4xl m-auto">{mku.id}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-4xl m-auto">{mku.division}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-white uppercase text-4xl m-auto">{mku.classement}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center ml-5">
                            {palmaresQL.map((mku)=>(
                                <div className="">
                                    <div className="text-yellow-400 uppercase text-4xl m-auto">{mku.roster}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}