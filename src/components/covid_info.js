import React from "react"
import Global from "./global_cases";
import Search from "./search_country";

function sort_new(arr){
    let j=0;
    let i=0
    while(i<arr.length){
        if(arr[i].cases.new!=null){
            var temp=arr[i]
            i=i-1
            while(i>=0 && arr[i].cases.new==null){
                arr[i+1]=arr[i]
                i=i-1
            }
            i=i+1;
            arr[i]=temp
            i=j;
        }
        i++;
        j++;
    }

    for(let i=0; i<arr.length;i++)
        for(let j=0; j<arr.length-i-1; j++){
            if(parseInt(arr[j].cases.new)<parseInt(arr[j+1].cases.new)){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
}

function CovidDetails({data}){
    let details =[]
    let total_cases = 0
    let total_recovered = 0
    let total_deaths = 0
    sort_new(data)
    
    function show(){
        data.forEach(element => {
            if(element.country=='All'){
                total_cases=element.cases.total
                total_recovered=element.cases.recovered
                total_deaths=element.deaths.total
            }
            else if(element.country!='North-America' && element.country!='South-America' && element.country!='Europe' && element.country!='Asia' && element.country!='Africa'){
                const country = React.createElement('td',{},element.country)
                const totalCases = React.createElement('td',{},element.cases.total)
                const totalRecovered = React.createElement('td',{className:'text-success'},element.cases.recovered)
                const newCases = React.createElement('td',{className:'text-primary'},element.cases.new)
                const activeCases = React.createElement('td',{},element.cases.active)
                const criticalCases = React.createElement('td',{className:'text-warning'},element.cases.critical)
                const deaths = React.createElement('td',{className:'text-danger'},element.deaths.total)
    
                const row = React.createElement('tr',{},[country,totalCases,totalRecovered,newCases,activeCases,criticalCases,deaths])
                details.push(row)
            }        
        });
    }

    show()
    
    return(
        <>
        <div className='container'>
            <div className='card-group topcontainer'>
                <Global cases={total_cases} recovered={total_recovered} deaths={total_deaths}/>
                <Search data={data}/>
            </div>
            <div className='space hide-scroll'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                        <th scope="col">Countries</th>
                        <th scope="col">Total Cases</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">New Cases</th>
                        <th scope="col">Active Cases</th>
                        <th scope="col">Critical Cases</th>
                        <th scope="col">Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default CovidDetails