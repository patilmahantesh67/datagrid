import React, { useState, useEffect, useMemo } from 'react';
export default function Pagination({ total=0, itemsPerPage=10, currentPage=1, onPageChange }) {
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		if(total > 0 && itemsPerPage > 0) {
			setTotalPages( Math.ceil(total/itemsPerPage));
		}
	}, [total, itemsPerPage]);

	const paginationItems = useMemo(() => {
		const pages = [];
		for(let i=1; i<=totalPages; i++) {
			pages.push(<li 
				key={i}
				active={i === currentPage}
				onClick={() => onPageChange(i)}
			>
				{i}
			</li>);
		}
		return pages;
	}, [totalPages, currentPage, onPageChange]);

	if (totalPages === 0) return null;
	return (
		<ul>
			<button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
			{paginationItems}
			<button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
		</ul>
	)
}