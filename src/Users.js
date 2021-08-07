import './index.css';
import { useState } from 'react';
import PersonsList from './Persons'
import judesmall from './images/judesmall.png';
import james from './images/james.png';
import samuel from './images/samuel.png';
import ugo from './images/ugo.png';
import vector from './images/vector.png';


const Users = () => {
    const [persons, setPersons] = useState([
        {
            id: 1,
            src: judesmall,
            identity: 'Jude Agboola',
            title: 'jude',
            transaction: '300 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 2,
            src: james,
            identity: 'James Agboola',
            title: 'james',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 3,
            src: samuel,
            identity: 'Samuel Ocran',
            title: 'samuel',
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
        {
            id: 5,
            src: vector,
            identity: 'Arthur Pendragon',
            title: 'arthur',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 6,
            src: vector,
            identity: 'James Agboola',
            title: 'james',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 7,
            src: vector,
            identity: 'Samuel Ocran',
            title: 'samuel',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 8,
            src: vector,
            identity: 'Ugo Amanoh',
            title: 'ugo',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 9,
            src: vector,
            identity: 'Arthur Pendragon',
            title: 'arthur',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        },
        {
            id: 10,
            src: vector,
            identity: 'Arthur Pendragon',
            title: 'arthur',
            transaction: '20 transactions',
            active: 'Joined 2 months ago' 
        }
    ]);
    return ( 
        
        <div className="users">
            <h3>USERS</h3>
            <PersonsList persons={persons}/>
        </div>
    );
}
 
export default Users;