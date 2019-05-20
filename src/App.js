import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			newTodo: '',
			todos: [
				{
					title: 'Learn State',
					done: false,
				},
			],
		};
	}

	onFormSubmit = e => {
		e.preventDefault();
		this.setState({
			todos: [
				...this.state.todos,
				{
					title: this.state.newTodo,
					done: false,
				},
			],
		});

		this.setState({
			newTodo: '',
		});
	};

	onInputChange = e => {
		this.setState({
			newTodo: e.target.value,
		});
	};

	onChechboxChange = (e, index) => {
		const todos = [...this.state.todos];
		todos[index] = { ...todos[index] };
		todos[index].done = e.target.checked;

		this.setState({
			todos,
		});
	};

	onRemoveClick = index => {
		const todos = [...this.state.todos];
		todos.splice(index, 1);
		this.setState({
			todos,
		});
	};

	render() {
		return (
			<div className="App">
				<div className="container text-center">
					<h1 className="display-3">TODO APP</h1>
					<Form
						onInputChange={this.onInputChange}
						newTodo={this.state.newTodo}
						onFormSubmit={this.onFormSubmit}
					/>
				</div>
				<TodoList
					onChechboxChange={this.onChechboxChange}
					onRemoveClick={this.onRemoveClick}
					todos={this.state.todos}
				/>
			</div>
		);
	}
}

export default App;
