
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './custom.scss';

const Index = () => {
  // Test webpack on the screen
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            1 of 2
            </div>
          <div class="col">
            2 of 2
            </div>
        </div>
        <div class="row">
          <div class="col">
            1 of 3
            </div>
          <div class="col">
            2 of 3
            </div>
          <div class="col">
            3 of 3
            </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
    </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
    </div>
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
    </div>
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
    </div>
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
    </div>
      <div class="alert alert-info" role="alert">
        A simple info alert—check it out!
    </div>
      <div class="alert alert-light" role="alert">
        A simple light alert—check it out!
    </div>
      <div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
    </div>
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));