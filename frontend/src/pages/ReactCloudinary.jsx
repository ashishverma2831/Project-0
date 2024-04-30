import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";


const ReactCloudinary = () => {

  const cld = new Cloudinary({ cloud: { cloudName: 'dof7hiljv' } });
  const myImage = cld.image('docs/vegeta'); 
  myImage.resize(fill().width(500).height(500));

  return (
    <>
      <h1>React Quick Start</h1>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </>
  )
}

export default ReactCloudinary