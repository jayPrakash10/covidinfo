function Global({cases, recovered, deaths}){
    return(
        <div className='card infocontainer'>
        <div className='card-group'>
            <div className='card list-group-item-secondary'>
                <div className='card-body'>
                    <div className='card-title'>Total</div>
                    <div className='card-title'>{cases}</div>
                </div>
            </div>
            <div className='card list-group-item-success'>
                <div className='card-body'>
                    <div className='card-title'>Recover</div>
                    <div className='card-title'>{recovered}</div>
                </div>
            </div>
            <div className='card list-group-item-danger'>
                <div className='card-body'>
                    <div className='card-title'>Deaths</div>
                    <div className='card-title'>{deaths}</div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Global;