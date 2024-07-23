import { useAppSelector } from '../redux/configureStore';
import Card from './Card';



const CardList = () => {

  const {searchfield, robots} = useAppSelector(state => state.filteredRobots);
  
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