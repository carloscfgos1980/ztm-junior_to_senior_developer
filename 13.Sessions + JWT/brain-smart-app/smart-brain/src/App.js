import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import ModalForm from './components/Modal/ModalForm.js';

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  isProfileOpen: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
    pet:'',
    age:''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

componentDidMount(){
  const token = window.sessionStorage.getItem('token');
  if(token){
      fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => response.json())    
      .then(data => {
        if (data && data.id) {
          fetch(`http://localhost:3000/profile/${data.id}`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
              }
          })
          .then(response => response.json())
          .then(user => {
            if(user && user.email){
              this.loadUser(user);
              this.onRouteChange('home');
            }
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }
}

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocations = (data) => {
      return data.outputs[0].data.regions.map(face =>{
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    })
    
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    const token = window.sessionStorage.getItem('token')
    this.setState({imageUrl: this.state.input});
      fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

        }
        this.displayFaceBoxes(this.calculateFaceLocations(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  toggleModal = () => {
    this.setState(prevState =>({
      ...prevState,
      isProfileOpen:!prevState.isProfileOpen
    }))
  }
  render() {
    const { isSignedIn, imageUrl, route, boxes, isProfileOpen, user } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Navigation 
        isSignedIn={isSignedIn} 
        onRouteChange={this.onRouteChange}
        toggleModal={this.toggleModal}
         />
        {isProfileOpen && 
        <ModalForm 
        toggleModal={this.toggleModal} 
        isProfileOpen={isProfileOpen}
        user={user}
        loadUser={this.loadUser}
        />
        }
        { route === 'home'
          ? <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            </div>
          : (
             route === 'signin'
             ? <Signin 
             loadUser={this.loadUser} 
             onRouteChange={this.onRouteChange}
             toggleModal={this.toggleModal}
             user={this.state.user}
             />
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;