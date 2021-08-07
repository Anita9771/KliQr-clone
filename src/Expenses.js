import './index.css';

const Expenses = () => {
    return ( 
        <div className="expenses">
            <div className="exp">
                <p>TOTAL SPENT</p>
                <h2>&#8358;590, 00 </h2>
            </div>

            <div className="exp">
                <p>TOTAL INCOME</p>
                <h2>&#8358;745, 00 </h2>
            </div>

            <div className="exp">
                <p>TRANSACIONS</p>
                <h2>300 </h2>
            </div>
        </div>
     );
}
 
export default Expenses;