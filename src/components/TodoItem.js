import React from 'react';

const TodoItem = props => {
	const { todo, index } = props;

	return (
		<li className="list-group-item d-flex ">
			<input type="checkbox" className="form-check-inline" onChange={e => props.onChechboxChange(e, index)} />
			<span
				style={{
					textDecoration: todo.done ? 'line-through' : 'inherit',
					fontSize: '20px',
				}}
			>
				{todo.title}
			</span>
			<button className="btn btn-outline-primary ml-auto" onClick={() => props.onRemoveClick(index)}>
				Remove
			</button>
		</li>
	);
};

export default TodoItem;
