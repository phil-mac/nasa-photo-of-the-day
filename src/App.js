import React, {useState, useEffect} from "react";
import PhotoOfDayApp from './components/photoOfDayApp/PhotoOfDayApp';
import EarthDataApp from './components/earthDataApp/EarthDataApp';

import Navigation from './components/navigation/Navigation';


import "./App.css";

function App() {
  const [appIndex, setAppIndex] = useState(1);

  return (
    <div className="App">
      <Navigation selectAppIndex={setAppIndex}/>
      {(appIndex === 1 && <PhotoOfDayApp />)}
      {(appIndex === 2 && <EarthDataApp />)}
    </div>
  );
}

export default App;
