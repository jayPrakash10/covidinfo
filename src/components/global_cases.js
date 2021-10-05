function Global({cases, recovered, deaths}){
    return(
            <div className='space'>
                <div className='card-group'>
                    <div className='card text-center list-group-item-secondary'><h4>Total Cases</h4> <h2>{cases}</h2></div>
                    <div className=' card text-center list-group-item-success'><h4>Recovered</h4> <h2>{recovered}</h2></div>
                    <div className='card text-center list-group-item-danger'><h4>Deaths</h4> <h2>{deaths}</h2></div>
                </div>
            </div>
    )
}

export default Global;