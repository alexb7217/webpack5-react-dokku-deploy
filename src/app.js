
import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import style from './app.css';
import Icon from './icon.png';
import Data from './data.json';
import json from './data.json5';

const Index = () => {
  // Test webpack on the screen
  const webpack_text = _.join(['webpack', 'is', 'go','plus','lodash'], ' ');
  return (
    <div>
      <div className={style.app}>
        <h1>React App With Webpack - ready for Dokku!</h1>
        <p>This 'p' text will be blue.</p>
        <span>This 'span' will be green</span>
        <ul>
          <li>A red list item</li>
          <li>Another red list item</li>
          <li>Red list item added for extra listinenss</li>
        </ul>
        <p>{webpack_text}</p>
        <h3>Profile Image:</h3>
        <img src={Icon} alt="Icon" /> 
        <p>{Data.mydata}</p>
        <ul>
          <li>Name: {json.owner.name}</li>
          <li>Org: {json.owner.organization}</li>
          <li>Bio: {json.owner.bio}</li>
        </ul>
      </div>
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));