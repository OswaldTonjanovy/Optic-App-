import React, { useState } from 'react';
import Webcam from "react-webcam";
import { MDBBtn, } from 'mdbreact';
import WebcamCapture from './WebcamCapture';




const WebcamPhoto = (props) => {

  const [imageSrc, setImageSrc] = useState('');
  const [show, setShow] = useState(true);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc)
      setShow(false)
    },
    [webcamRef]
  );

  const editing = () => {
    props.history.push({
      pathname: '/editing',
      state: {
        imageSrc: imageSrc
      }
    });
  }

  let watchCapture = null;

  if (show) {

    watchCapture =
      <div className='elegant-color-dark'>
        <div className='d-flex justify-content-center'>
          <Webcam
            audio={false}
            height={320}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
          />
        </div>
        <div className='d-flex justify-content-center  elegant-color-dark'>
          <MDBBtn
            color='danger'
            rounded
            onClick={capture}>
            <h5 className='font-weight-bold'>Capture</h5>
          </MDBBtn>
        </div>
      </div>
  } else {

    watchCapture =
      <div className='d-flex flex-column elegant-color-dark '>
        <div className='d-flex justify-content-center mx-auto mt-4'  style={{ height: '300px', width: '3n00px' }}>
          <WebcamCapture  src={imageSrc}  />
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <MDBBtn
            color='danger'
            rounded
            type='button'
            onClick={editing}>
            <h5 className='font-weight-bold'>Edit</h5>
          </MDBBtn>
        </div>
      </div>
  }

  return (
    <>
      {watchCapture}
    </>
  );
};

export default WebcamPhoto;