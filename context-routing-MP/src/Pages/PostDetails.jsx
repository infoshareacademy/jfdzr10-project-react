import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api/api";

export const PostDetails = () => {
	const [post, setPost] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	const getPost = async () => {
		try {
			const { data } = await API.get(`/posts/${id}`);
			setPost(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPost();
	}, [id]);

	return (
		<>
			<button onClick={handleBack}>Back</button>
			<h2>{post?.title}</h2>
			<div>{post?.body}</div>
		</>
	);
};
