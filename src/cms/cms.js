import CMS from "netlify-cms-app"
import React from 'react';

const Publish = () => {
  return <button onClick={() => console.log('1111')}>click me</button>
}

CMS.registerWidget('publish', Publish, Publish);

CMS.init();
