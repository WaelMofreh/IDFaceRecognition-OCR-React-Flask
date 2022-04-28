import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width : 400,
    height : 400,
    facingMode: 'user'
  };
  const[name, setName] = useState('')
  const capture = React.useCallback(
  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
                //for deployment, you should put your backend url / api
          axios.post('https://safe-woodland-47505.herokuapp.com/api', {data : imageSrc})
    	  .then(res => {
      	  console.log(`response = ${res.data}`)
      	  setName(res.data)
    })
    	  .catch(error => {
      	  console.log(`error = ${error}`)
    })
  }, 
   [webcamRef]
  );
  
  return (
  <div>
    <Webcam
     audio = {false}
	 height = {500}
	 ref = {webcamRef}
	 screenshotFormat = "image/jpeg"
	 width = {550}
	 videoConstraints = {videoConstraints}
	/>
    <div>
        <button onClick={capture}>Check Authorization</button>
	    <h3>{name}</h3>
    </div>
  </div>
	);
  
};

export default WebcamCapture;
