import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.css"

export default function Chart({data =[], chartTitle, xKey, yKey }) {

	return (
		<div className="chart">
			<h4>{chartTitle}</h4>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart title={chartTitle} data={data}>
					<XAxis dataKey={xKey} strokes="#550db"/>
					<Line dataKey={yKey} strokes="#550db" type="monotone"/>
					<Tooltip />
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
