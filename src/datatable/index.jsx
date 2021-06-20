import React, { useState } from 'react';

export default function DataTable(props) {
	const [allChecked, setAllChecked] = useState(false);
	// const columns = props.gridData[0] && Object.keys(props.gridData[0]);
	const columns = ['name', 'email', 'role', 'actions'];
	const removeData = (idToRemove) => {
		const filteredPeople = props.totalData.filter((item) => item.id !== idToRemove);
		props.onChange(filteredPeople);
	}
	const updateCheckbox = (isChecked, value) => {
		for (var i in props.gridData) {
			if (props.gridData[i].id === value) {
				props.gridData[i].checkbox = isChecked;
				break; //Stop this loop, we found it!
			}
		}
	}
	const updateAllCheckBoxes = (e) => {
		const pageData = props.gridData;
		pageData.forEach(element => {
			element.checkbox = e.target.checked;
		});
		setAllChecked(e.target.checked);
	}
	const removeSelectedRows = () => {
		let filteredArray = props.totalData.filter(value => value.checkbox === false);
		setAllChecked(false);
		props.onChange(filteredArray);
	}
	const renderBody = () => {
		return props.gridData && props.gridData.map(({ id, name, email, role, checkbox }) => {
			return (
				<tr key={id}>
					<td>
						<input 
							type="checkbox"
							value={id}
							defaultChecked={checkbox}
							onChange={(event) => updateCheckbox(event.target.checked, event.target.value)}
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
				<tr>
					<th>
						<input 
							type="checkbox"
							checked={allChecked}
							onChange={updateAllCheckBoxes}
						/>
					</th>
					{props.gridData[0] && columns.map((heading) => <th>{heading}</th>)}
				</tr>
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