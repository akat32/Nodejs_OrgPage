import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Main from './page/main'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Main} />
      </div>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister();
