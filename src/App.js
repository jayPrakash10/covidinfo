import { useEffect, useState } from 'react';
import './App.css';
import CovidDetails from './components/covid_info';
import './css/covid.css'

function App() {
  
  const [info, setInfo] = useState(null)
  useEffect(()=>{
    getapi()
  },[])

  function getapi(){
    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "9fac8ddff4msh6c51c9544932063p11bcebjsnc419840dc79a"
        }
      })
      .then(response => 
        response.json()
      )
      .then(data =>{
        setInfo(data.response)
      })
      .catch(err => {
        console.error(err);
      });
  }
  return (
    <div className="App">
      <CovidDetails data={info} />
    </div>
  );
}

export default App;
