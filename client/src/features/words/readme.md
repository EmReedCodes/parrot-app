//// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById('value')

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState()
  valueEl.innerHTML = state.value.toString()
}

// Update the UI with the initial data
render()
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render)

//So, we write a function that knows how to get the latest state from the Redux store using the store.getState() method, then takes that value and updates the UI to show it.

Finally, we need to respond to user input by creating action objects that describe what happened, and dispatching them to the store. When we call store.dispatch(action), the store runs the reducer, calculates the updated state, and runs the subscribers to update the UI.

//multiple components that need to share and use the same state,

//Redux expects that all state updates are done immutably

const addTodoAction = {
  type: 'word/sliced',
  payload: 'remove letters'
}

// reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

//reducers must not They must not do any asynchronous logic, calculate random values, or cause other "side effects"

Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)

To specify how the state tree is updated based on actions, you write reducer functions. Reducers are pure functions that take the previous state and an action, and return the next state. Like any other functions, you can split reducers into smaller functions to help do the work, or write reusable reducers for common tasks.