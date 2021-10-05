import { useState } from "react";

function Search({data}){
    var search = document.getElementById('searchByCountry')
    const [cases, setcases] = useState({country:'',totalCases:0, recover:0, newCases:0, activeCases:0, criticalCases:0, deaths:0})
    var err = true
    function show(){
        let country = document.getElementById('country').value
        data.forEach(element => {
            if(country.toLowerCase()==element.country.toLowerCase()){
                setcases({country:country,
                totalCases : element.cases.total,
                recover : element.cases.recovered,
                newCases : element.cases.new,
                activeCases : element.cases.active,
                criticalCases : element.cases.critical,
                deaths : element.deaths.total})
                search.style.display = 'block'
                err=false
            }
        });
        if(err){
            document.getElementById('error').style.display='block';
            search.style.display='none'
        }
    }

    return(
        <>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search for Country or Continent" id='country' onChange={()=>{document.getElementById('error').style.display = 'none'}}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=> show()}><i className='fa fa-search'></i></button>
            </div>
            <div id='error' className='error text-danger'>
                Invalid Country or continent name
            </div>
            <div id='searchByCountry' className="space hide-scroll">
                <h3 style={{marginTop:'20px'}}>{cases.country}</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Total Cases</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">New Cases</th>
                            <th scope="col">Active Cases</th>
                            <th scope="col">Critical Cases</th>
                            <th scope="col">Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cases.totalCases}</td>
                            <td>{cases.recover}</td>
                            <td>{cases.newCases}</td>
                            <td>{cases.activeCases}</td>
                            <td>{cases.criticalCases}</td>
                            <td>{cases.deaths}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Search