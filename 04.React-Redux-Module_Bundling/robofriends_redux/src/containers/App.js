import React, { useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import RobotsTitle from '../components/RobotsTittle';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { useSelector, useDispatch } from "react-redux";
import { filterRobot, getUsersAsync } from '../redux/filteredRobots';





function App() {

  const {searchfield, robots, loading} = useSelector(state => state.filteredRobots);
  console.log('searchfield', searchfield)
  console.log('robots', robots)
  const dispatch = useDispatch();

  
  useEffect(() => {
		dispatch(getUsersAsync())
	  }, [dispatch])

 
   


  const onSearchChange = (event) => {
    dispatch(filterRobot(event.target.value))
    }

    const filteredrobot=robots.filter(robot=>{
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      });

    return loading?
    <div>
      <h1>loading....</h1>
    </div>
        
     :
        (
          <div className="tc">
              <RobotsTitle/>
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
