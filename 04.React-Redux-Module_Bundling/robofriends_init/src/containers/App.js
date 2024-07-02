import React, {Component} from 'react'
import CardList from "../components/CardList";
// import { robots } from "./components/robot";
import SearchBox from "../components/SearchBox";
import RobotsTitle from '../components/RobotsTittle';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
        robots: [],
        searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp =>  resp.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})

  }

  render(){
    const {robots, searchfield} = this.state;
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
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              <CardList robots={filteredrobot}/>
              </Scroll>
          </div>
        );
      }
  }


export default App;
