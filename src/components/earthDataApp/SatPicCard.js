import React from 'react';
import "../../App.css";
import { Spinner } from 'reactstrap';

function SatPicCard(props){
    return(
        <div className='satPicCard' style={{width:'50%', margin:'0 auto'}}>
            {props.loadingState && <Spinner color="dark" />}
            {!props.loadingState && <img src={props.photoData.url} alt='nasa photo' style={{width:'100%'}} />}
        </div>
    );
}

export default SatPicCard;