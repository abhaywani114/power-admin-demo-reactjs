import "./LastTransactions.css"

export default function NewMembers({data = []}) {
	const StatusButton = ({type}) => {
			return (<button className={`tx-status ${type}`}>{type}</button>)
	}

	const tableData = data.map( tx => {
			return (
					<tr className="last-transaction-row">
						<td className="col-customer">
							<img
								src={tx.image}
								className="user-avatar" />
							<span className="user-name">{tx.name}</span>
						</td>
						<td className="col-date">
							<span className="last-transaction-generic-text">{tx.date}</span>
						</td>	
						<td className="col-amount">
							<span className="last-transaction-generic-text">${tx.amount}</span>
						</td>	
						<td className="col-status">
							<StatusButton type={tx.status} />	
						</td>	
					</tr>
			)
	});

	return (
			<div className="new-transaction-widget-container">
				<h5>Last Transactions</h5>
				<table style={{width:'100%'}} >
					<thead className="last-transaction-table">
					<tr className="table-head">
						<th className="col-customer">Customer</th>
						<th className="col-date">Date</th>
						<th className="col-amount">Amount</th>
						<th className="col-status">Status</th>
					</tr>
					</thead>
					<tbody>
						{tableData}
					</tbody>
				</table>
			</div>
	);
}
