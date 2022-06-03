import React from "react"
import {BrowserRouter, Routes , Route} from "react-router-dom"

import Navbar  from "./components/navbar/Navbar"
import Sidebar  from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/userList"
import UserEdit from "./pages/user-edit/userEdit"

import "./style.css"
function App() {
	const [sidebarHide, setSidebarHide] = React.useState(true);
  return (
    <BrowserRouter className="App">
		<Navbar setSidebarHide={setSidebarHide} />
		<main>
			<Sidebar isHide={sidebarHide}/>
	  		<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/user-list" element={<UserList />} />
				<Route path="/user-edit/:userId" element={<UserEdit />} />
	  		</Routes>
		</main>
    </BrowserRouter>
  );
}

export default App;
