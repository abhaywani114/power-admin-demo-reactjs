import React from "react"
import {PersonOutline, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from "@material-ui/icons"
import "./userEdit.css"

export default function UserEdit() {
	const profileDetails = (icon, text) => {
		return (
				<div className="user-edit-profile-detail-strip">
					{icon}
					<span className="user-edit-profile-text">{text}</span>
				</div>
		);
	}

	const textFields = (label, type = 'text') => {
		return (
				<div className="form-field">
					<label>{label}</label>
					<input type={type} />
				</div>
			)
	}
	return (
		<div className="user-edit">
			<div className="top-bar">
				<h1>Edit User</h1>
				<button>New User</button>
			</div>
			<div className="main-container">
				<div className="user-edit-display">
					<div className="user-edit-dp">
						<img 
							alt=""
							src="https://avatars.githubusercontent.com/u/34162375?v=4"/>
						<div className="user-edit-dp-text">
							<span className="user-edit-dp-main-text">Abrar Ajaz</span>
							<span className="user-edit-dp-sub-text">Software Engineer</span>
						</div>
					</div>
					<h6 className="user-edit-sub-headding">Account Details</h6>
					{profileDetails(<PersonOutline/>,"abhaywani114")}
					{profileDetails(<CalendarToday/>,"25th Nov 1997")}

					<h6 className="user-edit-sub-headding">Contact Details</h6>
					{profileDetails(<PhoneAndroid/>,"+91-7889480433")}
					{profileDetails(<MailOutline/>,"abhaywani114@gmail.com")}
					{profileDetails(<LocationSearching/>,"New York, USA")}
				</div>
				<div className="user-edit-form">
					<div className="edit-form">
						<h1>Edit</h1>
						<form>
							{textFields("Username")}
							{textFields("Full Name")}
							{textFields("Email")}
							{textFields("Phone")}
							{textFields("Address")}
						</form>
					</div>
					<div className="dp">
						<div className="profile-upload-container">
							<img 
								src="https://avatars.githubusercontent.com/u/34162375?v=4"/>
							<Publish/>
						</div>

						<button>Update</button>
					</div>
				</div>
			</div>
		</div>
	)
}
