import React from 'react';

export default function DataTable(props) {
	const columns = props.value[0] && Object.keys(props.value[0]);
	const removeData = (idToRemove) => {
		const filteredPeople = props.data.filter((item) => item.id !== idToRemove);
		props.onChange(filteredPeople);
	}
	const renderBody = () => {
		return props.value && props.value.map(({ id, name, email, role }) => {
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{email}</td>
					<td>{role}</td>
					<td className='opration'>
						<button onClick={() => removeData(id)}>Delete</button>
					</td>
				</tr>
			)
		})
	}
	return <table cellPadding={0} cellSpacing={0}>
		<thead>
			<tr>{props.value[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
		</thead>
		<tbody>
				{renderBody()}
		</tbody>
	</table>
}