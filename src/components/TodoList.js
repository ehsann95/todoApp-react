import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
	return (
		<div className="container mt-3 p-3">
			<ul className="list-group">
				{props.todos.map((todo, index) => {
					return (
						<TodoItem
							todo={todo}
							index={index}
							key={index}
							onChechboxChange={props.onChechboxChange}
							onRemoveClick={props.onRemoveClick}
						/>
					);
				})}
			</ul>
		</div>
	);
};
export default TodoList;
