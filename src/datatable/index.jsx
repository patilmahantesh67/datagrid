import React from 'react';

export default function DataTable(props) {
	const columns = props.value[0] && Object.keys(props.value[0]);
	const removeData = (idToRemove) => {
		const filteredPeople = props.data.filter((item) => item.id !== idToRemove);
		props.onChange(filteredPeople);
	}
	const checkBoxUpdate = (isChecked, value) => {
		for (var i in props.value) {
			if (props.value[i].id === value) {
				props.value[i].checkbox = isChecked;
				 break; //Stop this loop, we found it!
			}
		}
	}
	const removeSelectedRows = () => {
		const hello = props.data;
		let filteredArray = hello.filter(value => value.checkbox === false);
		props.onChange(filteredArray);
	}
	const renderBody = () => {
		return props.value && props.value.map(({ id, name, email, role }) => {
			return (
				<tr key={id}>
					<td>
						<input 
							type="checkbox"
							value={id}
							onChange={(event) => checkBoxUpdate(event.target.checked, event.target.value)}
						/>
					</td>
					<td>{name}</td>
					<td>{email}</td>
					<td>{role}</td>
					<td className='opration'>
						<button className="button" onClick={() => removeData(id)}>Delete</button>
					</td>
				</tr>
			)
		})
	}
	return (
	<>
		<table cellPadding={0} cellSpacing={0}>
			<thead>
				<tr>{props.value[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
			</thead>
			<tbody>
					{renderBody()}
			</tbody>
		</table>
		<div>
			<button className="button removeSelected" onClick={removeSelectedRows}>Delete Selected</button>
		</div>
	</>
	)
}