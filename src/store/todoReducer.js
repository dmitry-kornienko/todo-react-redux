const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DONE_TODO = 'DONE_TODO';

const defaultState = {
    todos: [],
};

const todoReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
        case DONE_TODO:
            return {...state, todos: [...state.todos, state.todos[action.payload].done = true]};
        default:
            return state;
    }
}

export const addTodo = (todo) => ({
    type: ADD_TODO, payload: todo,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO, payload: id,
});

export const doneTodo = (index) => ({
    type: DONE_TODO, payload: index,
});

export default todoReducer;