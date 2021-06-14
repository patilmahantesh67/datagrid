import React, { useState, useEffect, useMemo } from 'react';
import "./database.css";
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
				className={(i === currentPage ? 'active ' : '') + 'blocks'}
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
		<div id="pagination">
			<button className={(currentPage === 1 ? 'disabled ' : '') + 'blocks'} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
			{paginationItems}
			<button className={(currentPage === totalPages ? 'disabled ' : '') + 'blocks'} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
		</div>
	)
}