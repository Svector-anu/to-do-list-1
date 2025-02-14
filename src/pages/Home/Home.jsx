import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TasksList from "../../components/TasksList/TasksList";

const Home = () => {
	const [text, setText] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleAddTask = () => {
		setTasks([...tasks, text]);
		setText("");
	};

	const handleRemoveTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div>
			<Navbar />
			<h1>To do list</h1>
			<input
				type="text"
				name="task"
				id="task"
				placeholder="Add a task"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleAddTask}>Add Task</button>
			<TasksList tasks={tasks} handleRemoveTask={handleRemoveTask} />
		</div>
	);
};

export default Home;
