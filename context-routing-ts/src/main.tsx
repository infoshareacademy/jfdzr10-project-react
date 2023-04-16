import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { AppRoutes } from "./AppRoutes.enum";
import { Contact } from "./routes/Contact";
import { Posts } from "./routes/Posts";
import { About } from "./routes/About";
import { AddPost } from "./routes/addPost/AddPost";
import { AuthProvider } from "./providers/auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoutes.home} element={<Home />} />
					<Route path={AppRoutes.contact} element={<Contact />} />
					<Route path={AppRoutes.about} element={<About />} />
					<Route path={AppRoutes.posts} element={<Posts />} />
					<Route path={AppRoutes.addPost} element={<AddPost />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);
