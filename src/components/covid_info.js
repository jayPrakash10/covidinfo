import React from "react"
import Global from "./global_cases";
// function sort_1M_pop(arr){
//     for(let i=0; i<arr.length;i++)
//         for(let j=0; j<arr.length-i-1; j++){
//             if(arr[j].cases.total<arr[j+1].cases.total){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
// }

function CovidDetails({data}){
    let details = []
    let total_cases = 0
    let total_recovered = 0
    let total_deaths = 0
    // sort_1M_pop(data)

    data.forEach(element => {
        if(element.country=='All')
        {
        total_cases=element.cases.total
        total_recovered=element.cases.recovered
        total_deaths=element.deaths.total
        }
        else if(element.country!='North-America' && element.country!='South-America' && element.country!='Europe' && element.country!='Asia' && element.country!='Africa'){
            const country = React.createElement('td',{},element.country)
            const totalCases = React.createElement('td',{},element.cases.total)
            const totalRecovered = React.createElement('td',{},element.cases.recovered)
            const newCases = React.createElement('td',{},element.cases.new)
            const activeCases = React.createElement('td',{},element.cases.active)
            const criticalCases = React.createElement('td',{},element.cases.critical)
            const deaths = React.createElement('td',{},element.deaths.total)
            const row = React.createElement('tr',{},[country,totalCases,totalRecovered,newCases,activeCases,criticalCases,deaths])
            details.push(row)
        }        
    });
    
    return(
        <div className='container'>
            <Global cases={total_cases} recovered={total_recovered} deaths={total_deaths}/>
            <div className='space'>
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
    )
}

export default CovidDetails