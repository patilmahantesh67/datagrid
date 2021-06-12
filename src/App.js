import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const getData = async () => {
    try {
      const data = await axios.get(
        'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
