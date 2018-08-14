// will export redux store!
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import _ from "lodash";

const preloadedState = {
	showComplete: true,
	todos: [
		{
			id: uuid(),
			name: "task 1",
			done: true
		},
		{
			id: uuid(),
			name: "task 2",
			done: true
		},
		{
			id: uuid(),
			name: "task 3",
			done: false
		}
	]
}

export const mutations = {
	completeTodos(id) {
		return {id, type: "COMPLETE_TODO"}
	},
	toggleShowComplete() {
		return {type: "SHOW_COMPLETE"}
	},
	addTodo(name) {
		const id = uuid()
		return {name, id, type: "ADD_TODO"}
	},
	deleteTodo(id) {
		return {id, type: "DELETE_TODO"}
	},
	shuffle(todos) {
		const shuffle = _.shuffle(todos);
		console.log('shuffled')
		return {type: "SET_TODOS", todos: shuffle}
	}
}

// const reducer = (state,action) => {
// 	switch (action.type) {
// 		case "COMPLETE_TODO":
// 			console.log("processing", action.type, state)
// 			const todos = state.todos;
// 			const newTodos = todos.map(todo=> todo.id === action.id ? {...todo, done: true} : todo)
// 			const newState ={
// 				...state,
// 				todos: newTodos
// 			}
// 			return newState
// 		case "SHOW_COMPLETE":
// 			return {
// 				...state,
// 				showComplete: !state.showComplete
// 			}
// 	}
// 	return state;
// }

const reducerTwo = combineReducers({
	todos(todos = [], action) {
		switch (action.type) {
			case "COMPLETE_TODO":
				console.log("processing", action.type, todos)
				const newTodos = todos.map(todo=> todo.id === action.id ? {...todo, done: true} : todo)
				// const newState ={
				// 	...state,
				// 	todos: newTodos
				// }
				return newTodos
			case "ADD_TODO":
				return [...todos, {id:action.id, name:action.name, done: false}]
			case "DELETE_TODO":
				return todos.filter(todo => todo.id === action.id ? false : true)
			case "SET_TODOS":
				return action.todos
		}
		return todos
	},
	showComplete(showComplete = true, action) {

		switch (action.type) {
			case "SHOW_COMPLETE":
			console.log('wr', showComplete)
				return !showComplete;
		}
		return showComplete;
	}
})

export const store = createStore(reducerTwo, preloadedState);


