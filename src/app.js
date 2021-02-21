
import React from "react";
import ReactDOM from "react-dom";
import style from './app.css';

const Index = () => {
  return (
    <div>
      <div>
        <h1>React App With Webpack - ready for Dokku!</h1>
      </div>
      <div className={style.app}>
        <p>This text will be blue.</p>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));