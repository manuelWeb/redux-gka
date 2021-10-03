
let id = 2;

const initialState = [
  {
    id: 1,
    title: 'Enregistrer le tuto',
    completed: false,
  },
  {
    id: 2,
    title: 'Préparer le tuto',
    completed: true,
  }
];

const ADD_TODO_ACTION = 'ADD_TODO_ACTION';

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }];
    default:
      return state;
  }
}

const state = TodoReducer(undefined, {});
const newState = TodoReducer(state, { type: ADD_TODO_ACTION, payload: { title: 'DEMO' } });

console.log(state, newState);
