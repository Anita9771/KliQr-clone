import './index.css';
import { useState } from 'react';
import PersonsList from './Persons';
import ugo from './images/ugo.png';
import vector from './images/vector.png';

const Likes = () => {
    const [persons, setPersons] = useState([
        {
            id: 6,
            src: vector,
            identity: 'James Agboola',
            title: 'james',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 4,
            src: ugo,
            identity: 'Ugo Amanoh',
            title: 'ugo',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
    ]);
    return ( 
        <div className="likes">
            <p id="likes-para">USERS LIKE &nbsp; "Jude Agboola" </p>
            <div className="likes-content">
            <PersonsList persons={persons}/>
            </div>
        </div>
     );
}
 
export default Likes;

// .filter((person) => person.id === 6 && person.id === 4 )