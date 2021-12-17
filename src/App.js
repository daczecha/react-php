
import { useEffect, useState } from "react";
import Table from "./components/Table";


function App() {
  const [JSONData, setJSONData] = useState({});
  const [fetched, setFetched] = useState(false);
  
  useEffect(()=>{
    fetch('http://localhost/json-api/api.php')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setJSONData(data);
        setFetched(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
        {
         fetched ? <Table className = 'table-wrapper' data={JSONData}/> : <h1>Loading..</h1>
        }
    </div>
  );
}

export default App;
