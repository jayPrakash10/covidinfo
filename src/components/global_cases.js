function Global({cases, recovered, deaths}){
    return(
            <div className='space'>
                <div ><h4 className='case'>Total Cases</h4> <h2 className='case'>{cases}</h2></div>
                <div className='text-success'><h4 className='case'>Recovered</h4> <h2 className='case'>{recovered}</h2></div>
                <div className='text-danger'><h4 className='case'>Deaths</h4> <h2 className='case'>{deaths}</h2></div>
            </div>
    )
}

export default Global;
