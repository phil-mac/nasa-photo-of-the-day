import React from 'react';
import "../../App.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Spinner
  } from 'reactstrap'; 

function PhotoCard(props){
    return(
        <div>
        <Card>
          {props.loadingState && <Spinner color="dark" />}
          {!props.loadingState && <CardImg top width="100%" src={props.photoData.url} alt="nasa photo" />}
          <CardBody>
            <CardTitle style={{fontSize:'2rem'}}>{props.photoData.title}</CardTitle>
            <CardText>{props.photoData.explanation}</CardText>
            <CardSubtitle>© {props.photoData.copyright}</CardSubtitle>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </div>
        // <div className='photoCard' style={{width:'80%', margin:'0 auto'}}>
        //     <img src={props.photoData.url} alt='nasa photo' style={{width:'100%'}} />
        //     <h2>{props.photoData.title}</h2>
        //     <h3>{props.photoData.explanation}</h3>
        //     <p></p>
        // </div>
    );
}

export default PhotoCard;