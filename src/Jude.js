import './index.css';

const Jude = () => {
    return ( 
        <div className="jude">
            <div className="jud">
                <div className="image">
                    <img src={require('./images/jude.png').default} alt="jude"/>
                </div>
                <div className="text">
                    <h2>Jude Agboola</h2>
                    <p>300 Transactions &bull; Joined 2 months ago</p>
                </div>
            </div>
        </div>
     );
}
 
export default Jude;