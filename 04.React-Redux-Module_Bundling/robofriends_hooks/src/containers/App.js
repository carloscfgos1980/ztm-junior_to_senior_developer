import React, {useState, useEffect} from 'react'
import CardList from "../components/CardList";
// import { robots } from "./components/robot";
import SearchBox from "../components/SearchBox";
import RobotsTitle from '../components/RobotsTittle';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  // constructor() {
  //   super()
  //   this.state = {
  //       robots: [],
  //       searchfield: ""
  //   }
  // }
  const[robots, setRobots] = useState([]);
  const[searchfield, setSearchfield] = useState('');
  const[count, setCount] = useState(0)

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(resp =>  resp.json())
  //   .then(users => this.setState({robots: users}));
  // }
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp =>  resp.json())
    .then(users => {setRobots(users)});
    console.log(count)
  }, [count])

  // onSearchChange = (event) => {
  //   this.setState({searchfield:event.target.value})
  // }
    const onSearchChange = (event) => {
      setSearchfield(event.target.value)
    }

    const counting = () => {
      return setCount(count+1)
    }
    // const {robots, searchfield} = this.state;
    const filteredrobot=robots.filter(robot=>{
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      });
// using ternary operators instead of if else
    return !robots.length?
        <h1>loading....</h1>
     :
        (
          <div className="tc">
              <RobotsTitle/>
              <button onClick={counting}>Click me!</button>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList robots={filteredrobot}/>
                </ErrorBoundary>
              </Scroll>
          </div>
        );
      }



export default App;
