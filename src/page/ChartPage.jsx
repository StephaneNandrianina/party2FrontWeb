import {Header , Footer} from '../component/Header';
import {NavBar} from '../component/NavBar';
import './css/AppAffichage.css';
import MyChartComponent from '../component/MyChartComponent';


function Chart(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><MyChartComponent/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default Chart;