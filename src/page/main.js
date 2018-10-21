import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/main.css';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div class = "topBar">
          <Link to='/' class = "innerLogo"><div class = "innerNode"></div></Link>
          <div class = "innerSearchDiv">
            <div class = "searchIcon"></div>
            <input type="text" class="innerSearch"/>
          </div>
          <ul class = "topBarUl">
            <li class = "innerLearn">
              <a class = "LearnLink">Learn</a>
            </li>
            <li class = "porfile">
              <a class = "profileLink">Profile</a>
            </li>
            <li class = "innerTranslations">
              <a class = "translations">Translations</a>
            </li>
          </ul>
        </div>
        <div class = "section">
          <div class = "row1">
            <div class = "firstSection">
              <div class = "nodejsLogo"></div>
              <div class = "innerText">
                <p class = "nodejsIntro">Node.js is a JavaScript runtime built on <br/><a href='https://v8.dev/'>Chrome V8 JavaScript engine.</a></p>
              </div>
              <a href="https://nodejs.org/en/"><div class = "downloadBtn">Download Node.js</div></a>
              <Link to='/start' class = "goStart"><div class = "startBtn">Get Started</div></Link>
            </div>
          </div>
          <div class = "row2">
            <div class = "secendSection">
              <div class = "reactLogo"></div>
              <div class = "innerText2">
              <p class = "reactIntro">This Page Powered By React.js<br/><a href="https://reactjs.org/">React : A JavaScript library for building user interfaces</a></p>
              <a href="https://reactjs.org/"><div class = "goReactBtn">React.js.org</div></a>
              <a href="https://reactjs.org/"><div class = "startReact">Get Started</div></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
