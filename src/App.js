import './App.css';
import { assets } from './assets/assets.js';
const Spotifyimage = () => {
  return(
  <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'10px',

    
  }}>
    <img src={assets.spotify_logo} alt="spotifylogo"
    style={{
      display: 'block',
      height:'50px',
      width:'50px',
      
    }}/>
    <h1>Spotify</h1>
  </div>
  );
}
const Home = () => {
  return(
    <div className="home-button">
      <img src={assets.home_icon} alt="home"/>
      <span>Home</span>
    </div>
  );
}
const Search = () => {
  return(
    <div className="home-button">
      <img src={assets.search_icon} alt="search"/>
      <span>Search</span>
    </div>
  );
}
const Stack = () => {
  return(
    <div className="home-button">
      <img src={assets.stack_icon} alt="stack"/>
      <span>Your library</span>
    </div>
  );
}
const Myapp = () => {
  return (
    <div className="flex-container">
      <div className="box box1">
         <Spotifyimage/> 
         <Home/>
         <Search/>
         <Stack/>
      </div>
      <div className="box box2">Box 2</div>
    </div>
  );
}
export default Myapp;



