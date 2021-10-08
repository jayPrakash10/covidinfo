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
        <div className='card searchcontainer'>
            <div className="input-group mb-3">
                <input type="text" id='country' className="form-control" placeholder="Search for Country or Continent" onChange={()=>{document.getElementById('error').style.display = 'none'}}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=> show()}><i className='fa fa-search'></i></button>
            </div>
            <div id='error' className='error1 text-danger'>
                Invalid Country or continent name
            </div>
            <div id='searchByCountry' className="countryinfo">
                <h4>{cases.country}</h4>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Total</div>
                            <p className="card-text">{cases.totalCases}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Recover</div>
                            <p className="card-text">{cases.recover}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">New Cases</div>
                            <p className="card-text">{cases.newCases}</p>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Active</div>
                            <p className="card-text">{cases.activeCases}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Critical</div>
                            <p className="card-text">{cases.criticalCases}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Deaths</div>
                            <p className="card-text">{cases.deaths}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Search