import './index.css';

const PersonsList = (props) => {
    const persons = props.persons;

    return ( 
        <div className="persons-list">
            {persons.map((person) => (
                <div className="user" key={person.id} >
                <div className="image">
                    <img src={ person.src } alt={ person.title }/>
                </div>
                <div className="text">
                    <h4>{ person.identity }</h4>
                    <p>{ person.transaction } &bull; { person.active } </p>
                </div>
            </div>
            ))}
        </div>
     );
}
 
export default PersonsList;