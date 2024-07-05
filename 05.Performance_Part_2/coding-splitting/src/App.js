import React, {useState, Suspense} from 'react'
import './App.css';
import Page1 from './components/Page1';


const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'))

function App() {
  const[route, setRoute] = useState('page1');

  const onRouteChange = (page)=>{
    setRoute(page);
  }
  if(route === 'page1'){
         return <Page1 onRouteChange={onRouteChange}/>
    } else if(route === 'page2'){
        return (
          <Suspense fullback={<div>Loading...</div>}>
              <Page2Lazy onRouteChange={onRouteChange}/>
          </Suspense>
        )
    } else if(route === 'page3') {
        return (
          <Suspense fullback={<div>Loading...</div>}>
              <Page3Lazy onRouteChange={onRouteChange}/>
          </Suspense>
        )
    }
}

export default App;
