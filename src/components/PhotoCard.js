import React from 'react';
import "../App.css";

function PhotoCard(props){
    return(
        <div className='photoCard'>
            <h2>photo card</h2>
            <img src={props.imgUrl} alt='nasa photo' />
        </div>
    );
}

export default PhotoCard;