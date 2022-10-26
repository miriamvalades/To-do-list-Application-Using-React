import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>my todos</h1>
			<ul>
				<li className="question">
					<input type="text"
				onChange={(e)=>setInputValue(e.target.value)}
				value={inputValue}
				onKeyPress={(e)=> {
					if (e.key === "Enter") {
						setTodos(todos.concat(inputValue));
						setInputValue("");
					}
				}}
				placeholder="What do you need to do?"></input></li>
				{todos.map((t, index) => (
					<li>{t}<i class="fa fa-times" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				))}
			</ul>
			<div className="todos-counter">{todos.length} tasks</div>
		</div>
	);
};

export default Home;
