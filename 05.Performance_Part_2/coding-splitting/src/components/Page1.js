import logo from '../logo.svg';


const Page1 =({onRouteChange})=> {
  return (
    <div style={{height: "200px"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <h3>Page 1</h3>
      </header>
        <button className='disabled'>Page1</button>
        <button onClick={()=>onRouteChange('page2')}>Page 2</button>
        <button onClick={()=>onRouteChange('page3')}>Page 3</button>
    </div>
  );
}

export default Page1;