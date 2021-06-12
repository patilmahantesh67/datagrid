import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from './datatable';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
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
      <DataTable data={search(data)} />
    </div>
  );
}

export default App;
