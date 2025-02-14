import React, { useEffect, useState } from "react";
import "./FetchedList.css";
import axios from "axios";

const FetchedList = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		setLoading(true);

		try {
			const response = await axios.get("https://dummyjson.com/todos");
			setData(response.data.todos);
			console.log(response);
		} catch (err) {
			console.error("Error fetching data:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1>Fetched List</h1>

			{data.map((item) => (
				<div key={item.id}>
					<p>Title: {item.todo}</p>
					<p>User ID: {item.userId}</p>
					<p>Completed: {item.completed ? "Yes" : "No"}</p>
					<br />
					<br />
				</div>
			))}
		</div>
	);
};

export default FetchedList;
