import '../css/covid.css'
import CovidDetails from './covid_info';
function Covid(){
    
    return(
        <div className='container'>
            <div className='space'>
                <div ><h4 className='case'>Total Cases</h4> <h2 className='case'>Cases</h2></div>
                <div ><h4 className='case'>Recovered</h4> <h2 className='case'>Cases</h2></div>
                <div ><h4 className='case'>Deaths</h4> <h2 className='case'>Cases</h2></div>
            </div>
            <CovidDetails />
        </div>
    )
}

export default Covid;