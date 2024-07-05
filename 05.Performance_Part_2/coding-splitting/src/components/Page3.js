import logo from '../logo.svg';
import '../App.css';


const Page3 =({onRouteChange})=> {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <h3>Page 3</h3>
      </header>
        <button onClick={()=>onRouteChange('page1')}>Page 1</button>
        <button onClick={()=>onRouteChange('page2')}>Page 2</button>
        <button className='disabled'>Page 3</button>
    </div>
  );
}

export default Page3;