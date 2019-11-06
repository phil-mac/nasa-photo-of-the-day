import React from 'react';
import "../../App.css";

function Navigation(){
    return(
        <div className='nav' style={{background:'lightgrey', height:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <button style={{margin:'0 50px'}}>Photo of the Day</button>
            <button style={{margin:'0 50px'}}>Other API</button>
        </div>
    );
}

export default Navigation;