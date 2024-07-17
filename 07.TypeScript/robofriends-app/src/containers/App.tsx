import { useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import RobotsTitle from '../components/RobotsTittle';
import Scroll from '../components/Scroll';

import { getUsersAsync } from '../redux/filteredRobots';
import { useAppDispatch, useAppSelector } from '../redux/configureStore';



const App =() => {

  const {loading} = useAppSelector(state => state.filteredRobots);
  const dispatch = useAppDispatch();

  
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
                  <CardList/>
              </Scroll>
          </div>
        );
      }



export default App;
