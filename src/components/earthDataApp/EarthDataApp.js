import React, {useState, useEffect} from "react";
import SatPicCard from './SatPicCard';
import {Button} from 'reactstrap';

import "../../App.css";

function EarthDataApp() {
  const [coordState, setCoordState] = useState(100.75);
  const [photosState, setPhotosState] = useState({});
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() =>{
    const fetchPhotos = () =>
      setLoadingState(true);
      fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${coordState}&lat=1.5&dim=0.050&date=2014-02-01&cloud_score=True&api_key=H2cw3TrncbbEQ1QTS8rowEz3X0xnhhzqdQIWu15i`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPhotosState(data);
          setLoadingState(false);
        })
        
    fetchPhotos();
  }, [coordState])

  return (
    <div className="EarthDataApp">
      <h1>Earth Satellite Image Viewer</h1>
      {/* <Controls setDate={setDateState}/> */}
      <div>
        <Button onClick={() => setCoordState(coordState + 0.02)} color="primary" style={{margin:"30px"}}>--></Button>
      </div>
      <div>
        <SatPicCard photoData={photosState} loadingState={loadingState} />
      </div>
    </div>
  );
}

export default EarthDataApp;
