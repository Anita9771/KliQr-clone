import './index.css';
import flight from './images/flight.png';
import gift from './images/gift.png';
import home from './images/home.png';
import plate from './images/plate.png';

const Recurring = () => {
    return ( 
        <div className="recurring">
            <p>RECURRING EXPENSES</p>
            <div className="each">
                <div className="icon">
                    <img src={ gift } alt="gift"/>
                </div>

                <div className="icon">
                    <img src={ flight } alt="flight"/>
                </div>

                <div className="icon">
                    <img src={ plate } alt="plate"/>
                </div>

                <div className="icon">
                    <img src={ home } alt="home"/>
                </div>
            </div>

            <div className="each">
                <div className="icon">
                    <img src={ gift } alt="gift"/>
                </div>

                <div className="icon">
                    <img src={ flight } alt="flight"/>
                </div>

                <div className="icon">
                    <img src={ plate } alt="plate"/>
                </div>

                <div className="icon">
                    <img src={ home } alt="home"/>
                </div>
            </div>
        </div>
     );
}
 
export default Recurring;