import React from 'react';
import { connect } from 'react-redux';
import { mutations } from './store';

const ShowCompleted = ({showComplete, changeShowComplete, shuffle, todos}) => (
	<div>
		<label>
			show completed items <input type="checkbox" checked={showComplete} onChange={changeShowComplete} />
		</label>
		<label>
			<button onClick={() =>shuffle(todos)}>Shuffle</button>
		</label>
	</div>
)

const mstp = state => ({showComplete:state.showComplete, todos:state.todos});
const mdtp = (dispatch) => ({
	changeShowComplete(e) {
		const checked = e.target.checked;
		const action = mutations.toggleShowComplete(checked);
		dispatch(action)
	},
	shuffle(todos) {
		dispatch(mutations.shuffle(todos))
	}
});

export default connect(mstp, mdtp)(ShowCompleted);
