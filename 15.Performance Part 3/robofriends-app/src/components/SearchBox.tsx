import { useDispatch } from "react-redux";
import { ChangeEvent } from '../../type'
import { FC } from 'react';
import { filterRobot } from '../redux/filteredRobots';

const SearchBox: FC = () => {
  const dispatch = useDispatch();

  const searchChange = (event: ChangeEvent):void => {
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
