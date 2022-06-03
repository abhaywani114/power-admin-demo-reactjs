import React from "react"
import {Link} from "react-router-dom"
import {DataGrid, GridColDef, GridValueGetterParams} from  '@material-ui/data-grid'
import {Edit, DeleteOutline} from "@material-ui/icons"
import "./userList.css"

export default function UserList() {

	const rows = [
		{id:1, username:"@abhaywani114", email:"abhaywani114@gmail.com", 
			avatar: "https://avatars.githubusercontent.com/u/34162375?v=4",
			status:"active"},
		{id:2, username:"@abhaywani114", email:"abhaywani114@gmail.com", 
			avatar: "https://avatars.githubusercontent.com/u/34162375?v=4",
			status:"active"},
		{id:3, username:"@abhaywani114", email:"abhaywani114@gmail.com", 
			avatar: "https://avatars.githubusercontent.com/u/34162375?v=4",
			status:"active"},
	];

	const [userData, setUserData ] = React.useState(rows) 

	const handleDelete = (id) => {
		setUserData(prevData => prevData.filter(u => u.id !== id));
	}

	const dTUsernameRender = (params) => {
		return (
			<div className="datatable-username">
				<img src={params.row.avatar} /> 
				{params.row.username}
			</div>
		);
	}

	const dTActionRender = (params) => {
		return (
			<div className="datatable-action">
				<Link to={`/user-edit/${params.row.id}`}>
					<Edit className="userlist-icon-edit" />	
				</Link>
				<DeleteOutline className="userlist-icon-delete"
					onClick={() => handleDelete(params.row.id)} />
			</div>
		);
	}


	const columns: GridColDef[] = [
		{field: 'id', headerName: 'ID', width: 100 },
		{field: 'c_username', headerName: "Username", width: 200, renderCell: dTUsernameRender},
		{field: 'email', headerName: "Email", width: 200},
		{field: 'status', headerName: "Status", width: 160},
		{field:	'action', headerName: "Action", width: 160, renderCell: dTActionRender}
	];
	return (
		<div className="userlist">
			 <DataGrid
				rows={userData}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
		  />
		</div>
	);
}
