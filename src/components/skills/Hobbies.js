import React from 'react';
import { GrBitcoin } from "react-icons/gr";
import { IoPlanetOutline } from "react-icons/io5";
import { FaSwimmer } from "react-icons/fa";
const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Hobbies</h3>
            <ul>
            
                <li className='hobby'>
                
                   <span>Astrologie</span>
                   <IoPlanetOutline className='font' />
                </li>
               
                <li>
                    <span>Cripto money</span>
                    <GrBitcoin className='font'/>
                </li>
           
                <li>
                      <span>swimming</span>
                      <FaSwimmer className='font'  />
                      
                      
                </li>
            </ul>                      
            
        </div>
    );
};

export default Hobbies;