var redux = require('redux');
console.log('Starting redux example');


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());
  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading!!!!!!!!!!!!!!!';
  }else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url+ '" target="_blank">View Your Location</a>';
  }
});
//unsubscribe();
//retuns the object to currentState
var currentState = store.getState();

console.log('currentState', currentState);
//pure funcitons are not allowed to change the parameters that are passed in. the function should always produce the same result when given the
//same parameters

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.addHobby('DOTA LA KNN'));
store.dispatch(actions.addHobby('WALKING LA KNN'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Emily'));
store.dispatch(actions.addMovie('MAD_MAX','GAY'));
store.dispatch(actions.addMovie('LOL','Comedy'));
store.dispatch(actions.removeMovie(2));
