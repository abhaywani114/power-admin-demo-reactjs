import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import "./FeaturedInfo.css"

export default function FeaturedInfo() {
	return (
			<div className="featured">

				<div className="featured-item">
					<span className="featured-title">Revanue</span>
					<div className="featured-money-container">
						<span className="featured-money">$1,000</span>
						<span className="featured-money-rate">
							-11.4 <ArrowDownward 
									className="featured-arrow negetive"/>
						</span>
					</div>
					<span className="featured-sub">
						Compared to last month
					</span>
				</div>

				<div className="featured-item">
					<span className="featured-title">Sales</span>
					<div className="featured-money-container">
						<span className="featured-money">$1,000</span>
						<span className="featured-money-rate">
							+11.4 <ArrowUpward
									className="featured-arrow"/>
						</span>
					</div>
					<span className="featured-sub">
						Compared to last month
					</span>
				</div>

				<div className="featured-item">
					<span className="featured-title">Cost</span>
					<div className="featured-money-container">
						<span className="featured-money">$1,000</span>
						<span className="featured-money-rate">
							-11.4 <ArrowDownward
									className="featured-arrow negetive"/>
						</span>
					</div>
					<span className="featured-sub">
						Compared to last month
					</span>
				</div>

			</div>
	)
}
