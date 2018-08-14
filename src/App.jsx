import React from 'react';
import { connect } from 'react-redux';
import CounterWrapper from './Counter';
import { mutations } from './store';
import ShowCompleteToggle from './ShowComplete'
import TodoWrapper from './TodoInput'


export const App = ({todos, doTodo, deleteTodo}) => {
	return (
	<div>
	<CounterWrapper/>
	<ul>

		{todos.map((e) => {
			return <li key={e.id}>{e.name} - {e.done ? 'done': <button onClick={() => doTodo(e.id)}>Do</button>} 
			<button onClick={()=> deleteTodo(e.id)}>delete</button></li>
		})}
	</ul>
	<TodoWrapper />
	<ShowCompleteToggle />
	</div>
	)
}

const mapStateToProps = (state) => ({
	todos:state.todos.filter(todo=> state.showComplete ? true : !todo.done)
});

const mapDispatchToProps = (dispatch) => ({
	doTodo(id) {
		const action = mutations.completeTodos(id)
		dispatch(action)
	},
	deleteTodo(id) {
		console.log(id)
		const action = mutations.deleteTodo(id)
		dispatch(action)
	}
});

export const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);
