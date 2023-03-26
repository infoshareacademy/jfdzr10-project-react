import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api/api";

export const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getData = async () => {
		try {
			const { data } = await API.get("posts/");
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<h1>Posts List</h1>
			{posts &&
				posts.map((post) => {
					return (
						<div key={post?.id}>
							<Link to={`/posts/${post.id}`}>{post?.title}</Link>
						</div>
					);
				})}
		</>
	);
};
