import './App.css';
import HeadBackground from './HeadBackground';
import Users from './Users';
import Jude from './Jude';
import Expenses from './Expenses';
import Recurring from './Recurring';
import Likes from './Likes';

function App() {
  return (
    <div className="App">
      
        <div className="body">
        <HeadBackground />
        <div className="left">
        <Users />
        </div>
        
        <div className="right">
          <Jude />
          <Expenses />

          <div className="bottom">
            <Recurring />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
