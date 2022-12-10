import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import React from "react";
import Fruits from './components/Fruits';
import {Routes, Route,Link} from 'react-router-dom'
import rooftops from './assets/images/central-park.jpg'
import ReactPlayer from 'react-player/youtube'; //npm install react-player

const MyVideo = () => {
  const vidUrl = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  return (
    <ReactPlayer url={vidUrl} playing={false} volume={0.5}/>
  );
};


function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);
const bird1 = new Audio( 
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
); 
function toggle1() { 
  if (bird1.paused) { 
    bird1.play(); 
  } else { 
    bird1.pause(); 
  } 
};
  const randomImageUrl = 'https://picsum.photos/400/265';
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to='/' className="nav-item">Homepage</Link>
        <Link to='/main-me' className="nav-item">Main</Link>
      </nav>
    <Routes>
    <Route path='/' element={<Header name='Anna'/>} />
    <Route path='/main-me' element={<Main greet='Anna'/>} />
    </Routes>
    <Header name='Anna'/>
    <Main greet='Howdy'/>
    <Sidebar greet='Hi'/>
    <Fruits fruits={fruits}/>
    <img height={200} src={rooftops} alt="An image of a rooftops in New York"></img>
    <img height={200} src={require('./assets/images/central-park.jpg')}
    alt="An image of a rooftops in New York"></img>
    <img src={randomImageUrl} height={200}></img>
    <MyVideo/>
    <button onClick={toggle1}>Caspian Tern 1</button> 
    </div>
    
  );
}

export default App;
///ctrl+S