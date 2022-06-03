import "./Home.css"
import FeaturedInfo from "../../components/featured-info/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import NewMember from "../../components/widgets/new-members/NewMembers"
import LastTransactions from "../../components/widgets/last-transactions/LastTransactions"
import userData from "../../data/UserData"

export default function Home() {
	const widgetUserData = [
		{
			name:"Osmanli", 
			work: "Sofware Engineer", 
			image: "https://avatars.githubusercontent.com/u/34162375?v=4"
		},
		{
			name:"Osmanli", 
			work: "Sofware Engineer", 
			image: "https://avatars.githubusercontent.com/u/34162375?v=4"
		},
		{
			name:"Osmanli", 
			work: "Sofware Engineer", 
			image: "https://avatars.githubusercontent.com/u/34162375?v=4"
		},
		{
			name:"Osmanli", 
			work: "Sofware Engineer", 
			image: "https://avatars.githubusercontent.com/u/34162375?v=4"
		},
		{
			name:"Osmanli", 
			work: "Sofware Engineer", 
			image: "https://avatars.githubusercontent.com/u/34162375?v=4"
		},
	];

	const widgetTxData = [
			{
				name:"Osmanli ",
				date:"01 Jan 2022",
				amount: 100,
				image: "https://avatars.githubusercontent.com/u/34162375?v=4",
				status: "Approved"
			},
			{
				name:"Osmanli ",
				date:"01 Jan 2022",
				amount: 100,
				image: "https://avatars.githubusercontent.com/u/34162375?v=4",
				status: "Approved"
			},

			{
				name:"Osmanli ",
				date:"01 Jan 2022",
				amount: 100,
				image: "https://avatars.githubusercontent.com/u/34162375?v=4",
				status: "Approved"
			},

			{
				name:"Osmanli ",
				date:"01 Jan 2022",
				amount: 100,
				image: "https://avatars.githubusercontent.com/u/34162375?v=4",
				status: "Approved"
			},

	];

	return (
		<div className="main-container">
			<FeaturedInfo/>	
			<Chart data={userData} 
				chartTitle="User Analytics" 
				xKey="name"
				yKey="users"
			/>
			<div className="main-widget-container">
				<NewMember data={widgetUserData} />
				<LastTransactions data={widgetTxData}/>
			</div>
		</div>
	)
}	
