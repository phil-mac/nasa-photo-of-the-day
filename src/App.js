import React, {useState, useEffect} from "react";
import PhotoCard from './components/PhotoCard';
import "./App.css";

function App() {
  const [photoState, setPhotosState] = useState('');

  useEffect(() =>{
    const fetchPhotos = () =>
      fetch('https://api.nasa.gov/planetary/apod?api_key=H2cw3TrncbbEQ1QTS8rowEz3X0xnhhzqdQIWu15i&date=2012-03-14')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPhotosState(data.url);
        })
        
    fetchPhotos();
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard imgUrl={photoState}/>
    </div>
  );
}

export default App;
