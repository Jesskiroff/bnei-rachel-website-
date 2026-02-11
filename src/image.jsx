import React from 'react';
import './Image.css';

function Image() {
    return(
        <div>
            
            <img className= "bneiRachelImage" 
                 src= "https://bneirachel.com/wp-content/uploads/2020/07/DJI_0007-7-1024x682.jpg"
                 alt = "image" >
            </img>


            <img className= "bneiRachelImage" 
                  src = "https://www.israelhayom.com/wp-content/uploads/2021/09/bnei-rachel-compound.png"
                  alt = "image" >
             </img>

        </div>
    )
}

export default Image;  