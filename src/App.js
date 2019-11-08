import React, {useState, useEffect} from "react";
import PhotoOfDayApp from './components/photoOfDayApp/PhotoOfDayApp';
import EarthDataApp from './components/earthDataApp/EarthDataApp';
import UINonsense from './components/uiNonsense/UINonsense';

import Navigation from './components/navigation/Navigation';

import "./App.css";

function App() {
  const [appIndex, setAppIndex] = useState(1);

  return (
    <div className="App" style={{paddingBottom:'50px'}}>
      <Navigation selectAppIndex={setAppIndex} appIndex={appIndex} />
      {(appIndex === 1 && <PhotoOfDayApp />)}
      {(appIndex === 2 && <EarthDataApp />)}
      {(appIndex === 3 && <UINonsense />)}

    </div>
  );
}

export default App;
