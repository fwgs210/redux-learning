import React from 'react';
import { connect } from 'react-redux';
import { mutations } from './store';

const TodoInput = ({submitTodo}) => (
	<form onSubmit={submitTodo}>
		<input type="text" placeholder="tasks" />
		<button type="submit">Add Todo</button>
	</form>
)

const mstp = () => ({})
const mdtp = (dispatch) => ({
	submitTodo(e) {
		e.preventDefault();
		let value = e.target.elements[0].value
		console.log(value)
		if (value) {
			dispatch(mutations.addTodo(value))
			e.target.elements[0].value = ''
		}
	}
})

export default connect(mstp,mdtp)(TodoInput)