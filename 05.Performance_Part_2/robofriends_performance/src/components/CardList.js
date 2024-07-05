import Card from './Card';
import { useSelector } from "react-redux";

const CardList = () => {

  const {searchfield, robots} = useSelector(state => state.filteredRobots);

  const filteredrobot=robots.filter(robot=>{
    return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  });



  return (
    <div>
      {
        filteredrobot.map((user, i) => {
          return (
            <Card
              key={i}
              id={filteredrobot[i].id}
              name={filteredrobot[i].name}
              email={filteredrobot[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;