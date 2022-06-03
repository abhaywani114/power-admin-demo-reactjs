import React from "react"
import "./Navbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function NavBar({setSidebarHide}) {
	return (
		<nav>
			<div className="navbar-wrapper">
				<div className="top-left">
					<Language /> 
					<span className="logo">Power Admin</span>
				</div>
				<div className="top-right">
					<div className="navbar-icons-wrapper">

						{/* notification icon*/}
						<div className="icon-container">
							<NotificationsNone/>	
							<span className="icon-badge">5</span>
						</div>

						{/* Language icon*/}

						{/* Settings icon*/}
						<div className="icon-container">
							<Settings/>	
						</div>

						<img
							src="https://avatars.githubusercontent.com/u/34162375?v=4"
							className="navbar-avatar" />

					</div>
				</div>
			</div>
		</nav>
	)
}
