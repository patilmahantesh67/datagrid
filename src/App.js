import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from './datatable';

function App() {
  const [data, setData] = useState([]);
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
  return (
    <div className="App">
      <DataTable data={data} />
    </div>
  );
}

export default App;
