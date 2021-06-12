import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import DataTable from './datatable';
import Pagination from './datatable/pagination';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const getData = async () => {
    try {
      const apiData = await axios.get(
        'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
      );
      setData(apiData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const computedData = useMemo(() => {
    let tempData = data;
    setTotalItems(tempData.length);
    return tempData.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
  }, [data, currentPage]);
  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) => 
      columns.some((column) => row[column].toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
    );
  }
  return (
    <div className="App">
      <div>
        <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
      </div>
      <DataTable data={search(computedData)} />
      <div>
        <Pagination 
          total={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={ page => setCurrentPage(page) }
        />
      </div>
    </div>
  );
}

export default App;
