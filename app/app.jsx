var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//Load foundation-sites
// require('style!css!foundation-sites/dist/foundation.min.css')
// require('foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
// require('style!css!sass!applicationStyles')
require('applicationStyles')

// ReactDOM.render(
//   <p>Boilerplate 3 Project</p>,
//   document.getElementById('app')
// );

require('./redux-example.jsx');
// require('./redux-todo-example.jsx');
