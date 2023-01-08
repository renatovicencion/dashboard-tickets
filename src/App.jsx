import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";

// Pages Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Pages Admin
import Dashboard from "./pages/admin/Dashboard";
import Chat from "./pages/admin/Chat";

import Error404 from "./pages/Error404";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<LayoutAuth />}>
					<Route path='login' element={<Login />}></Route>
					<Route path='register' element={<Register />}></Route>
					<Route
						path='forgot-password'
						element={<ForgotPassword />}
					></Route>
					<Route
						path='reset-password'
						element={<ResetPassword />}
					></Route>
				</Route>

				<Route path='/dashboard' element={<LayoutAdmin />}>
					<Route index element={<Dashboard />} />
					<Route path='chat' element={<Chat />} />
				</Route>
				<Route path='*' element={<Error404 />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
