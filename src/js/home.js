import React, { useState } from "react";

//create your first component
export function Home() {
	const [currentTodo, setCurrentTodo] = useState("");
	const [list, setList] = useState([
		{ label: "Practice Coding", done: true },
		{ label: "Workout", done: false },
		{ label: "Read", done: false },
		{ label: "Cook Dinner", done: false }
	]);
	// const [list, setList] = useState([]);

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			setList(list.concat({ label: currentTodo, done: false }));
			setCurrentTodo("");
		}
	};

	const deleteTodo = index => setList(list.filter((item, i) => i !== index));

	const handleCompleteTodo = index => {
		let newList = [].concat(list);
		newList[index].done = !newList[index].done;

		setList(newList);
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center wrap">
			<h1 className="mb-4">To-Do List</h1>
			<div className="todo-container">
				<ul className="list-group">
					<li className="list-group-item">
						{/* field for entering new todo */}
						<input
							className="form-control border-0"
							type="text"
							placeholder="What's the agenda for today?"
							aria-label="add todo"
							value={currentTodo}
							onChange={e => setCurrentTodo(e.target.value)}
							onKeyPress={e => handleKeyPress(e)}
						/>
					</li>
					{//  mapping here
					list.map((item, index) => (
						<li className="list-group-item" key={index}>
							<div
								className={
									item.done
										? "status border rounded-circle d-inline-block done mr-3"
										: "status border rounded-circle d-inline-block mr-3"
								}
								onClick={() => handleCompleteTodo(index)}>
								{" "}
							</div>
							{item.label}
							<span
								className="delete ml-auto"
								onClick={() => deleteTodo(index)}>
								{" "}
								&#10007;
							</span>
						</li>
					))}
				</ul>
				<div className="list-group-item footer">
					{list.length > 0
						? `${list.length} item${
								list.length > 1 ? "s" : ""
						  } left`
						: "Wooooo! All tasks have been completed."}
				</div>
			</div>
		</div>
	);
}
