import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useAddPost } from "./AddPost.hooks";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const AddPost = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const { isAuth } = useAuth();

	const handleTitle = (e: ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);
	const handleBody = (e: ChangeEvent<HTMLInputElement>) =>
		setBody(e.target.value);

	const { fetchData } = useAddPost(title, body, setTitle, setBody);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetchData();
	};

	return (
		<>
			{isAuth ? (
				<div>
					<Header />
					<h1>Dodaj nowy post</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={title}
							placeholder="Tytuł postu"
							onChange={handleTitle}
						/>
						<input
							type="text"
							value={body}
							placeholder="Treść postu"
							onChange={handleBody}
						/>
						<button type="submit">Dodaj posta</button>
					</form>
					<Footer />
				</div>
			) : (
				<div>Prosze się zalogować</div>
			)}
		</>
	);
};
