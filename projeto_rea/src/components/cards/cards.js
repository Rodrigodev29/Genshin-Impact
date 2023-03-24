import React from 'react';
import './cards.css'
import zhong from '../../assets/wallzhong.jpg';
import hu from '../../assets/hutaojpeg.jpg';
import jean from '../../assets/jean2.jpg';
import eula from '../../assets/eula.jpg';


function Cards() {
    return (
      <div className='cards-container'>
        <div className='cards-content'>
            <div className='card b-1'>
             <img src={zhong}/>
             Zhong Li
            </div>
            <div className='card b-2'>
            <img src={hu}/>    
            Hu Tao </div>
            <div className='card b-3'>
            <img src={jean}/>
            Jean</div>
            <div className='card b-4'>
            <img src={eula}/>    
            Eula</div>
        </div> 
      </div> 
         
         
      
    )
}

export default Cards;