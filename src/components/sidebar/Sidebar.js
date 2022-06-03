import React from "react"
import {Link} from "react-router-dom"
import {
		LineStyle, Timeline, TrendingUp, 
		PersonOutline, Storefront, AttachMoney, 
		BarChart,  MailOutline, Assistant, ChatBubbleOutline,
		Error, WorkOutline} from "@material-ui/icons"
import "./Sidebar.css"

export default function Sidebar({isHide}) {
	return (
		<div className={ 'sidebar ' + (isHide && 'sidebar-m-hide')}>
			<div className="sidebar-wrapper">

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Dashboard</h3>
					<ul className="sidebar-list">
						<Link className="link" to="/">
							<li className="sidebar-list-item active">
								<LineStyle/> Home
							</li>
						</Link>
						<li className="sidebar-list-item">
							<Timeline/> Analytics
						</li>
						<li className="sidebar-list-item">
							<TrendingUp/> Sales
						</li>
					</ul>
				</div>

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Quick Menu</h3>
					<ul className="sidebar-list">
						<Link to="/user-list" className="link">
							<li className="sidebar-list-item ">
								<PersonOutline/> User
							</li>
						</Link>
						<li className="sidebar-list-item">
							<Storefront/> Products
						</li>
						<li className="sidebar-list-item">
							<AttachMoney/> Transactions
						</li>
						<li className="sidebar-list-item">
							<BarChart/> Reports
						</li>
					</ul>
				</div>

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Notifications</h3>
					<ul className="sidebar-list">
						<li className="sidebar-list-item">
							<MailOutline/> Mail
						</li>
						<li className="sidebar-list-item">
							<Assistant/> Feedback
						</li>
						<li className="sidebar-list-item">
							<ChatBubbleOutline/>  Messages
						</li>
					</ul>
				</div>

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Staff</h3>
					<ul className="sidebar-list">
						<li className="sidebar-list-item">
							<WorkOutline/> Manage
						</li>
						<li className="sidebar-list-item">
							<Timeline/> Analytics
						</li>
						<li className="sidebar-list-item">
							<Error/> Reports
						</li>
					</ul>
				</div>


			</div>
		</div>
	);
}
