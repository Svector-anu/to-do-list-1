import React from "react";

const TasksList = ({ tasks, handleRemoveTask }) => {
	return (
		<div>
			{tasks.map((task, index) => (
				<div className="task" key={index}>
					<p>{task}</p>
					<button onClick={() => handleRemoveTask(index)}>
						Remove
					</button>
				</div>
			))}
		</div>
	);
};

export default TasksList;
