import React, {Component} from 'react'
import CardList from "./components/CardList";
import { robots } from "./components/robot";
import SearchBox from "./components/SearchBox";


class App extends Component {
  constructor() {
    super()
    this.state = {
        robots: robots,
        searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})

  }

  render(){
    const filteredrobot=this.state.robots.filter(robot=>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    });
    console.log(filteredrobot);
      return (
        <div className="tc">
            <h1>Robot friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredrobot}/>
        </div>
  );
  }
}

export default App;
