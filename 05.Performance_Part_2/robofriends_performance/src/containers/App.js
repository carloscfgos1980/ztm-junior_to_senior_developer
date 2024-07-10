import React, { useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import RobotsTitle from '../components/RobotsTittle';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from '../redux/filteredRobots';





function App() {

  const {loading} = useSelector(state => state.filteredRobots);
  const dispatch = useDispatch();

  
  useEffect(() => {
		dispatch(getUsersAsync())
	  }, [dispatch])

    return loading?
    <div>
      <h1 style={{color: "white"}}>loading....</h1>
    </div>
        
     :
        (
          <div className="tc">
              <RobotsTitle/>
              <SearchBox/>
              <Scroll>
                <ErrorBoundary>
                  <CardList/>
                </ErrorBoundary>
              </Scroll>
          </div>
        );
      }



export default App;
