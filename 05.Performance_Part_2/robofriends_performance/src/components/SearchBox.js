import { filterRobot } from '../redux/filteredRobots';
import { useDispatch } from "react-redux";

const SearchBox = () => {
   const dispatch = useDispatch();

    const searchChange = (event) => {
    dispatch(filterRobot(event.target.value))
    }
  return (
    <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue"
        type="search" placeholder="search robot"
        onChange={searchChange}
        />
    </div>
  );
}

export default SearchBox;
