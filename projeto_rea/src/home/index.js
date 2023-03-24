

import React from "react";
import Header from "../components/header/header";
import './styles.css';
import logo2 from '../assets/gensghinwall.jpg';
import video from '../assets/festival.mp4';
import Cards from "../components/cards/cards";

function Home() {
    return(
      <>
        <Header/>
        <img id="logo2" src={logo2} />
        <div className="banner"> </div>
        <div className="trailer-container"> 
           <div className="content">
             <video controls className="video">
                <source src={video}/>
                Seu navegdor não suporta vídeos!
             </video>
           </div> 
           <div className="sinopse">
            <p className="descricao">
                Vídeozin top viu! 
                Um mar de lanternas ilumina o céu, 
                reunindo neste momento inúmeros sonhos. 
                Que nossos sonhos sejam eternos, 
                e que nos reencontremos mais uma vez.
            </p>
            <button className="button"> Veja mais!</button> 
           </div>
        </div>
        <Cards/>
        </>
    )
}

export default Home;