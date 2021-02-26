
import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import Icon from './icon.png';
import Data from './data.json';
import json from './data.json5';
import style from './custom.scss';

const Index = () => {
  // Test webpack on the screen
  const webpack_text = _.join(['webpack', 'is', 'go','plus','lodash'], ' ');
  return (
    <div>
      <div className={style.app}>
        <h1>Bootstrapped React App With Webpack - ready for Dokku!</h1>
        <h3>Webpack Tests</h3>
        <h4>CSS Stylesheets</h4>
        <p>This 'p' text will be blue.</p>
        <span>This 'span' will be green</span>
        <ul>
          <li>A red list item</li>
          <li>Another red list item</li>
          <li>Red list item added for extra listinenss</li>
        </ul>
        <h4>JS and LoDash</h4>
        <p>{webpack_text}</p>
        <h4>Static Images</h4>
        <p>Profile Image:</p>
        <img src={Icon} alt="Icon" />
        <h4>Static JSON and JSON 5 Data</h4>
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