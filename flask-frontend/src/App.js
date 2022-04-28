import React, {Component} from 'react';
import Webcam from 'react-webcam';
import WebcamCapture from './components/webcam.js';


class App extends Component {

  render() {

    return (
      <div>
        <div className='head'>
          <h2>Egyption Court Face Authontication</h2>
        </div>
        <WebcamCapture/>
      </div>
      )
  }
}



export default App;