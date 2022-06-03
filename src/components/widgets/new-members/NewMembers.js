import {Visibility} from "@material-ui/icons";
import "./NewMembers.css"

export default function NewMembers({data = []}) {
	const renderedList = data.map( d => {	
		const {name, work, image} = d;
		return (
				<li className="new-member-item">
					<img 
						src={image} 	
						className="new-member-item-avatar" alt="" />
					<div className="new-member-item-text">
						<span className="new-member-name">{name}</span>
						<span className="new-member-desgn">{work}</span>
					</div>
					<button className="new-member-item-button">
						<Visibility/>
						Display
					</button>
				</li>
		)

	});
	return (
			<div className="new-member-widget-container">
				<h5>New Join Members</h5>
				<ul className="new-member-list">
					{renderedList || <span> Not any memeber yet</span> }
				</ul>
			</div>
	);
}
