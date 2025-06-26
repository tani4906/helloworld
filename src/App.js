import './App.css';
import { assets } from './assets/assets.js';
import { songsData } from './assets/assets.js'; 
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
const Plus = () => {
  return(
    <div className="home-button">
      <img src={assets.plus_icon} alt="plus"/>
      <span>Create Playlist</span>
    </div>
  );   
}
const Like = () => {
  return(
    <div className="home-button">
      <img src={assets.like_icon} alt="like"/>
      <span>Liked songs</span>
    </div>
  );
}
const SongCard = ({ image, name, desc}) => {
  return (
  <div className="song-card">
      <img src={image} alt={name} className="song-image" />
      <div className="song-info">
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const Myapp = () => {
  return (
    <div className="flex-container">
      <div className="box1">
         <Spotifyimage/> 
         <Home/>
         <Search/>
         <Stack/>
         <Plus/>
         <Like/>
      </div>
      <div className="box2">
        <div className="search-container">
          <img src={assets.search_icon} alt="search-icon" /> 
          <input type="text" placeholder="search for artists, songs, or podcasts"/>
        </div>
        <div className="songs-container">
        {songsData.map((song) => (
        <SongCard
        key={song.id}
        image={song.image}
        name={song.name}
        desc={song.desc}
      />
    ))}
        </div>
      </div>
    </div>
  );
}
export default Myapp;



