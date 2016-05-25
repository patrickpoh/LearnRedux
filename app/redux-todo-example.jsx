var redux = require('redux');

console.log('Starting redux example');
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  //default if there is no new state
  // state = state || {name: 'Anonymous'};
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
  //always return a state

};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('SearchText is ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});


//pure funcitons are not allowed to change the parameters that are passed in. the function should always produce the same result when given the
//same parameters
var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
};

store.dispatch(action);
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'FUUUUUUUUUUUUUUUUUUUUUUUUUCK'
});
