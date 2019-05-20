import React from 'react';

const Form = props => {
	return (
		<div>
			<form onSubmit={props.onFormSubmit}>
				<input
					type="text"
					name="newTodo"
					id="newTodo"
					className="form-control"
					placeholder="What to do next?"
					onChange={props.onInputChange}
					value={props.newTodo}
				/>
				<button type="submit" className="btn btn-primary btn-block mt-3">
					ADD
				</button>
			</form>
		</div>
	);
};

export default Form;
