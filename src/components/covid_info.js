import React from "react"

function CovidDetails(){
    let details = []
    for(let i= 0; i<10; i++)
    {
        const col1 = React.createElement('td',{},'c'+i)
        const col2 = React.createElement('td',{},'tc'+i)
        const col3 = React.createElement('td',{},'r'+i)
        const col4 = React.createElement('td',{},'ac'+i)
        const col5 = React.createElement('td',{},'cc'+i)
        const col6 = React.createElement('td',{},'d'+i)
        const row = React.createElement('tr',{},[col1,col2,col3,col4,col5,col6])
        details.push(row)
    }
    return(
        <div className='space'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <th scope="col">Contries</th>
                    <th scope="col">Total Cases</th>
                    <th scope="col">Recovered</th>
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
    )
}

export default CovidDetails